import axios from "axios";

//types
const OBTENER_PRODUCTOS_COTIZAR: String = "OBTENER_PRODUCTOS_COTIZAR";

// constantes
const dataInicial: any = {
  array: [],
};

// reducer
export default function productosCotizarReducer(
  state: any = dataInicial,
  action: any
) {
  switch (action.type) {
    case OBTENER_PRODUCTOS_COTIZAR:
      return { ...state, array: action.payload };

    default:
      return state;
  }
}

// acciones
export const obtenerProductosCotizarAction = () => async (
  dispatch: any,
  getState: any
) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      type: OBTENER_PRODUCTOS_COTIZAR,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error >>> ", error);
  }
};