import React, { Component } from 'react';
import MovieCatalog from './MovieCatalog.js';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MovieCatalog />
      </div>
    )
  }
}
