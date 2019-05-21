import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('/api/items')
    .then(response => response.json())
    .then((data) => {
      data = Object.values(data);
      this.setState({data: data});
    })
  }

  render() {
    return (
      <div>
          Hello
          {
          this.state.data.map((el: any) => <p key={el._id}>{el.name.first}</p>)
          }
      </div>
    )
  }
}

export default App;
