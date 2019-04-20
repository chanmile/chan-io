import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import JSONTree from 'react-json-tree'


function Authenticate({label}) {
  const [response, setRes] = useState("")

  const authenticate = () => {
        fetch("/login",{
          method: 'GET',
          headers:{'Content-Type': 'application/json'}
        })
          .then(res => res.json() )
          .then((data) => setRes(data) )
          console.log(response)
  }

  return (
      <div className="thirdsDiv">
      { response == "" ? (
          <div>
              <Button id="myButton" onClick={authenticate}>Authenticate</Button>
          </div>
      ) : (
          <div>
            <a href={response}>Log In</a>
          </div>
      )}
      </div>
  )
}

export default Authenticate
