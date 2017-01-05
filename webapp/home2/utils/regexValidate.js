/* eslint no-useless-escape: 0 */
export function isEmail(text) {
  return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(text)
}
export function isPhoneNumber(text) {
  return /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/i.test(text)
    || /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{4}$/i.test(text)
    || /^[0-9]{3}\u0020?[0-9]{3}\u0020?[0-9]{4}$/i.test(text)
    || /^1-?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/i.test(text)
    || /^1\.?[0-9]{3}\.?[0-9]{3}\.?[0-9]{4}$/i.test(text)
    || /^1\u0020?[0-9]{3}\u0020?[0-9]{3}\u0020?[0-9]{4}$/i.test(text)
}
export function isNumber(text) {
  if (text === '') return false
  return !isNaN(+text)
}
