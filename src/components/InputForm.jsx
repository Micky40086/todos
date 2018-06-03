import React from 'react'
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import { connect } from 'react-redux' 
import { addTodo } from 'reducers/global/globalAction'

class InputFrom extends React.Component {
    constructor() {
        super()
        this.state = {
            input_text: ''
        }
    }
    addTodo = (e) => {
        const { dispatch } = this.props
        dispatch(addTodo(this.state.input_text))
    }
    setText = (e) => {
        this.setState({
            input_text: e.target.value
        })
    }
    render() {
        return (
            <InputGroup>
                <Input onChange={this.setText}/>
                <InputGroupAddon onClick={this.addTodo} addonType="append">
                    <InputGroupText>{this.props.title}</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}

export default connect(state => ({title: state.title}))(InputFrom)