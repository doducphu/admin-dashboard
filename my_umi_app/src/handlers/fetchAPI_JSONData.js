import { API_SIGNIN_URL } from '../constants';
import { API_INITS } from '../inits';
const fetchAPI_JSONData = (values) => {
  return fetch(API_SIGNIN_URL, API_INITS({ body: values })).then((res) => res.json());
};
export default fetchAPI_JSONData;
