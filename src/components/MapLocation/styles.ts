import styled from 'styled-components';

export const MapContainer = styled.div`
    width: 100%;
    height: 30rem;
    margin-top: 1rem;
    margin-bottom: -1rem;
    overflow: hidden;

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    filter: grayscale(100%);
`;