import { render,screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import AddTask from './AddTask';


describe('Add task Component', () => {
    test('render To Do',()=>{
        //Arrange
          render(<AddTask/>);
        //Assert
          const taskElement = screen.getByText('ToDo');
          expect(taskElement).toBeInTheDocument();
    })
    test('renders "Create task" button is enabled or not ',()=>{
        //Arrange
           render(<AddTask/>);
        //Assert
           const outputElement=screen.getByRole('button',{name:'Create Task'})
           expect(outputElement).toBeEnabled();

    })
    test('renders input field changes',()=>{
       //Arrange   
           render(<AddTask/>);
       //Act
           const inputElement=screen.getByPlaceholderText('Add todo...','Create 1st task');
           userEvent.type(inputElement);
       //Assert
           expect(inputElement).toBeInTheDocument();   
    })
    test('renders input field changes to empty upon button click',()=>{
        //Arrange   
            render(<AddTask/>);
        //Act
            const inputElement=screen.getByPlaceholderText('Add todo...');
            const buttonElement=screen.getByRole('button',{name:'Create Task'});
            userEvent.type(inputElement);
            userEvent.click(buttonElement);
        //Assert 
            expect(inputElement.value).toBe("");   
     })
})
