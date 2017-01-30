import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  headerBg: {
    backgroundColor: '#2196F3',
  }
};

const Header = (props) => (
  <Paper zDepth={1} rounded={false} style={styles.headerBg}>
<div className="row" >
<div className="col-md-12" >
<h1 className="mainTitle">{props.title}</h1>
</div>

</div>
</Paper>
);

export default Header;
