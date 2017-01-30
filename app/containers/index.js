import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../actions/tasks';
import Header from '../components/header';
import List from '../components/list';
import TaskForm from '../components/taskForm';


import '../styles/main.scss';


const Index = ({ state, actions }) => (
  <MuiThemeProvider>
    <div className="container">
      <Header title={'Travix Task Manager'}/>
      <div className="row">
        <div className="col-md-6">
          <TaskForm
            actions={actions}
            selectedTask={state.selectedTask}
            tasks={state.tasks}
          />
        </div>
        <div className="col-md-6">
          <List
            actions={actions}
            tasks={state.tasks}
          />
        </div>
      </div>

    </div>
  </MuiThemeProvider>
);

Index.propTypes = {
  state: React.PropTypes.object,
  actions: React.PropTypes.object
};



const mapStateToProps = ({ state }) => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
