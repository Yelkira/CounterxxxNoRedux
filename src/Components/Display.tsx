import React from 'react';
type DisplayPropsType ={
    startValue:number
}
const Display = (props:DisplayPropsType) => {
    return (
        <div>
           Value: {props.startValue}
        </div>
    );
};

export default Display;