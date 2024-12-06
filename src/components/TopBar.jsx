import { Container, Image, Navbar } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="https://cdn.dribbble.com/users/77598/screenshots/5609474/media/e2d4541be306e6cf3ad364839f2666ac.png?resize=800x600&vertical=center0"
            roundedCircle
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default TopBar;
