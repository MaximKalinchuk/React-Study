import React from 'react';

export default class Item extends React.Component {
  render() {
    const { handleUpdate, handleRemove, tasks } = this.props

    const activeTasks = [];
    const finishedTasks = [];

    tasks.forEach((task) => {
      if (task.state === "active") {
        activeTasks.push(task)
      }
      if (task.state === "finished") {
        finishedTasks.push(task)
      }
    })

    return (
      <>
      {activeTasks.length !== 0 && <div className="alert alert-primary" role="alert">Новые задачи:</div>}
        {activeTasks.map(( {id, text} ) => {
          return (   
            <div key={id}>
              <div className="row">
                <div className="col-auto">
                  <button type="button" onClick={handleUpdate(id)} className="btn btn-success btn-sm">-</button>
                </div>
                <div className="col">{text}</div>
              </div>
              <hr />
            </div>
          )
        })}
        {finishedTasks.length !== 0 && <div className="alert alert-success" role="alert">Выполненные задачи:</div>}
        {finishedTasks.map(( {id, text} ) => {
          return (   
            <div key={id}>
              <div className="row">
                <div className="col-auto">
                  <button type="button" onClick={handleRemove(id)} className="btn btn-danger btn-sm">-</button>
                </div>
                <div className="col">{text}</div>
              </div>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
}