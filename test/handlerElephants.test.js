const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('sem parâmetros, retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('o parametro não é uma string, retorna `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('o parametro é uma string, retorna o valor do parâmetro', () => {
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ]);
  });
  it('o parâmetro é `count`, `names` ou `averageAge`, retorna o valor do parâmetro', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('o parametro não é uma funcionalidade, retorna null', () => {
    expect(handlerElephants('humor')).toEqual(null);
  });
});
