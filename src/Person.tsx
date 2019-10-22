import React from 'react';

export interface IHumain {
  nom: string;
  age: number;
  unEnfant: IHumain | undefined;
  unDeuxiemeEnfant?: IHumain;
  desEnfants: IHumain[];
}

interface IPersonProps {
  person: IHumain
}

export default class Person extends React.Component<IPersonProps> {

  public getNomEnfant(): string {
    return this.props.person.unEnfant ?
      this.props.person.unEnfant.nom :
      ''
  }

  public render(): JSX.Element {
    return (
      <div>hello world {this.props.person.nom} qui {this.props.person.age} ans et qui a pour enfant {this.getNomEnfant()}
        <div>
          {this.props.person.nom} a d'autres enfants : {this.props.person.desEnfants.map((enfant: IHumain) => enfant.nom + ', ')}
        </div>
        <br /><br />
      </div>
    )
  }

}
