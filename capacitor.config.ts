import { CapacitorConfig } from '@capacitor/cli';
import {appName,appID,webDir} from './src/utils/core/config'

const config: CapacitorConfig = {
  appId: appID,
  appName: appName,
  webDir: webDir,
  bundledWebRuntime: false
};

export default config;