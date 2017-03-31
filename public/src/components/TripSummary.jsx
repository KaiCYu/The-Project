//RECENT TRIPS

import React from 'react';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import TripEntry from './TripEntry.jsx';
import Util from '../lib/util.js'

class TripSummary extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sumBill : Number('25.00'),
    //   sumTax : Number('3.00'),
    //   sumTip : Number('4.00'),
    //   sumTotal : Number('32.00'),
    //   memberCount : 3
    // }

    // this.sumBill = Number(this.props.data.sumBill);
    // this.sumTax = Number(this.props.data.sumTax);
    // this.sumTip = Number(this.props.data.sumTip);
    // this.sumTotal = Number(this.props.data.sumTotal);
    // this.memberCount = this.props.data.members.length;
    this.showRecentTripReceipt = this.showRecentTripReceipt.bind(this);
  }

  showRecentTripReceipt() {
    // console.log(this.props.data.username);
    // console.log('hi', this.props);
    // {adminName: this.props.username, tripName: this.props.tripName}

    //need to pass in trip name and admin name
    Util.retrieveTripInfo({adminName: this.props.data.username, tripName: event.target.innerHTML})
    this.props.updateTripSummary({ sumBill: Number('25.00') });

    // return <memberSummary/>
  }

  // <p key={index} onClick={this.showRecentTrip.bind(this)}>{item.name}</p>
  // <Link to="/summary" className='link'>dummy link</Link>
  // data={this.state}
  //ADD CLICK HANDLER TO RETREIVE STORED STATE FROM DB
  render() {
    console.log('PROPS IN RECENT TRIPS', this.props);
    console.log('state inside trip summary: ', this.state);
    return(
      <div className='page-container'>
        <h1>Most Recent Trips</h1>

        <div className='trip-summary'>{this.props.data.recent.map((item,index) => {
          return (
            <div>
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
