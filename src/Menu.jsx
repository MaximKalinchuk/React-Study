import React, { useState } from "react";

const Menu = () => {

    const [modalState, setModalState] = useState('close')

    console.log(modalState)

    const aboutClick = (e) => {
      e.preventDefault()
      setModalState('show')
    }

    const closeModal = (e) => {
      e.preventDefault()
      setModalState('close')
    }
    
  if (modalState === 'close') {
      return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link about" aria-current="page" onClick={aboutClick} href="#">О приложении</a>
              </li>
              <li className="nav-item" data-err="err">
                <a className="nav-link" rel="noreferrer"  href="https://github.com/MaximKalinchuk" target="_blank">GitHub</a>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      )
  }

  if (modalState === 'show') {
      return (
        <>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link about" aria-current="page" onClick={aboutClick} href="#">О приложении</a>
                </li>
                <li className="nav-item" data-err="err">
                  <a className="nav-link" rel="noreferrer"  href="https://github.com/MaximKalinchuk" target="_blank">GitHub</a>
                </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="modal fade show" id="modal" tabIndex="-1" role="dialog" aria-labelledby="modal" aria-modal="true" style={{display: "block"}}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">О приложении</h5>
                      </div>
                      <div className="modal-body text-break">
                          <p>Приложение сделано с целью показать работодателю базовые навыки владения такими технологиями, как React, React Hooks и в дальнейшем Redux.
                          Всё написано на React, кроме footer.</p>
                          <p>Состояние сохраняется в LocalStorage.</p>
                          <p style={{color: 'red'}}>Приложение не является адаптивным! Адаптировать получилось только footer. Для создания адаптивности пришлось бы сделать
                          навигационное меню в header, что противоречило первоначальной идеи.</p>
                      </div><div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Закрыть</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal-backdrop fade show"></div>
          </>
      )
  }


}

export default Menu