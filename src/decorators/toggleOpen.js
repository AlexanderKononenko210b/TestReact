import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
       this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }
}

//const func = (...args) => {
    //console.log('-----', ...args)
    //return originalFunc(...args)
//}