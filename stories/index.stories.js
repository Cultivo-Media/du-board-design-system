import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  Button,
  CardTable,
  CardTableRow,
  CardTableRowHead,
  CardTableRowSub,
  Flex,
  Grow,
  MappedCheckbox,
  DefaultLabel,
  Header,
  SectionHeader,
} from '../src';

// Info
storiesOf('Welcome', module)
  .add('DU Board Design System', () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>DU Board Design System</h1>
      <p>A design system specifically created for handling elements for DU boards (job boards,
        student boards, etc). This repository originally was not going to be created, however a need
        arrose when multiple projects were going to be created all utilizing the same styles built
        within each.
        <br /><br />
        The goal of this repository is to provide style-focused components to be used in various
        applications, mainly the applications being built for DU and Project X-ITE.
      </p>
    </div>
  ));

// Buttons
storiesOf('Button', module)
  .add('primary', () => <Button primary>Primary Button</Button>)
  .add('secondary', () => <Button>Secondary Button</Button>);

// CardTable
storiesOf('CardTable', module)
  .add('Basic card table', () => (
    <div style={{ fontFamily: 'sans-serif' }}>
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
  ));

// Checkbox
storiesOf('Checkbox', module)
  .add('Unchecked', () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Flex center>
        <MappedCheckbox />
        <DefaultLabel>Do we have pizza?</DefaultLabel>
      </Flex>
    </div>
  ))
  .add('Checked', () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Flex center>
        <MappedCheckbox active />
        <DefaultLabel>Do we have pizza?</DefaultLabel>
      </Flex>
    </div>
  ));

// Header
storiesOf('Header', module)
  .add('Default Header', () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Header
        title="Default Header"
        description="This is some dummy text that displays as the description of the header component."
      />
    </div>
  ));

// Text
storiesOf('Text', module)
  .add('SectionHeader', () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <SectionHeader>This is a section header</SectionHeader>
    </div>
  ));