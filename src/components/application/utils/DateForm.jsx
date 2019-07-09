import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

class DateForm extends Component {
  render() {
    return (
      <Form.Group as={Col}>
        <Form.Label>{this.props.label}</Form.Label>
      <Form.Control  value={this.props.value}
                         onClick={this.props.onClick} />
      </Form.Group>)
  }
}

export default DateForm;