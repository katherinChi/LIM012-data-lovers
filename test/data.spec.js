import {
  typeFilter, orderBy, candyCalculator, searcher, showAllData, showInfo, showInfoCalc,
} from '../src/data';

const input = [{
  num: 1,
  name: 'bulbasaur',
  type: [
    'grass',
    'poison'],
},
{
  num: 74,
  name: 'geodude',
  type: [
    'rock',
    'ground'],
},
{
  num: 137,
  name: 'porygon',
  type: [
    'normal'],
}];
const inputDesorder = [{
  num: 74,
  name: 'geodude',
  type: [
    'rock',
    'ground'],
},
{
  num: 1,
  name: 'bulbasaur',
  type: [
    'grass',
    'poison'],
},
{
  num: 137,
  name: 'porygon',
  type: [
    'normal'],
}];
const output1 = [{
  num: 137,
  name: 'porygon',
  type: [
    'normal'],
}];
const outputOrderDesc = [{
  num: 137,
  name: 'porygon',
  type: [
    'normal'],
},
{
  num: 74,
  name: 'geodude',
  type: [
    'rock',
    'ground'],
},
{
  num: 1,
  name: 'bulbasaur',
  type: [
    'grass',
    'poison'],
}];
const dato = {
  pokemon:
  [{
    num: '001',
    name: 'bulbasaur',
    about: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
    size: {
      height: '0.71 m',
      weight: '6.9 kg',
    },
    type: [
      'grass',
      'poison',
    ],
    stats: {
      'base-attack': '118',
      'base-defense': '111',
    },
    resistant: [
      'water',
      'electric',
      'grass',
      'fighting',
      'fairy',
    ],
    weaknesses: [
      'fire',
      'ice',
      'flying',
      'psychic',
    ],
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [{
        num: '002',
        name: 'ivysaur',
        'candy-cost': '25',
        'next-evolution': [{
          num: '003',
          name: 'venusaur',
          'candy-cost': '100',
        }],
      }],
    },
  },
  {
    num: '014',
    name: 'kakuna',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: 'Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.',
    img: 'https://www.serebii.net/pokemongo/pokemon/014.png',
    size: {
      height: '0.61 m',
      weight: '10.0 kg',
    },
    type: [
      'bug',
      'poison',
    ],
    stats: {
      'base-attack': '46',
      'base-defense': '75',
    },
  },
  ],
};
const inputShow = dato.pokemon[0];
const outputShowInfo = `
  <div class="imgCont">
      <span class="circle">001</span>
      <img src="https://www.serebii.net/pokemongo/pokemon/001.png" alt="pokemonImage">
      <span> bulbasaur</span>
      <p id="001" class="more">More</p>
  </div>
  `;
const outputShowAll = `
    <p class="namePok"> bulbasaur</p>
    <section id=firstRow>
      <div class="imgCont">
        <span class="circle">001</span>
        <img src="https://www.serebii.net/pokemongo/pokemon/001.png" alt="pokemonImage">
      </div>
      <div id="s2info" class="infoCont">
                <p>Type:<span>grass,poison</span></p>
                <p>Weakness:<span>fire,ice,flying,psychic</span></p>
                <p>Resistance:<br><span>water,electric,grass,fighting,fairy</span></p>
      </div>
    </section>
      <div id="hW" class="infoCont">
        <p>Height:<span>0.71 m</span></p>
        <p>Weight:<span>6.9 kg</span></p>
        <p>Base Attack:<span>118</span></p>
      </div>
      <p id="about" class="infoCont">Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
    `;
const outputShowCan = `
  <div id="candyCalc">
    <div id="contImg">
      <img src="https://www.serebii.net/pokemongo/pokemon/002.png" alt="pokemonImage">
    </div>
    <div id="contCandyCost">
      <p class="contW"> You need </p>
      <span id="candyCost" class="contW">17</span>
      <p class="contW"> Candies </p>
    </div>
  </div>
  <span id="nameEvolution">Next Evolution:Ivysaur</span>
  `;

describe('searcher', () => {
  it('is a function', () => {
    expect(typeof searcher).toBe('function');
  });
  it('Debería retornar los datos del pokemon ingresado', () => {
    expect(searcher(inputShow, 'bulbasaur')).toEqual(outputShowAll);
  });
});

describe('showInfo', () => {
  it('is a function', () => {
    expect(typeof showInfo).toBe('function');
  });
  it('Muestra info', () => {
    expect(showInfo(inputShow)).toEqual(outputShowInfo);
  });
});

describe('typeFilter', () => {
  it('typeFilter is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('Debe filtrar por tipo', () => {
    expect(typeFilter(input, 'normal')).toEqual(output1);
  });
});

describe('orderBy', () => {
  it('orderBy is a function', () => {
    expect(typeof orderBy).toBe('function');
  });
  it('Debe ordenar los nombres de forma ascendente', () => {
    expect(orderBy(inputDesorder, 'asc')).toEqual(input);
  });
  it('Debe ordenar los nombres de forma descendente', () => {
    expect(orderBy(inputDesorder, 'desc')).toEqual(outputOrderDesc);
  });
  it('Debe ordenar los números de forma ascendente', () => {
    expect(orderBy(inputDesorder, 'numUp')).toEqual(input);
  });
  it('Debe ordenar los números de forma descendente', () => {
    expect(orderBy(inputDesorder, 'numDown')).toEqual(inputDesorder);
  });
});

describe('candyCalculator', () => {
  it('candyCalculator ir a function', () => {
    expect(typeof candyCalculator).toBe('function');
  });
  it('Debe restar dos parametros', () => {
    expect(candyCalculator(50, 20)).toEqual(30);
  });
});

describe('showAllData', () => {
  it('is a function', () => {
    expect(typeof showAllData).toBe('function');
  });
  it('Muestra todo', () => {
    expect(showAllData(inputShow)).toEqual(outputShowAll);
  });
});

describe('showInfoCalc', () => {
  it('Is a function', () => {
    expect(typeof showInfoCalc).toBe('function');
  });
  it('Muestra los candies', () => {
    expect(showInfoCalc(inputShow, 'bulbasaur', 8)).toEqual(outputShowCan);
  });
});
