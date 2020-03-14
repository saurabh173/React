import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tokenUrl, instanceLocator } from './config';
import Cartitems from './components/Cartitems';
import Cartitem from './components/Cartitem';
import Navbar from './components/Navbar';

class App extends React.Component {

    state = {
      items: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };

    handleIncrement = itemParm => {
      console.log("Increment Clicked for id = " + itemParm.id );
      const newItems = [...this.state.items] ;
      const index = newItems.indexOf(itemParm);
      newItems[index].value = newItems[index].value + 1 ;
      console.log("newItems[index].value = " + newItems[index].value );
      this.setState({items:newItems})
    };

    handleDelete = itemParm => {
      const newItems = this.state.items.filter( c => c.id != itemParm.id );
      this.setState({items:newItems});
    }


      render() {
        return (
                <div> 
                    <Navbar totalItems= {this.state.items.filter(c => c.value > 0).length} />   
                    <main > 
                      <Cartitems 
                      itms={this.state.items} 
                      onIncrBtnClick={this.handleIncrement}
                      onDltBtnClick = {this.handleDelete} />
                    </main>    
                </div>
                );
      }
    }


export default App;
