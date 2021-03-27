import styled from 'styled-components';

export const Container = styled.nav`
    width: 80%;

    padding: 2rem 0 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        font-weight: 700;
        font-size: 2rem;
        a {
            text-decoration: none;
            color: var(--text-black);
        }
    }

    .menu {
        width: 100%;
        max-width: 500px;
        
        ul {      
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            list-style-type: none;
            

            li {
                color: var(--text-gray);
                font-weight: bold;

                a:first-child {
                    font-weight: 900;
                    color: var(--text-black);
                    text-decoration: none;
                }
            }
        }
    }

    .options {
        width: 100%;
        max-width: 150px;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
        }
    }

`