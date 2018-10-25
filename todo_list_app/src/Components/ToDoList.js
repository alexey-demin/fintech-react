import React, { Component } from "react";
import List from "./List";
import {Button} from 'react-materialize'
 
class ToDoList extends Component {
  state = { items: [] };

  addItem = (event) => {
    if (this.inputText.value !== '') {
      this.setState({
        items: this.state.items.concat({
          text: this.inputText.value,
          key: Date.now()
        }),
      });
      this.inputText.value = ''
    }

    event.preventDefault();
  }

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((item) => {
        return (item.key !== key);
      })
    });
  }

  editItem = (element) => {
    const arr = this.state.items;

    const index = arr.findIndex((item) => item.key === element.key);
    arr[index] = element;

    this.setState({
      items: arr
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
              <input placeholder = "Введите текст" className="inputText" ref={(a) => this.inputText = a}>
              </input>
              <Button waves='light' type="submit">Добавить</Button>
          </form>
        </div>
        <List className = "todoList" entries={this.state.items} delete={this.deleteItem} edit={this.editItem}/>
      </div>
    );
  }
}
 
export default ToDoList;