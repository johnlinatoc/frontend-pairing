import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';

import ScheduleInfo from "./ScheduleInfo.js";

const mockUsers = [ 
    {
        "name": "John"
    },
    {
        "name": "Paul"
    },
    {
        "name": "Marcus"
    }
]

const mockSprints = {
    "sprint 1": [["John, Paul"], ["Marcus"]],
    "sprint 2": [["Paul, Marcus"], ["John"]],
    "sprint 3": [["John, Marcus"], ["Marcus"]]
}

describe('The ScheduleInfo component', ()=> {
    it('has correct title', ()=>{
        const {getByText} = renderComponent();
        expect(getByText('Schedule Info')).toBeInTheDOM();
    });

    it('should have 3 sprints displayed when passed in 3 sprints',  () => {
        const {getByText} = renderComponent();
        expect(getByText('3 sprints')).toBeInTheDOM();
    })

    xit('should display all names of developers passed in', async () => {
        const {getByText} = renderComponent();
        
        expect(getByText('John')).toBeInTheDOM();
        expect(getByText('Paul')).toBeInTheDOM();
        expect(getByText('Marcus')).toBeInTheDOM();
    })
})

const renderComponent = () => {
    const rendered = render(
        <ScheduleInfo users={mockUsers} sprints={mockSprints}/>
    )

    return {...rendered};
}