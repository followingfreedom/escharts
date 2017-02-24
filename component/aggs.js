import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import AggsRelationChip from './aggsRelationChip';
import TermsBucket from './termBucket';

const aggsPageSytle = {
	base:{
		display: 'flex',
		flexDirection: 'column',
	},
	main:{
		display:'flex',
		flex: 1,
		marginTop: '2em',
		marginBottom: '2em',
	},
	aggsAddId:{
		marginLeft: '1em',
		marginRight: '1em',
	},
	aggsNatureId:{
		marginRight: '1em',
	},
	aggsElementId:{
		marginRight: '2em',
	},
	aggsChipId:{
	},

	aggsSubmitId:{
		display:'flex',
		flex:1,
		justifyContent: 'center',
		marginLeft: '1em',

	}
}

const styleAggsAdd = {
  marginRight: 20,
};


const bucketStyle = {
	display: 'inline-flex',
}


class Aggs extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bmFlag :0,
			bucketOption:1,
			metricOption:0,
			bucketValue:"term",
			termsDialog:false,
			bucketsArray:['root'],  // store all buckets
			// store object -> name
			//			  -> parent
			//            -> element (terms, avg, sum, etc)
			//			  -> nature (bucket/metirc)
			//			  -> body: string
			// [{name:xx,parent:xx, element:xx, nature: xx, body: xx}}, {}, {}]
			aggsObjectsArray:[], 
		};

		this.handleTouchTap = this.handleTouchTap.bind(this);
		this.selectBucketOrMetric = this.selectBucketOrMetric.bind(this);
		this.selectBucket = this.selectBucket.bind(this);
		this.handleTermOpen = this.handleTermOpen.bind(this);
		this.handleTermClose = this.handleTermClose.bind(this);
		this.handleDialogSave = this.handleDialogSave.bind(this);
		this.handleChipDelete = this.handleChipDelete.bind(this);
	}


	handleTouchTap(){
		if(this.state.bmFlag == 1){
			this.setState({
				bmFlag:0,
			});
		} else {
			this.setState({
				bmFlag:1,
			});
		}
	}

	selectBucketOrMetric(e){
		if(e.target.value == "metric"){
			this.setState({
				bucketOption:0,
				metricOption:1,
			});
		}
		if(e.target.value == "bucket"){
			this.setState({
				bucketOption:1,
				metricOption:0,
			});
		}
	}

	selectBucket(event,index,value){
		this.setState({
			bucketValue:value,
		});
	}

	handleTermOpen(e){
		this.setState({
			termsDialog:true,
		});
		console.log(this.state.termsDialog);
	}

	handleTermClose(e){
		this.setState({
			termsDialog:false,
		});
		console.log(this.state.termsDialog);
	}

	handleDialogSave(bucket, aggsObject){
		if(bucket){
			this.state.bucketsArray.push(bucket);
		}
		if(aggsObject){
			this.state.aggsObjectsArray.push(aggsObject);
		}
	}

	handleChipDelete(name){
		let chipData = this.state.aggsObjectsArray;
		let chipToDelete = chipData.map((chip)=>{
			if(chip.name==name){
				return chip;
			}
			return null;
		});
		if(chipToDelete != null){
			chipData.splice(chipData.indexOf(chipToDelete)+1, 1);
		}

		let buckets = this.state.bucketsArray;
		buckets.splice(buckets.indexOf(name), 1);

		this.setState({
			aggsObjectsArray:chipData,
			bucketsArray:buckets,
		});
	}


	render(){
		return (
			<div style={aggsPageSytle.base}>
			<div style={aggsPageSytle.main}>
				<div id="aggsAddId" style={aggsPageSytle.aggsAddId}>
				<FloatingActionButton mini={true} style={styleAggsAdd} onTouchTap={this.handleTouchTap}>
      				<ContentAdd />
    			</FloatingActionButton>
    			</div>

    			{this.state.bmFlag==1 && 
					<div id="aggsNatureId" style={aggsPageSytle.aggsNatureId}>
						<RadioButtonGroup name="bucket_metric" defaultSelected="bucket" onChange={this.selectBucketOrMetric}>
							<RadioButton value="bucket" label="Bucket" />
							<RadioButton value="metric" label="Metric" />
						</RadioButtonGroup>
					</div>
    			}

    			{
    				this.state.bmFlag ==1 && this.state.bucketOption==1 && 
    				<div id="aggsElementId" style={aggsPageSytle.aggsElementId}>
    					<DropDownMenu value={this.state.bucketValue} onChange={this.selectBucket} 
    						style={bucketStyle}>
    						<MenuItem value="term" primaryText="term" onTouchTap={this.handleTermOpen}/>
    						<MenuItem value="histogram" primaryText="histogram"/>
    						<MenuItem value="date_histogram" primaryText="date_histogram"/>
    					</DropDownMenu>
    				</div>
    			}

    			<TermsBucket termsDialog={this.state.termsDialog} 
    							handleClose={this.handleTermClose}
    							buckets={this.state.bucketsArray}
    							handleDialogSave={this.handleDialogSave}
    							/>
    			<div id="aggsChip" style={aggsPageSytle.aggsChipId}>
    			<AggsRelationChip chipData={this.state.aggsObjectsArray} 
    							handleDeleteData={this.handleChipDelete}
    			/>
    			</div>
    		</div>
    			

			<div id="submitId" style={aggsPageSytle.aggsSubmitId}>
    			<RaisedButton label="Submit" primary={true} />
    		</div>

			</div>
			);
	}
}

export default Aggs;