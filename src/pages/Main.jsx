import { useState } from "react";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";
const Main=()=>{

    const [openDrawer, setOpenDrawer] = useState(true);


    const toggle=()=>{

        setOpenDrawer(prevState=>!prevState)
    }


    return(

        <>
        <Header toggle={toggle} />
        <Sidebar openDrawer={openDrawer}/>
        <h1>main display</h1>
       
        </>
    )
}

export default Main;