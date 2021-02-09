import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import 'fontsource-roboto';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    fetchReposRequest: [],
    fetchReposFailure: false,
    userAvatar: [],
    error: ''
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'DianaZaharova'
    }).then(({ data }) => {
      this.setState({
        fetchReposRequest: data,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        fetchReposFailure: true,
        isLoading: false,
        error: 'Ошибка:' + error.name + ' ' + error.message
      })

    });

    octokit.users.getByUsername({
      username: 'DianaZaharova',
    }).then(response => {
      this.setState({
        userAvatar: response.data.avatar_url,
        name: response.data.login,
        bio: response.data.bio,
        gitUrl: response.data.html_url
      })
    }).catch((err) => { console.log(err) });
  }


  render() {
    const { isLoading, fetchReposRequest, name, userAvatar, fetchReposFailure, error, bio, gitUrl } = this.state;
    return (
      <CardContent>
        {fetchReposFailure && <div>{error}</div>}
        {!fetchReposFailure &&
          <div className={styles.wrap}>
            <h2 className={styles.subtitle}>My name is {name}</h2>
            <h3 className={styles.title}>{bio}</h3>
            <a className={styles.github_link} href={gitUrl} src=" gitHub link">Link on my GitHub</a>
            <img className={styles.avatar} src={userAvatar} alt="Аватар" />
            <h1 className={styles.title}>{isLoading ? <CircularProgress color="secondary" /> : 'My repositories'}</h1>
            {!isLoading && <ol>
              {fetchReposRequest.map(repo => (<li className={styles.list} key={repo.id}>
                <div className={styles.name}>{repo.name}</div>
                <div className={styles.description}>{repo.description}</div>
                <a className={styles.link} href={repo.html_url}>Link on GitHub</a>
                <a className={styles.link} href={repo.homepage}>Link on project</a>
              </li>))}
            </ol>}
            <h4 className={styles.author}>Developed by WebHeroSchool</h4>
          </div>}
      </CardContent>
    );
  }
}

export default About;