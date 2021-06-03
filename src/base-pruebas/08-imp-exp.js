// import heroes from "../data/heroes";

// console.log( owners );

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log( getHeroeById(2) );

// find?, filter
// export const getHeroesByOwner = (owner) =>
//   Heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );

const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];
