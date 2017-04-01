//RECENT TRIPS

import React from 'react';
import ReactDOM from 'react-dom';
import TripEntry from './TripEntry.jsx';
<<<<<<< HEAD
import Until from '../lib/util.js'
=======
import Util from '../lib/util.js'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
>>>>>>> attempting to fix recent trip link to membersummary

class TripSummary extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
  showRecentTrip() {
    console.log('hi');
    Util.retrieveTripInfo()
=======
  showRecentTripReceipt(event) {
    console.log(event.target.innerHTML);
    //need to pass in trip name and admin name
    // Util.retrieveTripInfo({adminName: this.props.username, tripName: event.target.innerHTML})
<<<<<<< HEAD
    // {adminName: this.props.username, tripName: this.props.tripName}
>>>>>>> attempting to fix recent trip link to membersummary
=======
    // this.props.updateTripSummary({ sumBill: Number('25.00') });

>>>>>>> added link for each trip element to redirect to receipt summary.
  }

  //ADD CLICK HANDLER TO RETREIVE STORED STATE FROM DB
  render() {
    console.log('PROPS IN RECENT TRIPS', this.props);
    return(
      <div className='page-container'>
        <h1>Most Recent Trips</h1>
        <div className='trip-summary'>{this.props.data.recent.map((item,index) => {
          return (
<<<<<<< HEAD
<<<<<<< HEAD
            <p key={index} onClick={this.showRecentTrip}>{item.name}</p>
=======
=======
            <div>
>>>>>>> added link for each trip element to redirect to receipt summary.
              <Link to="/summary"
                key={index}
                onClick={this.recent}
                >{item.name}
              </Link>
              <br></br>
            </div>
>>>>>>> attempting to fix recent trip link to membersummary
          )
        })}
        </div>
      </div>
    )
  }
}

export default TripSummary;
