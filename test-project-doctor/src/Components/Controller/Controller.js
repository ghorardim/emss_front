import React, { Component } from 'react';
import './Controller.css';

class Controller extends Component {

  constructor(props) {
    super(props)
//    console.log(props);

  }

  render() {
    console.log(this.props.value.Appiontment);
    let output=null;

    if(this.props.value.Appiontment) {
      output=(
        <div className="Appiontment-box">
            <h5 className="ml-3 mt-3">Create Appiontment Room:   </h5>
            <div className="space mt-3">
                <h8 className="ml-5">Date: </h8>
                <input type="Date" size="4"/>
            </div>
            <div className="mt-3">
                <h8 className="ml-5">Start: </h8>
                <input type="time" size="4"/>
                <h8 className="ml-5">End: </h8>
                <input type="time" size="4"/>
                <h8 className="ml-5">Break: </h8>
                <input type="time" size="4"/>
            </div>
            <div className="mt-2">
                <h8 className="ml-5">Patient amount: </h8>
                <input type="text" size="4"/>
                <h8 className="ml-5 mr-5">Location: </h8>
                <input type="text" size="4"/>
            </div>
            <p className="ml-3">Address details:</p>
            <textarea className="ml-5" rows="4" cols="50"/>
            <div className="ml-3 mt-2">
                <h8>Avaliable  </h8>
                <input type="Radio"/>
                <button className="btn btn-outline-primary button">Submit</button>
            </div>
          </div>
      )
    }
    else if(this.props.value.Survey) {
       output=(
         <div className="Survey-box">
             <h5 className="ml-3 mt-3">Survey Disease:   </h5>
             <div className="mt-3">
                <h8 className="ml-5">Disease Name: </h8>
                <input type="type" size="4"/>
                <h8 className="ml-5">Filter Time: </h8>
                <input type="type" size="4"/>
             </div>
             <div className="announcement">
                <button className="btn btn-outline-primary">Create Announcement</button>
             </div>
        </div>
       )
    }



    return(
      <div>
       {output}
      </div>
    )
  }
}

export default Controller
