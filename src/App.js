import React from 'react';
import './App.css';
import Header from './components/Header';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

function App() {
  // Component Structure of MagicBlogs
  return (
    <div className="container">
      <Provider store={store}>
        <Header/>
        <BlogSection/>
      </Provider>
      <Footer/>
    </div>
  );
}

export default App;
