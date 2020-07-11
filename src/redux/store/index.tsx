import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function reducers(): any {
  return { hola: "holi" };
}

export default (): Store => {
  return {
    ...createStore(reducers, applyMiddleware(thunk)),
  };
};
