import React from 'react'
import InputForm from 'components/InputForm.jsx'
import Block from 'components/Block.jsx'
import { connect } from 'react-redux'
import { addTodo } from 'reducers/global/globalAction'
import { getRepositories } from 'api/github'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            repos: [],
            userName: ''
        }
    }
    setText = (e) => {
        this.setState({
            userName: e.target.value
        },() => { console.log(this.state.userName) })
    }
    getRepos = (e) => {
        const { dispatch } = this.props
        const rootThis = this
        getRepositories(this.state.userName)
            .then((res) => {
                console.log(res.data)
                rootThis.setState({
                    repos: res.data
                })
            }).catch((error) => {
                rootThis.setState({
                    repos: [{id: "0", name: "not Found"}]
                })
            })
    }
    render() {
        return (
            <div>
                <InputForm searchRepos={this.getRepos} setUserName={this.setText}/>
                <Block items={this.state.repos}/>
            </div>
        )
    }
}

export default connect(state => ({title: state.title}))(App)