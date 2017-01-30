import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../app/components/header';


describe("<Header />", () => {
  const mountWithContext = node => mount(node, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    }
  });

  it('should have a h1 element to display title', () => {
    const wrapper = mountWithContext(<Header title={'Travix Task Manager'}/>, {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    });

    expect(wrapper.find('h1')).to.have.length(1);
  });
});

