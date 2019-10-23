// import IFamille from './Famille'
const Nick = { name: 'Nick', age: 14 }
const Estelle = { name: 'Estelle', age: 10 }
const Mickey = { name: 'Mickey', age: 28 }
// eslint-disable-next-line
const Mini = { name: 'Mini', age: 28 }

const famil1 = {
  name: 'Doe',
  // enfants: [Nick]
  // enfants: [Nick, Estelle, Mickey]
  enfants: [Nick, Estelle, Mickey, Mini]
}

export const famille = {
  famil1: {
    father: { firstName: 'John', age: 48 },
    name: famil1.name,
    enfants: famil1.enfants
  }
}





