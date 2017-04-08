import React, { Component } from 'react';
import Tiles from './Tiles';
import ProgressBar from './ProgressBar';
import SplitLayout from './SplitLayout';
import Images from '../assets';

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
    Discover what risks you have in your management and employee relations.
    Pop-up your official trust fund polaroid, put a bird on it, and find lorem ipsum semantics easily.
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
        renderContent: () => <ProgressBar progress="42" colored reverseColor />,
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

const renderPeopleListItem = (ind) => (
  <img src={Images.people[ind]} role="presentation" className="PeopleListViewItem" />
);

const PeopleOverviewBasic = () => (
  <div className="PeopleOverviewBasic dark-theme animated fadeIn">
    <div className="tile-main-text">Risks per person</div>
  </div>
);
const PeopleListView = () => (
  <div className="PeopleListView animated fadeIn white-theme">
    <Tiles whiteTheme link="/profile" tiles={[
      {
        name: "Michael Barla"
      },
      {
        name: "Rudy Jones"
      },
      {
        name: "John Moore"
      },
      {
        name: "Summer Dash"
      },
      {
        name: "Sergiy Proper"
      },
      {
        name: "Eli Smith"
      },
      {
        name: "Max Magnu"
      },
      {
        name: "Zombi Zamba"
      },
      {
        name: "Rob Dresden"
      },
      {
        name: "Michael Barla"
      },
      {
        name: "Rudy Jones"
      },
      {
        name: "John Moore"
      },
      {
        name: "Summer Dash"
      },
      {
        name: "Sergiy Proper"
      },
      {
        name: "Eli Smith"
      },
      {
        name: "Max Magnu"
      },
      {
        name: "Zombi Zamba"
      }
    ].map((c, ind) => {
      c.renderContent = () => renderPeopleListItem(ind < 10 ? ind : (ind+1)%9);
      return c;
    })} />
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
        left={<PeopleOverviewBasic />}
        right={<PeopleListView />}
      >
      <BackNavBar />
      </SplitLayout>
    );
  }
}

const Main = {
  Intro,
  Employee,
  People,
  Profile
}

export default Main;
