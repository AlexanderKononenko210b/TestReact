import React, {PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from '../Components/CommentList'


// то что приходит в props или state существует только на чтение
class Article extends PureComponent {
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

    //shouldComponentUpdate(nextProps, nextState) {
        //return nextProps.isOpen !== this.props.isOpen
    //}

    render() {
        const {article, isOpen, toggleOpen} = this.props
        console.log('---', 'update article')
        //Если менялось состояние, то оно появится только при рендеринге
        console.log('____rendering:', isOpen);
        return (
            // и здесь мы можем с этой нодой работать, получать размеры и тд
            // но это не хорошо тк анонимная функция будет вызываться при каждом вызове метода рендер
            // и вызываться она будет дважды
            //<div ref = {(node) => console.log(node)}>
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    // более правильный путь сделать отдельную функцию и 
    // и вызвать ее
    setContainerRef = ref => {
        this.container = ref
        console.log('----', ref)
    }

    componentDidMount () {
        console.log('----', 'mounted');
    }
    
    getBody () {
        const {article, isOpen} = this.props
        if(!isOpen) return null
        return (       
        <section>
            {article.text}
            <CommentList comments = {article.comments} ref = {this.setCommentsRef}/>
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
    // использую ref и функцию в которой мы используем метод findDOMNode передавая
    // туда ref мы получим дом элемент на который повесили ref
    setCommentsRef = ref => {
        console.log('---', findDOMNode(ref))
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

export default Article