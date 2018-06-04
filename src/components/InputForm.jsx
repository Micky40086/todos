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
    render() {
        return (
            <InputGroup>
                <Input onChange={this.props.setUserName}/>
                <InputGroupAddon onClick={this.props.searchRepos} addonType="append">
                    <InputGroupText>查詢</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}

export default connect(state => ({title: state.title}))(InputFrom)