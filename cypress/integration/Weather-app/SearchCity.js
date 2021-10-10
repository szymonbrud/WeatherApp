describe('SearchCityWeather', () => {
  beforeEach(() => {
    cy.intercept(`https://api.openweathermap.org/data/2.5/*`, {
      fixture: 'weather',
    }).as('weather');
  });
  it('SearchCityWeather', () => {
    cy.visit('http://localhost:3000');

    cy.get('[placeholder="city"]').type(`Kraków`);
    cy.contains('bezchmurnie');
  });
});
