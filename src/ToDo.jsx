import { uniqueId } from 'lodash';
import React, { useEffect, useState, useRef } from 'react';
import Item from './Item.jsx';

const TodoBox = () => {

  const [form, setForm] = useState('')
  const [tasks, setTasks] = useState([])
  const [page, setPage] = useState('primary')
  const inputEl = useRef(null)


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
    inputEl.current.focus()

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
      <>
      <div className='todoBlock row'>
        <div class="btn-group-vertical col-2">
          <button type="button" className="btn btn-outline-dark" style={{border: "1px solid #2e2e2e", width: "80%", height: "55px"}} onClick={updatePage}>Ваши задачи</button>
          <button type="button" className="btn btn-outline-dark" style={{border: "1px solid #2e2e2e", marginTop: "1px", width: "80%", height: "55px"}} onClick={updatePage}>Выполненные задачи</button>
          <button type="button" className="btn btn-outline-dark disabled" style={{border: "1px solid #2e2e2e", marginTop: "1px", width: "80%", height: "55px"}} >Справка</button>
        </div>
        <div className="col-8" style={{marginLeft: "50px"}}>
          <h3>Как это работает:</h3>
            <p className="lead" style={{marginTop: "20px"}}>
              Приложение формирует список ваших задач. Если нажать на зелёную галочку - ✓, задача переносится в раздел "выполненные задачи". При нажатии на красный крестик - ✗, задача полностью удаляется. 
              Задачу можно вернуть обратно, если случайно нажали на зеленую галочку, для этого нажмите <b>ВЕРНУТЬ</b>, в выполненных задачах.    
            </p>
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={updatePage}>Ваши задачи</button>
        <button type="button" className="btn btn-success" onClick={updatePage} style={{marginLeft: '10px'}}>Выполненные задачи</button> */}
      </div>
      <center style={{marginLeft: "170px", marginTop: "40px"}}>
              <div style={{width: "60%", textAlign: "left"}}>
              <form className="d-flex todo" onSubmit={addTask}>
                <div className="me-3 col-sm-9 mb-4 center-block">
                  <input type="text" ref={inputEl} value={form} required="" onChange={handleChanged} className="form-control text-center" placeholder="Введите вашу задачу" />
                </div>
                <button type="submit" className="btn btn-primary mb-4">Добавить задачу</button>
              </form>
              <Item handleUpdate={handleUpdate}  handleRemove={handleRemove} tasks={tasks} page={page} handleComeBack={handleComeBack}/>
            </div>
            </center>
            </>
    )
}

export default TodoBox;
// localStorage.clear()