import './App.sass'
import AppRouter from "./AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUserData } from "../features/user/userSlice";
import {AppDispatch} from "./store.ts";

const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    },[dispatch]);

  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App
