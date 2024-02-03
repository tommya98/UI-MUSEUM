import { ReactNode } from "react";
import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  component: ReactNode | null;
}

const initialState: ModalState = {
  isOpen: false,
  component: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ReactNode>) => {
      state.isOpen = true;
      state.component = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      // state.component = null;
    },
  },
});

const store = configureStore({
  reducer: {
    modals: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [modalSlice.actions.openModal.type],
        ignoredPaths: ["modals.component"],
      },
    }),
});

export const { openModal, closeModal } = modalSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
