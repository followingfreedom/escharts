import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const navStyle={
	base:{
		display:'flex',
		justifyContent: 'center',
	},
	rbStyle:{
		margin:12,
	}

}


class Nav extends React.Component{
	constructor(props){
		super(props);

		this.switchAddCharts = this.switchAddCharts.bind(this);
	}

	switchAddCharts(){
		this.props.handleSwitch("aggs");
	}

	render(){
		return(
			<div style={navStyle.base}>
				<RaisedButton label="Dashboard" primary={true} style={navStyle.rbStyle}
					onTouchTap={()=>this.props.handleSwitch("dashboard")}
					/>
				<RaisedButton label="Charts Info" primary={true} style={navStyle.rbStyle}
					onTouchTap={()=>this.props.handleSwitch("info")}/>
				<RaisedButton label="Add Chart" secondary={true} style={navStyle.rbStyle} 
					onTouchTap={this.switchAddCharts}/>
				<RaisedButton label="Abount" secondary={true} style={navStyle.rbStyle}/>
			</div>
			);
	}
}

export default Nav;