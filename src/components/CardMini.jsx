/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilm } from "../slices/sliceFilms";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

export default function Card({imdb}) {
  const params = useParams();
  const [valtext, setVal] = useState("");
  const [answer, setAnswer] = useState("");
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [list2, setList2] = useState({});
  useEffect(() => {
    const fetchOneUser = async () => {
      try {
        const data = await dispatch(fetchFilm(imdb)).unwrap();
        console.log("success", setList2(data));
      } catch (err) {
        console.log("error", `Fetch failed: ${err.message}`);
      }
    };

    fetchOneUser();
  }, [answer]);

  let temp;
  console.log(list2);

  return (
    <div>
      <div>Card</div>
      <div>
        <Table bordered striped hover variant="dark" size="sm">
          {[list2].map((subject, i) => (
            <tbody key={i}>
              <tr>
                <td>{i + 1}</td>
                <td>{i + 1}</td>
              </tr>
              <tr>
                <td>imdbID</td>
                <td>{subject.imdbID}</td>
              </tr>
              <tr>
                <td>Actors</td>
                <td>{subject.Actors}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>{subject.Director}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>{subject.Genre}</td>
              </tr>
              <tr>
                <td>Poster</td>
                <td>
                  <img src={subject.Poster} />
                </td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{subject.Runtime}</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>{subject.Title}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{subject.Year}</td>
              </tr>
              <tr>
                <td>imdbRating</td>
                <td>{subject.imdbRating}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
