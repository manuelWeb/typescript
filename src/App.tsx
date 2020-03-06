import React from 'react';
import Person, { IHumain } from './Person';
import Famille from './Famille'
import './App.css';
import EvntDivInputPropagation from './EvntDivInputPropagation'
import Ref from './Ref'

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
      <br />
      <br />
      <Famille />
      {'-'.repeat(80)}
      <EvntDivInputPropagation />
      {'-'.repeat(80)}
      <Ref />
    </div>
  );
}

export default App;
