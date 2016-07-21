import React from 'react';

import Example from './../components/Example';

class ExampleSC extends React.Component {

  static propTypes = {
    data: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Example data={this.props.data} />
    );
  }
}

export default ExampleSC;
