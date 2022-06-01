import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputForm: '', tasks: []};
  }

  handleRemove = (id) => (e) => {
    e.preventDefault();
    const { tasks } = this.state
    const resultState = tasks.filter((item) => item.id !== id)
    this.setState({ tasks: resultState })
  }

  handleChanged = (e) => {
    e.preventDefault();
    const text = e.target.value
    this.setState(({ inputForm }) => ({inputForm: text}))
  }

  addTask = (e) => {
    e.preventDefault()
    const task = this.state.inputForm

    if(task.length !== 0) {
      const newTask = { id: uniqueId(), text: task }
      const taskFromState = this.state.tasks
      this.setState({ inputForm: '', tasks: [newTask, ...taskFromState] })
    }

  }

  render() {
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex todo" onSubmit={this.addTask}>
            <div className="me-3 col-sm-5">
              <input type="text" value={this.state.inputForm} required="" onChange={this.handleChanged} className="form-control" placeholder="Введите вашу задачу" />
            </div>
            <button type="submit" className="btn btn-primary">Добавить задачу</button>
          </form>
        </div>
        <Item onRemove={this.handleRemove} task={this.state.tasks} />
      </div>
    )
  }
}