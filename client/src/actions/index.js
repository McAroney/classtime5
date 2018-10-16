import axios from 'axios'
import { AUTH_USER } from './types'

export const authUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user');
console.log("dispatching..");
console.log (res);
  dispatch({ type: AUTH_USER, payload: res.data })
}

