import {
  searcher, showInfo, orderBy, typeFilter, showInfoCalc, showAllData,
} from '../src/data';

const outputOrder = [{
  num: 1,
  name: 'bulbasaur',
  type: [
    'grass',
    'poison'],
},
{
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
},
{
  num: 1,
  name: 'bulbasaur',
  type: [
    'grass',
    'poison'],
},
];
const outputType = [{
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
    num: '002',
    name: 'ivysaur',
    about: 'There is a bud on this Pokémons back. To support its weight, Ivysaurs legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, its a sign that the bud will bloom into a large flower soon.',
    img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
    size: {
      height: '0.99 m',
      weight: '13.0 kg',
    },
  },
  {
    num: '003',
    name: 'venusaur',
    about: "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
    size: {
      height: '2.01 m',
      weight: '100.0 kg',
    },
    evolution: {
      candy: 'bulbasaur candy',
      'prev-evolution': [{
        num: '002',
        name: 'ivysaur',
        'candy-cost': '100',
        'prev-evolution': [{
          num: '001',
          name: 'bulbasaur',
          'candy-cost': '25',
        }],
      }],
    },
  },
  ],
};
const inputShow = dato.pokemon;
const inputShowAll = dato.pokemon[0];
const outputShowInfo = `
  <div class="imgCont">
      <span class="circle">001</span>
      <img class="bulbasaur" src="https://www.serebii.net/pokemongo/pokemon/001.png" alt="pokemonImage">
      <span class="bulbasaur"> bulbasaur</span>
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
          <p class="contW"> You need <span id="candyCost">17</span> Candies </p>
        </div>
      </div>
      <span id="nameEvolution">Next Evolution: ivysaur</span>
      `;

describe('searcher', () => {
  it('is a function', () => {
    expect(typeof searcher).toBe('function');
  });
  it('Debería retornar los datos del pokemon ingresado', () => {
    expect(searcher(inputShow, 'bulbasaur')).toEqual(outputShowAll);
  });
  it('Retorna error', () => {
    expect(searcher(inputShow, 'bulbasur')).toEqual('Invalid Name');
  });
});

describe('showInfo', () => {
  it('is a function', () => {
    expect(typeof showInfo).toBe('function');
  });
  it('Muestra info', () => {
    expect(showInfo(inputShowAll)).toEqual(outputShowInfo);
  });
});

describe('typeFilter', () => {
  it('typeFilter is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('Debe filtrar por tipo', () => {
    expect(typeFilter(inputDesorder, 'normal')).toEqual(outputType);
  });
});

describe('orderBy', () => {
  it('orderBy is a function', () => {
    expect(typeof orderBy).toBe('function');
  });
  it('Debe ordenar los nombres de forma ascendente', () => {
    expect(orderBy(inputDesorder, 'asc')).toEqual(outputOrder);
  });
  it('Debe ordenar los nombres de forma descendente', () => {
    expect(orderBy(inputDesorder, 'desc')).toEqual(outputOrderDesc);
  });
  it('Debe ordenar los números de forma ascendente', () => {
    expect(orderBy(inputDesorder, 'numUp')).toEqual(outputOrder);
  });
  it('Debe ordenar los números de forma descendente', () => {
    expect(orderBy(inputDesorder, 'numDown')).toEqual(inputDesorder);
  });
});

describe('showAllData', () => {
  it('is a function', () => {
    expect(typeof showAllData).toBe('function');
  });
  it('Muestra todo', () => {
    expect(showAllData(inputShowAll)).toEqual(outputShowAll);
  });
});

describe('showInfoCalc', () => {
  it('Is a function', () => {
    expect(typeof showInfoCalc).toBe('function');
  });
  it('Muestra los candies', () => {
    expect(showInfoCalc(inputShow, 'bulbasaur', 8)).toEqual(outputShowCan);
  });
  it('Retorna Error', () => {
    expect(showInfoCalc(inputShow, 'bulbasur', 8)).toEqual('Invalid Name');
  });
  it('No evoluciona', () => {
    expect(showInfoCalc(inputShow, 'venusaur', 8)).toEqual('El pokemon ya tuvo todas sus evoluciones');
  });
});
