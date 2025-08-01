
import { atom } from 'recoil';

export const themeAtom = atom<string>({
  key: 'themeAtom',
  default: localStorage.getItem('theme') || 'light',
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('theme', newValue);
      });
    },
  ],
});
