import { Button } from '@headlessui/react';
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Home() {
  const { i18n, setThemeMode } = useContext(ThemeContext);

  return (
    <div className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-12 sm:py-18 lg:py-24">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-400 sm:text-7xl">
            {i18n.home.title}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {i18n.home.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              className="rounded cursor-pointer bg-gray-950 dark:bg-gray-800 py-2.5 px-3 text-sm text-white data-[hover]:bg-gray-700"
              onClick={() => setThemeMode('dark')}
            >
              {i18n.home.buttons.dark}
            </Button>
            <Button
              className="rounded cursor-pointer bg-gray-300 py-2.5 px-3 text-sm text-black data-[hover]:bg-gray-400"
              onClick={() => setThemeMode('light')}
            >
              {i18n.home.buttons.light}
            </Button>
            <Button
              className="rounded cursor-pointer bg-yellow-600 py-2.5 px-3 text-sm text-white data-[hover]:bg-yellow-500"
              // onClick={() => setThemeMode('solarized')} TODO: Implement
            >
              {i18n.home.buttons.solarized}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
