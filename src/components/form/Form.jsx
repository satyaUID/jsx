import React from 'react';

const Form = (props) => {
    const defaultClasses = 'ui form';
    const attrPros = {};
    for(const p in props){
        if(p !== 'children'){
            attrPros[p]=props[p];
        }
    };
    attrPros.className = attrPros.className ? attrPros.className+' '+ defaultClasses : defaultClasses;
    return(
        <form method="get" {...attrPros}>
            {props.children}
        </form>
    )
}

export default Form;