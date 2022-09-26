import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import News from '../News/News';
import Music from '../Music/Music';
import MessagesContainer from '../Messages/MessagesContainer';
import UsersContainer from '../Users/UsersContainer';


const routerController = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/news' element={<News />} />
            <Route path='/messages*' element={<MessagesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
        </Routes>
    );
};

export default routerController;
