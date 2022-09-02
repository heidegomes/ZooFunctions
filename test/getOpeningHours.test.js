const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem parâmetros, retorna dia e horário de funcionamento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Se passar os argumentos corretos deve retornar se o zoológico está aberto ou fechado', () => {
    const expectedClose = 'The zoo is closed';
    const expectedOpen = 'The zoo is open';
    expect(getOpeningHours('Monday', '9:00-AM')).toEqual(expectedClose);
    expect(getOpeningHours('Tuesday', '9:00-AM')).toEqual(expectedOpen);
    expect(getOpeningHours('Wednesday', '9:00-PM')).toEqual(expectedClose);
    expect(getOpeningHours('Wednesday', '9:00-PM')).toEqual(expectedClose);
  });
  it('Se passar os argumentos incorretos deve lançar uma exceção', () => {
    expect(getOpeningHours('Thu', '9:00-AM')).toThrowError('dayError');
    expect(getOpeningHours('Friday', '9:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
    // expect(getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});
