# 권대웅 201930201 

## [11월 10일]
   ### 학습내용
   1. 배포
>  - 배포를 위해 package.json 수정
>     - predeploy, deploy 추가
>~~~
> "scripts": {
>    "start": "react-scripts start",
>    "build": "react-scripts build",
>    "predeploy": "npm run build",
>    "deploy": "gh-pages -d build"
>  }
>~~~
>   - homepage에 "http://[깃허브 계정].github.io/[저장소 이름]"<br>
>```"homepage": "http://Kwon-Daewoong.github.io/movie_app_2021-5"```
>  - ```$ npm install gh-pages```: gh-pages 설치
>  - ```$ npm run deploy```: 배포하기
>  - 위 순서를 진행한후 hompepage 즉 "http://Kwon-Daewoong.github.io/movie_app_2021-5" 에 접속하면 페이지가 실행됨 
## [11월 03일]
   ### 학습내용
   1. 컴포넌트 설치 오류
>   ![image](https://user-images.githubusercontent.com/76157596/140906257-8c66d340-2360-4b0e-b2a8-145b0c37767c.png)
>   - 컴포넌트 설치 오류등 원인 규명이 되지 않은 오류가 있을경우 
>           ~~~ 
>           $ npm cache clean --force
>           $ npm rebulid
>           $ rm -rf node_modules
>           $ npm install
>           ~~~
>       * 만일 rm명령이 실행되지 않으면 shell을 관리자 권한으로 실행한 후 다시 시도해 본다.
>       * 그래도 안될 경우는 탐색기에서 삭제하면 되는데 시간이 조금 걸릴 수는 있다.
>       * 원인 모를 문제가 발생했을 때 cache clean과 rebuild를 통해 많은 부분 해결되기도 한다.
   2. Navigtion
>   - Home과 about버튼을 만들어 화면의 이동 구현
>       ~~~
>       <Link to="/">home</Link>
>       <Link to="/About">About</Link>
>       ~~~
   3. 영화 상세 정보 기능
> - Movie 컴포넌트에 Link 추가
>    ```<Link to={{ pathname: '/movie-detail', state: { year, title, summary, poster, genres } }}>```
> - Detail.js 파일(Detail 컴포넌트 생성)
>    - Detail 컴포넌트에서 영화 제목에 맞는 상세 정보를 넘겨주기 위한 코드를 작성
>~~~
>componentDidMount() {
>    const { location, history } = this.props;
>    if (location.state === undefined) {
>        history.push('/');
>    }
>}
>
>render() {
>    const { location } = this.props;
>    if (location.state) {
>        return (
>            <span>{location.state.title}</span>
>        )
>    } else {
>        return null
>    }
>}
>~~~

>   - App.js 에서 Route를 이용해 Detail을 출력해주기 위한 코드
>        ```<Route path="/movie-detail" component={Detail} />``` 
   


## [10월 27일]
   ### 학습내용
   1. Router
>   - react-router-dom 설치 
>       - npm install react-router-dom
>       - :bangbang: 위 패키지의 설치오류가 발생하며 npm을 실행시켰을때 또한 오류가 발생하였다 
>           - 위 상황 해결법 : node_modules와 package-lock.json 파일을 제거한후 
>           ~~~ 
>           $ npm cache clean --force
>           $ npm rebulid
>           $ npm install
>           ~~~
>           를 실행하면 오류가 해결된다
>       - components 폴더에 moive컴포넌를 이동시킨다
>       - routes 폴더에 Home.js와 About.js등 라우터가 보여줄 화면 만들기
>       - App.js내용을 Home.js로 복사후 수정한다  
>       - 라우터 테스트
>           ```
>           import "./App.css"
>           import Home from "./routes/Home"
>           import { HashRouter, Route }            from 'react-router-dom'
>           import About from './routes/About'
>           function App() {
>               return (
>                   <HashRouter>
>                       <Route path='/' component={Home}>
>                           <h1>Home</h1>
>                       </Route>
>                       <Route path='/home/introduction' component={Introduction}>
>                           <h1>Introduction</h1>
>                       </Route>
>                       <Route path='/about' component={About}>
>                           <h1>About</h1>
>                       </Route>
>                   </HashRouter>
>               )
>           }
>           export default App 
>           ```
>       위 코드에서Home 컴포넌트의 path 가 "/" 인이유는 localhost:3000에 접속하면 기본 컴포넌트로 Home컴포넌트로 지정하기 위함
>       라우터는 /home/introduction에 접속하면 /, /home, /home/introduction 순서로
>       path props가 있는지를 찾는다.하지만 모두가 path props를 갖고 있기 때문에 introduction
>       에 접속하면 이 모든 것이 보인다.

## [ 10월 13일 ]
   ### 학습내용
   1. movie.js
>   - movie 컴포넌트는 stats가 필요하지않으므로 함수형 컴포넌트로 작성
> ```function Movie({ title, year, summary, poster, genres }) {}```
>   - 영화 데이터를 넘겨받아 정의하고 관리하기 위해 prop-types사용  
>     ~~~
>     Movie.propTypes = {
>         year: PropTypes.number.isRequired,
>         title: PropTypes.string.isRequired,
>         summary: PropTypes.string.isRequired,
>         poster: PropTypes.string.isRequired,
>         genres: PropTypes.arrayOf(PropTypes.string).isRequired,
>     }
>     ~~~ 
>     - PropTypes.(타입).isRequired
>     - arrayOf(PropTypes.string) : 문자열을 원소로 하는 배열
>     - sort_by라는 파라미터를 사용하기위해 
>     ``` axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')``` 
>     axios.get링크에 '?sort_by=rating'을 추가
>     -  ```this.setState({ movies, isLoading: false })```
>     api를 통해 영화데이터를 불러오면 isLoading에대한 state 변경
   2. app.js
>   - app 컴포넌트에서 movie 컴포넌트 그리기
```
render() {
        const { isLoading, movies } = this.state
        return (
            <section className='container'>
                {isLoading ? (
                    <div className='loader'>
                        <span className='loader-text'>Loading...</span>
                    </div>
                ) : (
                    <div className='movies'>
                        {
                            movies.map((movie) => {
                                console.log(movie);
                                return (
                                    <Movie
                                        key={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />

                                )
                            })}
                    </div>
                )
                }
            </section>
        )
    }
```
>   - '로딩완료'를 출력하는 자리(삼항연산자를 통해 isLoading state가 false 즉, 로딩이 완료)에 movies.map()을 사용
>     - map()함수에 movie 컴포넌트를 반환하도록 한다 ``` movies.map((movie) => {}```
>     - movie 컴포넌트에 props를 전달해야한다 
>        - key : key값이 없으면 오류가 생김
>        - poster : ```poster={movie.medium_cover_image}``` - url 주소가 들어감 
>        - genres : ```genres={movie.genres}``` - genres props가 Movie 컴포넌트에 undefined로 넘어 왔다는 부분 부터 수정
>        - year, title, summary 등
   3. App컴포넌트에 HTML 추가하기 
>  - App 컴포넌트가 반환할 JSX 바깥쪽을 ```<section class = "container'>```
>  - 로딩은 ```<div class="loader"><span class='loader-text'> ```.... 등등 추가
>     - 위 코드처럼 className 가 아닌 class 속성으로 지정하면 콘솔에서 오류메세지를 출력한다
>        - 해결방법 : JSX에 사용한 속성 중 class속성을 className으로 사용


## [ 10월 06일 ]
   ### 학습내용
   1. 영화 Api 사용하기 
>   - npm install axios
>   - 영화 목록 데이터 확인하는 방법
>     https://yts.mx/api/v2/list_movies.json
>     - status : 응답 상태 메시지 
>     - data : 영화 데이터
>     - movie_count : api가 보내준 영화 데이터의 개수
>     - limit : 보내준 데이터의 개수
>     - movies키의 서브키로  id, url, imdb_code, title 등을 제공
   2. 로딩화면 구현
~~~
state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')

        console.log(movies.data.data.movies)
    }
    componentDidMount() {
        this.getMovies()
    }
    render() {
        const { isLoading } = this.state
        return (

            <div>
                {isLoading ? 'Loading...' : '영화 데이터 출력'}
            </div>
        )
    }
