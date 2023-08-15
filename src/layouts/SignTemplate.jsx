import Login from "../components/Main/Login";
import Registration from "../components/Main/Registration";
import "./SignTemplate.css"
import { BrowserRouter, Route, Switch, Redirect, useParams } from "react-router-dom";
import { useEffect } from "react";

const SignTemplate = (props)=>{
    let {para} = useParams();

    return(
        <>
            <div className="sign-container">
                <div className="login-container">{
                    // useEffect (()=>{ pathAt ==='log'? <Login />: <Registration/>})
                    para=== "reg"? <Registration/>:<Login link = "/dashboard/Dashboard" />

                }
                </div>
            </div>
        </>
    );
}

export default SignTemplate