import { Checkbox } from 'antd';
import 'antd/dist/antd.css'
import './TodoItem.css'
import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'checked': props.checked}
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        const styleName = 'todo-item ' + (this.props.checked ? 'todo-finish' : 'todo-pending')
        return (
            <label className={styleName}>
                <Checkbox onChange={this.handleChange} checked={this.props.checked}>
                    {this.props.content}
                </Checkbox>
            </label>
        )
    }

    handleChange(e) {
        this.props.onChanged(this.props.id, e.target.checked)
    }
}

