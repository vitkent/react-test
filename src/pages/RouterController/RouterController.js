import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import News from '../News/News';
import Music from '../Music/Music';
import Messages from '../Messages/Messages';

const routerController = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/news' element={<News />} />
            <Route path='/messages*' element={<Messages />} />
        </Routes>
    );
};

export default routerController;
