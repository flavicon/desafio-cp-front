import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background-banner) url('assets/illustration.svg') no-repeat bottom;
    width: 80%;
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

    }

    .cards {
        display: flex;
        margin-top: -18rem;
        height: 500px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;


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
                box-shadow: 0 1px 10px #9E98DC;
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
                box-shadow: 0 1px 10px #FF8FE6;
            }
        }
    }

`