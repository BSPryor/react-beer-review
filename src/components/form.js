import React, {useState} from  "react";

export default function Form() {
  const [name, setName] = useState('')
  const [abv, setAbv] = useState('')
  const [type, setType] = useState('')

  const handleClick = function() {
    const beer = {
      name: {name},
      abv: {abv},
      type: {type}
    }

  }

  return (
    <form className="addBeerForm row">
      <h3>Add New Beer</h3>

      <div className="form-group col-md-6 offset-md-3">
        <input value={name} 
        onChange= {(event) => {setName({name: event.target.value})}}
        type="text" className="form-control" placeholder="Beer name"/>
        <br></br>
        <input value={abv}  
        onChange= {(event) => {setAbv({abv: event.target.value})}}
        type="text" className="form-control" placeholder="Beer abv"/>
        <br></br> 
        <input value={type}  
        onChange= {(event) => {setType({type: event.target.value})}}
        type="text" className="form-control" placeholder="Beer type"/>
      </div>
      
      <div className="col-md-1 offset-md-3">  
      <br></br>    
        <button type="button" onClick={handleClick} className="btn btn-primary">Add Beer</button>
      </div>

    </form>
  )
}