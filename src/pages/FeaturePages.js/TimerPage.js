import NavMenu from "../../components/NavMenu";
import Timer from "../../features/Timer"
import { useState } from "react";
import { Input,Form, FormGroup, Label, Button } from "reactstrap";


const TimerPage = ()=>{
   
    return(
        <main>
            <NavMenu/>
            <h1 className="text-center">Meditation Timer</h1>
            <Timer/>
        </main>
    )
}

export default TimerPage;