import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        Bonjour, {name} !
      </div>
    );
  }
}

export default Greeting;
