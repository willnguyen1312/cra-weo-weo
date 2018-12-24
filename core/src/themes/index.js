import styles from './styles';

const html = document.documentElement;

// please note that this only adds the theme class to HTML tag
// and makes its CSS variables available globally
// -> if you need to use the theme as Javascript then please use the
//    function below
export const update = (current, next) => {
  // get valid theme
  const validThemes = Object.keys(styles);
  const theme = validThemes.indexOf(next) !== -1 ? next : validThemes[0];
  // ok go
  html.classList.remove(styles[current]);
  html.classList.add(styles[theme]);
};