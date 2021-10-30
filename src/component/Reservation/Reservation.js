import React, { Component } from "react";
import "./Reservation.css";
import { Container } from "reactstrap";
import axios from "axios";
// كل متبة انزلة لازم استدعيهة

import emailjs from "emailjs-com";

// axios post steps 1-write form with inputs  2-write state just keys:''  3-give to every inputs name=key from state as a container to input.value
// 4- give form pretty event called onSubmit={this.nameFunc}حتى لمن اضغط على submit عرض النتيجة كاملة  ت
//    5-give input event called onChange={this.nameFunc}  use to convert input.value to value of state and save it inside state key:"value from input"
// 6- onChange need somthind called event حتى تربط input with state by ''target''  in setSatet
// 7-onSubmt alson need event to stop run web page by preventDefault as a first step  and to save new enter data in array  isnide json file as exam   by axios.post
// save data in json file by axios.post

export class Reservation extends Component {
  state = {
    name: "",
    email: "",
    person: "",
    phoneNumber: "",
    date: "",
    time: "",
    note: "",
  };

  // name =NAme,date,time....etc = value enter inside input
  // event something ready in addEventlistner to take name from inputs name=any value isnide in inputs
  // event to get  entire input value use always with form
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //array group of information from different people saved in []
    });
  };

  sendEmail = (event) => {
    event.preventDefault(); // need ()
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res);
      });
    // (services uid,template i,event.target,from integration init(""))
    emailjs
      .sendForm(
        "service_2osbvbl",
        "template_ioqu23c",
        event.target,
        "user_SNPTszdvRiyww8wHwfkEQ"
      )
      .then((res) => {
        console.log(res);
      }); // write important information inde this func
  };

  // to use Emailjs we need name ,value,onsubmit
  render() {
    const { name, email, person, phoneNumber, date, time, note } = this.state;
    return (
      <div>
        <section className="formaa">
          <Container>
            <h1>Reservation</h1>
            <form onSubmit={this.sendEmail}>
              <div className="form-row">
                {/* <div className="firstline"> */}
                <div className="form-group col-md-3">
                  <label htmlFor="inputEmail4">name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    name="name"
                    onChange={this.changeHandler}
                    value={name}
                  />
                </div>
                <div className="form-group col-md-3 ">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control left"
                    id="inputEmail4"
                    name="email"
                    onChange={this.changeHandler}
                    value={email}
                  />
                </div>

                <br />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 mt-4  option">
                  <label htmlFor="inputState">persons</label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="person"
                    onChange={this.changeHandler}
                    value={person}
                  >
                    <option defaultValue> number of guests </option>
                    <option>number of guests 1</option>
                    <option>number of guests 2</option>
                    <option>number of guests 3</option>
                    <option>number of guests 4</option>
                  </select>
                </div>
                <div
                  className="form-group col-md-3 mt-4 mb-1 "
                  style={{ marginRight: "70px" }}
                >
                  <label htmlFor="inputEmail4">phone number </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputEmail4"
                    name="phoneNumber"
                    onChange={this.changeHandler}
                    value={phoneNumber}
                  />
                </div>
              </div>

              <div className="form-row">
                <div
                  className="form-group col-md-3"
                  style={{ marginRight: "70px" }}
                >
                  <label htmlFor="inputEmail4">date </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputEmail4"
                    name="date"
                    onChange={this.changeHandler}
                    value={date}
                  />
                </div>
                <div
                  className="form-group col-md-3  mr-4"
                  style={{ marginLeft: "-60px" }}
                >
                  <label htmlFor="inputEmail4">time</label>
                  <input
                    type="time"
                    className="form-control left"
                    id="inputEmail4"
                    name="time"
                    onChange={this.changeHandler}
                    value={time}
                  />
                </div>
              </div>
              <div className="note col-md-12 ">
                <label htmlFor="inputnote">your note</label>
                <input
                  type="tetx"
                  className="form-control left"
                  id="inputnote"
                  name="note"
                  onChange={this.changeHandler}
                  value={note}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </Container>
        </section>
      </div>
    );
  }
}

export default Reservation;
