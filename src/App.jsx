/* eslint-disable jsx-a11y/anchor-has-content */

import './App.css';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
];

function App() {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search /> {/* Инстонация - Instantiate - создать экземпляр из компонента */}

      <List />

      <hr />

      </div>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />
    </div>
  );
}

      <hr /> 

      <ul>
          {list.map(function (item) {
            return ( 
            <li key={item.objectID}>
              <span>
                <a href={item.url}> {item.title}</a>
              </span>
             </li>
            );
          })}
      </ul>
    </div>
  );
}

    

export default App; 