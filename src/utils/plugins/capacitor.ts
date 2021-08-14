import { Device } from '@capacitor/device'
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

export const deviceInfo = async (): Promise<any> =>{
    const info = await Device.getInfo();
    return info;
}

export const backNavigation = (context:any)=>{
    App.addListener('backButton',(event)=>{
        if(event.canGoBack && context.$store.state.currentRoute!=='splash') return context.$router.go(-1)
        else return App.exitApp()
    })
}

export const hideSplashScreen = ()=>{
    SplashScreen.hide();
}

export const lightStatusBar = ()=>{
    StatusBar.setOverlaysWebView({ overlay: true });
}