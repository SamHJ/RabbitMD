import { store } from "@/store";
import { changeTheme } from "@/utils/core/mixins";
import {backNavigation, deviceInfo} from '@/utils/plugins/capacitor'
require('animate.css');

export default {
  name: "App",
  async mounted(): Promise<void> {
    store.dispatch('initStore')
    const device = await deviceInfo()
    store.dispatch("storeDeviceInfo",device)

    if(store.state.darkTheme){
      changeTheme(true)
    }
    backNavigation(this)
  }
};
