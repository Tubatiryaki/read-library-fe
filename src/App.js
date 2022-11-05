
import CustomRoutes from "./router/custom-routes";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailed, loginSuccess } from "./store/slices/AuthSlice";
import { getUser } from "./api/user-service";
import secureLocalStorage from "react-secure-storage";
import { settings } from "./utils/settings";
import LoadingPage from "./pages/common/loading-page";

function App() {
  const [loading, setLoading] =useState(true);
  const dispatch = useDispatch();

  const loadData = async ()=>{
    try {
      let token = secureLocalStorage.getItem("token");
      if(token){
        const resp =await getUser();
        dispatch(loginSuccess(resp.data));
      }
      
    } catch (err) {
      console.log(err);
      dispatch(loginFailed());
      
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    loadData();
    document.title = `${settings.siteName} | Premium Read Library`;
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
    {loading ? <LoadingPage/> : <CustomRoutes /> }
    </>
      
     
   
  );
}

export default App;
