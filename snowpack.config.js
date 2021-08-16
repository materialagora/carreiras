// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dist: { url: "/", static: true },
    src: "/assets",
  },
  plugins: ["@snowpack/plugin-sass", "snowpack-plugin-relative-css-urls"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: "./dist",
  },
};
