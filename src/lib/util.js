import { ERROR_MSG_IS_OK } from './constant';

export function isOk(errMsg) {
  return errMsg && errMsg.indexOf(ERROR_MSG_IS_OK) !== -1;
}
