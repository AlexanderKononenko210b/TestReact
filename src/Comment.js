import React, {Component} from 'react';

export default class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <h4>Comment:</h4>
                <button onClick = { this.toggleOpen }>
                {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody () {
        if(!this.state.isOpen) return null
        const {comment} = this.props
        return <section>{comment.comment}</section>
    }

    toggleOpen = () =>  {
        this.setState({
            isOpen: ! this.state.isOpen
        });
    }
}