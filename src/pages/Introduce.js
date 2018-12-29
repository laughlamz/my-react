import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

export default class Introduce extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ReactFullpage
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Start about me</p>
                    </div>
                    <div className="section">
                        <p>wrapper IOT start</p>
                    </div>
                    <div className="section">
                        <p>Iot/Robotics content</p>
                    </div>
                    <div className="section">
                        <p>wrapper IOT stop</p>
                    </div>
                    <div className="section">
                        <p>End about me</p>
                    </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    }
}