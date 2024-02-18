// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from '../redux/contacts/contactsSlice';
// import { filterReducer } from '../redux/filter/filterSlice';
// import { authReducer } from './auth/auth-slice';

// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// // const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedAuthReduxer = persistReducer(persistConfig, authReducer);

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: persistedAuthReduxer,
// });

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//     auth: persistedAuthReduxer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // const store = configureStore({
// //   reducer: {
// //     contacts: contactsReducer,
// //     filter: filterReducer,
// //     auth: authReducer,
// //   },
// // });

// export { store, rootReducer };
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
