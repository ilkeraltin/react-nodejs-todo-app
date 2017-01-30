
import React, { Component } from 'react';
import { List, Paper, Subheader } from 'material-ui/';
import TaskItem from '../components/taskItem';

class TaskList extends Component {
  componentDidMount() {
    this.props.actions.getAllTasks();
  }
  render() {
    const { tasks, actions } = this.props;
    return (
      <Paper rounded={false} zDepth={1} >
        <div className="row box">
          <div className="col-md-12">
            <List>
              <Subheader>All Tasks</Subheader>

              {tasks.map(task =>
                <TaskItem
                  actions={actions}
                  key={task.id}
                  task={task}
                />
          )}
            </List>
          </div>
        </div>
      </Paper>
    );
  }
}

TaskList.propTypes = {
  tasks: React.PropTypes.array,
  actions: React.PropTypes.object
};

export default TaskList;
