import data from './data/pokemon/pokemon.js';
import {
  searcher, showInfo, orderBy, typeFilter, showInfoCalc,
} from './data.js';

const pokemones = data.pokemon;
// const pokemonese=Object.values(data);
const inputSearchElem = document.getElementById('inputSearch');
const searchIconElem = document.getElementById('searchIcon');
const screen1Elem = document.getElementById('screen1');
const screen2Elem = document.getElementById('screen2');
const screen3Elem = document.getElementById('screen3');
const screen4Elem = document.getElementById('screen4');
const select1Elem = document.getElementById('selectOrder');
const select2Elem = document.getElementById('selectType');
const s3dataElem = document.getElementById('s3data');
const s4dataElem = document.getElementById('s4data');
// document.getElementsByTagName(select[]);
const mHome = document.querySelector('#home');
const mPokedex = document.querySelector('#pokedex');
const mCandy = document.querySelector('#candiesCalc');
const aqui = document.getElementById('aqui');
const modal = document.createElement('div');
const text = document.createTextNode('soy el nodo');
modal.appendChild(text);
// document.body.appendChild(modal);
// aqui.appendChild(screen2Elem);
const imgCont = document.querySelectorAll('.imgCont');
// Segunda Pantalla -Buscador
searchIconElem.addEventListener('click', () => {
  screen1Elem.classList.add('inactive');
  screen2Elem.classList.remove('inactive');
  const inputVal = inputSearchElem.value.toLowerCase();
  screen2Elem.innerHTML = `${searcher(pokemones, inputVal)}`;
});
inputSearchElem.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    screen1Elem.style.display = 'none';
    screen2Elem.style.display = 'block';
    const inputVal = inputSearchElem.value.toLowerCase();
    screen2Elem.innerHTML = `${searcher(pokemones, inputVal)}`;
  }
});

// Menu boton Home
mHome.addEventListener('click', () => {
  screen1Elem.style.display = 'flex';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  screen4Elem.style.display = 'none';
  inputSearchElem.value = '';
});
// Muestra por default Pok
mPokedex.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen4Elem.style.display = 'none';
  screen3Elem.style.display = 'flex';
  s3dataElem.innerHTML = `${pokemones.map(showInfo).join('')}`;
});
// Muestra Info al tocar al pokemon
s3dataElem.addEventListener('click', (e) => {
  const numClick = e.target.className;
  // const clicked = pokemones.find(poke => poke.num === numClick);
  screen2Elem.style.display = 'block';
  // screen2Elem.style.visibility = 'visible';
  screen3Elem.style.display = 'none';
  screen2Elem.innerHTML = `${searcher(pokemones, numClick)}`;
});

//
const click = document.querySelector('#click');
click.addEventListener('click', () => {
  const f = document.createElement('div');
  f.setAttribute('class', 'container');
  const mo = document.createElement('p');
  mo.setAttribute('class', 'mo');
  const t = document.createTextNode('hola');
 
  mo.appendChild(t);
  f.appendChild(mo);
  document.body.appendChild(f);
  return f;
})





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
// Candies
const calcular = document.getElementById('btn-calc');
const inputNamePoke = document.getElementById('inputSearchCalc');
const numCandies = document.getElementById('inputNumCalc');
/* let candiesHTML = ""; */
mCandy.addEventListener('click', () => {
  screen1Elem.style.display = 'none';
  screen2Elem.style.display = 'none';
  screen3Elem.style.display = 'none';
  s4dataElem.style.display = 'none';
  screen4Elem.style.display = 'flex';
  inputNamePoke.value = '';
  numCandies.value = '';
});

calcular.addEventListener('click', () => {
  s4dataElem.style.display = 'flex';
  const inputNumCandy = numCandies.value;
  const inputNameEl = inputNamePoke.value.toLowerCase();
  s4dataElem.innerHTML = `${showInfoCalc(pokemones, inputNameEl, inputNumCandy)}`;
});
