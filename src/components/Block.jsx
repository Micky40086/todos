import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux' 

class Block extends React.Component {
  render() {
    return (
      <ListGroup>

        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}


export default connect(state => ({title: state.title}))(Block)