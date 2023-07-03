import type { LoginParams } from '@/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Button, Card, Checkbox, Form, Input, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userLogin } from '@/api/user.api';
import { NOTIFICATIONTYPE } from '@/interface/notifications';
import { LocaleFormatter, useLocale } from '@/locales';
import { handleLogin, notificationCallback } from '@/stores/global.store';
import { ILoginActions } from '@/utils/golobaldata';
import { updateToken } from '@/utils/http';

import CreateAccount from './createacc';

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const { formatMessage } = useLocale();
  const mutateLogin = useMutation(userLogin);

  const { mutate: mutateUserLogin, isLoading, data, isError, error } = mutateLogin;
  const errorRes: any = error;

  console.log(data, 'data');

  const onFinished = async (form: LoginParams) => {
    try {
      await mutateUserLogin(form, {
        onSuccess: (res: any) => {
          <Navigate to="/dashboard" />;
          dispatch(
            notificationCallback({
              type: NOTIFICATIONTYPE.SUCCESS,
              info: `${res?.data?.message}`,
            }),
          );
        },
        onError: (error: any) => {
          if (error.response && error.response.data) {
            const { message: errorMessage } = error.response.data;

            dispatch(
              notificationCallback({
                type: NOTIFICATIONTYPE.ERROR,
                info: `${errorMessage}`,
              }),
            );
          } else {
            console.log(error, 'error response');
            dispatch(
              notificationCallback({
                type: NOTIFICATIONTYPE.ERROR,
                info: `${error?.message}`,
              }),
            );
          }
        },
      });
    } catch (error) {
      console.log(error, 'errr');
    }
  };

  useEffect(() => {
    if (data?.data?.result) {
      const { accessToken } = data.data?.result;

      dispatch(
        handleLogin({
          type: ILoginActions.LOGIN,
          payload: data.data,
        }),
      );
      updateToken(accessToken);
    } else if (errorRes && isError) {
      if (errorRes && errorRes.response && errorRes.response.data) {
        const { message } = errorRes.response.data;

        dispatch(
          notificationCallback({
            type: NOTIFICATIONTYPE.ERROR,
            info: `${message}`,
          }),
        );
      } else {
        dispatch(
          notificationCallback({
            type: NOTIFICATIONTYPE.ERROR,
            info: `Backend Server Connection Refused`,
          }),
        );
      }
    }
  }, [data, isError, errorRes, notificationCallback]);

  return (
    <Spin spinning={isLoading}>
      <div className="login-page">
        <Card>
          <Form<LoginParams> onFinish={onFinished} className="login-page-form">
            <h2>Real Estate</h2>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please enter email or username',
                },
              ]}
            >
              <Input
                placeholder={formatMessage({
                  id: 'gloabal.tips.username',
                })}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: formatMessage({
                    id: 'gloabal.tips.enterPasswordMessage',
                  }),
                },
              ]}
            >
              <Input
                type="password"
                placeholder={formatMessage({
                  id: 'gloabal.tips.password',
                })}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                <LocaleFormatter id="gloabal.tips.rememberUser" />
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" className="login-page-form_button">
                <LocaleFormatter id="gloabal.tips.login" />
              </Button>
            </Form.Item>
          </Form>
          <Button type="link" className="login-page-form_button" onClick={() => setOpen(true)}>
            Create Account
          </Button>
        </Card>
      </div>
      {open && <CreateAccount open={open} setOpen={setOpen} />}
    </Spin>
  );
};

export default LoginForm;
