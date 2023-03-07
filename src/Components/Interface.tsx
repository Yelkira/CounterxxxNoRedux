import React, {useState} from 'react';
import Display from "./Display";
import Buttons from "./Buttons";


type InterfacePropsType = {
    startValue: number
    maxValue:number
}
export const Interface = (props: InterfacePropsType) => {
    const [count, setCount] = useState(props.startValue)
    const integerCount = () => setCount(count => count + 1)
    const resetCount = () => setCount(props.startValue)

    return (
        <div>
            <Display startValue={count}/>
            <Buttons maxValue={props.maxValue} startValue={count} integerCount={integerCount} resetCount={resetCount}/>
        </div>
    );
};