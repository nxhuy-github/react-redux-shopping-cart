import React from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import './App.css';
import SubTotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import PromoCodeDiscount from './components/PromoCode/PromoCode'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.0875
    }, 
    () => {
      this.setState({
        estimatedTotal: this.state.pickupSavings + this.state.total + this.state.taxes
      })
    }
    )
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} /> 
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCodeDiscount 
            giveDiscount={() => {this.giveDiscountHandler()}}
            isDisabled={this.state.disablePromoButton}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
