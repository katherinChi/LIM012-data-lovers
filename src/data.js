//  Funcionalidad en data
//  muestro la info
export const showInfo = (pokes, input) => {
  const inputVal = input.value;
  let info = '';
  pokes.forEach((poke) => {
    if (inputVal === poke.name) {
      info = `
              <p class="namePok"> ${poke.name}</p>
              <section id=firstRow>
                <div id="imgCont">
                    <span class="circle ft">${poke.num}</span>
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
               </section>
              `;
    }
  });
  if (info) {
    return info;
  }
  return 'El nombre ingresado no es correcto';
};
export const showAllData = (data) => {
  return `
        <div id="imgCont" class="item">
            <span class="circle ft">${data.num}</span>
            <img src="${data.img}" alt="pokemonImage">
            <span> ${data.name}</span>
        </div>
        `;
};
// Ordena Alfabeticamente
export const orderBy = (poke, order) => {
  let arrSort = [];
  arrSort = poke.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    const numA = a.num;
    const numB = b.num;
    if (order === 'asc') {
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    }
    /* return (nameA > nameB) ? 1 : ((nameA < nameB) ? -1 : 0); */
    if (order === 'desc') {
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    }
    //  numero descendente
    if (order === 'numDown') {
      if (numA > numB) {
        return -1;
      }
      if (numA < numB) {
        return 1;
      }
      return 0;
    }
    // numero ascendente
    if (order === 'numUp') {
      if (numA < numB) {
        return -1;
      }
      if (numA > numB) {
        return 1;
      }
      return 0;
    }
    return arrSort; /* el error del eslint se soluciona y no veo cambios en el front//verificar!! */
  });
  return arrSort;
};
// Filtra por tipo
export const typeFilter = (poke, tipo) => {
  // eslint-disable-next-line no-shadow
  const arrFilt = poke.filter(poke => poke.type.includes(tipo)); // retorna un boolean
  return arrFilt;
};

//  Cálculo

const candyCalculator = (param1, param2) => {
  const resta = param1 - param2;
  return resta;
};

export const showInfoCalc = (pokes, inputName, inputNum) => {
  const inputNamePoke = inputName.value;
  const inputNumCandy = inputNum.value;
  let candyCalc = '';
  const nameFilt = pokes.filter(pok => inputNamePoke === pok.name);
  /* console.log(nameFilt.length); */
  if (nameFilt.length === 0) {
    return 'Invalid name';
  }
  {
    const candyCost = nameFilt[0].evolution['next-evolution'][0]['candy-cost'];
    const nameEvolution = nameFilt[0].evolution['next-evolution'][0].name;
    const searchEvolution = pokes.filter(x => nameEvolution === x.name);
    const imgEvolution = searchEvolution[0].img;
    candyCalc = `
      <div id="candyCalc">
        <div id="contImg">
          <img src="${imgEvolution}" alt="pokemonImage">
        </div>
        <span id="nombreEvolution">${nameEvolution}</span>
        <span id="candyCost"> You need ${candyCalculator(candyCost, inputNumCandy)} candies</span>
      </div>`;

    return candyCalc;
  }
};
