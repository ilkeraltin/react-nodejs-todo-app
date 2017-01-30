import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TaskItem from '../app/components/taskItem';

const task =
  {
    description: "bar",
    id: 6,
    title: "foo"
  };

const getAllTasks = function () {};
const deleteTask = function () {};
const selectTask = function () {};

const actions = { getAllTasks, deleteTask, selectTask };

describe("<TaskItem />", () => {
  const mountWithContext = node => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  });

  it('should have props for  deleteTask and selectTask', () => {
    const wrapper = mountWithContext(<TaskItem actions={actions} task={task} />, {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    });

    expect(wrapper.props().actions.deleteTask).to.be.defined;
    expect(wrapper.props().actions.selectTask).to.be.defined;
  });
});

