import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {weatherApi} from '../services/weatherApi';
import {setupListeners} from '@reduxjs/toolkit/query';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import weatherSlice from './weatherSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weatherApi', 'weather'],
};

const allReducers = {
  [weatherApi.reducerPath]: weatherApi.reducer,
  weather: weatherSlice,
};

export const rootReducer = combineReducers(allReducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(weatherApi.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
