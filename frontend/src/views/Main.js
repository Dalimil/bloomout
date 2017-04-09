import React, { Component } from 'react';
import Tiles from './Tiles';
import PeopleListView from './PeopleListView.js'
import ProfileOverviewBasic from './ProfileOverviewBasic.js'
import ProfileOverviewDetailed from './ProfileOverviewDetailed.js'
import ProgressBar from './ProgressBar';
import SplitLayout from './SplitLayout';
import Images from '../assets';
import NetworkView from './NetworkView.js'

const Button = (props) => (
  <a className="button" href="#" {...props}>{props.children}<span></span></a>
);

const BackNavBar = (props) => (
  <div className="back-navbar">
    <a href="#" onClick={() => window.history.back() }>&larr; Back</a>
  </div>
);

const WelcomeLeftScreen = (props) => (
<div className="WelcomeLeftScreen animated fadeIn">
  <img src={Images.logo} role="presentation" />
  <h1>Welcome, <span className="c-p">hackBack</span></h1>
  <strong>This is your risk management application</strong>
  <p>
    Receive automated feedback on your employee's work satisfaction and their engagement.
    Analyze a combination of employee statistics to prevent burnout before it happens.
  </p>
  <Button onClick={props.showOverview}>Show me more</Button>
</div>
);

const WelcomeOverviewBasic = () => (
  <div className="WelcomeOverviewBasic dark-theme animated fadeIn">
    <ProgressBar progress="63" infoText="Overall risk" />
  </div>
);

const WelcomeOverviewDetailed = () => (
  <div className="WelcomeOverviewDetailed animated fadeIn">
    <Tiles link="/employee-risks" tiles={[
      {
        name: 'Employee risks',
        renderContent: () => <ProgressBar progress="42" colored reverseColor />,
      },
      {
        name: 'Project risks',
        renderContent: () => <ProgressBar progress="14" colored reverseColor />
      },
      {
        name: 'Client risks',
        renderContent: () => <ProgressBar progress="20" colored reverseColor />
      },
      {
        name: 'Interaction quality',
        renderContent: () => <ProgressBar progress="62" colored />
      },
      {
        name: 'Company mood',
        renderContent: () => <ProgressBar progress="28" colored />
      },
      {
        name: 'Black box score',
        renderContent: () => <div className="tile-main-text">12p.</div>
      }
    ].map((t, ind) => {
      t.icon = Images.icons.artboards[ind];
      return t;
    })} />
  </div>
);


class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewShown: false
    };
    this.showOverview = this.showOverview.bind(this);
  }

  showOverview() {
    this.setState({ overviewShown: true });
  }

  render() {
    return (
      <SplitLayout
        left={ this.state.overviewShown ?
          <WelcomeOverviewDetailed /> : <WelcomeLeftScreen showOverview={this.showOverview}/>
        }
        right={<WelcomeOverviewBasic />}
      />
    );
  }
}

const EmployeeOverviewBasic = () => (
  <div className="EmployeeOverviewBasic dark-theme animated fadeIn">
    <ProgressBar progress="42" infoText="Employee risks" />
  </div>
);

const EmployeeOverviewDetailed = () => (
  <div className="EmployeeOverviewDetailed animated fadeIn">
    <Tiles link="/people" tiles={[
      {
        name: 'Interactions',
        renderContent: () => <ProgressBar progress="42" colored />,
      },
      {
        name: 'Happiness',
        renderContent: () => <ProgressBar progress="56" colored />
      },
      {
        name: 'Cost per hire',
        renderContent: () => <div className="tile-main-text">4k $</div>
      },
      {
        name: 'Client risks',
        renderContent: () => <ProgressBar progress="20" colored reverseColor />
      },
      {
        name: 'Time to fill',
        renderContent: () => <div className="tile-main-text">17 days</div>
      },
      {
        name: 'Turnover cost',
        renderContent: () => <div className="tile-main-text">40k $</div>
      },
      {
        name: 'Employees in risk',
        renderContent: () => <div className="tile-main-text colspan-2">21 employees</div>,
        tileClass: 'colspan-2'
      },
      {
        name: 'Avg length',
        renderContent: () => <div className="tile-main-text">783 days</div>
      }
    ].map((t, ind) => {
      t.icon = Images.icons.artboards[ind%6];
      return t;
    })} />
  </div>
);

class Employee extends Component {
  render() {
    return (
      <SplitLayout
        left={<EmployeeOverviewBasic />}
        right={<EmployeeOverviewDetailed />}
      >
      <BackNavBar />
      </SplitLayout>
    );
  }
}

const rands=[15,63,23,30,16,42,21,51,8,35,73,46,24,48,41,      32,42,19,       25,27,5,56,47,15,43,43,10,62,39,35,21,30,28,14,18,30,27,10,34,52,26,28,9,39,54,37,10,10,15,31,32,37,20,51,16,39,62,44,9,56,53,48,9,60,26,5,33,35,38,9,56,13,34,22,45,23];

const renderPeopleListItem = (ind, va, vb, vc) => (
  <div className="person-combo">
    <ProgressBar progress={va || rands[ind*3]} noText colored />
    <ProgressBar progress={vb || rands[ind*3 + 1]} noText colored reverseColor />
    <ProgressBar progress={vc || rands[ind*3 + 2]} noText colored reverseColor />
    <img src={Images.people[ind]} role="presentation" className="PeopleListViewItem" />
  </div>
);

const PeopleOverviewBasic = () => (
  <div className="PeopleOverviewBasic dark-theme animated fadeIn">
    <div className="tile-main-text">Risks per person</div>
  </div>
);

class People extends Component {
  render() {
    return (
      <SplitLayout
        left={<PeopleOverviewBasic />}
        right={<PeopleListView />}
      >
      <BackNavBar />
      </SplitLayout>
    );
  }
}


class Profile extends Component {
  render() {
    return (
      <SplitLayout
        left={<ProfileOverviewBasic id={this.props.match.params.id} />}
        right={<ProfileOverviewDetailed id={this.props.match.params.id} />}
      >
      <BackNavBar />
      </SplitLayout>
    );
  }
}

class Network extends Component {
  render() {
    return (
      <SplitLayout
        left={<EmployeeOverviewBasic />}
        right={<NetworkView />}
      />
    );
  }
}

const Main = {
  Intro,
  Employee,
  People,
  Profile,
  Network,
}

export default Main;
