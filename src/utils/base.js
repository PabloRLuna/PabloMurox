export const BASE_PATH = process.env.NODE_ENV === 'production' 
  ? '/PabloMurox'
  : '';

export const getRoute = (path) => {
  return `${BASE_PATH}${path}`;
};
