import { Alert, Container } from "react-bootstrap";
import InputField from "./Input";

const Welcome = () => {
  return (
    <>
      <Container className="mt-3">
        <Alert variant="info">
          <Alert.Heading className="display-2 text-center fw-bold">IL METEO</Alert.Heading>
          <p className="fs-2 text-center fw-bold">Dimmi dove sei e ti ti dirò cosa indossare</p>
        </Alert>
      </Container>
      <InputField />
    </>
  );
};

export default Welcome;
