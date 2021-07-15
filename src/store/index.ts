import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";

import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";
import { RootState } from "@/utils/interfaces/store";
import { storageKey } from "@/utils/core/config";

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol("store");

export const store = createStore<RootState>({
  state,
  actions,
  getters,
  mutations,
});

store.subscribe(async (_, state) => {
  // persisting the state of the store
  await localStorage.setItem(storageKey, JSON.stringify(state));
});
