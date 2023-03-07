import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Interface} from "./Components/Interface";
import Settings from "./Components/Settings";

function App() {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    const changeMaxValue = (newValue: number) => {
        setMaxValue(newValue)
    }
    const changeStartValue = (newValue: number) => {
        setStartValue(newValue)
    }


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Interface maxValue={maxValue} startValue={startValue}/>}/>
                <Route path="/Settings" element={<Settings changeMaxValue={changeMaxValue}
                                                           changeStartValue={changeStartValue}
                                                           maxValue={maxValue}
                                                           startValue={startValue}/>}/>
            </Routes>
        </div>
    );
}

export default App;
