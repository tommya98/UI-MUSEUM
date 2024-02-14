import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISizeProps {
  width: number;
  height: number;
}

const initialState: ISizeProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const windowSizeSlice = createSlice({
  name: "windowSize",
  initialState,
  reducers: {
    resizeWindow: (state, action: PayloadAction<ISizeProps>) => {
      state.height = action.payload.height;
      state.width = action.payload.width;
    },
  },
});

export const { resizeWindow } = windowSizeSlice.actions;
export default windowSizeSlice;
