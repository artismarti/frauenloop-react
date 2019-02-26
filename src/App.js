import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Fields from './Fields'

class App extends Component {
  random = () => {
    return Math.random()
  }

  greeting = name => {
    return `Hello ${name}`
  }

  placeholder = value => {
    return value
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello <code>src/App.js</code> and save to reload.
          </p>
          <Fields
            buttonName={this.random()}
            placeholder={this.placeholder('Name')}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rock & Roll
          </a>
          <Fields buttonName={this.greeting('Foo')} />
        </header>
      </div>
    )
  }
}

export default App
