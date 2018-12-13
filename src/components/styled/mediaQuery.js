import { css } from "styled-components";

const sizes = {
  laptop_l: 1440,
  laptop: 1024,
  tablet: 768,
  mobile_l: 425,
  mobile_m: 375,
  mobile_s: 320
};

const max = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const min = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { max, min };
