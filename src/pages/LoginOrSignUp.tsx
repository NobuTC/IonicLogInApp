import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

const LoginOrSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? <Login setLogin={setIsLogin} /> : <Registration />;
};

export default LoginOrSignup;
