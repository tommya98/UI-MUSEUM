import { ReactNode } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalState {
  isOpen: boolean;
  component: ReactNode | null;
}

const initialState: IModalState = {
  isOpen: false,
  component: null,
};

const modalStateSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ReactNode>) => {
      state.isOpen = true;
      state.component = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalStateSlice.actions;
export default modalStateSlice;
