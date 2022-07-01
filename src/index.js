import React from 'react';
import ReactDOM from 'react-dom/client';
import RegForm from './RegForm';
import ToDo from './ToDo'


const regForm = ReactDOM.createRoot(document.querySelector('#regForm'));
regForm.render(
    <RegForm />
);

const toDo = ReactDOM.createRoot(document.querySelector('#todo'));
toDo.render(
    <ToDo />
);