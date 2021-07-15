import {useRequest} from "vue-request";
import { Request } from "@/utils/interfaces/request";

const options: Record<string, unknown> = {
  cacheTime: 300000, // e.g 300000 => for 5 minutes
  errorRetryCount: 3, //retry 3 times
  errorRetryInterval: 5, // The retry interval is 5 seconds
  loadingDelay: 500, //delay response to avoid screen flickering
};

export const cacheApi = async(data: Request): Promise<any> => {

  return useRequest<any,any>(data.service, {
    cacheKey: data.key,
    ...options,
    formatResult: res => res
  })

};
