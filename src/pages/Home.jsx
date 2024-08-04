import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../slices/sliceFilms";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

export default function Home() {
  const [valtext, setVal] = useState("");
  const [answer, setAnswer] = useState("");
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();
          const fetchOneUser = async () => {
      try {
        const data = await dispatch(fetchFilms(answer)).unwrap();
        console.log("success", (data));
      } catch (err) {
        console.log("error", `Fetch failed: ${err.message}`);
      }
    };
useEffect(() => {

    fetchOneUser();
  }, [answer]);


  const handlerSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    setAnswer(String(e.target[0].value));
  }
   const changeHandler = (e) => {
    const name = e.target.name;
    setVal(e.target.value);
  };

  const addFavorite = (id, imdb) => {
    localStorage.setItem(id, imdb);
  };

  if (list.value.Response === "False") {
    return (
      <div>
        <div>Home</div>
        <form onSubmit={handlerSubmit}>
          Поиск{" "}
          <input name="text" onChange={changeHandler} value={valtext}></input>{" "}
          <Button type="submit">Answer</Button>
        </form>
        {list.value.Error}
      </div>
    );
  } else {
    return (
      <div>
        <div>Home</div>
        <form onSubmit={handlerSubmit}>
          Поиск{" "}
          <input name="text" onChange={changeHandler} value={valtext}></input>{" "}
          <Button type="submit">Answer</Button>
        </form>
        <Table bordered striped hover variant="dark" size="sm">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Type</th>
              <th scope="col">Year</th>
              <th scope="col">imdbID</th>
              <th scope="col"></th>
              <th scope="col">favorites</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(list.value.Search ?? []).map(([id, subject], i) => (
              <tr key={i}>
                <td>{subject.Title}</td>
                <td>{subject.Type}</td>
                <td>{subject.Year}</td>
                <td>{subject.imdbID}</td>
                <td>
                  <Link to={"/card/" + subject.imdbID}>Card</Link>
                </td>
                <td><button type="button" onClick={() => addFavorite(subject.imdbID, subject.imdbID)}>+Add</button></td>
             </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
