import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import 'fontsource-roboto';
import styles from './Contacts.module.css';
import telegram from './icons/tg.png'
import email from './icons/email.png'

class Contacts extends React.Component {
  render() {
    return (
      <CardContent>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>My Contacts</h1>
          <div>
            <div className={styles.wrap}>
              <img src={email} alt="email" className={styles.icon}></img>
              <a className={styles.link} href="mailto:Dysua1999@mail.ru">Dysua1999@mail.ru</a>
            </div>
            <div className={styles.wrap}>
              <img src={telegram} alt="telegram" className={styles.icon}></img>
              <a className={styles.link} href="https://t.me/DianaZaharova">Telegram</a>
            </div>
          </div>
        </div>
      </CardContent>
    )
  }
};

export default Contacts;