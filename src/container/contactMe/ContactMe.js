import React from "react";
import imgBack from "../../../src/assets/images/mailz1.jpeg";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import Footer from "../../container/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            Get In Touch 📧
          </h2>{" "}

        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send an Email!</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form >
            <p></p>
            <label >Name</label>
            <h3 className="textInfoC">Barbara Gagro</h3>
            

            <label className="paddinLabel">Email</label>
            <h3 className="textInfoC">barbaragagro1@gmail.com</h3>

            <label className="paddinLabel">Phone Number</label>
            <h3 className="textInfoC">+381616048949</h3>

            <label ></label>
             <h3 className="paddingCtop">Contact Me!</h3>

            <button className="send-btn">
            <a className="hrefC" href="https://mail.google.com/">
                go to Gmail
                <i className="fa fa-paper-plane"></i>
               
               </a>
            </button>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}