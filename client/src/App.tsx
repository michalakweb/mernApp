import React from 'react';
import './App.css';
import ListItem from './components/ListItem';
import Form from './components/Form';

class App extends React.Component {
  state = {
    data: [],
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

  handleAdd = (item: any) => {
    fetch('/api/items', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
    })
    .then(response => console.log(response))
    .then(() => this.getData())

  }

  render() {
    return (
      <div>
          <h1>List</h1>
          <ul>
            {
            this.state.data.map((el: any) => <ListItem key={el._id} item={el} getData={this.getData}/>)
            }
          </ul>

          <Form handleAdd={this.handleAdd}/>
            
      </div>
    )
  }
}

export default App;
