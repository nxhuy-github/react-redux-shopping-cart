import React from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import './App.css';
import SubTotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 100,
      pickupSavings: -3.85
    }
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
        </Grid>
      </div>
    );
  }
}

export default App;
