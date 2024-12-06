import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* import { Link } from "react-router-dom"; */

const InputField = () => {
  const [city, setCity] = useState({
    city: ""
  });

  const Navigate = useNavigate();

  const fetchForCoordinates = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.city}&appid=5a56e291256dbb45cfdf5772f7f19f00`)
      .then((resp) => {
        if (resp.ok) {
          alert("invio");
          console.log(resp);
          return resp.json();
        }
      })
      .then((information) => {
        const { lat, lon } = information[0];
        console.log(lat);
        console.log(lon);

        Navigate(`/details/${lat}/${lon}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="Milano">
          <Form.Label className="fw-bold text-center">CITTA</Form.Label>
          <Form.Control type="text" placeholder="Milano" value={city.city} onChange={(e) => setCity({ ...city, city: e.target.value })} required />
        </Form.Group>
      </Form>
      <Button variant="success" onClick={fetchForCoordinates}>
        Invia
      </Button>
    </Container>
  );
};

export default InputField;
