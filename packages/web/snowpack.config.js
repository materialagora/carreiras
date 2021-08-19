// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src/static": { url: "/", static: true },
    src: "/src",
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
  optimize: {
    minify: true,
    target: "es2018"
  },
};
