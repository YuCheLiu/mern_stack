import React from "react";
import ReactDOM from 'react-dom'
//import { getName } from "./Tutorial-javascript-modular";
// const {getName} = require('./Tutorial-javascript-modular.jsx');
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login.jsx";
import LogoutButton from "./Logout.jsx";
import App from "./App.jsx";


function Welcome(){
    const {user, isAuthenticated} = useAuth0();
    return (
        <>
            {
                isAuthenticated
                ? <h1>Welcome {user.name} <App></App></h1>
                : <h1>Please Login first</h1>
            }
        </>
        
    )
}
const element = <Welcome></Welcome>;

function Auth0(){
    const {isAuthenticated} = useAuth0();
    return (
        <>
            {isAuthenticated
            ? <LogoutButton></LogoutButton>
            : <LoginButton></LoginButton>
            }
        </>
    );
}

// ReactDOM.render(
//     <Auth0Provider
//       domain="dev-9oo0ov1p.us.auth0.com"
//       clientId="L8xxdSSQEmzLn5FETcCU3urJrh2HbrxZ"
//       redirectUri={window.location.origin}
//     >
//       <Welcome />
//       <Auth0/>
//     </Auth0Provider>,
//     document.getElementById("root")
//   );
const LoginPage = ()=>{
    return <Auth0Provider
    domain="dev-9oo0ov1p.us.auth0.com"
    clientId="L8xxdSSQEmzLn5FETcCU3urJrh2HbrxZ"
    redirectUri={window.location.origin}
  >
    <Welcome></Welcome>
    <Auth0/>
  </Auth0Provider>
}
export default LoginPage;