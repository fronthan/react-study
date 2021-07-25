import React from 'react';
import './SassComponent.scss';

// 9.2 sass 사용
const SassComponent = () => {
    return (
        <div className="SassComponent">
            <div className="box red"></div>
            <div className="box orange"></div>
            <div className="box yellow"></div>
            <div className="box green"></div>
            <div className="box blue"></div>
            <div className="box indigo"></div>
            <div className="box violet"></div>
        </div>
    );
};

export default SassComponent;