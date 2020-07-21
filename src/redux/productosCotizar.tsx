import axios from "axios";

//types
const OBTENER_PRODUCTOS_COTIZAR: String = "OBTENER_PRODUCTOS_COTIZAR";
const OBTENER_PRODUCTO_ACTUAL: String = "OBTENER_PRODUCTO_ACTUAL";

// constantes
const dataInicial: any = {
  array: [],
  prodActual: {
    idProductoCotizar: 0,
    nombre: "Nunguno seleccionado",
    precioCompra: 0,
    avgGanancia: 49,
    avgDescuento: 0,
    costoEnvio: 9000,
  },
};

// reducer
export default function productosCotizarReducer(
  state: any = dataInicial,
  action: any
) {
  switch (action.type) {
    case OBTENER_PRODUCTOS_COTIZAR:
      return { ...state, array: action.payload };

    case OBTENER_PRODUCTO_ACTUAL:
      return { ...state, prodActual: action.payload };

    default:
      return state;
  }
}

// ACCIONES
// obtener productos de la bd para mostrar en las opciones
export const obtenerProductosCotizarAction = () => async (
  dispatch: any,
  getState: any
) => {
  try {
    const res = await axios.get("https://tools-app-1.herokuapp.com/cotizador");
    dispatch({
      type: OBTENER_PRODUCTOS_COTIZAR,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error al obtener los porductos cotizar >>> ", error);
  }
};

// actualizar producto actual para llenar los campos de informacion
export const actualizarProductoActual = (pos: any) => async (
  dispatch: any,
  getState: any
) => {
  try {
    const newSatete = getState().productosCotizar.array[pos - 1];
    dispatch({
      type: OBTENER_PRODUCTO_ACTUAL,
      payload: newSatete,
    });
  } catch (error) {
    console.log("Error actualizar porducto actual >>> ", error);
  }
};
