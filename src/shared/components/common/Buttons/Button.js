import React, {Component, PropTypes} from 'react';

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        classNames: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: () => {}
    };

    render() {
        const { text, onClick, classNames } = this.props;

        return (
            <button className={`button ${classNames}`} onClick={onClick}>{text}</button>
        );
    }
}