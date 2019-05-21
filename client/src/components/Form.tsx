import * as React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface FormProps {
    handleAdd: any
}


class FormClient extends React.Component<FormProps> {
    state = {
        first: '',
        last: '',
        gender: ''
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
    
        this.props.handleAdd(newItem)
    };

    render() {
        return (
          <div>
            <Form onSubmit={this.onSubmit}>
              <Row className='my-2'>
                <Col>
                  <Form.Control
                    name='first'
                    placeholder='First name'
                    onChange={this.onChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    name='last'
                    placeholder='Last name'
                    onChange={this.onChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    name='gender'
                    placeholder='Gender'
                    onChange={this.onChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    name='birthday'
                    placeholder='Birthday'
                    onChange={this.onChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    name='lastContact'
                    placeholder='Last contact'
                    onChange={this.onChange}
                  />
                </Col>
                <Col>
                  <Button block type="submit">
                    Add Client
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        )
    }
}
    

export default FormClient;