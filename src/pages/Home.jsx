import { Component } from "react";
import NetflixNav from "../components/NetflixNav";
import NetflixFooter from "../components/NetflixFooter";
import { Container } from "react-bootstrap";
import NetflixHeader from "../components/NetflixHeader";
import NetflixGallery from "../components/NetflixGallery";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

class Home extends Component {
  /* Cambiare stato per vedere le altre due pagine  ;) */
  state = {
    home: true,
    profile: false,
    settings: false,
  };
  render() {
    return (
      <>
        <NetflixNav />
        {this.state.home && (
          <Container>
            <NetflixHeader />
            <NetflixGallery search="Stranger things" />
            <NetflixGallery search="Star Wars" />
            <NetflixGallery search="Lord of the ring" />
          </Container>
        )}
        {this.state.profile && (
          <Container>
            <Profile />
          </Container>
        )}
        {this.state.settings && <Settings />}
        <NetflixFooter />
      </>
    );
  }
}

export default Home;
