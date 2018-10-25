import React, { Component } from "react";
import { Button, Collection, CollectionItem } from 'react-materialize'
 
class List extends Component {
  delete = (key) => {
    this.props.delete(key);
  }

  edit = (key, text) => {
    this.props.edit({
      key: key,
      text: text
    });
  }

  createTasks = (item) => {
    return <CollectionItem href='#' key={item.key}>
              <input key = {item.key} type = 'text' value = {item.text} onChange = {(event) => {this.edit(item.key, event.target.value)}}></input>
              <Button waves='light' className='red' onClick={() => this.delete(item.key)}>Удалить</Button>
            </CollectionItem >
  }
 
  render() {
    return (
      <Collection className="List" header='ToDo'>
        {this.props.entries.map(this.createTasks)}
      </Collection>
    );
  }
};
 
export default List;