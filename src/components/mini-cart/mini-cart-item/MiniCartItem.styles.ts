import styled from 'styled-components';

export const MiniCartItemWrapper = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;

    img {
        width: 100px;
        object-fit: contain;
        margin-right: 30px;
    }

    .buttons {
        height: 30px;
        display: flex;
        align-items: center;
        button {
            margin: 0 20px;
        }
    }
`;
