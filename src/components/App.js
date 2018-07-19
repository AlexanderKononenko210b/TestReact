import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticleChart from './ArticlesChart'
import UserForm from './UserForm'

//здесь мы работаем со сторонней библиотекой как с обычным компонентом
class App extends Component {
    
    render () {
        return (
            <div>
                <UserForm/>
                <ArticleList articles = {this.props.articles}/>
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }
}

export default App
