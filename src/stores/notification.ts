import { writable } from "svelte/store";

type State = {
  message: string;
  delay: number;
  show: boolean;
};

type Show = Pick<State, "message" | "delay">;

const InitialValue: State = {
  message: "",
  delay: 5000,
  show: false,
};

const createNotification = () => {
  const { subscribe, set } = writable<State>(InitialValue);

  return {
    subscribe,
    show: ({ message, delay }: Show) => {
      set({ message, delay, show: true });
    },
    clear: () => {
      set(InitialValue);
    },
  };
};

export const notification = createNotification();
