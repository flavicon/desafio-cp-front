import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem -2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    max-width: 900px;
    .card {
        display: grid;
        grid-template-columns: repeat(2, 250px);
        align-items: center;
        
        .card-description {
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
                font-size: 0.75rem;
                font-weight: 400;
                line-height: 1.4;
                color: var(--text-gray);
            }

            h3 {
                font-size: 1rem;
                font-weight: 700;
                color: var(--text-black);
            }

            .price {
                font-weight: 700;
                font-size: 13px;
                color: var(--text-black);

                .discount {
                    text-decoration: line-through;
                    font-weight: 600;
                    color: #BDBDBD;
                    margin-left: 0.5rem;
                }
            }

            button {
                background-color: #FFF;
                border: 2px solid #4C3DB2;
                font-size: 0.5rem;
                font-weight: 700;
                color: #4C3DB2;

                padding: 1rem;
                margin-top: 0.5rem;
                max-width: 176px;

                transition: filter 0.2s;
                
                &:hover {
                    cursor: pointer;
                    filter: brightness(0.9);
                }

            }

        }
    }

`