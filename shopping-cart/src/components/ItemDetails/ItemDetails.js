import React, { Component } from 'react'
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap/lib'

class ItemDetails extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => {this.setState({open: !this.state.open})}}
        >
        {this.state.open === false ? `See` : `Hide `} item details
        {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img 
                    width={100} 
                    height={100} 
                    alt="thumbnail" 
                    src="https://i5.walmartimages.com/asr/c6debe73-ce33-4c56-935b-d718be5046ad_1.245303aeb0df89657bb70125ee5fac11.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" 
                  />
                </Media.Left>
                <Media.Body>
                  <p>Essential by OFM ESS 3085 Gaming Chair, Rose</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`} </strong>
                      <hr />
                      <strong className="price-strike" > {`$${this.props.price}`} </strong>
                    </Col>
                    <Col md={6}> Qty: 1 </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default ItemDetails