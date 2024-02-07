import { configureStore } from "@reduxjs/toolkit";

import modalStateSlice from "./ModalStateSlice";
import windowSizeSlice from "./WindowSizeSlice";

const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice.reducer,
    modalState: modalStateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [modalStateSlice.actions.openModal.type],
        ignoredPaths: ["modals.component"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
