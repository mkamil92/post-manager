import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PostDetailPage from './pages/PostDetailPage';
import BookmarksPage from './pages/BookmarksPage';
import Navigation from './pages/Navigation';

const App = () => {
  return (
    
      <>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={PostListPage} />
        <Route path="/bookmarks" component={BookmarksPage} />
        <Route path="/:id" component={PostDetailPage} />
      </Switch>
      </>

  )
}
export default App
