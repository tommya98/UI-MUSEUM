import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TComponentName } from "../../exhibits";

interface IModalState {
  isOpen: boolean;
  componentName: TComponentName | null;
}

const initialState: IModalState = {
  isOpen: false,
  componentName: null,
};

const modalStateSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TComponentName>) => {
      state.isOpen = true;
      state.componentName = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalStateSlice.actions;
export default modalStateSlice;
