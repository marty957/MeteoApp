import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  console.log(params);

  const [info, setInfo] = useState({});
  const [five, setFive] = useState({});
  const fetchSingleCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=5a56e291256dbb45cfdf5772f7f19f00`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((obj) => {
        console.log(obj);
        setInfo(obj);
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchForFiveDays = () => {
    fetch(`api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&appid=5a56e291256dbb45cfdf5772f7f19f00`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((data) => {
        setFive({ data });
        console.log(five);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSingleCity();
    fetchForFiveDays();
  }, []);

  return (
    <>
      {info ? (
        <Container className="text-center mt-4 bg-primary-subtle border border-2 rounded-pill bg-l shadow">
          <h1 className="display-1 fw-bolder">{info.name}</h1>

          <h3>{info.weather[0].main}</h3>
          <p>{info.weather[0].description}</p>

          <span>
            <strong>Umidita: </strong>
            {info.main.humidity}%
          </span>
        </Container>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      A
    </>
  );
};

export default Details;
