import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { tokenUrl, instanceLocator } from "./config";

class App extends React.Component {
  state = {
    newItem: "",
    items: []
  };

  addItem = () => {
    //console.log("Increment Clicked for id = " + itemParm.id );
    const newItems = [...this.state.items];

    const itemToAdd = {
      id: 1 + Math.random(),
      value: this.state.newItem
    };
    newItems.push(itemToAdd);

    this.setState({ items: newItems });
  };

  updateInput = parm => {
    //console.log("Updating New Item to  = " + parm );
    this.state.newItem = parm;
  };

  deleteItem = itemParm => {
    const newItems = this.state.items.filter(c => c.id != itemParm.id);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div>

          <input
            type="text"
            placeholder="Type item here"
            defaultValue={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            className="form-control"
          />

          <button
            className="btn btn-primary m-2"
            onClick={() => this.addItem()}
          >
            Add
          </button>

        <ul>
          {this.state.items.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="btn btn-primary m-2 btn-danger"
                  onClick={() => this.deleteItem(item)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        
      </div>
    );
  }
}

export default App;
