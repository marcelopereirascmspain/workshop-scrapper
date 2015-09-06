import React from 'react';
import {Frontend} from '../src';
import './style.scss';
import '../src/index.scss';

fetch("http://localhost:3000").then((res) => {
  return res.json();
}).then((json) => {
  React.render(<Frontend entries={json.entries} />, document.getElementById('main'));
});
