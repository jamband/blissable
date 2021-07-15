import { writable } from "svelte/store";

type State = "good" | "normal" | "bad";

const InitialValue: State = "good";

const createSiteHealth = () => {
  const { subscribe, set } = writable<State>(InitialValue);

  return {
    subscribe,
    set: (value: State) => {
      set(value);
    },
  };
};

export const siteHealth = createSiteHealth();
