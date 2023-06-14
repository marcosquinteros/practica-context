import { useContext } from "react";
import { ContextApi } from "../context/ContextDate";

const Registro = () => {
  const { user, setUser } = useContext(ContextApi);

  return <div>{console.log(user)}</div>;
};

export default Registro;
