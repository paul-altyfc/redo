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
        id: 2,
        recommended_course: 'main',
        dish: 'dahl',
        special: true
      }
    ];
    expect(actual).to.eql(expected);
  });
  it('returns a menu array with the chef added and id changed to a number', () => {
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
        id: 2,
        recommended_course: 'main',
        dish: 'dahl',
        special: true,
        chef: 'jonny'
      }
    ];
    expect(actual).to.eql(expected);
  });
  it('returns a menu array with the dietary requirement added as a key', () => {
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
    const diet_req = 'gluten free';
    const actual = redoMenu(menu, chef, diet_req);
    const expected = [
      {
        id: 2,
        recommended_course: 'main',
        dish: 'dahl',
        special: true,
        chef: 'jonny',
        'gluten free': true
      }
    ];
    expect(actual).to.eql(expected);
  });
  it('returns a new menu array when passed multiple menus', () => {
    //
    const menu = [
      { id: '1', course: 'starter', dish: 'salad' },
      { id: '2', course: 'main', dish: 'spaghetti', special: true }
    ];

    const chef = 'izzy';

    const diet_req = 'nut free';
    const actual = redoMenu(menu, chef, diet_req);
    const expected = [
      {
        id: 1,
        recommended_course: 'starter',
        dish: 'salad',
        chef: 'izzy',
        'nut free': true
      },
      {
        id: 2,
        recommended_course: 'main',
        dish: 'spaghetti',
        special: true,
        chef: 'izzy',
        'nut free': true
      }
    ];
    expect(actual).to.eql(expected);
  });
});
