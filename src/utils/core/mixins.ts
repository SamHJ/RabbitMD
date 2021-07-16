/**
 * Contains app-wide re-usable functions
 */
 import { store } from "@/store";
 import { StatusBar, Style } from '@capacitor/status-bar';

export const asyncRequest = async (
    url: string,
    options: Record<string, unknown>
  ): Promise<Record<string, unknown>> => {
    //used for making requests not related to rabbit's apiURL/endpoint

    //sample url
    // const url = "https://the_endpoint_.com"

    //sample data
    // const data = {
    //     custom_data: "some_data_here",
    //     suffix: {
    //         "option": "SHORT"
    //     }
    // }

    //typical **options** example
    // const options {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // }

    return fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
}

export const changeTheme = async(mode: boolean,change=false) => {
  //changes app theme
  const domElem = document.documentElement;
  if (mode) {
    domElem.classList.add("dark");
  } else {
    domElem.classList.remove("dark");
  }
  
  if(change){
    store.dispatch('changeTheme')
  }

  if(store.state.darkTheme){
    await StatusBar.setStyle({ style: Style.Dark });
  }else{
    await StatusBar.setStyle({ style: Style.Light });
  }

};
