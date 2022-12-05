import { css } from "styled-components";

/**
 * Uses a mobile-first approach to breakpoints
 */
export const breakpoints = {
  mobile: 0,
  tablet: 640,
  desktop: 1200,
  large: 1500,
};

// iterate through the breakpoints and create a media template
/**
 * @var {{desktop, tablet, mobile}}
 */
export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
