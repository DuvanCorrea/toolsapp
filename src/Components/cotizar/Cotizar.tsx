import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosCotizarAction } from "../../redux/productosCotizar";

const Cotizar: React.FC = () => {
  const dispatch = useDispatch();

  const productosCotizar = useSelector((store: any) => store.productosCotizar);

  console.log(productosCotizar);

  return (
    <Fragment>
      <ul></ul>
      <button
        onClick={() => {
          dispatch(obtenerProductosCotizarAction());
        }}
      >
        Tocame baby
      </button>
    </Fragment>
  );
};
export default Cotizar;
