import React, {Component} from 'react'

// это компонент для работы со сторонней библиотекой
// как с обычным реактовским компонентом
class ArticlesChart extends Component {

    componentDidMount() {
        //d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {
        //update chart for new articles
    }

    render() {
        return <div ref = 'chart'/>
    }

    componentWillUnmount() {
        //do some cleanup
    }
}

export default ArticlesChart