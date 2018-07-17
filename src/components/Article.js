import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

// то что приходит в props или state существует только на чтение
class Article extends Component {
    // PropTypes нужны для динамической проверки типов
    // ими мы можем выставлять требования на входящие в компонент данные
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }
    
    //вынесен в декоратор toggleOpen
    //constructor(props){
        //super(props);
        //this.state = {
            //isOpen: false
            /*сюда вносить только то что изменяется в процессе жизни приложения*/
        //}
        /*this.toggleOpen = this.toggleOpen.bind(this); - этим мы привязываем this к нашему инстансу*/
    //}
       
    render() {
        const {article, isOpen, toggleOpen} = this.props
        //Если менялось состояние, то оно появится только при рендеринге
        console.log('____rendering:', isOpen);
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
    
    getBody () {
        const {article, isOpen} = this.props
        if(!isOpen) return null
        return (       
        <section>
            {article.text}
            <CommentList comments = {article.comments}/>
        </section>
        )
    }

    /*= () => - это еще один вариант привязки те помечаем как error-function*/ 
    toggleOpen = (ev) => {
        //мы получим обертку на евентом так как у реакта есть свой собственный механизм работы с евентами
        //он вешает обработчик на самом верхнем уровне там где метод рендер
        // и дальше распределять с помощью делегирования так называемого
        // pattern event delegation 
        ev.preventDefault();
        //console.log('___', ev);
        //если хотим получить реальный дом эвент то:
        console.log('-----', ev.nativeEvent)
        //this.isOpen = false ЭТО УЖАСНАЯ ОШИБКА!!! МЕНЯТЬ ТОЛЬКО через метод setState!!!
        //SetState это асинхронная операция
        this.setState({
            isOpen: !this.state.isOpen
        })
        //Здесь еще старое состояние isOpen и оно поменяется только рендеренге
        console.log('____', this.state.isOpen);
    }
}


/*
export default function Article(props) {
    const {article} = props
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/

export default toggleOpen(Article)