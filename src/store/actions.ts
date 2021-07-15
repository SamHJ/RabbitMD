//app actions
import { Commit } from "@/utils/interfaces/store";

export const storeDeviceInfo = ({ commit }: Commit, payload: Record<string, unknown>): void => {
  commit('STORE_DEVICE_INFO',payload);
}

export const changeTheme = ({ commit }: Commit): void => {
  commit("CHANGE_THEME");
};

export const initStore = ({ commit }: Commit): void => {
  commit("INIT_STORE");
};

export const storeUserData = (
  { commit }: Commit,
  payload: Record<string, unknown>
): void => {
  commit("STORE_USER_DATA", payload);
};

export const logOut = ({ commit }: Commit): void => {
  commit("LOGOUT_USER");
};

export const storeGeoData = ({ commit }: Commit): void => {
  commit("STORE_GEO_DATA");
};

export const storeToken = (
  { commit }: Commit,
  payload: Record<string, unknown>
): void => {
  commit("STORE_TOKEN", payload);
};

export const onboardingShown = ({ commit }: Commit): void => {
  commit('ONBOARDING_SHOWN')
}
