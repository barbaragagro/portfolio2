import React, { useState } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import "./Projects.css";
import PopUp from "./PopUp";
import faceRecognitionImage2 from "./face-recognition-image2.PNG";
import argameImage from "./argame2.png";
import restaurantsImage from "./restaurantsApp.PNG";
import cryptoImage from "./crypto.jpg";
import focusImage from "./focustime.png";
import "./PopUp.css";

export default function Projects(props) {
  const [trigger, setTrigger] = useState(false);
  const [noScroll, setNoScroll] = useState(false);
  const [argameTrigger, setArgameTrigger] = useState(false);
  const [RestaurantsTrigger, setRestaurantsTrigger] = useState(false);
  const [CryptoTrigger, setCryptoTrigger] = useState(false);
  const [FocusTrigger, setFocusTrigger] = useState(false);

  noScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div
      className="fade-in about-me-container screen-container"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"Projects"} subHeading={"My work"} />
        <div className="about-me-card">
          <div className="project-details">
            {/* PERSONAL WEBSITE */}
            <div className="projectClass">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Personal Portfolio Website`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, JavaScript, RXJS, React JS,
              Bootstrap etc.
            </div>
            <div className="proj-heading-description">
              A Personal Portfolio website, compatible to mobile phones, tablets
              and PCs, to showcase all my details and projects at one place.
            </div>
            <div className="paddingClass about-me-options">
              <a href="https://github.com/barbaragagro/barbaras-portfolio">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* MEALS TO GO */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`MEALS TO GO`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: React Native.
            </div>
            <div className="proj-heading-description">
              IOS and Android mobile app for displaying restaurants from a mock
              file to a map.
            </div>
            <div className="paddingClass about-me-options">
              <button
                onClick={() => {
                  setRestaurantsTrigger(true);
                  setNoScroll(true);
                }}
                className=" btn primary-btn"
              >
                {" "}
                See Pictures of the App{" "}
              </button>
              <a href="https://github.com/barbaragagro/ReactNativeMealsToGo">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
              <PopUp
                trigger={RestaurantsTrigger}
                setTrigger={setRestaurantsTrigger}
              >
                <img
                  className="imagec"
                  alt="restaurants app"
                  src={restaurantsImage}
                ></img>

                <button
                  onClick={() => {
                    setRestaurantsTrigger(false);
                    setNoScroll(false);
                  }}
                  className="btn primary-btn closebtnM"
                >
                  close
                </button>
              </PopUp>
            </div>

            {/* WEBSITE ANTDESIGN */}
            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`AntDesign Website`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, JavaScript, React JS, AntDesign.
            </div>
            <div className="proj-heading-description">
              Frontend website created with the help of React & AntDesign.
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://barbaragagro.github.io/antdesign-website/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/antdesign-website">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* CRYPTO */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Crypto coin app`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: React Native, expo, axios...
            </div>
            <div className="proj-heading-description">
              React Native application for displaying crypto coin prices from an
              api.
            </div>
            <div className="paddingClass about-me-options">
              <button
                onClick={() => {
                  setCryptoTrigger(true);
                  setNoScroll(true);
                }}
                className=" btn primary-btn"
              >
                {" "}
                See Picture of the App{" "}
              </button>
              <a href="https://github.com/barbaragagro/Crypto-coin-app">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>

              <PopUp trigger={CryptoTrigger} setTrigger={setCryptoTrigger}>
                <img
                  className="imageAR"
                  alt="crypto pic"
                  src={cryptoImage}
                ></img>

                <button
                  onClick={() => {
                    setCryptoTrigger(false);
                    setNoScroll(false);
                  }}
                  className="btn primary-btn closebtnAR"
                >
                  close
                </button>
              </PopUp>
            </div>

            {/* AR GAME */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Android AR video game`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: C#, Unity.
            </div>
            <div className="proj-heading-description">
              Android AR video pet game.
            </div>
            <div className="paddingClass about-me-options">
              <button
                onClick={() => {
                  setArgameTrigger(true);
                  setNoScroll(true);
                }}
                className=" btn primary-btn"
              >
                {" "}
                See Picture of the Game{" "}
              </button>

              <PopUp trigger={argameTrigger} setTrigger={setArgameTrigger}>
                <img className="imageAR" alt="face pic" src={argameImage}></img>

                <button
                  onClick={() => {
                    setArgameTrigger(false);
                    setNoScroll(false);
                  }}
                  className="btn primary-btn closebtnAR"
                >
                  close
                </button>
              </PopUp>
            </div>

             {/* KANBAN BOARD*/}

             <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Kanban Board`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: Vite, Typescript, HTML, CSS, React JS...
            </div>
            <div className="proj-heading-description">
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://barbaragagro.github.io/kanban-board/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/kanban-board">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

{/* focus time */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Focus app`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: React Native, expo.
            </div>
            <div className="proj-heading-description">
              React Native application for setting timer for focusing on a certain task.
            </div>
            <div className="paddingClass about-me-options">
              <button
                onClick={() => {
                  setFocusTrigger(true);
                  setNoScroll(true);
                }}
                className=" btn primary-btn"
              >
                {" "}
                See Picture of the App{" "}
              </button>
              <a href="https://github.com/barbaragagro/focustime">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>

              <PopUp trigger={FocusTrigger} setTrigger={setFocusTrigger}>
                <img
                  className="imageAR"
                  alt="focus pic"
                  src={focusImage}
                ></img>

                <button
                  onClick={() => {
                    setFocusTrigger(false);
                    setNoScroll(false);
                  }}
                  className="btn primary-btn closebtnAR"
                >
                  close
                </button>
              </PopUp>
            </div>


            {/* FACE RECOGNITION */}
            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Web app for face recognition in images`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, JavaScript, Bootstrap, React JS,
              PostegreSQL, Express Js, Node Js etc.
            </div>
            <div className="proj-heading-description">
              Web application that has it's own SQL database, where users can
              sign in or register as new user. Then paste any image link,
              software recognizes facial features and puts a smiley face over
              it. Also software remember how many photos user pasted in.
            </div>
            <div className="paddingClass about-me-options">
              <button
                onClick={() => {
                  setTrigger(true);
                  setNoScroll(true);
                }}
                className=" btn primary-btn"
              >
                {" "}
                See Picture of the Site{" "}
              </button>
              <a href="https://github.com/barbaragagro/face-recognition-app">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
              <PopUp trigger={trigger} setTrigger={setTrigger}>
                <img
                  className="imagec"
                  alt="face pic"
                  src={faceRecognitionImage2}
                ></img>

                <button
                  onClick={() => {
                    setTrigger(false);
                    setNoScroll(false);
                  }}
                  className="btn primary-btn closebtn"
                >
                  close
                </button>
              </PopUp>
            </div>

            {/* ROBOFRIENDS */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Robofriends App`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, JavaScript, React JS, Bootstrap etc.
            </div>
            <div className="proj-heading-description">
              React app that includes Robohash API. App has a search box wher
              user can search for any robot.
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://barbaragagro.github.io/robofriends-app/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/robofriends-app">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* income calculator APP */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Income Calculator App`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, TailwindCSS, JavaScript, React JS,
              WebPack...
            </div>
            <div className="proj-heading-description">
              Gross and Net calculator. Single page app created from scratch,
              project configured manually, without use of the create-react-app
              or similar commands. Frameworks used: ReactJS, TailwindCSS.
              Tooling used: Yarn, Babel, ESLint, Prettier. Project contains
              build scripts configured for WebPack and supports both DEV and
              PROD builds.
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://barbaragagro.github.io/Income-calculator/public/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/Income-calculator">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* hangman APP */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`HangMan App`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, TypeScript, React JS, Vite.
            </div>
            <div className="proj-heading-description">
              HangMan app made with Vite, TypeScript and React. App randomly
              picks a word from a json file, users has 6 tries to guess the
              word. Every time user fails to pick correct letter, part of
              HangMans body appers on the screen. If the word contains the
              letter user chose, letter becomes blue and appers in the right
              spot. If the word doesn't contain the letter, then letter becomes
              disabled, so the user can't make the same mistake twice. User can
              play with keyboard or pressing letters on the screen with the
              mouse.{" "}
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://barbaragagro.github.io/hangman-app/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/hangman-app">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* REMINDER APP */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Reminder App`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, JavaScript, React JS, Redux,
              Bootstrap.
            </div>
            <div className="proj-heading-description">
              Reminder app made with React and Redux. App uses cookies, so it
              remembers the reminders user saved even when app reloads. It can
              add and delete reminders with date and time. Also has a CLEAR ALL
              button.
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="barbaragagro.github.io/reminder-app/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/reminder-app">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* COUNTDOWN APP */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Countdown App`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, JavaScript, React JS, Bootstrap.
            </div>
            <div className="proj-heading-description">
              Countdown app made with react.js and bootstrap.
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="barbaragagro.github.io/countdown.app/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/countdown.app">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>

            {/* TYPESCRIPT */}

            <div className="projectClass project-between">
              <h3>
                {" "}
                <i className="bulletClass fa-solid fa-laptop-code"></i>{" "}
                {`Typescript Project`}{" "}
              </h3>
            </div>
            <div className="proj-sub-heading">
              {" "}
              Technologies Used: HTML, CSS, TypeScript, React JS, Bootstrap.
            </div>
            <div className="proj-heading-description">
              Typescript and React app with Parallax scrolling effect.
            </div>
            <div className="paddingClass about-me-options">
              <button className=" btn primary-btn">
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://barbaragagro.github.io/typescript.practice/"
                >
                  {" "}
                  Visit Site{" "}
                </a>
              </button>
              <a href="https://github.com/barbaragagro/typescript.practice">
                <button className="btn highlighted-btn">
                  See GitHub Repository
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
