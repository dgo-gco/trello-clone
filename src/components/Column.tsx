import React from 'react'
import { ColumnContainer, ColumnTitle } from '../style'

interface ColumnProps {
    text?: string;
  }
  
export const Column = ({text, children}: React.PropsWithChildren <ColumnProps>) => {
    return (
      <div>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
      </ColumnContainer>
      </div>
    );
  }

export default Column