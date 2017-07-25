import React, {Component, PropTypes} from 'react';
import MainInformation from './mainInformation';
import OtherInformation from './otherInformation';

const step = [
    {name: 'firstStep', component: <MainInformation/>},
    {name: 'secondStep', component: <OtherInformation/>}
]
export default MainInformation;