import React, { Component } from 'react';
import {container, main, aside, padSides, header, welcome, projects, about, myprocess, div1, div2, div3, whiteText, navList} from './MainContainer.sass';

import {Divider, Header} from 'semantic-ui-react'

import {HeaderContainer} from 'Containers'
import {WelcomeComponent, AboutView, Process, ProjectsView, AsideView, Toolbar} from 'Components'


const NavList = props => (
	<ul className={navList}>
		<li className="active">
			<a href="#welcome">Welcome</a>
		</li>
		<li>
			<a href="#projects">Projects</a>
		</li>
		<li>
			<a href="#about">About</a>
		</li>
		<li>
			<a href="#process">Process</a>
		</li>
	</ul>
)

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return(
            <div className={container}>
                <HeaderContainer className={header} />

                <AsideView className={aside}>
                    <Toolbar>
                        <Header className={whiteText} size="large">Menu</Header>
                    </Toolbar>

                    <NavList />
                </AsideView>

                <main className={main}>
                    <WelcomeComponent id="welcome" className={`${welcome} ${padSides}`} />
                    <Divider className={div1} />

                    <ProjectsView id="projects" className={`${projects} ${padSides}`} />
                    <Divider className={div2}/>


                    <AboutView id="about" className={`${about} ${padSides}`} />
                    <Divider className={div3}/>

                    <Process id="process" className={`${myprocess} ${padSides}`} />
                </main>

            </div>
        )
    }
}

export default MainContainer;