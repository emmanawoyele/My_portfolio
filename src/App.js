import React, { Component } from 'react';
import Typical from 'react-typical';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import projectInfo from './project-info';
import SideNavbarContainer from './sideNavbarContainer';
import HomePage from './homePage';
import About from './about_me';
import Portfolio from './portfolio';
import Contact from './contact';
import PersonalCard from './personal_card';
import Backdrop from './backdrop';
import OurHome from './ourhome';
import "./App.css"

class App extends Component {
  state = {
    name: 'Emmanuel Awoyele',
    projectInfo,
    Portfolio: ['All', 'React', 'Shopify', 'Html-Emails'],
    myPortolio: projectInfo,
    time: '',
    type_1: 'Html-Emails',
    type_2: 'Shopify',
    type_3: 'React',
    menu_opener: false,
    SideNavbar: true,
    show: true,
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let newDate = new Date();
    let currentYear = newDate.getFullYear();
    console.log(currentYear);
    this.setState({
      time: currentYear,
    });
  };

  sortArray = (e) => {
    e.preventDefault();
    const a = e.target.innerHTML;
    var b = this.state.projectInfo;

    b = b.filter((item) => {
      switch (a) {
        case 'Html-Emails':
          return item.type === this.state.type_1;

        case 'Shopify':
          return item.type === this.state.type_2;

        case 'React':
          return item.type === this.state.type_3;

        case 'All':
          return this.state.projectInfo;

        default:
          return b;
      }
    });

    this.setState({
      myPortolio: b,
    });
  };

  menuOpenerHandler = () => {
    this.setState((prevState) => ({
      SideNavbar: !prevState.SideNavbar,
      show: !prevState.show,
    }));
  };

  render() {
    const personal = <PersonalCard />;
    const portfolio_head = this.state.Portfolio.map((pt, index) => {
      return <li key={index + pt}>{pt}</li>;
    });

    const my_portfolio = this.state.myPortolio.map((item, id) => {
      return (
        <div className="flip-card" key={id + item}>
          <a href={item.link} target="blank">
            <div className="card_inner">
              <div className="card_front">
                <img src={item.imgUrl} alt="" />
                <div className="mobile-info">
                  <p>
                    Project Name:<span>{item.name}</span>
                  </p>
                  <p>
                    Project Type:<span>{item.type}</span>
                  </p>
                </div>
              </div>
              <div className="card_back">
                <div className="card_back_text">
                  <p>
                    Project Name:<span>{item.name}</span>
                  </p>
                  <p>
                    Project Type:<span>{item.type}</span>
                  </p>
                  <p>
                    Project description: <span>{item.description}</span>
                  </p>
                  <p style={{ fontSize: '20px', fontWeight: 900, fontStyle: 'italic' }}>{item.info}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div>
      <OurHome menu_opener={this.menuOpenerHandler} />
      <div>
        <div>
          <Router>
            <SideNavbarContainer date={this.state.time} profile_name={this.state.name} hideBar={this.state.SideNavbar}>
              {/* Content */}
            </SideNavbarContainer>
            {/* <Backdrop menu_opener={this.menuOpenerHandler} show={this.state.show}/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about_me" element={<About p={personal} />} />
              <Route
                path="/portfolio"
                element={(
                  <Portfolio
                    portfolio_header={portfolio_head}
                    projectComp={my_portfolio}
                    clickHandler={this.sortArray}
                  />
                )}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
    
    
    
    
    
    );
  }
}

function Home() {
  return (
    <div>
      <div className="App-header">
        <div className="over-layer"></div>
        <div className="name_intro">
          <h1>Emmanuel Awoyele</h1>
          <p>
            I'm a{' '}
            <Typical steps={['Frontend developer ', 1000, ' Shopify developer', 500]} loop={Infinity} wrapper="p" />
          </p>
        </div>
        {/* <Particles
          params={{
            particles: {
              number: {
                color: 'red',
                value: 200,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        /> */}
      </div>
    </div>
  );
}

export default App;
