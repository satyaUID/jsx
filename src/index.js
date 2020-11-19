// import React and ReactDOM
import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
// import semantic-ui-css
import ReactForm from './components/ReactForm';
import UIForm from './components/UIForm';
import 'semantic-ui-css/semantic.min.css';



ReactDOM.render(
    <Fragment>
        <UIForm />
        <ReactForm />
    </Fragment>,
    document.getElementById("root")
)