import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: { id: string; name: string } | null;
  token: string | null;
}

const initialState: AuthState = {
  user: { id: '1', name: 'Demo User' },
  token: 'demo-token-123',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ id: string; name: string; token: string }>) {
      state.user = { id: action.payload.id, name: action.payload.name };
      state.token = action.payload.token;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
