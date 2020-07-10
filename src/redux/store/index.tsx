import { Store, createStore } from "redux";

function reducers(): any {
  return { hola: "holi" };
}

export default (): Store => {
  return {
    ...createStore(reducers),
  };
};