~~~
>   - stats 
   >  - isLoading : 로딩중을 확인하기위한 stats 
   >  - movies : api를 통해 불러온 값을 저장하기위한 배열 
>   - getMovies()
   >  - axios.get()을 통해 불러온 값을 mosvies에 저장
   >  - anync, await : 시간이 필요하다는것을 알리기 위한 키워드 
      >  -  실제 시간이 필요한 대상인 axios.get()함수 에는 await을 붙인다
>  - 영화 Api 데이터 확인
   >  - ```console.log(movies.data.data.movies)```






## [ 09월 29일 ]
   ### 학습내용
   1. git 브랜치 설정 
   
>   - git version 
>     git config --global init.defaultBranch main
>   - git config --list
>     git branch -m (이전이름) (현재이름) 
   2. prop-types - 입력값 들의 타입 정의
>   - 컴포넌트가 전달받은 props 가 원하는 값인지 확인해 주는 역할
>     - PropTypes.string.<b>isRequired</b> : 필수로 작성  
   3. state - 동적인 데이터를 다룰때 사용
   > - 클래스형 컴포넌트에서 사용
   > - render() 함수 
   >     - APP 컴포넌트가 JSX를 반환해야하지만 class형 컴포넌트에서는 바로 return을 사용할 수 없으므로 <br> render() 함수 내에서 return문을 사용한다
   > - state에 있는 값을 사용할때에는 this.state.(...)를 사용한다 
   > - State에 있는 값을 바꿀 때 this.setState를 사용한다
   >     - ex) this.setState({ count: this.state.count + 1 })
   ~~~ 
   import { Component } from 'react'
   class App extends Component {
      constructor(props){
        super(props)
        console.log('constructor')
      }
      componentDidMount(){
        console.log('componentDidMoun')
      }
      componentDidUpdate() {
           console.log('componentDidUpdate...goodbye')
      }
      state = {
           count: 0
     }
      add = () => {
        this.setState({ count: this.state.count + 1 })
      }
      minus = () => {
         this.setState({ count: this.state.count - 1 })
      }
      render() {
         return (
            <div>
                  <h1>Rhe number is: {this.state.count}</h1>
                  <button onClick={this.add}>Add</button>
                  <button onClick={this.minus}>Minus</button>
            </div>

           )
       }
   }
   ~~~
   4. 클래스형 컴포넌트의 생명주기 
   > - constructor() 함수 - component를 생성할때 State 값을 초기화하거나 메서드를 바인딩할 때 사용한다
   > - componentDidMount() 함수 - constructor() 실행 > render() 실행 > componentDidMount() 실행
   > - componentDidUpdate() 함수 - 버튼을 클릭하면 setState()함수 실행 > render()함수로 화면이 업데이트 > componentDidUpdate()실행
   > - componentDidMount() 함수 - 컴포넌트가 화면에서 떠날때 실행<br>
   ![image](https://user-images.githubusercontent.com/76157596/135557523-70d8310d-b204-47fb-a6d5-0a1e33879f9a.png)
## [ 09월 15일 ]
   ### 학습내용
>   - 컴포넌트가 무엇인지 알아보고 JSX를 학습 
>      - Potato.js 생성
>   - 컴포넌트의 데이터를 전달할때에 props를 사용
>      - App.js에 다양한 컴포넌트를 생성하여 이미지, key, 이름등을 출력
>      - array.map 을 사용해 배열 출력

## [ 09월 08일 ]
   ### 학습내용
>   - 깃 연결 및 세팅
>   - npx create-react-app 
>   - 리엑스 환경 세팅 
       - src폴더내 App.js,index.js제외 모두 삭제 
        package-lock.json 삭제
        app.js,index.js 파일 내 수정
>   - 리엑트 앱 실행 

 