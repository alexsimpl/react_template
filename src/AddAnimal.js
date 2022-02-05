import React, {useState} from 'react';
import {animals} from "./config.js"


export default function AddAnimal () {
  const [input, setInput] = useState('')
  const addAnimal = () => {
    animals.push(
      {
        Name: 'Cristina',
        Type: 'Monkey',
        Age: 10,
        Size: 'small',
      }
    )
    console.log('In animals add', animals)
  }
  return (
    <div>
      <label>Add Animal</label>
      <div>
        <input placeholder='Name' value={input} onInput={e => setInput(e.target.value)}></input>
        <input placeholder='Type'></input>
        <input placeholder='Age'></input>
        <select>
          <option value={"small"} >small</option>
          <option value={"medium"}>medium</option>
          <option value={"big"}>big</option>
        </select>
        <button className='btn' onClick={addAnimal}>Add Animal</button>
      </div>
    </div>
  )
}
