import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilm } from "../slices/sliceFilms";
import Table from "react-bootstrap/Table";

export default function Card() {
  const params = useParams();
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOneUser = async () => {
      try {
        const data = await dispatch(fetchFilm(params.id)).unwrap();
        console.log("success", data);
      } catch (err) {
        console.log("error", `Fetch failed: ${err.message}`);
      }
    };

    fetchOneUser();
  }, []);

  return (
    <div>
      <div>Card</div>
      <div>
        <Table bordered striped hover variant="dark" size="sm">
          {[list.value].map((subject, i) => (
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
                <td>Awards</td>
                <td>{subject.Awards}</td>
              </tr>
              <tr>
                <td>BoxOffice</td>
                <td>{subject.BoxOffice}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{subject.Country}</td>
              </tr>
              <tr>
                <td>DVD</td>
                <td>{subject.DVD}</td>
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
                <td>Language</td>
                <td>{subject.Language}</td>
              </tr>
              <tr>
                <td>Plot</td>
                <td>{subject.Plot}</td>
              </tr>
              <tr>
                <td>Poster</td>
                <td>
                  <img src={subject.Poster} />
                </td>
              </tr>
              <tr>
                <td>Production</td>
                <td>{subject.Production}</td>
              </tr>
              <tr>
                <td>Rated</td>
                <td>{subject.Rated}</td>
              </tr>
              <tr>
                <td>Released</td>
                <td>{subject.Released}</td>
              </tr>
              <tr>
                <td>Response</td>
                <td>{subject.Response}</td>
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
                <td>Type</td>
                <td>{subject.Type}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{subject.Website}</td>
              </tr>
              <tr>
                <td>Writer</td>
                <td>{subject.Writer}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{subject.Year}</td>
              </tr>
              <tr>
                <td>imdbRating</td>
                <td>{subject.imdbRating}</td>
              </tr>
              <tr>
                <td>imdbVotes</td>
                <td>{subject.imdbVotes}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
