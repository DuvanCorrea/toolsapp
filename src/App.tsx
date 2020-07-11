import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosCotizarAction } from "./redux/productosCotizar";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [productosCotizar, setProductosCotizar]: any = useState([]);

  useEffect(() => {
    if (productosCotizar.length === 0) {
      dispatch(obtenerProductosCotizarAction);
      setProductosCotizar([{}, {}]);
    } else {
      console.log(productosCotizar);
    }
  });

  return <div>Hola mundo beaby</div>;
};
export default App;
