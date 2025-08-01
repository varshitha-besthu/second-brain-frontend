import { useRecoilState } from 'recoil';
import { themeAtom } from '../Atoms/themeAtom';

export function ModeChange() {
  const [theme, setTheme] = useRecoilState(themeAtom);
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="flex justify-center items-center" data-theme={theme}>
      <div className="dark:bg-white bg-gray-300 w-[55px] h-[30px] rounded-full flex items-center p-2 dark:justify-end">
        <div
          className="dark:bg-black  bg-white w-[25px] h-[25px] rounded-full cursor-pointer"
          onClick={toggleTheme}
        ></div>
      </div>
    </div>
  );
}
