'use strict';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={this.clickHandler}>
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#navigation');
ReactDOM.render(e(Navigation), domContainer);
