import React from 'react';
import { Route, Link } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import NoteForm from './NoteForm/NoteForm';
import FolderNavs from './FolderNavs/FolderNavs';
import dummyStore from '../dummy-store';

class App extends React.Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <FolderNavs
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NotePageNav {...routeProps} folder={folder} />;
          }}
        />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </>
    );
  }


  render() {
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

}

export default App;