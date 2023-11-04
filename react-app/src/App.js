// import {useState} from 'react';

// function Create() {
//     return <article>
//         <h2>Create</h2>
//         <form onSubmit={event=>{
//             event.preventDefault();
//             const title = event.target.title.value;
//             const body = event.target.body.value;
//             props.onCreate(title, body);
//         }}>
//             <p><input type="text" name="title" placeholder='title'/></p>
//             <p><textarea name='body' placeholder='body'></textarea></p>
//             <p><input type='submit' value='Create'></input></p>
//         </form>
//     </article>
// }

// function Header(props) {
//     console.log('props', props, props.title)
//     return <header>
//                 <h1><a href="/" onClick={function(event) {
//                     event.preventDefault();
//                     props.onChangeMode();
//                 }}>{props.title}</a></h1>
//             </header>
// }

// function Nav(props) {
//     const lst = []
//     for (let i=0; i<props.topics.length; i++) {
//         let t = props.topics[i];
//         lst.push(<li key = {t.id}>
//             <a id={t.id} href={'/read/' + t.id} onClick={event=>{
//                 event.preventDefault();
//                 props.onChangeMode(Number(event.target.id));
//             }}>{t.title}</a>
//         </li>)
//     }
//     return <nav>
//         <ol>
//             {lst}
//         </ol>
//     </nav>
// }

// function Article(props) {
//     return <article>
//     <h2>{ props.title }</h2>
//     { props.body }
// </article>
// }

// function App() {
//     const [mode, setMode] = useState('WELCOME');
//     const [id, setId] = useState(null);
//     const topics = [
//         {id:1, title:"html", body:"html is ..."},
//         {id:2, title:"css", body:"css is ..."},
//         {id:3, title:"js", body:"js is ..."}
//     ]
//     let content = null;
//     if (mode === 'WELCOME') {
//         content = <Article title="Welcome" body="Hello, WEB"></Article>
//     } else if (mode === 'READ') {
//         let title, body = null;
//         for (let i = 0; i < topics.length; i++) {
//             if (id === topics[i].id) {
//                 title = topics[i].title;
//                 body = topics[i].body;
//             }
//         }
//         content = <Article title={title} body={body}></Article>
//     } else if (mode === 'CREATE') {
//         content = <Create onCreate={(title, body) => {

//         }}></Create>
//     }
//     return (
//     <div className="App">
//         <Header title="WEB" onChangeMode={function() {
//             setMode('WELCOME');
//         }}></Header>
//         <Nav topics={topics} onChangeMode={(_id)=>{
//             setMode('READ');
//             setId(_id)
//         }}></Nav>
//         {content}
//         <a href='/create' onClick={event => {
//             event.preventDefault();
//             setMode('CREATE');
//         }}>Create</a>
//     </div>
//     );
// }

// export default App;






// import React, { Component } from 'react';

// class App extends Component {
//     state = {
//         posts: []
//     };

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://127.0.0.1:8000/api/');
//             const posts = await res.json();
//             this.setState({
//                 posts
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.posts.map(item => (
//                     <div key={item.id}>
//                         <div>{item.name}</div>
//                         <div>{item.age}</div>
//                         <div>{item.image}</div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default App;








// import './App.css';
// import RestAPI from "./RestAPI.js";
// import React from "react";

// function App() {
//   return (
//     <>
//     <div className="App">
//       <div className='auto-margin'>
//         <Route exact path="/">
//           <Header modal={modal}></Header>
//         </Route>

//         <Route exact path="/">
//           <Navi/>
//         </Route>

//         <Route exact path="/login">
//           <LoginModal setModal={setModal}></LoginModal>
//         </Route>
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;










// import { useEffect, useState } from 'react';
// // import './App.css';
// import UserList from 'http://127.0.0.1:8000/api/';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(()=> {
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
  
//     fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//     .then(response => response.json())
//     .then(result => setPhotos(result))
//     .catch(error => console.log('error'. error))  
//   }, [])
//   return (
//     <PhotoList photos={photos} />
//   );
// }

// export default App;







// import React from 'react';
// import RestAPI from './RestAPI';

// functuon App() {
//     return (
//         <div className='App'>
//             <header className='App-header'>
//                 <RestAPI />
//             </header>
//         </div>
//     );
// }

// export default App;






import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserResist from './components/UserRegist';
import { Link } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <h1>
                    <Link to="/">사용자 관리 페이지</Link>
                </h1>
                <Routes>
                    <Route exact path='/' element={<Header />}></Route>
                    <Route path='/users' element={<UserList />}></Route>
                    <Route path='/regist' element={<UserResist />}></Route>
                    <Route path='/users/:user_id' element={<UserDetail />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;