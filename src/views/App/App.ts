import { store } from "@/store";
import { changeTheme } from "@/utils/core/mixins";
import {backNavigation, deviceInfo, hideSplashScreen, lightStatusBar} from '@/utils/plugins/capacitor'
import { StatusBar, Style } from '@capacitor/status-bar';
require('animate.css');

export default {
  name: "App",
  watch:{
    async $route(to:any){
      store.dispatch('storeCurrentRouteName',to.name)
      if(to.name==='splash'){
        await StatusBar.setStyle({ style: Style.Dark });
      }else{
        await StatusBar.setStyle({ style: Style.Light });
      }
    }
  },
  async mounted(): Promise<void> {
    store.dispatch('initStore')
    const device = await deviceInfo()
    store.dispatch("storeDeviceInfo",device)

    if(store.state.darkTheme){
      changeTheme(true)
    }
  },
  async beforeMount(){
    backNavigation(this)
    hideSplashScreen()
    lightStatusBar()
  }
};
