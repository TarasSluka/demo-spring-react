import React from "react";
import "./app.scss";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TableOfPartnersContainer from "../tableOfPartners/tableOfPartnersContainer";
import MainAppBar from "../mainAppBar";
import NavigationMenu from "../navigationMenu/";

import Paper from 'material-ui/Paper';
import {Values} from 'redux-form-website-template';
import PartnerDetails from '../partnerDetails';
import WizardForm from '../addPartner/test/WizardForm';
import showResults from '../addPartner/test/showResults';

const App = () => (

    <MuiThemeProvider>
        <div>
            <MainAppBar/>
            <div className="appContainer">
                <div className="sideBar">
                    <NavigationMenu/>
                </div>
                <div className="card">
                    <WizardForm onSubmit={showResults}/>
                </div>
                {/*<Values form="wizard"/>*/}
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
