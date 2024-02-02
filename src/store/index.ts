import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalId: number | null;
}

const initialState: ModalState = {
  isOpen: false,
  modalId: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.modalId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalId = null;
    },
  },
});

const store = configureStore({
  reducer: {
    modals: modalSlice.reducer,
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
