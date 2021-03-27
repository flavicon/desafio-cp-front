import styled from 'styled-components';

export const Container = styled.aside`
    background-color: #EFEEF6;
    min-width: 400px;
    max-width: 500px;
    height: 600px; 

    display: flex;
    
    ul {
        margin: 1rem auto;
        list-style-type: none;
        font-size: 93.75%;
        font-weight: 500;
        line-height: 3;
        color: var(--text-gray);

        li:first-child {
            list-style-type: disc;
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-black);
            margin-left: 1rem;
        }

    }

`