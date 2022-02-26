import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: 'Modal',
    initialState : {
        modalActive: false
    },
    reducers: {
        changeModalState(state, action) {
            state.modalActive = action.payload;
        }
    }
})

export const modalActions = ModalSlice.actions;

export default ModalSlice;