import enquireJs from 'enquire.js';
import deviceDetector from 'mobile-device-detect';
import vars from './vars.json';

const breakpoints: Record<string, number> = {
  xs: vars['screen-xs'],
  sm: vars['screen-sm'],
  md: vars['screen-md'],
  lg: vars['screen-lg'],
  xl: vars['screen-xl'],
  xxl: vars['screen-xxl'],
};

export const queryMedia = (callback: any) => {
  enquireJs
    .register(`screen and (min-width: ${breakpoints.xxl}px)`, () => {
      callback('xxl');
    })
    .register(
      `screen and (min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints.xxl}px)`,
      () => {
        callback('xl');
      }
    )
    .register(
      `screen and (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px)`,
      () => {
        callback('lg');
      }
    )
    .register(
      `screen and (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`,
      () => {
        callback('md');
      }
    )
    .register(
      `screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)`,
      () => {
        callback('sm');
      }
    )
    .register(`screen and (max-width: ${breakpoints.sm}px)`, () => {
      callback('xs');
    });
};

export default { breakpoints, queryMedia, ...deviceDetector, vars } ;
