import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background-banner) url('assets/illustration.svg') no-repeat bottom;
    width: 100%;
    max-width: 1120px;
    height: 700px;
    margin: 1rem auto;
    display: grid;

    header {
        text-align: center;
        
        h2 {
            padding: 5rem 0 0;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.5;
            color: var(--text-black);
        }

        /* .off {
            display: grid;
            grid-template-columns: repeat(3, 200px);
            justify-content: center;

            .up-img {
                align-items: right;
            }

            .amount-img {
                
                margin-right: 2rem; 
            }

            .percent-img {

            }
        }  */
    }

    .cards {
        margin-top: -5rem;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        .first-card {
            display: flex;
            flex-direction: column;
            background-color: #9E98DC;
            width: 150px;
            height: 200px;
            align-items: center;
            justify-content: end;
            transition: filter 0.2s;

            p {
                width: 100px;
                font-weight: 700;
            }

            div {
                width: 100px;
                margin: 1rem auto;
            }

            &:hover {
                cursor: pointer;
                filter: brightness(0.9);
            }
        }

        .second-card {
            display: flex;
            flex-direction: column;
            background-color: #FF8FE6;
            width: 150px;
            height: 250px;
            align-items: center;
            justify-content: end;
            transition: filter 0.2s;

            p {
                width: 100px;
                font-weight: 700;
            }

            div {
                width: 100px;
                margin: 1rem auto;
            }

            &:hover {
                cursor: pointer;
                filter: brightness(0.9);
            }
        }
    }

`