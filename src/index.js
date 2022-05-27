import React from 'react';
import ReactDOM from 'react-dom/client';
import RegForm from './RegForm';
import PlusMinus from './PlusMinus'


const regForm = ReactDOM.createRoot(document.querySelector('#regForm'));
regForm.render(
    <RegForm />
);

const plusMinus = ReactDOM.createRoot(document.querySelector('#plusMinus'));
plusMinus.render(
    <PlusMinus />
);