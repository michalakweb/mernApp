import * as React from 'react';
import { Modal, Button } from 'react-bootstrap'

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
                <li>
                    <p>{this.props.item.name.first}</p>
                    <p>{this.props.item.name.last}</p>
                    <button onClick={this.handleShowModal}>Details</button>
                    <button onClick={() => {this.handleDelete(this.props.item._id)}}>
                    Delete user</button>
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
                    
                    <div>
                        <p>Name: {this.props.item.name.first}</p>
                        <p>Last name: {this.props.item.name.last}</p>
                        <p>Birthday: {this.props.item.birthday}</p>
                        <p>Gender: {this.props.item.gender}</p>
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