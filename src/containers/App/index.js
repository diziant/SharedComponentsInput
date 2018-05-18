import React, { Component } from 'react'

import Logo from 'components/shared/Logo'

import './styles.css'

export default class App extends Component {
  componentDidMount() {
    console.log('App Component Did Mount')
  }

  render() {
    return (
      <section styleName="app">
        <main role="main" styleName="container">
          <Logo />
          <span styleName="text">Ract App Boilerplate</span>
        </main>
        <nav />
        <footer />
      </section>
    )
  }
}
