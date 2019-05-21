import * as React from 'react';

interface ListItemProps {
    item: any,
    getData: any
  }

class ListItem extends React.Component<ListItemProps> {
    state = {
        detailsVisible: false,
        componentVisible: true
    }

    handleDeleteUser = (id: any) => {
        fetch(`/api/items/${id}`, {
            method: 'delete',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            })
            .then(response => console.log(response))
            .then(() => {
                this.setState({componentVisible: !this.state.componentVisible})
            })
    }

    handleShowDetails = () => {
        this.setState({detailsVisible: !this.state.detailsVisible})
    }

    render() {
        return (
            this.state.componentVisible &&
            <div>
                <li>
                    <p>{this.props.item.name.first}</p>
                    <p>{this.props.item.name.last}</p>
                    <button onClick={this.handleShowDetails}>Details</button>
                </li>
                
                { //Details
                    this.state.detailsVisible && (
                        <div>
                            <p>Name: {this.props.item.name.first}</p>
                            <p>Last name: {this.props.item.name.last}</p>
                            <p>Birthday: {this.props.item.birthday}</p>
                            <p>Gender: {this.props.item.gender}</p>
                            <button onClick={() => {this.handleDeleteUser(this.props.item._id)}}>
                            Delete user</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ListItem;