import React from 'react'


export default function Desctiption() {
  return (
    <div className="App">
    <header>
         <h1>Noteful</h1>
     </header>
     <hr/>
     <div className="back-container">
         <nav className="back-nav"><button type="submit" for="back-nav" id="back-nav">Back</button></nav>
     </div>
     <div className="note-container">
         <div className="note">
             <fieldset>
             <legend><h2 className="title">Note 1</h2></legend>
             <p className="date">Date modified on 6th October 2020</p>
             <button type="delete" for="delete-button" id="delete-button">Delete Note</button>
         </fieldset>
         </div>
     </div>
     <div className="note-description-container">
         <p className="note-description">Lorem ipsum blah blah description stuff blah blah</p>
     </div>
 </div>
  )
}