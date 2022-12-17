import styled from 'styled-components';

export const TodoItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, auto);
`

export const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 5.3125rem;

    padding: 0 0.9375rem 0;
    margin-top: 0.9375rem;

    background-color: #F1F1F1;
    box-shadow: 0 2.5px 10px #3C3C3C35;

    color: #808080;
`

export const TodoItemTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;

    margin-left: 0.625rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 14.6875rem;
`