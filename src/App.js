import React from 'react';

import MembersContainer from './containers/MembersContainer';
import MessagesContainer from './containers/MessagesContainer';
import { Messenger } from './components/Messenger';

export default function App(props) {
  return (
    <MembersContainer>
      <MessagesContainer>
        <Messenger />
      </MessagesContainer>
    </MembersContainer>
  );
}

