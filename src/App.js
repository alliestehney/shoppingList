import React, { Component } from 'react';
import Items from "./Items.js";
import ItemsForm from "./ItemsForm.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }


  render() {

    const itemsList = this.state.items.map((item, index) => (
      <Items key={item.name} item={item} />
      ));

    return (
      <div className="App">
        <h3>Shopping List</h3>
        <div className="listItems">
          {itemsList}
          <ItemsForm onSubmit={this.addItemToList.bind(this)}/>
        </div>
      </div>
    );
  }

  addItemToList(item) {
    this.setState(prevState => {
      const newItems = prevState.items.slice(0);
      newItems.push(item);

      return { items: newItems };
    });
  }

}

export default App;
