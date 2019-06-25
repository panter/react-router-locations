import { generatePath, matchPath } from 'react-router';

export default (pathPattern) => {
  const func = props => generatePath(pathPattern, props);

  const defaultOptions = { exact: true, strict: false };
  func.path = pathPattern;
  func.match = (pathString, options = {}) =>
    matchPath(pathString, {
      path: pathPattern,
      ...defaultOptions,
      ...options,
    });

  return func;
};
