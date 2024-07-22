import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import logoLogin from "../../assets/logoLogin.svg";
import "./login.scss";
import googleIcon from "../../assets/google.svg";

function Login() {
  const responseGoogle = (response) => {
    if (response.credential) {
      const base64Url = response.credential.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      const parsedPayload = JSON.parse(jsonPayload);
      console.log(parsedPayload);

      const { name, given_name, family_name, email } = parsedPayload;
      const userData = {
        name,
        given_name,
        family_name,
        email,
      };

      // Salvar os dados no localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Criar um blob com os dados JSON
      const jsonDados = JSON.stringify(userData, null, 2);
      const blob = new Blob([jsonDados], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Limpar o objeto URL
      URL.revokeObjectURL(url);
    } else {
      console.log("Login falhou", response);
    }


    ("");

  };

  return (
    <GoogleOAuthProvider clientId="1000453594918-ppluvv8due4uloi23i1i6mp6vpdh4vcn.apps.googleusercontent.com">
      <div className="pag1">
        <div className="imageLogin">
          <img id="logoPD" src={logoLogin} alt="Logo" />
        </div>
        <div className="login">
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle}>
            <button className="google-login-button" onClick={responseGoogle}>
              <img id="google" src={googleIcon} alt="Google Login" />
            </button>
          </GoogleLogin>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;