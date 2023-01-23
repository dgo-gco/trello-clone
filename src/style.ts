import styled from "styled-components";

export const AppContainer = styled.div `
    align-items: flex-start;
    background-color: #3179ba;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 20px;
`

export const ColumnContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    min-width: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
`
export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: .5rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e24 0px 1px 0 0;
`

