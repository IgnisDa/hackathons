import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let colorOne = "#66FCF1";
let colorTwo = "#fff";
let colorThree = "#1F2833";
let colorFour = "#45A29E";
let bg = "#202225";
let paper = "rgba(31, 35, 51, 0.95)";

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
