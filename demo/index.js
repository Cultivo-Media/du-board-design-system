import React from 'react';
import { render } from 'react-dom';

import {
  Button,
  CardTable,
  CardTableRow,
  CardTableRowHead,
  CardTableRowSub,
  Grow,
} from '../src';

// Default App we can use to render the design system inside
const App = () => (
  <div>
    <Button>Default Button</Button>
    <br />
    <Button primary>Active Button</Button>
    <br /><br />
    <CardTable>
      <CardTableRow>
        <CardTableRowSub>Company</CardTableRowSub>
        <Grow />
        <CardTableRowHead>Google</CardTableRowHead>
      </CardTableRow>
      <CardTableRow>
        <CardTableRowSub>Size</CardTableRowSub>
        <Grow />
        <CardTableRowHead>100,000</CardTableRowHead>
      </CardTableRow>
      <CardTableRow>
        <CardTableRowSub>CEO</CardTableRowSub>
        <Grow />
        <CardTableRowHead>Sundar Pichai</CardTableRowHead>
      </CardTableRow>
    </CardTable>
  </div>
);

render(<App />, document.getElementById('root'));

