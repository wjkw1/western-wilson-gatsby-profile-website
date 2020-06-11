import React, { useState } from "react"
import Row from "./Row"
import Button from "../../Common/Button"

const CardSection = props => {
  const wilds = ["1", "2", "3", "4"]
  const suits = ["♠︎", "♥︎", "♣︎", "♦︎"]
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ]

  //builds a deck from the values
  const buildDeck = () => {
    let cardDeck = []
    let card = []
    let index = 0
    let id = ""
    //loop through
    suits.forEach(suit => {
      values.forEach(value => {
        id = "cardId_" + index++
        card = { key: id, suit: suit, value: value, isFaceUp: false }
        cardDeck.push(card)
      })
    })

    wilds.forEach(value => {
      id = "cardId_" + index++
      card = { key: id, suit: "*", value: value, isFaceUp: false }
      cardDeck.push(card)
    })

    //TODO: remove this log
    console.log(cardDeck)
    return cardDeck
  }

  //TODO: Make the row contain first 1, 2 or 3 cards
  /**
   * Row:
   * numberOfDrinks = 1, 2, 3
   * cards = [
   *  {
   *    value
   *    suit
   *    show
   *    give/take/both
   *  }
   * ]
   */

  //INFINITE RENDER - https://medium.com/@andrewmyint/infinite-loop-inside-useeffect-react-hooks-6748de62871

  //Assign variables & build the deck
  const BOTH_DRINKS = 1,
    GIVE_TAKE_DRINKS = 2
  let cardSliceIndex = 0
  const cardDeck = props.shuffleArrayList(buildDeck())

  const getNextRow = numberOfDrinks => {
    let originalCardSliceIndex = cardSliceIndex
    cardSliceIndex = cardSliceIndex + numberOfDrinks
    let cardRow = cardDeck.slice(originalCardSliceIndex, cardSliceIndex)
    //TODO: add some logic to handle if slice gets bigger than arrayList. Need to keep current cards and then reset code
    console.log(cardRow)
    return cardRow
  }

  //card rows
  const currentRows = []
  currentRows.push(getNextRow(BOTH_DRINKS))
  currentRows.push(getNextRow(GIVE_TAKE_DRINKS))
  currentRows.push(getNextRow(GIVE_TAKE_DRINKS))
  currentRows.push(getNextRow(GIVE_TAKE_DRINKS))
  currentRows.push(getNextRow(BOTH_DRINKS))

  const buttonStyle1 = {
    padding: `10px`,
  }

  const drawNextRound = currentRows => {
    console.log("Next round drawn")
    currentRows = []
    currentRows.push(getNextRow(BOTH_DRINKS))
    currentRows.push(getNextRow(GIVE_TAKE_DRINKS))
    currentRows.push(getNextRow(GIVE_TAKE_DRINKS))
    currentRows.push(getNextRow(GIVE_TAKE_DRINKS))
    currentRows.push(getNextRow(BOTH_DRINKS))
  }

  return (
    <>
      <h2>Card Section</h2>
      <Button
        class="restartButton"
        value="Hello World"
        onClick={console.log("Yeah this doesn't do anything useful yet...")}
      />
      <div>
        {currentRows.map(row => {
          return <Row cards={row} />
        })}
      </div>
    </>
  )
}

export default CardSection
