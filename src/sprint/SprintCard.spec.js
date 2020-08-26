import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';
import SprintCard from "./SprintCard.js";

const mockSprint = ["sprint 1", [["John", "Paul"], ["Marcus"]]]

describe('The SprintCard component', ()=> {
    it('has correct title', ()=>{
        const {getByText} = renderComponent();

        expect(getByText('Sprint 1')).toBeInTheDOM();
    });

    it('should have 2 groups displayed when passed in 3 developers',  () => {
        const {container} = renderComponent();
        getAllByTestId(container, "group");

        expect(getAllByTestId(container, "group").length).toBe(1);
        expect(getAllByTestId(container, "solo").length).toBe(1);
    })
})


const renderComponent = () => {
    const rendered = render(
        <SprintCard sprint={mockSprint}/>
    )

    return {...rendered};
}