import CryptoJS from 'crypto-js';

const EncriptData = (data: any) => {
  const encription = CryptoJS.AES.encrypt(JSON.stringify(data), `${import.meta.env.VITE_REACT_APP_ENCRIPTION_KEY}`);

  return encription;
};

const DecriptionData = (data: any) => {
  const bytes = CryptoJS.AES.decrypt(data, `${import.meta.env.VITE_REACT_APP_ENCRIPTION_KEY}`);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

export { DecriptionData, EncriptData };
