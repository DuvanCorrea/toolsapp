const EMPEZAR_OBTENER_PRODUCTOS_COTIZAR = "EMPEZAR_OBTENER_PRODUCTOS_COTIZAR";
const PRODUCTOS_COTIZAR_RECIBIDOS = "PRODUCTOS_COTIZAR_RECIBIDOS";

const empezarObtenerProductosCorizar = () => ({
  type: EMPEZAR_OBTENER_PRODUCTOS_COTIZAR,
});

const productosCotizarRecibidos = (payload: any) => ({
  type: PRODUCTOS_COTIZAR_RECIBIDOS,
  ...payload,
});

export const fetchProductosCotizar = (payload: any) => {
  return async (dispatch: any) => {
    dispatch(empezarObtenerProductosCorizar());

    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => {
        dispatch(productosCotizarRecibidos(res));
      });
  };
};
