import {createAction, createReducer} from "redux-act";
import update from "immutability-helper";
import fetch from "isomorphic-fetch";

export const addPartner = createAction("ADD_PARTNER");
export const addPartnerNextBtn = createAction("ADD_PARTNER_NEXT_BTN");
export const addPartnerPrevBtn = createAction("ADD_PARTNER_PREV_BTN");

export const deletePartnerAction = createAction("DELETE_PARTNER_ACTION");
export const fetchPartnersStarted = createAction("FETCH_START_PARTNERS");
export const fetchPartnersSucceeded = createAction("FETCH_SUCCEEDED_PARTNERS");
export const fetchPartnersFailure = createAction("FETCH_FAILURE_PARTNERS");


const handleFetchUsersStarted = (state) => {
    return state;
};

export const fetchPartners = function (url = "http://localhost:8080/api/partners/") {
    return function (dispatch) {
        dispatch(fetchPartnersStarted(url));
        return fetch(url).then(
            response => response.json(),
            error => dispatch(fetchPartnersFailure(error)))
            .then(json =>
                dispatch(fetchPartnersSucceeded(json))
            )
    }
};

export const deletePartner = function (partner) {
    return function (dispatch) {
        return fetch(`http://localhost:8080/api/partners/${partner.id}`, {
            method: 'DELETE'
        }).then(() => dispatch(deletePartnerAction(partner)))
    };
};


const handleFetchPartnersSucceeded = (state, partners) => {
    return partners
};

const handleFetchPartnersFailure = (error) => {
    return {
        payload: error
    };
};

const handleDeletePartner = (state, partner) => {
    const index = state.findIndex((element) => {
        return element.id === partner.id
    });
    return update(state, {$splice: [[index, 1]]});
};

const handleAddPartner = (state, partner) => {
    return [
        ...state,
        partner];
};

const PartnerReducer = createReducer({
    [fetchPartnersFailure]: handleFetchPartnersFailure,
    [deletePartnerAction]: handleDeletePartner,
    [addPartner]: handleAddPartner,
    [fetchPartnersSucceeded]: handleFetchPartnersSucceeded,
    [fetchPartnersStarted]: handleFetchUsersStarted
}, []);


export default PartnerReducer;
