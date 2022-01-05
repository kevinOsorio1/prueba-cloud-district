import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import userReducer from "../reducers/userReducer";
import { Provider } from "react-redux";
import { ReactElement } from "react";

const allReducers = combineReducers({
  users: userReducer,
  login:loginReducer
})
const store: Store & {
  dispatch: DispatchType;
} = createStore(allReducers, applyMiddleware(thunk));

const StoreProvider = ({children}:{children:ReactElement})=>{
  return  <Provider store={store}>
    {children}
  </Provider>
}
export default StoreProvider