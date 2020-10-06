import React from 'react'
import './MainPage.css'


export default function MainPage() {
  return (

    <div className="flex-container">
      <div className="back-container">
        <nav className="back-nav"><button type="submit" for="back-nav" id="back-nav">Back</button></nav>
      </div>

      <ul>
        <li>
          <div className="note-container">
            <div className="note">
              <fieldset>
                <link to='/'
                <h2> className="title">Note 1</h2>
                <p className="date">Date modified on 6th October 2020</p>
                <button type="delete" for="delete-button" id="delete-button">Delete Note</button>
              </fieldset>
            </div>
          </div>
        </li>
      </ul>

    </div>
  )
}