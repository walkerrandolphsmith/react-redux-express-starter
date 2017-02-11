import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../state';

function mapStateToProps(state) {
    return {
        token: state.routing.locationBeforeTransitions.pathname.split('verify/')[1]
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
export class VerifyEmail extends Component {

    componentDidMount() {
        this.props.verifyEmail(this.props.token);
    }

    render() {
        return (
            <div id="verify">
                {this.props.token}
            </div>
        );
    }
}
