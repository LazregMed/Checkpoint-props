import React from 'react';
import Adresse from './Components/Profil/Address';
import FullName from './Components/Profil/FulName';
import img from './Components/images/img.jpg'
import './App.css'

function App() {
return (
	<div className="App">
	<FullName Firstname="Mohamed" LastName="Lazreg" age="30"></FullName>

	<Adresse Adresse="Rue 22 Tunis"/>
  <img src={img}/>
	</div>
);
}

export default App;

