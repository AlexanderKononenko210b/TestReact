import React, {Component} from 'react'
//import Comment from './Comment'

// то что приходит в props или state существует только на чтение
export default class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
            /*сюда вносить только то что изменяется в процессе жизни приложения*/
        }
        /*this.toggleOpen = this.toggleOpen.bind(this); - этим мы привязываем this к нашему инстансу*/
    }
       
    render() {
        const {article} = this.props
        const {isOpen} = this.state
        //Если менялось состояние, то оно появится только при рендеринге
        console.log('____rendering:', isOpen);
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
    
    getBody () {
        if(!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
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