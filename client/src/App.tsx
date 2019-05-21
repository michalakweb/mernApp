import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    data: [],
    first: '',
    last: '',
    gender: ''
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

  onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e: any) => {
    e.preventDefault();

    const newItem = {
      "name": {
        "first": this.state.first,
        "last": this.state.last
      },
      "birthday": "1969-11-21",
      "gender": this.state.gender,
      "lastContact": "2017-03-18T12:20:06.702Z",
      "customerLifetimeValue": ''
    };

    this.handleAdd(newItem)
  };

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
          List
          {
          this.state.data.map((el: any) => <p key={el._id}>{el.name.first}</p>)
          }

            <form onSubmit={this.onSubmit}>
                <input
                  type='text'
                  name='first'
                  id='item'
                  placeholder='First name'
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='last'
                  id='item'
                  placeholder='Last name'
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='birthday'
                  id='item'
                  placeholder='Birthday'
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='lastContact'
                  id='item'
                  placeholder='Last Contact'
                  onChange={this.onChange}
                />
                <input
                  type='text'
                  name='gender'
                  id='item'
                  placeholder='Gender'
                  onChange={this.onChange}
                />
                <button>
                  Add Item
                </button>
            </form>
      </div>
    )
  }
}

export default App;
