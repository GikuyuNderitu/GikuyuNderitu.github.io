import React, { Component } from 'react';
import {container, main, aside, padSides, header, welcome, projects, about, myprocess, div1, div2, div3, whiteText, navList} from './MainContainer.sass';

import {Divider, Header} from 'semantic-ui-react'

import {HeaderContainer} from 'Containers'
import {WelcomeComponent, AboutView, Process, ProjectsView, AsideView, Toolbar} from 'Components'

const computeStyle = style => style ? style : '';
const getstyles = (...args) => args.map(computeStyle).reduce((prev, cur) => `${prev} ${cur}` , '')

const navigateTo = route => window.location.assign(route);

export const NavList = props => (
	<ul className={`${getstyles(props.className)}`}>
		<li className="active">
			<a onClick={()=> {
                navigateTo('#welcome');
                props.toggleSideNav ? props.toggleSideNav() : console.log('toggle not run');
            }}>Welcome</a>
		</li>
		<li>
			<a onClick={()=> {
                navigateTo('#projects');
                props.toggleSideNav ? props.toggleSideNav() : console.log('toggle not run');
            }}>Projects</a>
		</li>
		<li>
			<a onClick={()=> {
                navigateTo('#about');
                props.toggleSideNav ? props.toggleSideNav() : console.log('toggle not run');
            }}>About</a>
		</li>
		<li>
			<a onClick={()=> {
                navigateTo('#process');
                props.toggleSideNav ? props.toggleSideNav() : console.log('toggle not run');
            }}>Process</a>
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

                    <NavList className={navList} />
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