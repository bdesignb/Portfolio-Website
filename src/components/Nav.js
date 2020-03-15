import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isTop: true,
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    return (
      <nav
        className={
          this.state.isTop ? (
            'navbar navbar-expand-md fixed-top top-nav scrolling-navbar indigo'
          ) : (
              'navbar navbar-expand-md fixed-top top-nav light-header'
            )
        }
        
        data-target=".navbar"
        data-offset="50"
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img className="navbar-brand" />
          </a>

          <button
            onClick={this.toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="#navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars" aria-hidden="true" />
            </span>
          </button>
          
          <div className={classOne} id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home
								</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
								</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
								</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
								</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
								</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
