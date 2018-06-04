import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux' 

class Block extends React.Component {
  render() {
    return (
      <ListGroup>
        { this.props.items.map((item) => 
          <ListGroupItem key={item.id}>{item.name}</ListGroupItem>
        )}
      </ListGroup>
    );
  }
}


export default connect(state => ({title: state.title}))(Block)