import storage from 'redux-persist/lib/storage'

import {
  persistReducer,
} from 'redux-persist'

import { rootReducer } from './reducers'

import { POST_SLICE_NAME } from './features/postSlice'


export const persistedReducer = persistReducer({
  key: 'root',
  version: 1,
  storage,
  blacklist: [POST_SLICE_NAME]
}, rootReducer)