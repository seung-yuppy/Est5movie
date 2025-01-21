import { darkMode } from "../components/dark-mode.js";

// OMDb API 설정
const API_KEY = "c2ca8aa";
const MOVIE_ID = "tt3896198"; // 특정 영화의 ID: 예 "Guardians of the Galaxy Vol. 2"
const API_URL = `http://www.omdbapi.com/?i=${MOVIE_ID}&apikey=${API_KEY}`;

// HTML 요소 참조
const movieContainer = document.getElementById("movie-container");

// 영화 데이터를 가져오는 함수
async function fetchMovieDetails() {
  try {
    const response = await fetch(API_URL); // OMDb API 호출
    const movie = await response.json(); // JSON 데이터로 변환
    // 데이터를 HTML 구조로 렌더링
    movieContainer.innerHTML = `
       <div class="movie-header">
          <div class="movie-img">
            <img src="${movie.Poster}" alt="${movie.Title} Poster" />
          </div>
          <div class="movie-total-info">
            <div class="movie-detail-info">
              <div class="movie-detailsBox">
                <div class="movie-title">${movie.Title}</div>
                <a href="" class="btn-click" aria-label="예고편">WATCH</a>
                <div class="movie-description">${movie.Plot}</div>
                <div class="movie-informationBox">
                  <div class="movie-text movie-meta"><strong>평점</strong> ${movie.imdbRating}</div>
                  <div class="movie-text movie-yeaer"><strong>년도</strong> ${movie.Year}</div>
                  <div class="movie-text movie-meta"><strong>장르</strong> ${movie.Genre}</div>
                  <div class="movie-text movie-meta"><strong>배우</strong> ${movie.Actors}</div>
                  <div class="movie-text movie-meta"><strong>감독</strong> ${movie.Director}</div>
                </div>
              </div>
              <div class="movie-actors">
                <div>
                  <img src="${movie.Poser}" alt="${movie.Actors} Poster" />
                </div>
                <div>
                  <img src="${movie.Poser}" alt="${movie.Actors} Poster" />
                </div>
              </div>
            </div>
            <div class="movie-info">
              <div><img src="${movie.Poster}" alt="${movie.Actors} Poster" /></div>
              <div><img src="${movie.Poster}" alt="${movie.Actors} Poster" /></div>
              <div><img src="${movie.Poster}" alt="${movie.Actors} Poster" /></div>
              <div><img src="${movie.Poster}" alt="${movie.Actors} Poster" /></div>
              <div><img src="${movie.Poster}" alt="${movie.Actors} Poster" /></div>
            </div>
          </div>
        </div>
     
    `;
  } catch (error) {
    movieContainer.innerHTML = `
      <p>Failed to fetch movie details. Please try again later.</p>
    `;
    console.error("Error fetching movie data:", error);
  }
}

// 페이지가 로드될 때 데이터를 가져옴
fetchMovieDetails();

//기능을 호출하여 동영상 세부 정보를 가져오고 표시합니다
// fetchMovieDetails();

darkMode();
