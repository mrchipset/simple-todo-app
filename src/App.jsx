import {  Card, List  } from 'antd';
import 'antd/dist/antd.css'
import './style/App.css';
import React from 'react';
import TodoItem from './Components/TodoItem'
import InputItem from './Components/InputItem'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {id: 0, checked: false, content: 'foo bar'},
        {id: 1, checked: false, content: 'foo bar'},
        {id: 2, checked: false, content: 'foo bar'},
      ]
    }
    this.onItemChanged = this.onItemChanged.bind(this)
    this.handleAddNewTodoItem = this.handleAddNewTodoItem.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>Simple React TODO List</header>

        <Card className='todo-card'>
        <List dataSource={this.state.items} className='todo-card' itemLayout='horizontal'
          renderItem={item => (
            <List.Item>
              <TodoItem id= {item.id} checked={item.checked} content={item.content} onChanged={this.onItemChanged}/>
            </List.Item>
          )}
        />
        <InputItem addNewTodoItem={this.handleAddNewTodoItem}/>
        </Card>


      </div>
    )
  }

  onItemChanged(id, checked) {
    let items = this.state.items
    items[id].checked = checked
    this.setState({
      items: items
    })
  }

  handleAddNewTodoItem(content) {
    let items = this.state.items
    items.push({id: items.length, content: content, checked: false})
    this.setState({
      items: items
    })
  }

}


export default App;
