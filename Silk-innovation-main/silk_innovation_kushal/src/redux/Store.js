import {createStore,combineReducers,applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
//reducers
import UserReducer from "./reducers"


const middlware =[thunk]
//store
const store = createStore(combineReducers({
    userState: UserReducer,
  }),composeWithDevTools(applyMiddleware(...middlware))
)


export default store
