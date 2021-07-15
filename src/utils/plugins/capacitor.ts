import { Device } from '@capacitor/device'
import { App } from '@capacitor/app';

export const deviceInfo = async (): Promise<any> =>{
        const info = await Device.getInfo();
        return info;
}

export const backNavigation = (context:any)=>{
    console.log('context: ',context)
    console.log('app: ',App)
    // window.history.back()
    // App.exitApp()
}