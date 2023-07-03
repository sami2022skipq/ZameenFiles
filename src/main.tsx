import './styles/index.less';
import './mock';

import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import App from './App';
import store from './stores';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 2 * 60, // Set the stale time to one minute.
      cacheTime: 1000 * 10 * 60, // Set the cache time to ten minutes.
    },
  },
});

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </>,
  document.getElementById('root'),
);
