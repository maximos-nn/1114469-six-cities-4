import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app.jsx";
import reducer from "./reducers/reducer";
import {Operation as DataOperation} from "./reducers/data/data";
import {ActionCreator as UserActionCreator, AuthenticationStatus} from "./reducers/user/user";
import {createAPI} from "./api";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.changeAuthenticationStatus(AuthenticationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(DataOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
