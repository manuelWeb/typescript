import React from 'react';
import { father, famille } from './familleObj'

export interface IFamille {
  famille?: IFamille
  name?: string;
}

export default class Famille extends React.Component<IFamille> {

  public render(): JSX.Element {
    return (
      <div className="famille">
        Olã famille {famille ? famille.name : 'Pas de nom?'}
        <br />
        Donc le père: {father.name}
      </div>
    )
  }
}
