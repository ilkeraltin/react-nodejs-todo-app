import React, { Component } from 'react';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class TaskItem extends Component {

  deleteItem(id) {
    if (id !== undefined) {
      this.props.actions.deleteTask(id);
      this.props.actions.selectTask(null, '', '');
    }
  }

  selectItem(id, title, desc) {
    if (id !== undefined) {
      this.props.actions.selectTask(id, title, desc);
    }
  }


  render() {
    const { id, title, description } = this.props.task;
    return (
      <ListItem
        primaryText={title}
        rightIconButton={
          <IconMenu
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >

            <MenuItem onTouchTap={() => { this.selectItem(id, title, description); }} primaryText="Edit" />
            <MenuItem onTouchTap={() => { this.deleteItem(id); }} primaryText="Delete" />
          </IconMenu>
        }
        secondaryText={
          <p>
            {description}
          </p>
          }
      />
    );
  }
}

TaskItem.propTypes = {
  task: React.PropTypes.object,
  actions: React.PropTypes.object
};

const styles = {
  done: {
    color: '#cccccc',
    textDecoration: 'line-through',
  },
};

export default TaskItem;
