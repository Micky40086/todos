import React from 'react'
import InputForm from 'components/InputForm.jsx'
import Block from 'components/Block.jsx'
import { connect } from 'react-redux'
import { addTodo } from 'reducers/global/globalAction'

class App extends React.Component {
    render() {
        const { dispatch } = this.props
        return (
            <div>
                <InputForm />
                <Block />
                {this.props.title}
            </div>
        )
    }
}

export default connect(state => ({title: state.title}))(App)