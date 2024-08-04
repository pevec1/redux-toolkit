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
  const [list2, setList2] = useState({});
        const fetchOneUser = async () => {
      try {
        const data = await dispatch(fetchFilms(answer)).unwrap();
        console.log("success", setList2(data));
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
    console.log(e);
    setAnswer(String(e.target[0].value));
  }
    console.log(list2)
  console.log(Object.entries((list2.Search ?? [])).map(([id, subject], i) => (subject.Title)));
   const changeHandler = (e) => {
    console.log(e);
    const name = e.target.name;
    setVal(e.target.value);
  };

  const addFavorites = (id, imdb) => {
    localStorage.setItem(id, imdb);
  };

  if (list2.Response === "False") {
    return (
      <div>
        <div>Home</div>
        <form onSubmit={handlerSubmit}>
          Поиск{" "}
          <input name="text" onChange={changeHandler} value={valtext}></input>{" "}
          <Button type="submit">Answer</Button>
        </form>
        {list2.Error}
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
            {Object.entries(list2.Search ?? []).map(([id, subject], i) => (
              <tr key={i}>
                <td>{subject.Title}</td>
                <td>{subject.Type}</td>
                <td>{subject.Year}</td>
                <td>{subject.imdbID}</td>
                <td>
                  <Link to={"/card/" + subject.imdbID}>Card</Link>
                </td>
                <td><button type="button" onClick={() => addFavorites(subject.imdbID, subject.imdbID)}>+Add</button></td>
             </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
