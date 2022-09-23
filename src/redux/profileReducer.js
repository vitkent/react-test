const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const initialState = {
    postList: [
        {
            message: 'Это мое первое сообщение!!!!',
        },
        {
            message: 'Всем хай, как дела?',
        },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            const newPost = {message: state.newPostText}
            return {
                ...state,
                newPostText: '',
                postList: [...state.postList, newPost] //в конец массива postList пушим новое значени
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newPostText: text
    }
}

export default profileReducer;