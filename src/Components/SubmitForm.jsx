import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import Request from '../Components/Request'


class SubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        }
    }

    handleSubmit = (event) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(response => response.json())
        .then(data => alert("Here is my content: " + data.title))
        this.setState({content : event.target.value})

    }

    handleChange = (event) => {
        this.setState({content : event.target.value})
    }

  render() {
    return (
      <div>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <Button id="myButton" onClick={this.handleSubmit}>Submit</Button>
            </InputGroup.Prepend>
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              placeholder={this.props.placeholder}/>
        </InputGroup>
      </div>
    );
  }
}

export default SubmitForm;
