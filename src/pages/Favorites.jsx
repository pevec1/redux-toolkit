import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../slices/sliceFilms";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CardMini from "../components/CardMini";

export default function Favorites() {
  const [massiv, setMassiv] = useState([]);
  let temp =[]
for (let index = 0; index < localStorage.length; index++) {
  const key = localStorage.key(index);
  const value = localStorage.getItem(key);
  temp.push(value);
  }
 useEffect(() => { setMassiv(temp);}, []);

 


  const deleteFavorites = (id) => {
    localStorage.removeItem(id);
    window.location.reload();
  };
   
  // massiv.forEach((element, i, mas) => {
  //   const key = localStorage.key(i);
  //   const value = localStorage.getItem(key);
  //   element = value;
  //   })
  //        ;
console.log(massiv);


  
  return (
    <div>
      <div>Favorites</div>;
      <Table bordered striped hover variant="dark" size="sm">
        <thead>
          <tr>
            <th scope="col">Card</th>
            <th scope="col">cards</th>
            <th scope="col">favorites</th>
          </tr>
        </thead>
        <tbody>
          {massiv.map((subject, i) => (
            <tr key={i}>
              <td><CardMini imdb={subject}/></td>
              <td>
                <Link to={"/card/" + subject}>Card</Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    deleteFavorites(subject)
                  }
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
