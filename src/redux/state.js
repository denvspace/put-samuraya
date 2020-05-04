let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Miha', img: 'https://html5css.ru/w3images/avatar6.png'},
                {id: 2, name: 'Alex', img: 'https://html5css.ru/w3images/avatar3.png'},
                {id: 3, name: 'Cat', img: 'https://html5css.ru/w3images/avatar2.png'},
                {id: 4, name: 'Dog', img: 'https://html5css.ru/w3images/avatar1.png'},
                {id: 5, name: 'Bird', img: 'https://html5css.ru/w3images/avatar4.png'}
            ],
            messages:
                [
                    {id: 1, message: 'Hi', me: true},
                    {id: 2, message: 'How are you?', me: true},
                    {id: 3, message: 'Yo', me: false},
                ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: "5"},
                {id: 2, message: "Hey, go to football!", likesCount: "17"},
                {id: 3, message: "Bay-bay", likesCount: "1"}
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Alex', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
                {id: 2, name: 'Max', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
                {id: 3, name: 'Igor', avatar: 'https://html5css.ru/w3css/img_avatar3.png'}
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePostText (postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },
    sendMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
            me: true
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateMessageText (messageText) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;

