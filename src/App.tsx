import React from "react";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const data = useSelector((state) => {
    console.log(state);
  });

  return <div>Hola mundo beaby</div>;
};
export default App;
