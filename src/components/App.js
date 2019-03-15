import React, { Component } from 'react';
import { Header, Container, Button, Icon, Segment } from "semantic-ui-react";
import Cards from "./Cards";
import CardForm from "./CardForm";

class App extends Component {
  state = {
    flashcards: [
      {id: 1, title: "What is love?", answer: "baby don't hurt me"},
      {id: 2, title: "Who am I?", answer: "I don't know"},
      {id: 3, title: "Merp?", answer: "Mep"},
    ],
    showForm: false,
  }


  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    let flashcard = { id: this.getId(), ...cardData, }
    this.setState({ flashcards: [...this.state.flashcards, flashcard] })
  }

  removeCard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
       return flashcard
    })
    this.setState({ flashcards: [...flashcards]})
  }    

  toggleForm = () => this.setState({ showForm: !this.state.showForm})
  

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1" style={{ paddingTop: "25px" }}>Flashy React Cards</Header>
        <Segment basic>
          <Button icon color='blue' onClick={this.toggleForm}>
            <Icon name = {this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          { this.state.showForm ? <CardForm add={this.addCard} /> : null }
        </Segment>
        <hr />
        <br />
        <Cards flashcards={this.state.flashcards} remove={this.removeCard} toggle={this.toggleAnswer} />
      </Container>
    );
  }
}

export default App;