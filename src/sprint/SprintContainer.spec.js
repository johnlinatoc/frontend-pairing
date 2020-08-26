import React from 'react';
import { render, getAllByTestId, getByText, screen } from '@testing-library/react';
import SprintContainer from "./SprintContainer.js";

const mockSprints = {
    "sprint 1": [["John, Paul"], ["Marcus"]],
    "sprint 2": [["Paul, Marcus"], ["John"]],
    "sprint 3": [["John, Marcus"], ["Marcus"]]
}

describe('The SprintContainer component', ()=> {
    it('has correct title', ()=>{
        const {getByText} = renderComponent();

        expect(getByText('Sprint Pairs')).toBeInTheDOM();
    });

    it('should have 2 sprints displayed when passed in 3 developers',  () => {
        renderComponent();
        screen.debug();


        expect(getByText('3 sprints')).toBeInTheDOM();
    })
})


const renderComponent = () => {
    const rendered = render(
        <SprintContainer sprints={mockSprints}/>
    )

    return {...rendered};
}