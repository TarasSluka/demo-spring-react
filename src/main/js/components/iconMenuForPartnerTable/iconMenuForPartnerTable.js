import React,{Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class IconMenuForPartnerTable extends Component{
    render(){
        const {partner , deletePartner} = this.props;

        return(
            <div>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                    <MenuItem primaryText="Edit" />
                    <MenuItem primaryText="Add new client" />
                    <MenuItem primaryText="Delete" onClick={()=> deletePartner(partner)}/>
                </IconMenu>
            </div>
        );
    }
}

export default IconMenuForPartnerTable;
