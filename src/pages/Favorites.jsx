import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import CardMini from "../components/CardMini";

export default function Favorites() {
  let massive = [];
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    massive.push(value);
  }
  
  const deleteFavorites = (id) => {
    localStorage.removeItem(id);
    window.location.reload();
  };

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
          {massive.map((subject, i) => (
            <tr key={i}>
              <td>
                <CardMini imdb={subject} />
              </td>
              <td>
                <Link to={"/card/" + subject}>Card</Link>
              </td>
              <td>
                <button type="button" onClick={() => deleteFavorites(subject)}>
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
