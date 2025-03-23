const i18nConfig = {
  EN: {
    navbar: {
      ariaOpenMenu: 'Open main menu',
      ariaOpenUserMenu: 'Open user menu',
      ariaLanguage: 'English',
      links: {
        Home: 'Home',
        About: 'About',
      },
    },
    home: {
      title: 'React + TailwindCSS Dynamic theming',
      description:
        'Effortlessly switch between Light, Dark, and Solarized modes with a single click.',
      buttons: {
        dark: 'Dark Mode',
        light: 'Light Mode',
        solarized: 'Solarized',
      },
    },
    about: {
      react: [
        'This website was made using ',
        'React ',
        'with the implementation of: ',
        'Hooks, Effects, Routing, and the Context API.',
      ],
      tailwindcss: [
        'The ',
        'TailwindCSS ',
        'framework was also used for design, along with libraries such as @headlessui/react and @heroicons/react/24/outline.',
      ],
      localstorage: [
        'The theme and language settings are also saved for each time you visit this page.',
      ],
      others: 'Others:',
    },
  },
  ES: {
    navbar: {
      ariaOpenMenu: 'Abrir menú principal',
      ariaOpenUserMenu: 'Abrir menú de usuario',
      ariaLanguage: 'Español',
      links: {
        Home: 'Inicio',
        About: 'Acerca de',
      },
    },
    home: {
      title: 'React + TailwindCSS Tema dinámico',
      description:
        'Cambie sin esfuerzo entre los modos Claro, Oscuro y Solarizado con un solo clic.',
      buttons: {
        dark: 'Modo Oscuro',
        light: 'Modo Claro',
        solarized: 'Solarizado',
      },
    },
    about: {
      react: [
        'Este sitio web fue hecho utilizando ',
        'React ',
        'con el uso de: ',
        'Hooks, Efectos, Routing y el API de Contexto.',
      ],
      tailwindcss: [
        'Se utilizó además el framework ',
        'TailwindCSS ',
        'para el diseño junto con librerías como @headlessui/react y @heroicons/react/24/outline',
      ],
      localstorage: [
        'La configuración del tema y del lenguaje también se guarda para cada vez que ingreses a esta página.',
      ],
      others: 'Otras:',
    },
  },
};

export default i18nConfig;
