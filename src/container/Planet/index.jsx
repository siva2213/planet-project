import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Style from "styled-components";
import Data from "../../assets";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <MainDiv>
        <div id="planet_image">
          <label></label>
          <img src="" alt="" />
        </div>
        <div id="planet_desc">Content</div>
      </MainDiv>
    );
  }
}

export default withRouter(Planet);

const MainDiv = Style.div`
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;

  #planet_image {
    color: red;
    flex: 2
  }
  #planet_desc {
    color: green;
    flex: 1;
  }
`;
