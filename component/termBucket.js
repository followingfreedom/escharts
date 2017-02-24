/**
{
  "size": 0,
  "aggs": {
    "colorBucket": {
      "terms": {
        "field": "color",
        "size": 10
      }
    }
  }
}
**/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';


class TermsBucket extends React.Component{
	constructor(props){
		super(props);

		this.state={
			open:false,
		}

		this.termsClose = this.termsClose.bind(this);
		this.handleDialogSave = this.handleDialogSave.bind(this);

	}

	termsClose(e){
		this.props.handleClose(e);
	}

	handleDialogSave(e){
		const rootName = this.refs.rootName.state.searchText;
		const termsName = this.refs.termsName.input.value;
		const termsField = this.refs.termsField.input.value;
		const termsSize = this.refs.termsSize.input.value;

		const bucktsArray = this.props.bucktsArray;
		const aggsObjectsArray = this.props.aggsObjectsArray;

		let termsObject = new Object();
		termsObject.name = termsName;
		termsObject.parent = rootName;
		termsObject.element = "terms";
		termsObject.nature = "bucket";
		let bodyObject = new Object();
		let bodyTermObject = new Object();
		bodyTermObject.field = termsField;
		bodyTermObject.size = termsSize;
		bodyObject.terms=bodyTermObject
		termsObject.body = bodyObject;

		console.log(termsObject);

		this.props.handleDialogSave(termsName, termsObject);
		this.props.handleClose(e);

	}

	render(){
	    const actions = [
    	  <FlatButton
        	label="Cancel"
        	primary={true}
        	onTouchTap={this.termsClose}
      		/>,
      	  <FlatButton
        	label="Save"
        	primary={true}
        	onTouchTap={this.handleDialogSave}
      		/>,
    	];


		return (
			<div>
				<Dialog title="Aggs Terms" open={this.props.termsDialog} 
					actions={actions}>
					<AutoComplete
      					floatingLabelText="Choice Parent Bucket"
      					filter={AutoComplete.noFilter}
      					openOnFocus={true}
      					dataSource={this.props.buckets} ref="rootName"
    				/><br />
					<TextField hintText="input name" 
						floatingLabelText="Name"
					    floatingLabelFixed={true} ref="termsName"
					   /><br />
					<TextField hintText="input field" 
						floatingLabelText="Field"
					   	floatingLabelFixed={true} ref="termsField"
					   	/><br />
					<TextField hintText="input size" 
						floatingLabelText="Size"
					   	floatingLabelFixed={true} ref="termsSize"
					   	/><br />
				</Dialog>
			</div>
		);

	};
}

export default TermsBucket;
