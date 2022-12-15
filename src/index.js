import React from 'react';
import ReactDOM from 'react-dom/client';
import Cafe from './Cafe';
import Pessoa from './Pessoa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Pessoa nome = {"joao"} idade ={23}/><Cafe /></>);