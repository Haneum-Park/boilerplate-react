/* eslint-disable implicit-arrow-linebreak */
type Breakpoints = {
  mobile: number;
  'sm-tablet': number;
  'lg-tablet': number;
  desktop: number;
};

const breakpoints = {
  mobile: 560,
  'sm-tablet': 768,
  'lg-tablet': 1440,
  desktop: 1440,
};

const MEDIA_QUERY = {
  max: (breakpoint: keyof Breakpoints) =>
    `@media screen and (max-width: ${breakpoints[breakpoint]}px)`,
};

export default MEDIA_QUERY;
