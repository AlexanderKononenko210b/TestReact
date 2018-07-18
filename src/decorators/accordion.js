import React from 'react'

export default Component => class Accordion extends React.Component {
    state = {
        openItemId: null
    }

    render() {
        return <Component {...this.props} openItemId = {this.state.openItemId} toggleOpenItem = {this.toggleOpenItem}/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
           openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}