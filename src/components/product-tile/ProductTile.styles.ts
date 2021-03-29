import styled from 'styled-components';

export const TileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    button {
        border: none;
        border-radius: 0 0 20px 20px;
        height: 60px;
        outline: none;
        cursor: pointer;
    }

    img {
        max-height: 250px;
        object-fit: contain;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;