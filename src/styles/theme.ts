export default {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "0.4rem",
    xxradius: "1.6rem",
    solid: "0.1rem solid",
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    regular: 500,
    bold: 600,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.4rem",
      xxxlarge: "3.0rem",
      huge: "4.0rem",
    },
  },
  colors: {
    primary: {
      orange: "#f58031",
    },
    secondary: {
      green: "#008014",
      lightGreen: "#94d376",
      red: "#e74c3c",
      darkBlue: "#1d2236",
      blue: "#3498db",
    },
    neutral: {
      black: "#111820",
      darkGrey: "#696969",
      border: "#ccc",
      grey: "#cccccc",
      lightGrey: "#efefef",
      extraLightGrey: "#f8f8f8",
      white: "#fff",
    },
    linear: {
      dark: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))`,
    },
  },
  spacings: {
    xxxxsmall: "0.25rem",
    xxxsmall: "0.4rem",
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "5.0rem",
    xxlarge: "8.0rem",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;
