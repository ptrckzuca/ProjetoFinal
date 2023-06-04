import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Logar/Login';
import Registo from '../Registar/Registo';
import Home from '../Main/Home';
//import UseAuth from "../Hooks/UseAuth";

const Private = ({Item}) =>{
     
    return <Registo/>
};

const RoutesFindu = () =>{
    return (
        <BrowserRouter>
        <Fragment>
        <Routes>
       
            <Route path ='/' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
            <Route path='/registo' element={<Registo/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
        </Fragment>
        </BrowserRouter>
    );
};
export default RoutesFindu;
/*<Route exact path ='/home' element={<Private Item ={Home}/>}/>
            <Route path ='/' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
            <Route path='/registo' element={<Registo/>}/>*/