import React, { Component } from 'react';
import { Paper, TextField, Subheader, RaisedButton, FontIcon, Snackbar } from 'material-ui';

const styles = {
  title: {
    color: '#fff'
  },
  customUnderline: {
    borderColor: '#90CAF9'
  }
};

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      titleError: '',
      descError: '',
      open: false,
      message: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { id, title, description } = nextProps.selectedTask;

    if (title !== this.state.title) {
      this.state = {
        title: title,
        desc: description,
        titleError: '',
        descError: '',
        open: false,
        message: ''
      };
    }
  }

  onTitleChange(arg) {
    const { value } = arg.target;
    this.setState({
      title: value,
      titleError: '',
      open: false,
      message: ''
    });
  }

  onDescChange(arg) {
    const { value } = arg.target;
    this.setState({
      desc: value,
      descError: '',
      open: false,
      message: ''
    });
  }

  onSubmit() {
    const { title, desc } = this.state;
    if (title === '') {
      this.setState({
        titleError: 'Title required'
      });
    }
    if (desc === '') {
      this.setState({
        descError: 'Desc required'
      });
    }

    if (title !== '' && desc !== '') {
      this.setState({
        open: true,
        message: 'Task Created'
      });
      this.props.actions.createTask(title, desc);
      this.setState({
        title: '',
        desc: '',
        titleError: '',
        descError: ''
      });
    }
  }

  onUpdateSubmit() {
    const { title, desc } = this.state;
    if (title === '') {
      this.setState({
        titleError: 'Title required',
        open: false,
        message: ''
      });
    }
    if (desc === '') {
      this.setState({
        descError: 'Desc required',
        open: false,
        message: ''
      });
    }

    if (this.props.selectedTask.id !== null && title !== '' && desc !== '') {
      this.setState({
        open: true,
        message: 'Task Updated'
      });
      this.props.actions.updateTask(this.props.selectedTask.id, title, desc);
      this.props.actions.selectTask(null, '', '');
      this.setState({
        title: '',
        desc: '',
        titleError: '',
        descError: ''
      });
    }
  }


  onCancel() {
    this.setState({
      title: '',
      desc: '',
      titleError: '',
      descError: '',
      open: false,
      message: ''
    });
    this.props.actions.selectTask(null, '', '');
  }

  deleteItem(id) {
    if (id !== undefined) {
      this.setState({
        open: true,
        message: 'Task Deleted'
      });
      this.props.actions.deleteTask(id);
      this.props.actions.selectTask(null, '', '');
    }
  }

  renderToolbar() {
    if (this.props.selectedTask.id === null) {
      return (
        <div className="row">
          <div className="col-md-12 marginTop30 text-right">
            <RaisedButton className="marginRight10" label="Cancel" onTouchTap={() => { this.onCancel(); }} />
            <RaisedButton label="Add Task" onTouchTap={() => { this.onSubmit(); }} primary />
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-md-12 marginTop30 text-right">
          <RaisedButton
            backgroundColor="#f44336"
            className="marginRight10"
            icon={<FontIcon className="material-icons" color="#ffffff" >delete</FontIcon>}
            onTouchTap={() => { this.deleteItem(this.props.selectedTask.id); }}
          />
          <RaisedButton className="marginRight10" label="Cancel" onTouchTap={() => { this.onCancel(); }} />
          <RaisedButton label="Update" onTouchTap={() => { this.onUpdateSubmit(); }} primary />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Paper rounded={false} zDepth={1} >
        <div className="row box">
          <div className="col-md-12">
            <Snackbar
              autoHideDuration={2000}
              message={this.state.message}
              open={this.state.open}
            />
            <Subheader>Add / Edit Task</Subheader>
            <TextField
              errorText={this.state.titleError}
              fullWidth
              hintText="Title"
              onChange={val => this.onTitleChange(val)}
              underlineFocusStyle={styles.customUnderline}
              value={this.state.title}
            />
            <br />
            <TextField
              errorText={this.state.descError}
              fullWidth
              hintText="Description"
              multiLine
              onChange={val => this.onDescChange(val)}
              underlineFocusStyle={styles.customUnderline}
              value={this.state.desc}
            />
          </div>
          {this.renderToolbar()}
        </div>
      </Paper>
    );
  }
}

TaskForm.propTypes = {
  actions: React.PropTypes.object,
  selectedTask: React.PropTypes.object
};


export default TaskForm;
