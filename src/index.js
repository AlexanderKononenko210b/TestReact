import React from 'react';
import {render} from 'react-dom';
import { articles } from './store/fixtures'
import Root from './Root'

render(<Root />, document.getElementById('container'));
