import React, { Component } from "react";
import styled from "styled-components";
import Createinfo from "./Creatorinfo";
import CreateNav from "./CreatorNav";
import Creatorintroduce from "./Creatorintroduce";
import CreatorTitle from "./CreatorTitle";
import Modal from "../../Components/Modal/Modal";
import { useSelector } from "react-redux";

const Creator = props => {
  const store = useSelector(store => store);
  console.log("store>>>>>>>>>>>", store);

  return (
    <>
      <CreateNav navid={props.match.params.id} />
      <CreatorListBox>
        {props.match.params.id === "0" && <Createinfo />}
        {props.match.params.id === "1" && <CreatorTitle />}
        {props.match.params.id === "2" && <Creatorintroduce />}
      </CreatorListBox>
      <Modal store={store} />
    </>
  );
};

const CreatorListBox = styled.div`
  position: relative;
  top: 90px;
  left: 270px;
  width: 80%;

  @media screen and (max-width: 1305px) {
    left: 20px;
  }
`;

export default Creator;

// export class Creator extends Component {
//   render() {
//     return (
//       <div>
//         <CreateNav
//           navid={this.props.match.params.id}
//           handleBtn={this.handleBtn}
//         />
//         <CreatorListBox>
//           {this.props.match.params.id === "0" && <Createinfo />}
//           {this.props.match.params.id === "1" && <CreatorTitle />}
//           {this.props.match.params.id === "2" && <Creatorintroduce />}
//         </CreatorListBox>
//         <Modal />
//       </div>
//     );
//   }
// }
