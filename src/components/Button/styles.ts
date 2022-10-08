import styled from 'styled-components';

type ButtonProps = {
    margin?: string;
}   

export const ButtonSld = styled.button<ButtonProps>`
    padding: 10px 18px;
    margin: ${props => props.margin ? props.margin : "0px"};

    color: ${props => props.theme.buttonColor};
    background: ${props => props.theme.buttonBackground};

    border: none;
    border-radius: 5px;

    transition: background 0.2s;
    cursor: pointer;

    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);

    &:hover {
        background: ${props => props.theme.buttonBackgroundHover};
    }
`;