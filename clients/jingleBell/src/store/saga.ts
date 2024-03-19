// Import necessary functions and types
import { all, takeEvery } from 'redux-saga/effects';

import { loginSaga } from './sagas/auth.saga';

// Create a watcher saga
export function* watchGetUserAction(): Generator {
  yield takeEvery('users/getUserAction', loginSaga);
}

// Export the root saga
export default function* rootSaga(): Generator {
  yield all([
    watchGetUserAction()
    // Add other watchers if needed
  ]);
}
