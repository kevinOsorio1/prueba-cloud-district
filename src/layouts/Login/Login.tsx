import React, { useState } from "react";
import ReactFacebookLogin, {
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import { useNavigate } from "react-router-dom";

import { useLoginContext } from "../../contexts/LoginContext/useLoginContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleLogin } = useLoginContext();

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    handleLogin(response);
    setLoading(false);
    navigate("/", { replace: true });
  };
  const onClick = () => {
    setLoading(true);
  };
  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Por Favor Inicia Sesion
      <ReactFacebookLogin
        appId="468354564902417"
        fields="name,email,picture"
        data-testid='fblogin'
        onClick={onClick}
        autoLoad={false}
        callback={responseFacebook}
        authType="reauthorize"
        disableMobileRedirect={true}
        textButton="Inicia sesion con Facebook"
        icon={ "fa-facebook" }
      />
    </div>
  );
};

export default Login;
