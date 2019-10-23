import React from 'react';
import { famille } from './familleObj'

export interface IFamille {
  famille?: IFamille
  name?: string;
}

export default class Famille extends React.Component<IFamille> {
  f1Length = famille.famil1.enfants.length
  public render(): JSX.Element {
    return (
      <div className="famille">
        Olã famille {famille ? famille.famil1.name : 'Pas de nom?'}
        <br />
        Donc le père {famille.famil1.father.firstName} {famille.famil1.name} {famille.famil1.father.age} ans <br />
        à {this.f1Length} enfants :
        {famille.famil1.enfants.map((child, idx) =>
          <span key={idx}> {child.name}{idx + 1 === this.f1Length && '.'}{idx + 1 < this.f1Length - 1 ? ',' : idx + 1 === this.f1Length - 1 ? ' et' : null}
          </span>)}
        <br />
        {/* https://medium.com/hackernoon/conditional-javascript-for-experts-d2aa456ef67c */}
        {(this.f1Length > 1 && 'Plusieurs enfants') || 'Un seul enfant'}
      </div>
    )
  }
}
