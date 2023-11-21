import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

type Dependencies = {};

export const createStore = (dependencies: Dependencies) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      });
    },
  });

  return store;
};

type AppStoreWithGetActions = ReturnType<typeof createStore>;
export type AppStore = Omit<AppStoreWithGetActions, 'getActions'>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, Dependencies, AnyAction>;