import React from 'react';
import { render } from 'react-dom';

import { Button } from '../src';

// Default App we can use to render the design system inside
const App = () => (
  <div>
    <Button>Default Button</Button>
    <br />
    <Button primary>Active Button</Button>
  </div>
);

render(<App />, document.getElementById('root'));

