import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosCotizarAction } from "../../redux/productosCotizar";

const FormProductosCotizar: React.FC = () => {
  const [productos, setProductos] = useState([]);
  const [pSeleccionado, setpSeleccionado] = useState({
    idProductoCotizar: 0,
    nombre: "Nunguno seleccionado",
    precioCompra: 0,
    avgGanancia: 49,
    avgDescuento: 0,
    costoEnvio: 9000,
  });

  const data = useSelector((store: any) => store.productosCotizar.array);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productos.length === 0) {
      dispatch(obtenerProductosCotizarAction());
      console.log("useEffect");
    }
  }, []);

  // cambio de select
  const cambioProducto = (e: any) => {
    console.log("holi");
  };

  // seleccionar

  return (
    <Fragment>
      <form className="form">
        <input
          type="hidden"
          name="idProductoCotizar"
          id="idProductoCotizar"
          value={pSeleccionado.idProductoCotizar}
        />

        <div className="form-group">
          <label>Producto</label>
          <select
            defaultValue="Seleccionar"
            id="nombre"
            name="nombre"
            className="form-control"
            onChange={(e: any) => {
              cambioProducto(e);
            }}
          >
            <option>Seleccionar</option>
            {data.map((e: any) => {
              return (
                <option key={e.nombre} value={e.idProductoCotizar}>
                  {e.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Precio de compra</label>
          <input
            type="text"
            className="form-control"
            placeholder="Precio de compra"
            name="precioCompra"
            id="precioCompra"
            required
            value={pSeleccionado.precioCompra}
          />
        </div>
        <div className="form-group">
          <label>% Ganancia</label>
          <input
            className="form-control"
            type="text"
            name="avgGanancia"
            id="avgGanancia"
            required
            value={pSeleccionado.avgGanancia}
            max="100"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>% Descuento</label>
          <input
            className="form-control"
            type="text"
            name="avgDescuento"
            id="avgDescuento"
            required
            value={pSeleccionado.avgDescuento}
          />
        </div>
        <div className="form-group">
          <label>Costo de envio</label>
          <input
            className="form-control"
            type="text"
            name="costoEnvio"
            id="costoEnvio"
            required
            value={pSeleccionado.costoEnvio}
          />
        </div>
      </form>
    </Fragment>
  );
};

export default FormProductosCotizar;
