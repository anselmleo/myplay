import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import SignInModal from "../../components/signInModal/SignInModal"
import Carousel from "../../components/carousel/Carousel2";
import Style from "./LandingPage.module.css";


function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);
  console.log("showModal", showModal);

  return (
    <div className={Style.body}>
      <Navbar className={Style.nav}>
        <span className={Style.logo}>Playstix</span>
        <Button className={Style.signinButton} onClick={handleShowModal}>SIGN IN</Button>
      <SignInModal className={Style.SignInModal} show={showModal} handleShow={handleShowModal} />
      </Navbar>
      <div className={Style.contentContainer}>
        <div className={Style.contentTitle}>
          Unlimited movies,
          <br />
          games, and more.
        </div>
        <div className={Style.contentSubtitle}>
          Watch anywhere, Play anytime
        </div>

        <Button className={Style.submit}>
          Signup for free <i className="ml-2 fas fa-greater-than"></i>
        </Button>
      </div>

      <div className={Style.contentCarousel}>
        <Carousel />
      </div>

    </div>
  );
}

export default LandingPage;
