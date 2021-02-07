import dayjs from './date';
import { formatCurrency, formatNumber } from './number';
import {
  isObjectString,
  isObjectNumber,
  isObjectBoolean,
  isMap,
  isSet,
  isObject,
  isFunction,
  isRegExp,
  isDate,
  isDataView,
  isArray,
  isEmptyObject,
  deepmerge,
  deepclone,
  pick,
  transformKey,
} from './object';
import { isContained } from './array';
import { debounce, throttle } from './function';
import xss from './xss';
import { getSupportedCallingCodes, getPhoneNumber, isPhone, checkPhone } from './phone';

export default transformKey({
  dayjs,
  formatCurrency,
  formatNumber,
  isObjectString,
  isObjectNumber,
  isObjectBoolean,
  isMap,
  isSet,
  isObject,
  isFunction,
  isRegExp,
  isDate,
  isDataView,
  isArray,
  isEmptyObject,
  deepmerge,
  deepclone,
  pick,
  isContained,
  debounce,
  throttle,
  xss,
  getSupportedCallingCodes,
  getPhoneNumber,
  isPhone,
  checkPhone,
});
