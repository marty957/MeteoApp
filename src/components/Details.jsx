import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  console.log(params);
  const [info, setInfo] = useState({});
  const [weather, setWeather] = useState([]);
  const [main, setMain] = useState({});

  const [wind, setWind] = useState({});
  const [five, setFive] = useState({});
  const fetchSingleCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=5a56e291256dbb45cfdf5772f7f19f00`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((obj) => {
        if (obj) {
          setInfo(obj);

          setWeather(obj.weather);
          console.log(weather);
          setMain(obj.main);
          console.log(main);
          setWind(obj.wind);
          console.log(wind);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchForFiveDays = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&appid=5a56e291256dbb45cfdf5772f7f19f00`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((data) => {
        if (data) {
          setFive(data.list);
          console.log(five);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSingleCity();
    if (info) {
      setInfo(info);
      console.log(info);
    }
    fetchForFiveDays();
  }, []);

  return (
    <>
      {info && weather.length > 0 && main.humidity && wind.speed ? (
        <Container className="text-center mt-4 bg-primary-subtle border border-2 rounded-pill bg-l shadow">
          <h1 className="display-1 fw-bolder">{info.name}</h1>

          <h3>{weather[0]?.main}</h3>
          <p>{weather[0]?.description}</p>

          <span>
            <strong>Umidita: </strong>
            {main.humidity}%
          </span>
        </Container>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Details;
