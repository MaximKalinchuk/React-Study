import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './Menu';
import ToDo from './ToDo'


const menu = ReactDOM.createRoot(document.querySelector('.header'));
menu.render(
    <Menu />
);

const toDo = ReactDOM.createRoot(document.querySelector('#todo'));
toDo.render(
    <ToDo />
);