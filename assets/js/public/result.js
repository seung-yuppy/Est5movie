import { formEl, searchPoint, initializePage } from '../components/search.js';
import { darkMode } from '../components/dark-mode.js';

// 화면이 로드됐을 때 initializePage함수를 호출한다.
document.addEventListener('DOMContentLoaded', initializePage);

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    searchPoint();
});

darkMode();