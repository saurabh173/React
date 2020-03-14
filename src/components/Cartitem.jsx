import React, { Component } from "react";

class Cartitem extends Component {
  state = {
    count: this.props.value
  };

  styles = {
    fontSize: 16,
    fontWeight: "bold"
  };

  //  constructor(props){
  //      super(props);
  //  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrBtnClick(this.props.item)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDltBtnClick(this.props.item)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>  

      </div>
    );
  }

  formatCount() {
      const  count  = this.props.value;
      return count === 0 ? "Zero" : count;
    
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Cartitem;
