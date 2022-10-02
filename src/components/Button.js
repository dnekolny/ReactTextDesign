import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, double }) => {

    const horizontalLine = '─────' + '─'.repeat(text.length);
    const verticalLine = double ? '||' : '|';

    return (
        <div className={'t-button' + (double ? ' t-button-double' : '')} onClick={{ onClick }}>
            <div className='t-button-line-horizontal'>{horizontalLine}</div>
            <div className='t-button-line-text'>
                <div className='t-button-line-vertical'>
                    <div>{verticalLine}</div>
                    <div>{verticalLine}</div>
                </div>
                <div className='t-button-text'>{text}</div>
                <div className='t-button-line-vertical'>
                    <div>{verticalLine}</div>
                    <div>{verticalLine}</div>
                </div>
            </div>
            <div className='t-button-line-horizontal'>{horizontalLine}</div>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    double: PropTypes.bool,
}

Button.defaultProps = {
    double: false,
}

export default Button