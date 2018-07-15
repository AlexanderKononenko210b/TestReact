import React from 'react';
import Article from './Article'
import Comment from './Comment'

export default function ArticleList({articles}){
    const articleElements = articles.map((article =>
        <li key = {article.id}>
            <Article article = {article}/>
            <Comment comment = {article}/>
        </li>
    ))
    return (
        <ul>
            {articleElements}
        </ul>
    )
}