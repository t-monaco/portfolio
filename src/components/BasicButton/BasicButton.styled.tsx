import styled from "styled-components";
import { breakpoints } from "../../styles";

export const BasicButton = styled.button<object>`
    border: 2px solid var(--purple-001);
    padding: 0.5rem;
    position: relative;
    width: 100%;

    &::after {
        background: var(--purple-001);
        content: "";
        inset: 0;
        position: absolute;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.4s cubic-bezier(0.1, 0.8, 0.3, 1);
        z-index: -1;
    }
    color: var(--purple-001);

    &:hover {
        color: var(--white);

        &::after {
            transform: scaleX(1);
        }
    }

    @media screen and (min-width: ${breakpoints.md}) {
        width: 30vw;
    }
`;
