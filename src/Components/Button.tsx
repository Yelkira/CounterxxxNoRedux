import React from 'react';

type ButtonPropsType = {
    name:string
    callback:()=>void
    startValue?: number
    maxValue?: number
}
const Button = (props:ButtonPropsType) => {

    let disable = props.startValue === props.maxValue && props.name === "INC"
    const onClickHandler =()=>{
        props.callback()
    }

    return (
        <>
            <button onClick={onClickHandler} disabled={disable}>{props.name}</button>
        </>
    );
};

export default Button;