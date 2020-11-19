import React from 'react';
import Form from './form/Form.jsx';

const UIForm = (props) => {  
    console.log(Form.Group);  
    return(
        <Form method="post" className="myform" action="index" style={{
            maxWidth:500,
            'margin':'50px auto'
        }}>
            {props.children}
        </Form>
    )
}

export default UIForm;