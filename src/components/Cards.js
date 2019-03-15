import React from "react";
import FlashCard from "./FlashCard"

class Cards extends React.Component {


  render() {
    return(
      <div>
      {   
      this.props.flashcards.map( flashcard => (
     <FlashCard key={flashcard.id} flashcard={flashcard} remove={this.props.remove} toggle={this.props.toggle} />
     ))
    }
  </div>
  )}
}

export default Cards;