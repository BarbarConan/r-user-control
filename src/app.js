import React from 'react';
import ReactDOM from 'react-dom';

require('./app.scss');

const Component = () => (
  <div>
    <h1>Hello, world!</h1>
    <input type="text" />
  </div>
);

ReactDOM.render(<Component />, document.getElementById('root'));
