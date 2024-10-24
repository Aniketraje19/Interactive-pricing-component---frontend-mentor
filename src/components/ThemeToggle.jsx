
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/themeSlice';


export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleThemeToggle} className='bg-black text-white border p-1 rounded dark:bg-white dark:text-black'>
      Switch to {theme === "light" ? 'dark' : 'light'}
    </button>
  );
}
