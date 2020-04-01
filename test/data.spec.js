import {
  typeFilter, orderBy, candyCalculator, searcher, showAllData,
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

describe('typeFilter', () => {
  it('typeFiler is a function', () => {
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

describe('searcher', () => {
  it('is a function', () => {
    expect(typeof searcher).toBe('function');
  });
/*   it('Debería retornar los datos del pokemon ingresado', () => {
    expect(searcher('porygon')).toEqual(output1);
  }); */
});

describe('showAllData', () => {
  it('is a function', () => {
    expect(typeof showAllData).toBe('function');
  });
});
