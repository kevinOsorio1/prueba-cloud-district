import loginReducer from '../../redux/reducers/loginReducer';

test("should return the initial state", () => {
  expect(loginReducer(null, { type: "", user: null })).toEqual(null);
});
test("should add user logged", () => {
  const mockFBUser = {
    id:'a2d1',
    userID:'a2d1',
    accessToken:'token1',
    name:'name'
  }
  expect(loginReducer(null, { type: "LOGIN",user:mockFBUser})).toEqual(mockFBUser);
});
test("should logout user", () => {
  const previousState = {
    id:'a2d1',
    userID:'a2d1',
    accessToken:'token1',
    name:'name'
  }
  expect(loginReducer(previousState, { type: "LOGOUT",user:null})).toEqual(null);
});
