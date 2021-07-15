import { RootState } from "@/utils/interfaces/store";

export const getDeviceInfo = (state: RootState):unknown=>{
  return state.deviceInfo
};

export const getUser = (state: RootState): unknown => {
  return state.userdata;
};

export const getToken = (state: RootState): string => {
  return state.token;
};

export const getGeoData = (state: RootState): unknown => {
  return state.geodata;
};

export const isDarkTheme = (state: RootState):boolean => {
  return state.darkTheme
}
