import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter,Switch, Route } from "react-router-dom";
//import {lazy , Suspense} from 'react';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions";
import Home from "./pages/Home";
import Header from "./components/Header";
import Register from "./pages/Register";
import UserRoute from "./components/UserRoute";
import Login from "./pages/Login";
import AddEdit from "./pages/AddEdit";
import NoPage from "./pages/NoPage";
import View from "./pages/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const Home =lazy(()=> import('./pages/home'))
// const Register =lazy(()=> import('./pages/register'))
// const UserRout e =lazy(()=> import('./components/UserRoute'))
// const Login =lazy(()=> import('./pages/login'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    
    <BrowserRouter>
    <div className="App">
    <Header />
    <ToastContainer position="top-center" />
      <Switch>
      
        <UserRoute exact path="/" component={Home} />
        <UserRoute path="/update/:id" component={AddEdit} />
        <UserRoute path="/view/:id" component={View} />
        <UserRoute path="/addContact" component={AddEdit} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route  component={NoPage} />

        </Switch>

        </div>
    </BrowserRouter>

  );
}

export default App;
