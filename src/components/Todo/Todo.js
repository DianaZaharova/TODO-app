import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import 'fontsource-roboto';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';


const Todo = () => {
  const state = {
    items: [
      {
        value: 'Task',
        isDone: false,
        id: 0
      }],
    count: 1,
    counter: 1,
    filter: 'all'
  }

  const [items, setItems] = useState(state.items);
  const [count, setCount] = useState(state.count);
  const [filter, setFilter] = useState(state.filter);
  const [counter, setCounter] = useState(state.counter);


  const onClickDone = id => {
    const newItemListDone = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !newItem.isDone;
      }
      return newItem;
    });
    setItems(newItemListDone);
  };

  const onClickDelete = id => {
    const deleteItems = items.filter(item => item.id !== id);
    setItems(deleteItems);
    // setCount((count) => count - 1);
    setCounter((counter) => counter - 1);
  };

  const onClickAdd = value => {
    const newItemListAdd = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];

    setItems(newItemListAdd);
    setCount((count) => count + 1);
    setCounter((counter) => counter + 1);
  };

  const itemFilter = () => {
    if (filter === 'active') {
      return items.filter(item => !item.isDone);
    } if (filter === 'done') {
      return items.filter(item => item.isDone);
    }
    return items;

  };


  const onClickFilter = (name) => {
    setFilter(name)
  };

  return (
    <div className={styles.container}>
      <CardContent>
        <h1 className={styles.title}>Todos</h1>
        <InputItem
          items={items}
          onClickAdd={onClickAdd} />
        <ItemList
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          itemFilter={itemFilter} />
        <Footer
          count={count}
          counter={counter}
          onClickFilter={onClickFilter}
        />
      </CardContent>
    </div >
  );
}


Todo.propTypes = {
  isDone: PropTypes.bool,
  id: PropTypes.number
}

Todo.defaultProps = {
  isDone: false
};

export default Todo;