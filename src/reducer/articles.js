import {articles as defaultArticles} from '../store/fixtures'
import {DELETE_ARTICLE} from '../store/constants'

export default (articleState = defaultArticles, action) => {
    const{type, payload} = action

    switch(type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)

        default: return articleState;
    }

    return articleState
}