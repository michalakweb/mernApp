import React from 'react';
import './App.css';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { Container, Row, Col } from 'react-bootstrap';

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

  handleDelete = (id: any) => {
      fetch(`/api/items/${id}`, {
          method: 'delete',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          })
      .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <Container>
          <Row className='my-2'>
            <Col>
              <h1>Webtrekk challenge</h1>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col>
              <h3>Add new user</h3>
              <Form handleAdd={this.handleAdd}/>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col>
            <h3>Users List:</h3>
            <ul className="list-group list-group-flush">
              {
              this.state.data.map((el: any) => 
              <ListItem key={el._id} item={el} getData={this.getData} handleDelete={this.handleDelete}/>)
              }
            </ul>
            </Col>
          </Row>
        </Container>
            
      </div>
    )
  }
}

export default App;
