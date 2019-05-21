import * as React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'

interface ListItemProps {
    item: any,
    getData: any,
    handleDelete: any
  }

class ListItem extends React.Component<ListItemProps> {
    state = {
        detailsVisible: false,
        componentVisible: true,
        modalShow: false
    }

    handleShowModal = () => {
        this.setState({modalShow: !this.state.modalShow})
    }

    handleDelete = (id: any) => {
        this.props.handleDelete(id);
        this.setState({componentVisible: !this.state.componentVisible});
    }

    render() {
        return (
            // Showing the component by default, hides when a user is deleted
            this.state.componentVisible &&
            <div>
                <li className='list-group-item'>
                    <Row className='my-2'>
                        <Col>
                        <p>{this.props.item.name.first}</p>
                        </Col>
                        <Col>
                        <p>{this.props.item.name.last}</p>
                        </Col>
                        <Col>
                        <Button variant='outline-primary' onClick={this.handleShowModal}>Details</Button>
                        </Col>
                        <Col>
                        <Button variant='outline-danger' onClick={() => {this.handleDelete(this.props.item._id)}}>
                        Delete user</Button>
                        </Col>
                    </Row>
                </li>
                
                { 
                    //Details 
                }
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.modalShow}
                >
                    <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4>Client details:</h4>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                    <div className='lead'>
                        <p>Name: <strong>{this.props.item.name.first}</strong></p>
                        <p>Last name: <strong>{this.props.item.name.last}</strong></p>
                        <p>Birthday: <strong>{this.props.item.birthday}</strong></p>
                        <p>Gender: <strong>{this.props.item.gender}</strong></p>
                        <p>Customer Value: <strong>{this.props.item.customerLifetimeValue}</strong></p>
                        <p>Last Contact: <strong>{this.props.item.lastContact}</strong></p>
                        <Button variant='danger' onClick={() => {this.handleDelete(this.props.item._id)}}>
                        Delete user</Button>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleShowModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ListItem;