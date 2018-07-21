import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticleChart from './ArticlesChart'
import CommentsForm from '../CommentsForm'
import Filters from '../Filters'

//здесь мы работаем со сторонней библиотекой как с обычным компонентом
class App extends Component {

        
    render () {
        const {articles} = this.props;

        return (
            <div>
                <CommentsForm/>
                <Filters articles = {articles} />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticleChart articles = {articles}/>
            </div>
        )
    }
}

export default App
