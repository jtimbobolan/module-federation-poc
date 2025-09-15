declare module "host/store" {
  import { EnhancedStore } from "@reduxjs/toolkit";
  import { RootState, AppDispatch } from "host/store";
  export const store: EnhancedStore<RootState>;
  export function setUser(user: { id: string; name: string; token: string }): any;
  export function clearUser(): any;
  export type { RootState, AppDispatch };
}
