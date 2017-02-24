import React from 'react';
import Chip from 'material-ui/Chip';


class AggsRelationChip extends React.Component{
	constructor(props){
		super(props);

		this.styles = {
      		chip: {
        		margin: 4,
      		},
     		wrapper: {
        		display: 'flex',
        		flexWrap: 'wrap',
      		},
    	};
	}

	handleDeleteData(name){
		this.props.handleDeleteData(name);
	}


	handleChip(data){
		return(
			<Chip key={data.name} style={this.styles.chip} onRequestDelete={()=>this.handleDeleteData(data.name)}>
			{data.name}->{data.parent}
			</Chip>
			);
	}

	render(){
		return (
			<div style={this.styles.wrapper}>
				{this.props.chipData.map(this.handleChip, this)}
			</div>
		);
	}
}

export default AggsRelationChip;