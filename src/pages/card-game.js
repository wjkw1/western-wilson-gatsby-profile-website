import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GameBoard from "../components/CardGame/GameBoard"

const CardGame = () => (
  <Layout>
    <SEO title="Card Game" />
    <h1>Card Game</h1>
    <p>Welcome to the card game</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <GameBoard />
    </div>
  </Layout>
)

export default CardGame
