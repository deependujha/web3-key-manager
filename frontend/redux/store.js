import { configureStore } from '@reduxjs/toolkit';
import usrReducer from './slices/usrData';

export default configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	reducer: {
		usr: usrReducer,
	},
});
