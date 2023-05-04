//next.config.js
module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  distDir: "build",
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
