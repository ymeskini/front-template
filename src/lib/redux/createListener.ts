import { createListenerMiddleware } from "@reduxjs/toolkit";
import { AppDispatch, Dependencies, RootState } from "./createStore";

export const createListener = () =>
  createListenerMiddleware<RootState, AppDispatch, Dependencies>();
