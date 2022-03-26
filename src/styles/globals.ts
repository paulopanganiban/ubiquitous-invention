import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
/* reset */
* {
  margin: 0;
  padding: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
/* make images easier to work with */
img, picture {
  max-width: 100%;
  display: block;
}
/* make forms easier to work with */
input, button, textarea, select {
  font: inherit;
}
/* remove animations for people who turned them off */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
a {
  font-family: inherit;
  color: inherit;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
/* end of reset */
html {
    font-family: --apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif; 
}
`