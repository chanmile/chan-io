import React, { useState } from "react";
import {InputGroup, FormControl, Button} from 'react-bootstrap';

function Request({label, initialValue}) {
  const [value, setValue] = useState(initialValue);
  const [response, setRes] = useState("")

  const fetchJSON = () => {
        fetch(value,{
          method: 'GET', // or 'PUT'
          headers:{'Content-Type': 'application/json'}
        })
          .then(res => res.json() )
          .then((data) => setRes(data) )
  }

  return (
      <div>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <Button id="myButton" onClick={fetchJSON}>Submit</Button>
            </InputGroup.Prepend>
            <FormControl onChange={event => setValue(event.target.value)}/>
        </InputGroup>
        {response.title}
      </div>
  )
}

export default Request
