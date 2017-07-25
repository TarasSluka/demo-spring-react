import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';

class WizardForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    }

    nextPage() {
        this.setState({page: this.state.page + 1});
    }

    previousPage() {
        this.setState({page: this.state.page - 1});
    }

    render() {
        const {onSubmit} = this.props;
        const {page} = this.state;
        return (
            <Paper className="add-Partner-paper">
                <div>
                    {page === 1 &&
                    <WizardFormFirstPage
                        onSubmit={this.nextPage}/>}
                    {page === 2 &&
                    <WizardFormSecondPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />}
                </div>
            </Paper>
        );
    }
}

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
