/* import { typeFilter } from '../src/data';
 */

/*
describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('returns `typeFilter`', () => {
    expect(typeFilter([
      {
        'num': '001',
        'name': 'bulbasaur',
        'type': [
          'grass',
          'poison',
        ],
      },
      {
        'num': '074',
        'name': 'geodude',
        'type': [
          'rock',
          'ground',
        ],
      },
      {
        'num': '137',
        'name': 'porygon',
        'type': [
          'normal',
        ],
      }], 'type', 'normal')).toStrickEqual([
      {
        'num': '137',
        'name': 'porygon',
        'type': [
          'normal',
        ],
      },
    ]);
  });
});
 */
/* const input = [{
        'num': '001',
        'name': 'bulbasaur',
        'type': [
          'grass',
          'poison'
        ],
      },
      {
        'num': '074',
        'name': 'geodude',
        'type': [
          'rock',
          'ground'
        ],
      },
      {
        'num': '137',
        'name': 'porygon',
        'type': [
          'normal'
        ],
      }
];

const output1 = [{
    'num': '137',
    'name': 'porygon',
    'type': [
      'normal'
    ],
}];

describe('Filtra pokemones por tipo', () => {
    it('Debería retornar a los pokemones que sean del respectivo tipo', () => {
      expect(typeFilter(input, 'normal')).toEqual(output1);
    });
  });
 */
// otro intento

/* describe('filtrar', () => {
  const input = [{
    name: 'bulbasaur',
    type: [
      'grass',
      'poison'],
  },
  {
    name: 'geodude',
    type: [
      'rock',
      'ground'],
  },
  {
    name: 'porygon',
    type: [
      'normal'],
  }];
  const output1 = [{
    name: 'porygon',
    type: [
      'normal'],
  }];
  test('Realizamos el filtrado ', () => {
    expect(typeFilter(input, 'normal')).toBe(output1);
  });
});
 */