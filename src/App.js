import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {books,total} from './books';
import Book from './book';
 function App() {  
  return (
    <div className="container col-md-8 col-sm-12 bg-primary">
      {/* {console.log(books.total)}
      {books.map((book)=>{
        return(
        // <Book key={book.id} {...book}></Book>the spread operator is used here we can also use book={book} wherein here
          //remove the commented statements to pass as props//we hae passes object but in the above method we spread the object and pass it  
        );
      })} */}
        <Book></Book>
      </div>
  );
}

export default App;
