import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deletePartner} from '../../store/partners';

import IconMenuForPartnerTable from './iconMenuForPartnerTable'

class IconMenuForPartnerTableContainer extends Component{
    render(){
        const {partner, deletePartner} = this.props;

        return(
         <div>
             <IconMenuForPartnerTable partner={partner} deletePartner={deletePartner}/>

        </div>
     );
    }
}

function mapStateToProps(state) {
    return {
       partners: state.partners
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ deletePartner : deletePartner},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(IconMenuForPartnerTableContainer);
