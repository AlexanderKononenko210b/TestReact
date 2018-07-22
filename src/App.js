import React, {Component} from 'react'
import ArticleList from './Components/ArticleList'
import ArticleChart from './Components/ArticlesChart'
import CommentsForm from './CommentsForm'
import Filters from './Filters'
import Counter from './Components/Counter'

//здесь мы работаем со сторонней библиотекой как с обычным компонентом
class App extends Component {

        
    render () {

        return (
            <div>
                <Counter/>
                <CommentsForm/>
                <Filters articles = {[]} />
                <ArticleList />
            </div>
        )
    }
}

export default App