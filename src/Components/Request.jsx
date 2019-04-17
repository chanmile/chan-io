import React, { useState } from "react";
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import JSONTree from 'react-json-tree'

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

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
      <div className="thirdsDiv">
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <Button id="myButton" onClick={fetchJSON}>Submit</Button>
            </InputGroup.Prepend>
            <FormControl onChange={event => setValue(event.target.value)}/>
        </InputGroup>
      </div>
      <div className="halvesDiv">
      <b>Received:</b> <JSONTree data={response} theme={theme} invertTheme={true} /></div>
      </div>
  )
}

export default Request
