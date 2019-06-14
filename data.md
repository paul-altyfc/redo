# Example data

## Example 1

#### input

```js
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
```

#### output

```js
[
  {
    id: 2,
    recommended_course: 'main',
    dish: 'dahl',
    special: true,
    chef: 'jonny',
    'gluten free': true
  }
];
```

## Example 2

#### input

```js
const menu = [
  { id: '1', course: 'starter', dish: 'salad' },
  { id: '2', course: 'main', dish: 'spaghetti', special: true }
];

const chef = 'izzy';

const diet_req = 'nut free';
```

#### output

```js
[
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
```
