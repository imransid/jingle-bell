import React, { type FC } from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import * as Sentry from '@sentry/react-native';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from '../src/navigators';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import database from './store/database';
import { persistor, store } from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow'
  }
};

Sentry.init({
  dsn: 'https://471c6c6acbb8edbdb5df1e4b69784053@o4506316960038912.ingest.sentry.io/4506316979175424',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0
});

const App: FC = () => {
  return (

    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <DatabaseProvider database={database}>
            <Navigator />
          </DatabaseProvider>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>

  );
};

export default Sentry.wrap(App);
