import React from 'react';
import Introduction from '../components/Introduction';
import List from '../components/List';

export default function({ requirements, additional, benefits }) {
  return (
    <>
      <List items={requirements}>
        <Introduction>Requirements</Introduction>
      </List>
      <List items={additional}>
        <Introduction>Nice to have</Introduction>
      </List>
      <List items={benefits}>
        <Introduction>What we offer</Introduction>
      </List>
    </>
  );
}
