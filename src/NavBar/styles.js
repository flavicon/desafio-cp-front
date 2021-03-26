import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;

    .logo {
        font-weight: 700;
        font-size: 2rem;
    }

    .menu {
        width: 100%;
        max-width: 500px;
    
        ul {      
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.75rem;
            list-style-type: none;
        
            &:first-child {
                
                font-weight: 900;
            }
        }
    }

    .options {
        width: 100%;
        max-width: 170px;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
        }
    }

`