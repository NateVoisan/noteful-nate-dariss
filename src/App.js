import React from 'react';
import { Route, Link } from 'react-router-dom';
import MainPage from './Main/MainPage';
import AddNote from './AddNote/AddNote';
import FolderNavs from './FolderNavs/FolderNavs';

function App() {
  return (
    <main className='App'>
      <Route
        exact Path='/'
        component={MainPage}
      />
      <Route
        path='/AddNote/:AddNoteId'
        component={AddNote}
      />
      <Route
        path='/FolderNavs/:FolderNavsId'
        component={FolderNavs}
      />
      {/* content goes here */}
    </main>
  );
}

export default App;