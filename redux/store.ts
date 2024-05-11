import { configureStore } from "@reduxjs/toolkit";

import popupFormSlice from "./slices/popupFormSlice";
import showImageDialog from "./slices/showImageDialog";

export const store = configureStore({
  reducer: {
    popupForm: popupFormSlice,
    showImageDialog : showImageDialog
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
