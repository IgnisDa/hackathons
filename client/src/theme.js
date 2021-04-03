import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let colorOne = "#EE4CFC";
let colorTwo = "#E3AFBC";
let colorThree = "#5D001E";
let colorFour = "#E3E2DF";
let bg = "#5D001E";
let paper = "rgba(154, 23, 80, 0.3)";

let theme = createMuiTheme({
  palette: {
    background: {
      paper: paper,
      default: bg,
    },
    type: "dark",
    text: {
      primary: colorTwo,
    },
    typography: {
      h1: colorOne,
      subtitle1: colorThree,
    },

    primary: {
      main: colorOne,
      contrastText: bg,
    },
    secondary: {
      main: colorFour,
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
