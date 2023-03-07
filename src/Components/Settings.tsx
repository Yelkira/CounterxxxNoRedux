import React, {ChangeEvent} from 'react';
import Button from "./Button";
import {NavLink} from "react-router-dom";


type SettingsPropsType ={
    maxValue: number
    startValue: number
    changeMaxValue:(newValue: number)=>void
    changeStartValue:(newValue: number)=>void
}
const Settings = (props:SettingsPropsType) => {

    const changeMaxValue = (e:ChangeEvent<HTMLInputElement>) =>{
        props.changeMaxValue(+e.currentTarget.value)
    }
    const changeStartValue = (e:ChangeEvent<HTMLInputElement>) =>{
        props.changeStartValue(+e.currentTarget.value)
    }
    return (
        <div>
            <div >
                <div>
                <span>Max value:</span><input onChange={changeMaxValue} className="input" defaultValue={props.maxValue} min={props.startValue +1} type="number"/>
                </div>
                <div>
                    <span> Min value:</span><input onChange={changeStartValue} className="input" defaultValue={props.startValue} max={props.maxValue-1} min={props.startValue} type="number"/>
                </div>
            </div>
            <NavLink to={"/"}>

                <Button name={"SET"} callback={() => {
                }}/>
            </NavLink>
        </div>
    );
};

export default Settings;