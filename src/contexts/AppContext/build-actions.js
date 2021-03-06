import { getIPLocation } from '../../helpers/getIPLocation';
import * as actionType from './actions-types';

export const buildActions = (dispatch) => {
  return {
    getLocation: (ip) => getIPLocation(ip, dispatch),
  };
};
