import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ onClickDone, onClickDelete, itemFilter }) => (
  <ul className={styles.list}>
    {itemFilter().map(item => <li key={item.id}>
      <Item
        value={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        id={item.id}
      />
    </li>)}
  </ul>
);

export default ItemList;