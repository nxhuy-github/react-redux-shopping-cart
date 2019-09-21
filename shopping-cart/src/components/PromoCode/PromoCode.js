import React, { Component } from 'react'
import { Button, Collapse, Well, Form, Col, Row, FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib'

class PromoCodeDiscount extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      value: ""
    }
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => {this.setState({open: !this.state.open})}}
          className="promo-code-button"
          bsStyle="link"
        >
        {this.state.open === false ? `Apply ` : `Hide `}
        promo code
        {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open} >
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>
                      <FormControl 
                        type="text"
                        placeholder="Enter promo code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      block
                      bsStyle="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount} 
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default PromoCodeDiscount