import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class SubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    handleSubmit = (event) => {
        alert("Here is my content:" + this.state.content)
        this.setState({content : event.target.value})
    }

    handleChange = (event) => {
        this.setState({content : event.target.value})
    }

  render() {
    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <Button id="myButton" onClick={this.handleSubmit}>Submit</Button>
            </InputGroup.Prepend>
            <FormControl onChange={this.handleChange} value={this.state.content} placeholder={this.props.placeholder}/>
        </InputGroup>
    );
  }
}

export default SubmitForm;
