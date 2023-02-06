import React, { useReducer, useRef, useMemo, useEffect } from "react";
import Style from "./style";
import Button from "../../Components/Button/Button";
import Services from "./services/Services";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "./testimonials/Testimonials";
import Gallery from "./Gallery/Gallery";
import NavBar from "../../Components/navBar/NavBar";
// import Clients from "./Clients/Clients";
import AboutUs from "./AboutUs/AboutUs";
import PlainHorizontalCards from "../../Components/Cards/PlainHorizontalCards";

const initialState = {
  isHeaderVisible: true,
  displayOS: "",
};

const reducerHandler = (state, action) => {
  switch (action.type) {
    case "SET_HEADERVISIBLE":
      return { [action.key]: action.value };
    case "SET_DISPLAYOS":
      return { [action.key]: action.value };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducerHandler, initialState);

  const headerRef = useRef(null);
  // console.log("headerRef", headerRef.current);

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0.85,
      rootMargin: "0px",
    };
  }, []);

  // useRef does not render immediately,
  // so it can't be used in the same scope as it was created,
  // Hence, the need for putting it in a useEffect to create a different scope or block.
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        dispatch({
          type: "SET_HEADERVISIBLE",
          value: true,
          key: "isHeaderVisible",
        });
      } else {
        dispatch({
          type: "SET_HEADERVISIBLE",
          value: false,
          key: "isHeaderVisible",
        });
      }
    }, options);

    if (headerRef.current) observer.observe(headerRef.current);

    navigator.userAgent.indexOf("Win") !== -1 &&
      dispatch({
        type: "SET_DISPLAYOS",
        value: "Windows",
        key: "displayOS",
      });
    navigator.userAgent.indexOf("Mac") !== -1 &&
      dispatch({
        type: "SET_DISPLAYOS",
        value: "Mac",
        key: "displayOS",
      });
    navigator.userAgent.indexOf("Linux") !== -1 &&
      dispatch({
        type: "SET_DISPLAYOS",
        value: "Linux",
        key: "displayOS",
      });
    navigator.userAgent.indexOf("Android") !== -1 &&
      dispatch({
        type: "SET_DISPLAYOS",
        value: "Android",
        key: "displayOS",
      });
    navigator.userAgent.indexOf("like Mac") !== -1 &&
      dispatch({
        type: "SET_DISPLAYOS",
        value: "iOS",
        key: "displayOS",
      });
  }, [options]);

  return (
    <Style>
      <NavBar isHeaderVisible={state.isHeaderVisible} />
      <div className="header" id="homeHeader" ref={headerRef}>
        <p id="headerTitle">
          High Definition <br />
          sketches
        </p>

        <p>Customized 2D and 3D designs</p>
        <div className="btnCont">
          <Button> Learn More </Button>
        </div>
        <div className="happyClient">
          <PlainHorizontalCards />
        </div>
      </div>
      {/* <Clients /> */}
      <Services />
      {state.displayOS !== "iOS" && <div className="parallax1"></div>}

      <AboutUs />
      <Testimonials />
      {state.displayOS !== "iOS" && (
        <div className="parallax2">
          <div className="leadCaption">
            <div id="leadCaption">
              "With over 15 years of experience in delivering quality designs,
              we are sure to provide what you want with a quality compared to
              none"
            </div>

            <p id="leadTitle">
              Arch Omofoma Osagie <br /> <span>Lead Architect</span>
            </p>
          </div>
        </div>
      )}

      {state.displayOS === "iOS" && (
        <div className="leadCaption">
          <div id="leadCaption">
            "With over 15 years of experience in delivering quality designs, we
            are sure to provide what you want with a quality compared to none"
          </div>

          <p id="leadTitle">
            Arch Omofoma Osagie <br /> <span>Lead Architect</span>
          </p>
        </div>
      )}

      <Gallery />
      <Footer />
    </Style>
  );
};

export default Home;
