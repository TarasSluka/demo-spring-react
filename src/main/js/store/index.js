import {combineReducers} from 'redux';
import PartnerReducer from './partners';

const allReducers = combineReducers({
    partners: PartnerReducer,
});

export default allReducers
