import { uniqueId } from 'lodash';
import React, { useEffect, useState } from 'react';
import Item from './Item.jsx';

const TodoBox = () => {

  const [form, setForm] = useState('')
  const [tasks, setTasks] = useState([])
  const [page, setPage] = useState('primary')


  useEffect(() => {
    const tasks = localStorage.getItem('myTasks')
    if (tasks !== null) {
      const normalTasksObject = JSON.parse(tasks)
      setTasks(normalTasksObject)
  }
}, []);

  const handleUpdate = (id) => (e) => {
    e.preventDefault();
    const resultState = tasks.map((item) => {
      if (item.id === id) {
        item.state = 'finished'
      }
      return item
    })
    setTasks(resultState)
    localStorage.setItem('myTasks', JSON.stringify(resultState))
  }

  const handleRemove = (id) => (e) => {
    e.preventDefault();
    const resultState = tasks.filter((item) => item.id !== id)
    setTasks(resultState)
    localStorage.setItem('myTasks', JSON.stringify(resultState))
  }

  const handleComeBack = (id) => (e) => {
    e.preventDefault();
    const resultState = tasks.map((item) => {
      if (item.id === id) {
        item.state = 'active'
      }
      return item
    })
    setTasks(resultState)
    localStorage.setItem('myTasks', JSON.stringify(resultState))
  }

  const handleChanged = (e) => {
    e.preventDefault();
    const text = e.target.value
    setForm(text)
  }

  const addTask = (e) => {
    e.preventDefault()

    if (tasks.length !== 0 && form.length !== 0) {
      const allID = tasks.map((item) => item.id)
      const maxID = Math.max(...allID)
      const newTask = { id: `${maxID + 1}`, text: form, state: 'active'}

      setForm('')
      setTasks([newTask, ...tasks])
      localStorage.setItem('myTasks', JSON.stringify([newTask, ...tasks]))
    }

    if (tasks.length === 0 && form.length !== 0) {
      const newTask = { id: uniqueId(), text: form, state: 'active'}
      setForm('')
      setTasks([newTask, ...tasks])
      localStorage.setItem('myTasks', JSON.stringify([newTask, ...tasks]))
    }

    setPage('primary')
  }

  const updatePage = (e) => {
    const currentButton = e.target.textContent
    if (currentButton === 'Ваши задачи') {
      setPage('primary')
    }
    if (currentButton === 'Выполненные задачи') {
      setPage('success')
    }
  }


    return (
      <div>
        <div>
        </div>
        <div className="mb-3">
          <form className="d-flex todo" onSubmit={addTask}>
            <div className="me-3 col-sm-5">
              <input type="text" value={form} required="" onChange={handleChanged} className="form-control" placeholder="Введите вашу задачу" />
            </div>
            <button type="submit" className="btn btn-primary">Добавить задачу</button>
          </form>
        </div>

        <button type="button" className="btn btn-primary" onClick={updatePage}>Ваши задачи</button>
        <button type="button" className="btn btn-success" onClick={updatePage} style={{marginLeft: '10px'}}>Выполненные задачи</button>
        <hr />
        <Item handleUpdate={handleUpdate}  handleRemove={handleRemove} tasks={tasks} page={page} handleComeBack={handleComeBack}/>
      </div>
    )
}

export default TodoBox;
// localStorage.clear()