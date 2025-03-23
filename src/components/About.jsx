import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function About() {
  const { i18n } = useContext(ThemeContext);

  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-12 sm:py-18 lg:py-24">
        <div className="text-center">
          <p className="mt-8 text-pretty text-black dark:text-white sm:text-xl/8">
            {i18n.about.react[0]}
            <strong>{i18n.about.react[1]}</strong>
            {i18n.about.react[2]}
            <br />
            {i18n.about.react[3]}
          </p>

          <p className="mt-8 text-pretty text-black dark:text-white sm:text-xl/8">
            {i18n.about.tailwindcss[0]}
            <strong>{i18n.about.tailwindcss[1]}</strong>
            {i18n.about.tailwindcss[2]}
          </p>

          <p className="mt-8 text-pretty text-black dark:text-white sm:text-xl/8">
            {i18n.about.localstorage[0]}
          </p>

          <p className="mt-8 text-pretty text-black dark:text-white sm:text-xl/8">
            {i18n.about.others}
          </p>
          <br />
          <a
            className="text-blue-500 underline"
            href="https://tailwindcss.com/plus"
            target="_blank"
          >
            TailwindCSS plus
          </a>
          <br />
          <a
            className="text-blue-500 underline"
            href="https://reactsvgicons.com/s"
            target="_blank"
          >
            React SVG Icons
          </a>
          <br />
          <a
            className="text-blue-500 underline"
            href="https://heroicons.com/"
            target="_blank"
          >
            Hero Icons
          </a>
          <br />
          <a
            className="text-blue-500 underline"
            href="https://headlessui.com/react/button"
            target="_blank"
          >
            HeadlessUI
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
