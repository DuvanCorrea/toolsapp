import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerProductosCotizarAction,
  actualizarProductoActual,
} from "../../redux/productosCotizar";

let loading: boolean = true;

const FormProductosCotizar: React.FC = () => {
  const dispatch = useDispatch();
  const [productos, setProductos] = useState([]);
  const [pSeleccionado, setpSeleccionado]: any = useState({});
  const [resumen, setResumen]: any = useState({
    valorVentaSinEnvios: 0,
    valorVentaEstacion: 0,
    valorVentaEnvioDomicilio: 0,
    ganacia: 0,
    descuento: 0,
  });

  //console.log(">>> antes ", pSeleccionado);

  const data = useSelector((store: any) => store.productosCotizar);

  //console.log(data);

  //useEffect
  useEffect(() => {
    loading = true;
    dispatch(obtenerProductosCotizarAction());
    const resumenAux = {
      valorVentaSinEnvios:
        data.prodActual.precioCompra * (data.prodActual.avgGanancia / 100) +
        data.prodActual.precioCompra,
      valorVentaEstacion:
        data.prodActual.precioCompra * (data.prodActual.avgGanancia / 100) +
        5000 +
        data.prodActual.precioCompra,
      valorVentaEnvioDomicilio:
        data.prodActual.precioCompra * (data.prodActual.avgGanancia / 100) +
        data.prodActual.costoEnvio +
        data.prodActual.precioCompra,
      ganacia:
        data.prodActual.precioCompra * (data.prodActual.avgGanancia / 100),
      descuento: 0,
    };
    setResumen(resumenAux);
    setpSeleccionado(data.prodActual);
    //console.log("Data en useEf>> ", data.prodActual);
    console.log("efecto");
    loading = false;
  }, [pSeleccionado]);

  //cuando cabia el combobox
  const onChange = (e: any) => {
    loading = true;
    dispatch(actualizarProductoActual(e.target.value));
    setpSeleccionado({
      idProductoCotizar: 0,
      nombre: "",
      precioCompra: 0,
      avgGanancia: 0,
      avgDescuento: 0,
      costoEnvio: 0,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
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
              onChange(e);
            }}
          >
            <option defaultChecked value="0">
              Seleccionar
            </option>
            {data.array.map((e: any) => {
              return (
                <option key={e.nombre} value={e.idProductoCotizar}>
                  {e.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <strong>
            <label>Nombre</label>
          </strong>
          <p>{pSeleccionado.nombre}</p>
        </div>
        <div className="form-group">
          <strong>
            <label>Precio de compra</label>
          </strong>
          <input
            type="text"
            className="form-control"
            placeholder="Precio de compra"
            name="precioCompra"
            id="precioCompra"
            required
            defaultValue={pSeleccionado.precioCompra}
          />
        </div>
        <div className="form-group">
          <strong>
            <label>% Ganancia</label>
          </strong>
          <input
            className="form-control"
            type="text"
            name="avgGanancia"
            id="avgGanancia"
            required
            defaultValue={pSeleccionado.avgGanancia}
            max="100"
            min="0"
          />
        </div>
        <div className="form-group">
          <strong>
            <label>% Descuento</label>
          </strong>
          <input
            className="form-control"
            type="text"
            name="avgDescuento"
            id="avgDescuento"
            required
            defaultValue={pSeleccionado.avgDescuento}
          />
        </div>
        <div className="form-group">
          <strong>
            <label>Costo de envío</label>
          </strong>
          <input
            className="form-control"
            type="text"
            name="costoEnvio"
            id="costoEnvio"
            required
            defaultValue={pSeleccionado.costoEnvio}
          />
        </div>
      </form>
      {/**************************** Resumen ****************************/}
      <div className="card">
        <div className="card-header">
          <h3>RESUMEN</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <strong>
              <label>Valor de venta SIN envío</label>
            </strong>
            <p>{resumen.valorVentaSinEnvios}</p>
          </div>

          <div className="form-group">
            <strong>
              <label>Valor de venta estación</label>
            </strong>
            <p>{resumen.valorVentaEstacion}</p>
          </div>

          <div className="form-group">
            <strong>
              <label>Valor de venta con envío a domicilio</label>
            </strong>
            <p>{resumen.valorVentaEnvioDomicilio}</p>
          </div>

          <div className="form-group">
            <strong>
              <label>Descuento (En proceso)</label>
            </strong>
            <p>{resumen.descuento}</p>
          </div>

          <div className="form-group">
            <strong>
              <label>Ganancia</label>
            </strong>
            <p>{resumen.ganacia}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormProductosCotizar;
