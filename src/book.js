import React from 'react';
import {useState} from 'react';
import {books} from './books';
//import {total} from './books';
let sum;
function Book(props){
    const {id, img, amount} = props; 
    const [people,setRemove] = useState(books);
    const [increment,setIncrement] = useState(1);
     const removeItem = (id) => {
        let newbooks = people.filter((books) => books.id !== id);
        setRemove(newbooks);
    }
    return(
        // <div className="row justify-content-center col-sm-12 ml-1 mt-3 bg-light">
        // <table className=" p-2 row row-cols-0 row-cols-md-1">
        //     <tbody>
        //     <tr className="mb-3 p-2">
        <div>

        {people.map((book) => {
            const {id,img,amount} = book 
               return(
                <div key={id} className="row justify-content-center col-sm-12 ml-1 mt-3 bg-light">
                <table className=" p-2 row row-cols-0 row-cols-md-1">
                <tbody>
                <tr className="mb-3 p-2">
                <td><img className="img-thumbnail" src={img}></img></td>
                <td><button className="btn-danger btn-sm ml-3 ml-md-5"
                onClick={() => { setIncrement(increment+1);sum+=amount}}>+
                </button></td>
                <td><h5 className="mr-2 ml-2 mt-1">{increment}</h5></td>
                <td><button className="btn-danger btn-sm" onClick={() => { if(increment<=0){setIncrement(0)}else{setIncrement(increment-1);}}}>-</button></td>
                <td><h5 className="ml-5">${sum= increment*amount}</h5></td>
                <td><button className="btn-info ml-5 mb-1" onClick={() => removeItem(id)}>X</button></td>
                </tr>
                </tbody>
                </table>
                </div>
                );
            })}
             <h4>{sum}</h4>   
                        {/* <td><img className="img-thumbnail" src={img}></img></td>
            <td><button className="btn-danger btn-sm ml-3 ml-md-5"
             onClick={() => { setIncrement(increment+1);sum+=amount}}>+
             </button></td>
            <td><h5 className="mr-2 ml-2 mt-1">{increment}</h5></td>
            <td><button className="btn-danger btn-sm" onClick={() => { if(increment<=0){setIncrement(0)}else{setIncrement(increment-1);}}}>-</button></td>
            <td><h5 className="ml-5">${sum= increment*amount}</h5></td>
            <td><button className="btn-info ml-5 mb-1" onClick={() => removeItem(id)}>X</button></td>
        </tr>
        </tbody>
        </table>
        </div> to use props as data input remove all the commented lines*/}
        </div>
    );
}
export default Book;
