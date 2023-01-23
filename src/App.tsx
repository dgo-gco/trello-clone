import React from 'react';
import './App.css';
import { Card } from './components/Card';
import Column from './components/Column';
import { AppContainer } from './style';

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
      <Card text="Learn TS" />
      </Column>
      <Column text="In Progress">
      <Card text="Learn JS" />
      </Column>
      <Column text="Done">
      <Card text="Start using static " />
      </Column>
    </AppContainer>
  );
}

export default App;
