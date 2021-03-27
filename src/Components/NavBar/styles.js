import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    max-width: 1110px;
    padding: 2rem 0 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        font-weight: 700;
        font-size: 2rem;
        color: var(--text-black);
        
    }

    .menu {
        width: 100%;
        max-width: 500px;
        
        ul {      
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            list-style-type: none;
            
            li:first-child {
                font-weight: 900;
                color: var(--text-black);
            }
            
            li {
                color: var(--text-gray);
                font-weight: bold;
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