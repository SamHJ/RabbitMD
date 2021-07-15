import { RootState } from "@/utils/interfaces/store";
import { store } from "./index";
import { version } from "../../package.json";
import { storageKey } from "@/utils/core/config";
import { changeTheme } from "@/utils/core/mixins";

export const STORE_DEVICE_INFO = (state: RootState, payload: Record<string, unknown>):void=>{
  state.deviceInfo = payload;
}

export const CHANGE_THEME = (state: RootState): void => {
  state.darkTheme = !state.darkTheme;
  changeTheme(state.darkTheme);
};

export const INIT_STORE = (state: RootState): void => {
  const lState = localStorage.getItem(storageKey);

  if (lState) {
    // load the cached state if versions match
    const cachedState = JSON.parse(lState);

    //remember user current theme
    changeTheme(cachedState.darkTheme);

    if (cachedState.version == version) {
      store.replaceState(
        //replace app's store state with the cached version
        Object.assign(store.state, cachedState)
      );
    } else {
      //update store version to current version
      state.version = version;
    }
  } else {
    //update store version to current version
    state.version = version;
  }
};

export const STORE_USER_DATA = (
  state: RootState,
  payload: Record<string, unknown>
): void => {
  state.userdata = payload;
};

export const LOGOUT_USER = (state: RootState): void => {
  state.userdata = {};
};

export const STORE_GEO_DATA = (
  state: RootState,
  payload: Record<string, unknown>
): void => {
  state.geodata = payload;
};

export const STORE_TOKEN = (state: RootState, payload: string): void => {
  state.token = payload;
};

export const ONBOARDING_SHOWN = (state: RootState): void => {
  state.onboardingShown = true
}
