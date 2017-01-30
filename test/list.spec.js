import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import List from '../app/components/list';

const tasks = [
  {
    description: "bar",
    id: 6,
    title: "foo"
  }
];

const getAllTasks = function () {};

const actions = { getAllTasks };

describe("<List />", () => {
  const mountWithContext = node => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  });

  it('should have props for  getAllTasks', () => {
    const wrapper = mountWithContext(<List tasks={tasks} actions={actions} />, {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    });

    expect(wrapper.props().actions.getAllTasks).to.be.defined;
  });
});

