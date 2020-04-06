//  Funcionalidad en data
export const showAllData = poke => `
    <p class="namePok"> ${poke.name}</p>
    <section id=firstRow>
      <div class="imgCont">
        <span class="circle">${poke.num}</span>
        <img src="${poke.img}" alt="pokemonImage">
      </div>
      <div id="s2info" class="infoCont">
                <p>Type:<span>${poke.type}</span></p>
                <p>Weakness:<span>${poke.weaknesses}</span></p>
                <p>Resistance:<br><span>${poke.resistant}</span></p>
      </div>
    </section>
      <div id="hW" class="infoCont">
        <p>Height:<span>${poke.size.height}</span></p>
        <p>Weight:<span>${poke.size.weight}</span></p>
        <p>Base Attack:<span>${poke.stats['base-attack']}</span></p>
      </div>
      <p id="about" class="infoCont">${poke.about}</p>
    `;
// Muestra solo un poco
export const showInfo = data => `
  <div class="imgCont" >
      <span class="circle">${data.num}</span>
      <img class="${data.name}" src="${data.img}" alt="pokemonImage">
      <span class="${data.name}"> ${data.name}</span>
  </div>
  `;
// Buscador
export const searcher = (data, value) => {
  let info = '';
  data.forEach((poke) => {
    if (value === poke.name || value === poke.num) {
      info = showAllData(poke);
    }
  });
  if (info) {
    return info;
  }
  return 'Invalid Name';
};
// Ordena Alfabeticamente
export const orderBy = (poke, order) => {
  let arrSort = [];
  arrSort = poke.sort((a, b) => {
    if (order === 'asc') {
      // eslint-disable-next-line no-nested-ternary
      return (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0);
    }
    /* if (order === 'asc') {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    } */
    if (order === 'desc') {
      // eslint-disable-next-line no-nested-ternary
      return (a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0);
    }
    //  numero ascendente
    if (order === 'numUp') { return (a.num - b.num); }
    // numero descendente
    return (b.num - a.num);
    /*     if (order === 'numDown') {
      if (a.num > b.num) {
        return -1;
      }
      if (a.num < b.num) {
        return 1;
      }
      return 0;
    } */
  });
  return arrSort;
};


// Filtra por tipo
export const typeFilter = (poke, tipo) => {
  // eslint-disable-next-line no-shadow
  const arrFilt = poke.filter(poke => poke.type.includes(tipo)); // retorna un boolean
  // console.log(arrFilt);
  return arrFilt;
};
//  Cálculo
/* export const candyCalculator = (param1, param2) => {
  const resta = param1 - param2;
  return resta;
}; */
export const showInfoCalc = (pokes, inputName, inputNum) => {
  let candyCalc = '';
  const nameFilt = pokes.filter(pok => inputName === pok.name);
  if (nameFilt.length === 0) {
    return 'Invalid Name';
  }
  if ((nameFilt[0].evolution['next-evolution']) === undefined) {
    return 'El pokemon ya tuvo todas sus evoluciones';
  }
  {
    const nextEvolution = nameFilt[0].evolution['next-evolution'][0];
    const searchEvolution = pokes.filter(x => nextEvolution.name === x.name);
    const imgEvolution = searchEvolution[0].img;
    candyCalc = `
      <div id="candyCalc">
        <div id="contImg">
          <img src="${imgEvolution}" alt="pokemonImage">
        </div>
        <div id="contCandyCost">
          <p class="contW"> You need <span id="candyCost">${(nextEvolution['candy-cost'] - inputNum)}</span> Candies </p>
        </div>
      </div>
      <span id="nameEvolution">Next Evolution: ${nextEvolution.name}</span>
      `;
    return candyCalc;
  }
};
