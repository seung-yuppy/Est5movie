## 이스트소프트 5팀 영화사이트 제작

### 팀원 소개 및 업무
| **이름** | **역할** | **담당 업무** | **담당 페이지 및 기능** |
| :--- | :--- | :--- | :--- |
| 이병현 &nbsp;&nbsp;  | 팀장 &nbsp;  | 프로젝트 매니저, 기능 구현 담당, 결과 보고서 작성, 형상 관리 담당 | 프로젝트 SCSS 작업<br> 검색 기능 구현, 다크모드 기능 |
| 김석용 &nbsp;&nbsp;  | 팀원 &nbsp;  | 기능 구현 담당 | 상세 페이지 SCSS 작업 및 기능 구현 |
| 전윤교 &nbsp;&nbsp;  | 팀원 &nbsp;  | UI/UX 디자인, 기능 구현 담당 | 메인 페이지 기능 구현 |
| 송승엽 &nbsp;&nbsp;  | 팀원 &nbsp;  | 기능 구현 담당, 시연 녹화 및 발표 | 검색 결과 페이지 SCSS 작업 및 기능 구현<br> 체크박스 검색결과 수정 작업,<br> TMDB API 활용 작업, 더보기 버튼 구현 작업 |


### 프로젝트 내용
    OMDb API를 사용하여 영화사이트 만들기

**필수 기능** 
- [x]  영화 제목으로 검색가능하게 하세요.
- [x]  검색된 결과페이지에서 영화 목록을 출력하세요.
- [x]  영화목록에서 각 영화의 상세정보 페이지를 구성하세요.
- [x]  제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등
- [x]  검색사이트 서비스를 배포하세요. (GitHub Pages, Netlify, Vercel 등)

**선택 기능** 
- [x]  더보기로 영화목록을 추가로 불러오도록 하세요.
- [x]  영화 개봉연도로 검색할 수 있게 하세요.
- [ ]  영화 목록 검색하는 동안 로딩애니메이션 넣으세요.
- [x]  영화 포스터가 없을 경우 대체 이미지를 넣으세요.
- [x]  영화 상세정보를 고해상도로 출력하세요.
- [x]  영화와 관련된 기타 기능을 넣어보세요.

**추가기능** 
- [x]  다크모드 기능 구현
- [x]  swiper 슬라이드 기능 사용
- [x]  TMDb API를 활용하여 상세페이지에 출연 배우와 비슷한 영화 보여주는 기능 구현
- [x]  라디오버튼으로 검색 내용 수정 기능 구현

### 프로젝트 구조
```
 📦Est5movie
 ┣ 📂.vscode
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┣ 📂images
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┗ 📂public
 ┃ ┣ 📂json
 ┃ ┗ 📂scss
 ┃ ┃ ┣ 📂abstracts
 ┃ ┃ ┃ ┣ 📂mixin
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂themes
 ┣ 📂components
 ┣ 📂public
 ┣ 📜index.html
 ┗ 📜README.md
```

### 사이트 QR
<img src="./assets/images/img-siteURL.jpg" alt="이스트소프트 5팀 영화사이트"/>