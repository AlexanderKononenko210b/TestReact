import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static PropTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange/>
            </div>
        )
    }
}
export default Filters