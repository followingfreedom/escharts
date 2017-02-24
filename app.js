import React from 'react';
import Aggs from './component/aggs'
import Nav from './component/nav'
import Dashboard from './component/dashboard'

const appStyle={
	base:{
		backgroundColor:'#E8F5E9',
	},
	head:{
		flex:1,
	}
}

export default class App extends React.Component{
	constructor(props){
		super(props);

		this.state={
			contentShow:"aggs",
		}

		this.handleSwitchContent = this.handleSwitchContent.bind(this);
	}

	handleSwitchContent(name){
		this.setState({
			contentShow:name,
		});
	}

	render(){
		return (
			<div id="base" style={appStyle.base}>
				<div id="head">
					<Nav handleSwitch={this.handleSwitchContent}/>
				</div>
				<div id="content">
					{this.state.contentShow=="aggs" && <Aggs />}
					{this.state.contentShow=="dashboard" && <Dashboard />}
				</div>
				<div id="foot">
				</div>
			</div>
			);
	}
}