import React from 'react'
import { StyledButtons } from '../StyledButtons/StyledBtn'
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers buttons horizontally */
  align-items: center;    /* Centers items vertically */
  gap: 20px;              /* Space between buttons */
`;

export function ButtonCategories({ setCategory }) {
    return (
        <section className='container col-12'>
            <h1 className='text-center text-dark'>Movies</h1>
            <ButtonContainer >
                <StyledButtons onClick={() => { setCategory('All') }}>All</StyledButtons>
                <StyledButtons onClick={() => { setCategory('Comedy') }}>Comedy</StyledButtons>
                <StyledButtons onClick={() => { setCategory('Horror') }}>Horror</StyledButtons>
                <StyledButtons onClick={() => { setCategory('Thriller') }}>Thriller</StyledButtons>
                <StyledButtons onClick={() => { setCategory('Action') }}>Action</StyledButtons>
            </ButtonContainer>
        </section>
    )
}