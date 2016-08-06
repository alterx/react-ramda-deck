import React from 'react';
import { compose, prop, map } from 'ramda';

const WrapChildren = (child) => ({children: child});

const Container = compose(({children}) => (<div>
  <h1>I'm a list</h1>
  {children}
</div>), WrapChildren);

const List = compose(({children}) => (<ul>{children}</ul>), WrapChildren);

const ListItem = ({ id, text }) => (<li key={id}>
  <span>{text}</span>
</li>);

const CurriedList = compose(Container, List, map(ListItem), prop('items'));

const TodoList = ({items}) => {
  return <CurriedList items={items} />;
};

export default TodoList;
