import React from 'react';
import Person, { IHumain } from './Person';
import './App.css';

const App: React.FC = () => {
  const bob: IHumain = {
    nom: 'Bob',
    age: 3,
    unEnfant: undefined,
    desEnfants: []
  };

  const Elisa: IHumain = {
    nom: 'Elisa',
    age: 6,
    unEnfant: undefined,
    desEnfants: []
  }
  const Lucie: IHumain = {
    nom: 'Lucie',
    age: 9,
    unEnfant: undefined,
    desEnfants: []
  }

  const manu: IHumain = {
    nom: 'Manu',
    age: 44,
    unEnfant: bob,
    desEnfants: [Elisa, Lucie]
  };

  return (
    <div className="App">
      <Person person={manu} />
      <Person person={manu.unEnfant as IHumain} />
    </div>
  );
}

export default App;
