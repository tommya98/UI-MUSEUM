import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISizeProps {
  width: number;
  height: number;
}

interface IWindowSipzeProps {
  windowSize: ISizeProps;
}

const initialState: IWindowSipzeProps = {
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

const windowSizeSlice = createSlice({
  name: "windowSize",
  initialState,
  reducers: {
    resizeWindow: (state, action: PayloadAction<ISizeProps>) => {
      state.windowSize = action.payload;
    },
  },
});

export const { resizeWindow } = windowSizeSlice.actions;
export default windowSizeSlice;
