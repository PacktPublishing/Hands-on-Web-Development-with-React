/**
 *
 * @param {{
 *   title: string,
 *   company: string,
 *   salary: string,
 *   acceptedToS: boolean
 * }} state
 * @return {boolean}
 */
export default (state = {}) =>
  Boolean(
    state.title && state.title.length >= 10 &&
    state.company && state.company.length > 0 &&
    state.salary && state.salary.length > 0 &&
    state.acceptedToS
  );
