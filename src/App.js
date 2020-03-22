import React, { Component } from 'react';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Service from './components/Service';
import Facts from './components/Facts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import NewProject from './components/NewProject';
import Clients from './components/Clients';
import './App.css';
import { data } from './data';


class App extends Component {

  state = {
    data: { ...data }
  };

  render() {
    return (
      <>
        <Header />
        <Service data={this.state.data.service} />
        <Facts data={this.state.data.facts} />
        <Portfolio data={this.state.data.portfolio} />
        <NewProject />
        <Skills data={this.state.data.skills} />
        <Testimonials data={this.state.data.testimonials} />
        <Clients data={this.state.data.clients} />
        <Contact data={this.state.data.contact} />
        <Footer data={this.state.data.social} />
      </>

    )
  }
}


export default App;