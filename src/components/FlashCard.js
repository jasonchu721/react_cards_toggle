import React from "react";
import { Card, Button, Icon, } from 'semantic-ui-react'


class Flashcard extends React.Component {
  state = { showAnswer: false }

  toggleAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }
  

  render() {
    const { flashcard: {id, title, answer}, remove,} = this.props
    return (
      <div>
        <Card.Group>
          <Card key={id}>
            <Card.Content header={title} />
            {
              this.state.showAnswer ? 
              <Card.Content description={answer} />
              :
              null
            }
            <Card.Content extra>
              <Button.Group>
                <Button color="inverted red" icon onClick={() => remove(id)}>
                  <Icon name='trash' />
                </Button>
                <Button color="purple" icon>
                  <Icon name='edit' />
                </Button>
                <Button color="inverted blue" icon onClick={() => this.toggleAnswer()}>
                  Show Answer
              </Button>
              </Button.Group>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}


export default Flashcard;