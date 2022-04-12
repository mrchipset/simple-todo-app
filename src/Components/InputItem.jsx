import React from "react"
import { Input } from 'antd'
import 'antd/dist/antd.css'

export default class InputItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
        this.handlePressedEnter = this.handlePressedEnter.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
    }

    render() {
        return (
            <Input placeholder='Add new TODO Item'
                value={this.state.content}
                onChange={this.handleContentChange}
                onPressEnter={this.handlePressedEnter}
            />
        )
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handlePressedEnter(e) {
        this.props.addNewTodoItem(this.state.content)
        this.setState({
            content: ''
        })
    }
}
