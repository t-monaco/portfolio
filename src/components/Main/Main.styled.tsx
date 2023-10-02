import styled from "styled-components";
import { breakpoints } from "../../styles";

export const ScrollTextContainer = styled.section<object>`
    display: flex;
    padding: 1rem 0;
    white-space: nowrap;

    @media screen and (min-width: ${breakpoints.lg}) {
        bottom: 3rem;
        left: 0 3rem;
        position: absolute;
    }
`;

export const ProfessionContainer = styled.section<object>`
    padding: 0 1rem;
    font-size: 1.5rem;

    @media screen and (min-width: ${breakpoints.lg}) {
        text-align: right;
        position: absolute;
        right: 2vw;
        bottom: 40vh;
        font-size: 2.5rem;
        font-weight: 300;
    }
`;