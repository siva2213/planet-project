import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Style from "styled-components";
import Routes from "../../assets";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var routes = Routes.map((planet) => planet.name);
    if (!routes.includes(this.props.match.params.id)) {
      this.props.history.push("/no-data");
    }
  }
  render() {
    var planetDetails = Routes.reduce((acc, cur) => {
      if (acc.name === this.props.match.params.id) {
        return { ...acc };
      } else {
        return { ...cur };
      }
    });
    return (
      <MainDiv>
        <div id="planet_image">
          <h5>{planetDetails.name.toUpperCase()}</h5>
          <img src="./mars/images/earth.jpg" alt={planetDetails.name} />
        </div>
        <div id="planet_desc">
          <h5>Planet Details</h5>
          {planetDetails.description}
        </div>
      </MainDiv>
    );
  }
}

export default withRouter(Planet);

const MainDiv = Style.div`
  margin: 1rem;
  display: flex;
  justify-content: space-around;

  div {
    border: 1px solid #e4dede;
    margin: 1rem;
    border-radius: 4px;
    padding-left: 1rem;
    box-shadow: 1px 1px #c7c1c1
  }

  #planet_image {
    color: red;
    flex: 2;
  }
  #planet_desc {
    color: green;
    flex: 1;
  }
`;
