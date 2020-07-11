import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductosCotizar } from "./redux/actions/productosCotizar";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [productosCotizar, setProductosCotizar]: any = useState([]);

  useEffect(() => {
    if (productosCotizar.length === 0) {
      dispatch(fetchProductosCotizar);
      setProductosCotizar([{}, {}]);
    } else {
      console.log(productosCotizar);
    }
  });

  return <div>Hola mundo beaby</div>;
};
export default App;
