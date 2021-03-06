import * as actionType from '../contexts/AppContext/actions-types';
import { ValidateIPaddress } from './validate_IP_address';

export const getIPLocation = async (ip, dispatch) => {
  dispatch({ type: actionType.GET_LOCATION_START_ASYNC });
  try {
    if (ValidateIPaddress(ip)) {
      const dataRaw = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_brv1IBaELUFJmV2CHZlrCFgKrI14t&ipAddress=${ip}`,
      );

      if (dataRaw.status !== 200) {
        throw new Error('oops something went wrong. please try again later');
      } else {
        const dataJson = await dataRaw.json();

        dispatch({
          type: actionType.GET_LOCATION_END_ASYNC,
          payload: dataJson,
        });
      }
    } else {
      const dataRaw = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_brv1IBaELUFJmV2CHZlrCFgKrI14t&domain=${ip}`,
      );

      if (dataRaw.status !== 200) {
        throw new Error('oops something went wrong. please try again later');
      } else {
        const dataJson = await dataRaw.json();

        dispatch({
          type: actionType.GET_LOCATION_END_ASYNC,
          payload: dataJson,
        });
      }
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: actionType.GET_LOCATION_ERROR_ASYNC, payload: e.message });
  }
};
