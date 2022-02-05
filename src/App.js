import React from 'react';
import AnimalList from './AnimalList.js';
import ZooList from './ZooList.js';
import {animals,zoos} from "./config.js"
import AddAnimal from './AddAnimal.js';


export default function App () {
    return (
    <div>
      <AnimalList items={animals}/>
      <ZooList items={zoos}/>
      <AddAnimal item={1}/>
    </div>
    );
  }
