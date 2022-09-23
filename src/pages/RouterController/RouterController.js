import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import News from '../News/News';
import Music from '../Music/Music';
import MessagesContainer from '../Messages/MessagesContainer';

const routerController = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile store={props.store}/>} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/news' element={<News />} />
            <Route path='/messages*' element={<MessagesContainer store={props.store}/>} />
        </Routes>
    );
};

export default routerController;
