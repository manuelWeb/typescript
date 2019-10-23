import React from 'react';
import { famille } from './familleObj'

export interface IFamille {
  famille?: IFamille
  name?: string;
  father?: {}
}

export default class Famille extends React.Component<IFamille> {
  private f1Length = famille.famil1.enfants.length
  showname(arg: any): string {
    return (arg && arg.name) || 'Pas de nom?'
  }
  public render(): JSX.Element {
    return (
      <div className="famille">
        Olã famille {this.showname(famille.famil1)}
        <br />
        Donc le père {famille.famil1.father.firstName} {famille.famil1.name} {famille.famil1.father.age} ans <br />
        à {(this.f1Length > 1 && 'plusieurs') || 'un seul'} enfants :
        {famille.famil1.enfants.map((child, idx) =>
          <span key={idx}> {child.name}{idx + 1 === this.f1Length && ` (${this.f1Length}).`}{idx + 1 < this.f1Length - 1 ? ',' : idx + 1 === this.f1Length - 1 ? ' et' : null}
          </span>)}
        <br />
        {/* (false && true) || true : */}
        {/* https://medium.com/hackernoon/conditional-javascript-for-experts-d2aa456ef67c */}

      </div>
    )
  }
}
