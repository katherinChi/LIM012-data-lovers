//  DOM
//  {} cuando solo llamas a una funcion determinada no a toda la hoja
import data from './data/pokemon/pokemon.js';
import {
  searcher, showInfo, orderBy, typeFilter, showInfoCalc,
  // showAllData,
} from './data.js';

const pokemones = data.pokemon;
const inputSearchElem = document.getElementById('inputSearch');
const searchIconElem = document.getElementById('searchIcon');
const screen1Elem = document.getElementById('screen1');
const screen2Elem = document.getElementById('screen2');
const screen3Elem = document.getElementById('screen3');
const screen4Elem = document.getElementById('screen4');
const screen5Elem = document.getElementById('screen5');
const select1Elem = document.getElementById('selectOrder');
const select2Elem = document.getElementById('selectType');
const s3dataElem = document.getElementById('s3data');
const s5dataElem = document.getElementById('s5data');
// const s3dataElem = document.getElementById('s3data');
// document.getElementsByTagName(select[]);
const mHome = document.querySelector('#home');
const mPokedex = document.querySelector('#pokedex');
const mCompare = document.querySelector('#compare');
const mCandy = document.querySelector('#candiesCalc');
// Segunda Pantalla -Buscador
searchIconElem.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'block';
  const inputVal = inputSearchElem.value;
  screen2Elem.innerHTML = `${searcher(pokemones, inputVal)}`;
});
// Menu boton Home
mHome.addEventListener('click', () => {
  screen1Elem.style.display = 'flex';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  screen4Elem.style.display = 'none';
  screen5Elem.style.display = 'none';
  inputSearchElem.value = '';
});
// Muestra por default Pok
mPokedex.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen5Elem.style.display = 'none';
  screen3Elem.style.display = 'flex';
  s3dataElem.innerHTML = `${pokemones.map(showInfo).join('')}`;
});
// Muestra Info al tocar al pokemon
s3dataElem.addEventListener('click', (e) => {
  const numClick = e.target.id;
  // const clicked = pokemones.find(poke => poke.num === numClick);
  screen2Elem.style.display = 'block';
  // visibility = 'visible';
  screen3Elem.style.display = 'none';
  screen2Elem.innerHTML = `${searcher(pokemones, numClick)}`;
});
// Boton Select OrderBy
select1Elem.addEventListener('change', () => {
  const select1Value = select1Elem.value;
  s3dataElem.innerHTML = `${(orderBy(pokemones, select1Value)).map(showInfo).join('')}`;
});
// Type Filter
select2Elem.addEventListener('change', () => {
  const select2Value = select2Elem.value.toLowerCase();
  s3dataElem.innerHTML = `${(typeFilter(pokemones, select2Value)).map(showInfo).join('')}`;
});
// Compare
const poke1 = document.getElementsByName('comparePoke')[0];
const poke2 = document.getElementsByName('comparePoke')[1];
const searchCompEl = document.querySelector('#searchIconC');
// const inputCompEl = document.querySelectorAll('input');
const inputCompEl = document.getElementsByName('inputComp')[0];
const inputCompEl2 = document.getElementsByName('inputComp')[1];

mCompare.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  screen5Elem.style.display = 'none';
  screen4Elem.style.display = 'flex';
  // screen4Elem.innerHTML = `${showInfo(pokemones, inputSearchIconCElem)}`;
});
searchCompEl.addEventListener('click', () => {
  const inVa = inputCompEl.value;
  const inVal = inputCompEl2.value;
  // console.log(inVa);
  poke1.innerHTML = `jejeje ${searcher(pokemones, inVa)}`;
  poke2.innerHTML = `jejeje ${searcher(pokemones, inVal)}`;
});


const calcular = document.getElementById('btn-calc');
const inputNamePoke = document.getElementById('inputSearchCalc');
const numCandies = document.getElementById('inputNumCalc');
/* let candiesHTML = ""; */
mCandy.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  screen4Elem.style.display = 'none';
  s5dataElem.style.display = 'none';
  screen5Elem.style.display = 'flex';
  inputNamePoke.value = '';
  numCandies.value = '';
});

calcular.addEventListener('click', () => {
  s5dataElem.style.display = 'flex';
  const inputNumCandy = numCandies.value;
  const inputNameEl = inputNamePoke.value.toLowerCase();
  s5dataElem.innerHTML = `${showInfoCalc(pokemones, inputNameEl, inputNumCandy)}`;
});
