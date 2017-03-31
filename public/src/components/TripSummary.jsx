//RECENT TRIPS

import React from 'react';
import ReactDOM from 'react-dom';
import TripEntry from './TripEntry.jsx';
import Util from '../lib/util.js'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class TripSummary extends React.Component {
  constructor(props) {
    super(props);

  }

  showRecentTripReceipt(event) {
    console.log(event.target.innerHTML);
    //need to pass in trip name and admin name
    // Util.retrieveTripInfo({adminName: this.props.username, tripName: event.target.innerHTML})
    // {adminName: this.props.username, tripName: this.props.tripName}
  }

  //ADD CLICK HANDLER TO RETREIVE STORED STATE FROM DB
  render() {
    console.log('PROPS IN RECENT TRIPS', this.props);
    return(
      <div className='page-container'>
        <h1>Most Recent Trips</h1>
        <div className='trip-summary'>{this.props.data.recent.map((item,index) => {
          return (
              <Link to="/summary"
                key={index}
                onClick={this.showRecentTripReceipt}
                >{item.name}
              </Link> <br></br>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default TripSummary;
