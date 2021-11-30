import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import UI from './app/ui.js';

const clearBtn = document.querySelector('.footer');
clearBtn.addEventListener('click', UI.delete);
UI.add();
