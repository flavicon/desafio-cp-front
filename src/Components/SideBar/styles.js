import styled from 'styled-components';

export const Container = styled.aside`
    background-color: #EFEEF6;
    width: 350px;
    min-height: 500px; 

    display: flex;
    
    ul {
        margin: 1rem auto;
        list-style-type: none;
        font-size: 93.75%;
        font-weight: 500;
        line-height: 3;

        li:first-child {
            list-style-type: disc;
            font-size: 1rem;
            font-weight: 700;
            margin-left: 1rem;
        }

    }

`