// اذا استخدمنة مكتبة use .js منحتاج نستخدم ال axios

import React, { Component, useRef, useState, useEffect } from "react";
import mydata from "./food.json";
import "./Chefs.css";
import Fuse from "fuse.js";
import Footer from "../Footer/Footer";

//  import axios from "axios";

const Chefs = () => {
  // const [chefs, setChefs] = useState('')
  // // 1-
  const [search, setsearch] = useState("");
  // from input as id
  const searchRef = useRef();
  // 2-built in doc lib
  const fuse = new Fuse(mydata, {
    isCaseSensitive: true,
    includeScore: true,
    keys: [
      //ابحث عن طريق الاسم من ملف food.json
      "name", // 'author.tags.value'
    ],
  });

  const onSearch = () => {
    setsearch(searchRef.current.value); //const searchRef = useRef()
  };

  const results = fuse.search(search); //search to search all data
  //ternary operator
  const dataSearchResult = search //search as state={search:''}
    ? results.map((result) => result.item) //rean take single items who this condiition is  isCaseSensitive: true,includeScore: true, is تنطبق عليهة
    : mydata; //data from file json

  const handlerSubmit = (e) => {
    e.preventDefault(); //stop refreash web page
  };

  return (
    <>
      <section className="chefs">
        <div className="container">
          <div className="row">
            <form onSubmit={handlerSubmit}>
              <input
                type="text"
                onChange={onSearch} //main function and all process happen in form write here so it's an engine of form
                name="chef"
                ref={searchRef} //as id use to declare  his input between others
                placeholder="search on your chef to ask what u want ..."
              />
              {/* coool if you put above procees fromon change to onClick the process also will work when u click on button   */}
              <button onClick={onSearch}>click </button>
            </form>
            <h1>our chefs </h1>
            <p>
              you can order special order by calling one of them as you want
            </p>
            {/* {hearer} */}
            <div className="d-flex cards ">
              {/* to get data from jsomn file and use fuse search js  */}
              {dataSearchResult.map((person, ind) => {
                return (
                  <div key={ind} className="col-lg-3 card">
                    <img src={person.img} />
                    <div className="text">
                      <h1>{person.name} </h1>
                      <h5>{person.job} </h5>
                      <button>Contact now </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
// }

export default Chefs;

// remember info
// componentDidMount() {
//   axios.get("food.json").then((res) => {
//     console.log(res.data.chefsInfo);
//     this.setState({
//       chefs: res.data.chefsInfo,
//     });
//   });
// }
// }

// handlerSubmit = (e) => {
//   e.preventDefault();
// };

// handleChenge = (e) => {
//   this.setState({ namess: e.target.value }); //1 only for namess
//   console.log(this.state.namess);
// };

// export class Chefs extends Component {
//   state = {
//     // chefs: [],

//     namess: "",
//   };

// componentDidMount() {
//   axios.get("food.json").then((res) => {
//     //when use fetch first then must convert data to data.json and then this.setState((chefs:res.data.chefsInfo))
//     console.log(res.data.chefsInfo);
//     this.setState({
//       chefs: res.data.chefsInfo,
//     });
//   });

//   // }
//  useEffect(() => {
//     axios.get("food.json").then((res) => {
//       //when use fetch first then must convert data to data.json and then this.setState((chefs:res.data.chefsInfo))
//       console.log(res.data.chefsInfo);
//       setChefs({
//         chefs: res.data.chefsInfo,
//       });
//     });
// }, [])

// render() {
//   // فكرة على البال
//   // let hearer=''
//   //   if (this.state.namess){
//   //     hearer = <h1>hello {this.state.namess}</h1>
//   //   }
//   // const { chefs } = this.state;
//   const chefsss = dataSearchResult.map((person, ind) => {
//     return (
//       <div key={ind} className="col-lg-3 card">
//         <img src={person.img} />
//         <div className="text">
//           <h1>{person.name} </h1>
//           <h4>{person.phone} </h4>
//           <h5>{person.job} </h5>
//         </div>
//       </div>
//     );
//   });

/*/*   color: rgb(255, 167, 5);
  color: rgba(0, 0, 0, 0.678);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  */

// .chefs.container.row h1 {
//   font - family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans - serif;
//   text - transform: uppercase;
//   color: rgba(0, 0, 0, 0.664);
//   margin - top: 100px;
// }

// .chefs.container.row p {
//   text - transform: capitalize;
//   font - size: 20px;
//   font - family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans - serif;
//   color: orange;
//   /* text-shadow: 1px 1px gray; */
// }
// /* */

// .chefs.container.row.cards{ margin - left: -30px; } */
