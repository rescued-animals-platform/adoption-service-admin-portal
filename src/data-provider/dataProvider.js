import { fetchUtils } from 'react-admin';
import adoptionServiceRestProvider from './raDataAdoptionServiceRest'


const fetchJson = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token: 'Bearer '.concat(process.env.REACT_APP_JWT)
  };
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = adoptionServiceRestProvider(process.env.REACT_APP_ADOPTION_SERVICE_ENDPOINT, fetchJson);

export default dataProvider;
