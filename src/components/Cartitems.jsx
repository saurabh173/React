import React, { Component } from "react";
import Cartitem from "./Cartitem";

class Cartitems extends Component {
//   state = {
//     items: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   handleIncrement = itemParm => {
//     console.log("Increment Clicked for id = " + itemParm.id );
//     const newItems = [...this.state.items] ;
//     const index = newItems.indexOf(itemParm);
//     newItems[index].value = newItems[index].value + 1 ;
//     console.log("newItems[index].value = " + newItems[index].value );
//     this.setState({items:newItems})
//   };

//   handleDelete = itemParm => {
//     const newItems = this.state.items.filter( c => c.id != itemParm.id );
//     this.setState({items:newItems});
//   }

  render() {
    return (
      <div>
        {this.props.itms.map(item => (
          <Cartitem
            key={item.id}
            value={item.value}
            item={item}
            onIncrBtnClick={this.props.onIncrBtnClick}
            onDltBtnClick = { this.props.onDltBtnClick}
          />
        ))}
      </div>
    );
  }
}

export default Cartitems;
