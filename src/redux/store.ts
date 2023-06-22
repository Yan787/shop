import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardSlice from "./reducers/cardSlice"

const rootReducer = combineReducers({
	card: cardSlice
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
 

const store = configureStore({
    reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>

export let persistor = persistStore(store)

export default store