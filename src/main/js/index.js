import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import allReducers from './reducers';
import App from './components/app/index';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Values} from 'redux-form-website-template';


import store from '../js/components/addPartner/test/store';
import showResults from '../js/components/addPartner/test/showResults';
import WizardForm from '../js/components/addPartner/test/WizardForm';


injectTapEventPlugin();

// const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>

        {/*<div style={{padding: 15}}>*/}
        {/*<h2>Wizard Example</h2>*/}
        {/*<WizardForm onSubmit={showResults}/>*/}
        {/*<Values form="wizard"/>*/}
        {/*</div>*/}
    </Provider>
    , document.getElementById('root')
);

// const rootEl = document.getElementById('root');
//
// ReactDOM.render(
//     <Provider store={store}>
//         <div style={{ padding: 15 }}>
//             <h2>Wizard Example</h2>
//             <WizardForm onSubmit={showResults} />
//             <Values form="wizard" />
//         </div>
//     </Provider>,
//     rootEl,
// );