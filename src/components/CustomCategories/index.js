import React from 'react';
import { Container, ImageStyled, TextStyled, TitleStyled } from './index.style';

const CustomCategories = ({img, title, text}) => {
    return (
        <Container>
            <ImageStyled src={img}></ImageStyled> 
            <TitleStyled>{title}</TitleStyled>
            <TextStyled>{text}</TextStyled>
        </Container>
    );
}

export default CustomCategories;
