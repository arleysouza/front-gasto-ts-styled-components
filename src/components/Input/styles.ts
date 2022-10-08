import styled from 'styled-components';

export const FieldSld = styled.fieldset` 
    display: flex;
    flex-direction: column;
    border: none;
    margin-bottom: 12px;
`;

export const LabelSld = styled.label`
    margin-bottom: 5px;
    color: ${props => props.theme.labelColor};
    font-weight: ${props => props.theme.labelFontWeight};
`;

export const InputSld = styled.input`
    padding: 5px;
    margin: 0px;
    height: ${props => props.height ? props.height : '40px'};
    width: ${props => props.width ? props.width : '100%'};
    color: ${props => props.theme.inputColor};
    background: ${props => props.theme.inputBackground};
    border: 1px solid ${props => props.theme.inputBorderColor};
    border-radius: 5px;
    :focus {
        outline: none;
        border: 1px solid ${props => props.theme.inputFocusBorderColor};
    }
`;


