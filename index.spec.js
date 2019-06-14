const { expect } = require('chai');
const { redoMenu } = require('./index');

describe('redoMenu', () => {
  it('returns an empty array when passed an empty array', () => {
    //
    const input = [];
    const actual = redoMenu(input);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it('returns an array with the course changed to recommended_course when passed a menu array', () => {
    //
    const menu = [
      {
        id: '2',
        course: 'main',
        dish: 'dahl',
        special: true
      }
    ];
    const actual = redoMenu(menu);
    const expected = [
      {
        id: '2',
        recommended_course: 'main',
        dish: 'dahl',
        special: true
      }
    ];
    expect(actual).to.eql(expected);
  });
  it('returns a menu array with the chef added', () => {
    //
    const menu = [
      {
        id: '2',
        course: 'main',
        dish: 'dahl',
        special: true
      }
    ];
    const chef = 'jonny';
    const actual = redoMenu(menu, chef);
    const expected = [
      {
        id: '2',
        recommended_course: 'main',
        dish: 'dahl',
        special: true,
        chef: 'jonny'
      }
    ];
    expect(actual).to.eql(expected);
  });
});
