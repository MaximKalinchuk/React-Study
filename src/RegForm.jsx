import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        email: '',
        pass: '',
        address: '',
        city: '',
        countryValue: '',
        edit: false,
        accept: false,
       }
    }
  
    emailChanged = (e) => {
      this.setState(({ email }) => ({ email: e.target.value }) )
    }
  
    passChanged = (e) => {
      this.setState(({ pass }) => ({ pass: e.target.value }))
    }
  
    addressChanged = (e) => {
      this.setState(({ address }) => ({ address: e.target.value }))
    }
  
    cityChanged = (e) => {
      this.setState(({ city }) => ({ city: e.target.value }))
    }
  
    countryValueChanged = (e) => {
      this.setState(({ countryValue }) => ({ countryValue: e.target.value }))
    }
    acceptChanged = (e) => {
      this.setState(({ accept }) => ({ accept: !accept }))
    }
  
    hundleSubmit = (e) => {
      e.preventDefault()
      this.setState(({ edit }) => ({ edit: !edit }))
    }
  
    render() {
    // const styles = {
    //     textAlign: 'center'
    // }

    // console.log('styles', styles)
      if (this.state.edit) {
        return (
        <div>
            <button type="button" className="btn btn-primary" onClick={this.hundleSubmit}>Вернуться к редактированию</button>
            <center><h6 class="display-6">Информация об аккаунте</h6></center>
            <table className="table">
        <tbody>
          <tr>
            <td>Согласен с правилами сайта:</td>
            <td>{this.state.accept ? 'Да' : 'Нет'}</td>
          </tr>
          <tr>
            <td>Адрес:</td>
            <td>{this.state.address}</td>
          </tr>
          <tr>
            <td>Город:</td>
            <td>{this.state.city}</td>
          </tr>
          <tr>
            <td>Страна:</td>
            <td>{this.state.countryValue}</td>
          </tr>
          <tr>
            <td>Почта:</td>
            <td>{this.state.email}</td>
          </tr>
          <tr>
            <td>Пароль:</td>
            <td>{this.state.pass}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
    } else {
        return (
          <center><form onSubmit={this.hundleSubmit} name="myForm" >
            <h6 className="display-6">Введите данные:</h6>
            <div className="col-md-6 mb-3" >
              <label htmlFor="email" className="col-form-label">Email</label>
              <input type="email" onChange={this.emailChanged} name="email" className="form-control" id="email" placeholder="Введите почту" value={this.state.email} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password" className="col-form-label">Пароль</label>
              <input type="password" onChange={this.passChanged} name="password" className="form-control" id="password" placeholder="Введите пароль" value={this.state.pass} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="col-form-label">Адрес</label>
              <textarea type="text" onChange={this.addressChanged} className="form-control" name="address" id="address" placeholder="ул. Пушкина 12-14" value={this.state.address}></textarea>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="col-form-label">Город</label>
              <input type="text" onChange={this.cityChanged} className="form-control" name="city" id="city"  placeholder="Введите город" value={this.state.city} />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="country" className="col-form-label">Страна</label>
              <select id="country" name="country" className="form-control" onChange={this.countryValueChanged} value={this.state.countryValue}>
                <option value="Choose">Выбрать</option>
                <option value="argentina">Аргентина</option>
                <option value="russia">Россия</option>
                <option value="china">Китай</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-check">
                <label className="form-check-label" htmlFor="rules">
                  <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={this.state.accept} onChange={this.acceptChanged} />
                  Согласен с правилами сайта
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
          </form></center>
        )
      }
    }
  }