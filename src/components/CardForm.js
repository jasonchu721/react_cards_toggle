import React from "react";
import {Form} from "semantic-ui-react"

class CardForm extends React.Component{
  state = {title: "", answer: ""}

  handlesubmit = (e) => {
      e.preventDefault()
      this.props.add(this.state)
      this.setState({ title: "", answer: ""})
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  render() {
    return(
      <Form onSubmit={this.handlesubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
        label="Card Title"
        placeholder="Card Title"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        />
        <Form.Input
        fluid
        label="Answer"
        placeholder="Answer"
        name="answer"
        value={this.state.answer}
        onChange={this.handleChange}
        />
        <Form.Button color="twitter">Submit</Form.Button>
      </Form.Group>
      </Form>
    )
  }
}



export default CardForm