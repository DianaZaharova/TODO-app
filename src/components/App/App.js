import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import 'fontsource-roboto';

const App = () =>
(<Router>
  <div className={styles.container} >
    <Card>
      <nav className={styles.nav}>
        <Link to='/' className={styles.link}><div className={styles.link_item}>ABOUT</div></Link>
        <Link to='/todo' className={styles.link}><div className={styles.link_item}>TODO</div></Link>
        <Link to='/contacts' className={styles.link}><div className={styles.link_item}>CONTACTS</div></Link>
      </nav>
    </Card>

    <Card>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
      <Route path='/contacts' component={Contacts} />
    </Card>
  </div >
</Router>);

export default App;
