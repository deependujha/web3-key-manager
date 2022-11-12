import { createSlice } from '@reduxjs/toolkit';

export const usrDataSlice = createSlice({
	name: 'usrData',
	initialState: {
		signer: '',
		contract: '',
	},
	reducers: {
		updateUsr: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes
			state.signer = action.payload.signer;
			state.contract = action.payload.contract;
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateUsr } = usrDataSlice.actions;

// this reducer will be passed in store's 'reducer' key
export default usrDataSlice.reducer;
