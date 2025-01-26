import { get } from "./util.js";
import { loadHeader } from "../components/loadHF.js";
import { searchPoint } from "../components/search.js";

export async function initializeEvents() {

    await loadHeader();
    
    // 서치 검색 영역
    const formEl = get(".form");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        searchPoint();
    });


    // 다크모드 영역
    const button = get(".btn-change");
    let theme = localStorage.getItem('mode'); // 초기 theme 가져오기
    let status = false;

    if (theme === 'dark') {
        applyDarkMode();
    } else if (theme === 'light') {
        applyLightMode();
    }

    // 버튼 클릭 이벤트
    button.addEventListener('click', () => {
        if (!status) {
            applyDarkMode();
        } else {
            applyLightMode();
        }
    });

    // 다크 모드 적용
    function applyDarkMode() {
        localStorage.setItem("mode", "dark");
        document.documentElement.setAttribute('data-mode', 'dark');
        status = true;
    }

    // 라이트 모드 적용
    function applyLightMode() {
        localStorage.setItem("mode", "light");
        document.documentElement.setAttribute('data-mode', 'light');
        status = false;
    }
}