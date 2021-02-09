import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    errorMessage: '',
    inputLebel: 'Add Task',
  };

  error = (message) => {
    this.setState({
      errorMessage: message,
      error: true,
      inputLebel: "ERROR",

    })
  }

  onCleanInput = () => {
    this.setState({
      inputValue: ''
    });

    this.props.onClickAdd(this.state.inputValue);
  }



  render() {
    const { onClickAdd, items } = this.props;

    return (
      <div className={styles.wrap}>
        <TextField
          error={this.state.error}
          id="filled-password-input"
          helperText={this.state.errorMessage}
          label={this.state.inputLebel}
          color="secondary"
          fullWidth
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
        />
        <div className={styles.wrap_button}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              let check = false;

              items.forEach((items) => {
                if (this.state.inputValue === items.value) {
                  check = true;
                }
              });

              if (this.state.inputValue !== '' && !check) {
                onClickAdd(this.state.inputValue);
                this.setState({
                  error: false,
                  inputLebel: 'Add Task',
                  inputValue: '',
                  errorMessage: ''
                });

              } else if (this.state.inputValue === '') {
                this.error("You can't add an empty field")
              } else if (check) {
                this.error("Such a task already exists");
                this.setState({
                  inputValue: ''
                });
              }
            }}
          >
            ADD
              </Button>
        </div>
      </div >
    )
  }
}

export default InputItem;