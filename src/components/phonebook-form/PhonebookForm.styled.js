import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledField = styled.input`
width: ${p => p.theme.space[8]}px;
height: ${p => p.theme.space[5]}px;

&:hover,
&:focus{
    outline-color: ${p => p.theme.colors.accent};
}
`;

export const StyledForm = styled(Form)`
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: ${p => p.theme.space[2]}px;
box-shadow: 2px 2px 26px 9px #2624FF; 
`;

export const Label = styled.label`
margin-bottom: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.black};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};

&:not(:first-of-type){
    margin-top: ${p => p.theme.space[5]}px;
}
`;

export const Button = styled.button`
width: ${p => p.theme.space[7]}px;
height: ${p => p.theme.space[5]}px;
margin-top: ${p => p.theme.space[5]}px;
cursor: pointer;
border-radius: ${p => p.theme.radii.normal};
border-color: ${p => p.theme.colors.accent};
font-size: ${p => p.theme.fontSizes.m};
color: ${p => p.theme.colors.black};
font-weight: ${p => p.theme.fontWeights.bold};

&:hover,
&:focus{
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
}
`;

export const ErrorMessage = styled.div`
color: ${p => p.theme.colors.error};
`