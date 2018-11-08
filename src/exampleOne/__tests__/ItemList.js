// So you can use JSX (which transpiles down to React.createElement):
import React from 'react'

// So you can render the component for testing:
import ReactDOM from 'react-dom'

// So you can create a react element for the component you're testing:
import ItemList from '../ItemList'

test('renders "no items" when no items are given', () => {
//   Create a "container" to render your component into (💰 use document.createElement('div'))
  const container = document.createElement('div');
//   Render your component (💰 use ReactDOM.render(JSX, container))
  ReactDOM.render(<ItemList items={[]} />, container)
//   Make your assertion(s) on the textContent of the container (💰 expect's toMatch function might be what you want 
//   for example: `expect('some text content').toMatch('text')`)
  expect(container.textContent).toMatch('no items');
});

test('renders the items given', () => {
  const container = document.createElement('div');
  ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']} />, container);
  expect(container.textContent).toMatch('apple');
  expect(container.textContent).toMatch('orange');
  expect(container.textContent).toMatch('pear');
});
