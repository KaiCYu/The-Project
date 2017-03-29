//RECENT TRIPS

import React from 'react';
import ReactDOM from 'react-dom';
import TripEntry from './TripEntry.jsx';
import Until from '../lib/util.js'

class TripSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  showRecentTrip() {
    console.log('hi');
    Util.retrieveTripInfo()
  }

  //ADD CLICK HANDLER TO RETREIVE STORED STATE FROM DB
  render() {
    console.log('PROPS IN RECENT TRIPS', this.props);
    return(
      <div className='page-container'>
        <h1>Most Recent Trips</h1>
        <div className='trip-summary'>{this.props.data.recent.map((item,index) => {
          return (
            <p key={index} onClick={this.showRecentTrip}>{item.name}</p>
          )
        })}
        </div>
      </div>
    )
  }
}

export default TripSummary;
