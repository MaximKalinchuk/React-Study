import React from 'react';

export default class Item extends React.Component {
  render() {
    const { onRemove, task } = this.props
    console.log(onRemove)
    console.log(task)
    return (
      <>
        {task.map((item) => {
          const { id, text } = item
          console.log('item', item)
          return (
            <div key={id}>
              <div className="row">
                <div className="col-auto">
                  <button type="button" onClick={onRemove(id)} className="btn btn-primary btn-sm">-</button>
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