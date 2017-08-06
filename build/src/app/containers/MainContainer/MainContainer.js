import React, { Component } from 'react';
import {container, header, welcome, work, about, myprocess} from './MainContainer.sass';

import {HeaderContainer} from 'Containers'
import {WelcomeComponent, AboutView, Process, WorkView} from 'Components'

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return(
            <div className={container}>
                <HeaderContainer className={header} />
                <WelcomeComponent className={welcome} />
                <WorkView className={work} />
                <div className={about}>
                    <AboutView className={about} />
                </div>
                <div className={myprocess}>
                    <Process className={myprocess} />
                </div>
            </div>
        )
    }
}

export default MainContainer;