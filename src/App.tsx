import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Interface} from "./Components/Interface";
import Settings from "./Components/Settings";

function App() {


    let startVstring = localStorage.getItem("startValue")
    let start = startVstring?JSON.parse(startVstring):0


    let maxVstring = localStorage.getItem("maxValue")
    let max = maxVstring?JSON.parse(maxVstring):5


    const [maxValue, setMaxValue] = useState(max)
    const [startValue, setStartValue] = useState<number>( start)


    const changeMaxValue = (newValue: number) => {
        setMaxValue(newValue)
    }
    const changeStartValue = (newValue: number) => {
        setStartValue(newValue)
    }
    const setToLocalStorage = ()=>{
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Interface maxValue={maxValue} startValue={startValue}/>}/>
                <Route path="/Settings" element={<Settings changeMaxValue={changeMaxValue}
                                                           changeStartValue={changeStartValue}
                                                           maxValue={maxValue}
                                                           setToLocalStorage={setToLocalStorage}
                                                           startValue={startValue}/>}/>
            </Routes>
        </div>
    );
}

export default App;
