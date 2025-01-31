import { createGlobalStyle } from "styled-components";
import { COLORS, FONT } from "./constants";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* CUSTOM */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 20px;
    font-family: Georgia, serif;
    line-height: 1.75;
    color: ${COLORS.textPrimary};
  }

  a {
    color: ${COLORS.primary};
  }

  a:hover {
    text-decoration: none;
  }

  :focus {
    outline: 2px dashed;
    outline-offset: 0.25rem;
  }

  main:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue,
      helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    line-height: 1.5;
  }

  h1,
  h2 {
    font-weight: 900;
  }

  h1 {
    font-size: ${FONT.sizeH1};
  }

  h2 {
    font-size: ${FONT.sizeH2};
  }

  h3 {
    font-size: ${FONT.sizeH3};
  }

  h4 {
    font-size: ${FONT.sizeH4};
  }

  h2, h3, h4 {
    margin-top: 4.2rem;
  }

  ul, ol {
    margin: 4.2rem 1.77rem;
  }

  li::before {
    color: ${COLORS.primary};
    padding-right: 12px;
  }

  ol {
    counter-reset: listCounter;
  }

  ol li {
    counter-increment: listCounter;
  }

  ol li::before {
    content: counters(listCounter, ".") ". ";
  }

  ul li::before {
    content: "·";
  }
`;

export default GlobalStyles;
