import * as React from 'react';

interface FormProps {
    handleAdd: any
}


class Form extends React.Component<FormProps> {
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
        )
    }
}
    

export default Form;