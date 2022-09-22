const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            const newPost = {
                message: state.newPostText
            }
            state.postList.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;

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