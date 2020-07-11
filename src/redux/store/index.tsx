import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productosCotizarReducer from "../productosCotizar";

const rootReducer = combineReducers({
  productosCotizar: productosCotizarReducer,
});

// estencion del navegador
const composeEnhancers: any = compose;

export default function generarStore() {
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
