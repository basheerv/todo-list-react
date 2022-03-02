import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


class App extends Component{
state = {
  items: [],
  id: uuidv4(),
  item: "",
  editItem :false
};
  
  handleClearList = (e) => {
    // console.log('handle handleClearList');
    this.setState({
      items : []
    });
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    }

    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id : uuidv4(),
      editItem: false
    }, () => console.log(this.state))
  }

  handleDelete = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItem
    });  
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const editCurrentItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: editCurrentItem.title,
      id:id,
      editItem : true
    }); 
  }
  
  render() {
  //  console.log(this.state);
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md12 mt-5 mx-auto">
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={ this.handleEdit} />
            <TodoList
              items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              handleClearList={ this.handleClearList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
