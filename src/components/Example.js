import React from 'react';

class Example extends React.Component {

  static propTypes = {
    data: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Example: {JSON.stringify(this.props.data)}
      </div>
    );
  }
}

export default Example;
