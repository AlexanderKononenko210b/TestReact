import React from 'react';
import {render} from 'react-dom';
//import Article from './Article';
import { articles } from './fixtures'
import ArticleList from './components/ArticleList'

// eslint-disable-next-line
function HelloReact()
{
    return <h1>Hello World! I learn React!</h1>
}
render(<ArticleList articles = {articles}/>, document.getElementById('container'));
