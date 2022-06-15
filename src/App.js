import './App.css';
import { Header, Footer, Portfolio, ContactForm } from './components'
import projects from './projects.js'
import { Component } from 'react'
import React from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'home'
    }

    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(event) {
    if (event.target.id === "portfolio") {
      this.setState({ mode: 'home' });
    }
    // if (event.target.id === "contact") {
    //   this.setState({ mode: 'contact' });
    // }
  }

  render() {

    // if (this.state.mode === 'contact') {
    //   return (
    //     <>
    //       <Header onLinkClick={this.onLinkClick} />
    //       <main>
    //         <ContactForm />
    //       </main>
    //       <Footer />
    //     </>
    //   )
    // } else {
      return (
        <>
          <Header onLinkClick={this.onLinkClick} />
          <main>
            <Portfolio projects={projects} />
            <br />
          </main>
          <Footer />
        </>
      )
    // }
  }
}
export default App;
