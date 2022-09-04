import loginReducer from './login/loginReducer';
import adminReducer from './admin/adminReducer';
import dprReducer from './dpr/dprReducer';

const appReducers = {
  login: loginReducer,
  admin: adminReducer,
  dpr: dprReducer,
}

export default appReducers