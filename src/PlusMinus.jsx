import uniqueId from 'lodash/uniqueId';
import React from 'react';

export default class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], num: 0 }
  }

  removeElement = (id) => (e) => {
    e.preventDefault();
    const newState = this.state.items.filter((item) => item.id !== id)
    this.setState({ items: newState, num: this.state.num - 1})
  }

  plusButton = (e) => {
    e.preventDefault();
    const newState = [{ id: uniqueId(), num: this.state.num + 1 }, ...this.state.items]
    this.setState({ items: newState, num: this.state.num + 1})
  }

  minusButton = (e) => {
    e.preventDefault();
    const newState = [{ id: uniqueId(), num: this.state.num - 1 }, ...this.state.items]
    this.setState({ items: newState, num: this.state.num - 1})
  }

  render() {
    const renderElements = (items) => {
      console.log(this.state)
      return (
        <div className="list-group">
          {
             items.map(( { num, id }, index) => {
              return <button type="button" key={index} onClick={this.removeElement(id)} className="list-group-item list-group-item-action">{num}</button>
             })
          }
        </div>
      )
    } 

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" onClick={this.plusButton} className="btn btn-outline-success">+</button>
          <button type="button" onClick={this.minusButton} className="btn btn-outline-danger">-</button>
        </div>
        {renderElements(this.state.items)}
      </div>
    )

  }
}
// END