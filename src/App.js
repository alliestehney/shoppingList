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
      <Items key={item.name} item={item} onDelete={()=> this.removeItem(index)}/>
      ));

    var total= 0;
    // var allItems = this.state.items;
    // allItems.forEach(function(item) {
    //   total += item.price;
    // });
    // console.log(total);

    this.state.items.map((item) => 
      total+=item.price
    );

    console.log(total);

    return (
      <div className="App">
        <h3>Shopping List</h3>

        <div className="listItems">
          {itemsList}
          <p className="Total">{"Total: "+ total }</p>
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

  removeItem(index) {
    this.setState(prevState => {
      const newItems = prevState.items.slice();
      newItems.splice(index, 1);

      return {items: newItems };
    });
  }

}

export default App;
