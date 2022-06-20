import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputForm: '', tasks: []};
  }

  componentDidMount = () => {
    const tasks = localStorage.getItem('myTasks')
    if (tasks !== null) {
      const normalTasksObject = JSON.parse(tasks)
      // console.log(normalTasksObject)
      this.setState(({tasks}) => ({ tasks: normalTasksObject }))
  }
}

  handleUpdate = (id) => (e) => {
    e.preventDefault();
    const { tasks } = this.state
    const resultState = tasks.map((item) => {
      if (item.id === id) {
        item.state = 'finished'
      }
      return item
    })
    this.setState((tasks) => ({ tasks: resultState }))
    localStorage.setItem('myTasks', JSON.stringify(resultState))
  }

  handleRemove = (id) => (e) => {
    e.preventDefault();
    const { tasks } = this.state
    const resultState = tasks.filter((item) => item.id !== id)
    this.setState((tasks) => ({ tasks: resultState }))
    localStorage.setItem('myTasks', JSON.stringify(resultState))
  }

  handleChanged = (e) => {
    e.preventDefault();
    const text = e.target.value
    this.setState(({ inputForm }) => ({inputForm: text}))
  }

  addTask = (e) => {
    e.preventDefault()
    const task = this.state.inputForm
    const taskFromState = this.state.tasks

    if (this.state.tasks.length !== 0 && task.length !== 0) {
      const allID = taskFromState.map((item) => item.id)
      const maxID = Math.max(...allID)
      const newTask = { id: `${maxID + 1}`, text: task, state: 'active'}

      this.setState({ inputForm: '', tasks: [newTask, ...taskFromState] })
      localStorage.setItem('myTasks', JSON.stringify([newTask, ...taskFromState]))
    }

    if (this.state.tasks.length === 0 && task.length !== 0) {
      const newTask = { id: uniqueId(), text: task, state: 'active'}
      this.setState({ inputForm: '', tasks: [newTask, ...taskFromState] })
      localStorage.setItem('myTasks', JSON.stringify([newTask, ...taskFromState]))
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
        <Item handleUpdate={this.handleUpdate}  handleRemove={this.handleRemove} tasks={this.state.tasks} />
      </div>
    )
  }
}

// localStorage.clear()