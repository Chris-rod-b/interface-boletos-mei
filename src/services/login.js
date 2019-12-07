import { useDispatch } from 'react-redux';
import { signInRequest } from '../store/modules/auth/actions';

export default function Login(email, password) {
  const dispatch = useDispatch();

  return dispatch(signInRequest(email, password));
}
