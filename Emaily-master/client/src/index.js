import "materialize-css/dist/css/materialize.min.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import reducer from "./redux/reducer"
import reduxThunk  from "redux-thunk"

const middleware = [reduxThunk]
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
        document.querySelector("#root")
)