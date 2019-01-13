import React from 'react';
import Menu from '../../components/Menu';
import { Route } from 'react-router-dom';
import Home from '../home';
import TaskList from '../tasklist';
import Dashboard from '../dashboard';
import { Header, Logo, Main, Section } from './style';


class Layout extends React.PureComponent {
	render() {
		return (
			<div>
				<Header>
					<Logo>
						<i className="iconfont">&#xe638;</i>todo together
					</Logo>
				</Header>
				<Main>
					<Menu style={{borderRight: '1px solid #eee'}}></Menu>
					<Section>
						<Route path='/home' exact component={Home}></Route>
						<Route path='/tasklist' exact component={TaskList}></Route>
						<Route path='/dashboard' exact component={Dashboard}></Route>
					</Section>
				</Main>
			</div>
		);
	}
}

export default Layout;