const config = {
  // images: {
  //   domains: ["newmealanya.com"],
  // },
  i18n: {
    locales: ["en", "ru", "ua"], // Поддерживаемые языки
    defaultLocale: "ru", // Язык по умолчанию
  },

  reactStrictMode: true, // Включение режима строгого режима React
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true,
      },
    ];
  },
};

export default config;
