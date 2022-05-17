import { fireEvent, render,screen } from "@testing-library/react";

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
//INTEGRATION TEST
const addTask=(task)=>{
    const inputElement=screen.getByPlaceholderText('Add todo...');
    const buttonElement=screen.getByRole('button',{name:'Create Task'});
    task.forEach(task=>{
        fireEvent.change(inputElement,{target:{value:task}});
        fireEvent.click(buttonElement);
    })
}
describe('Add Component',()=>{
    test('render display single task as list upon creating task',()=>{
        //Arrange
           render(<AddTask/>);
        //Act
           addTask(['Go Shopping']);
        //Assert
           const divElement=screen.getByText('Go Shopping');
           expect(divElement).toBeInTheDocument();
    })
    test('render display multiple task as list upon creating task',()=>{
        //Arrange
           render(<AddTask/>);
        //Act
           addTask(['Go Shopping','Pay Bill','Rent a Flat']);
        //Assert
           const divElement=screen.getAllByTestId("task");
           expect(divElement.length).toBe(5);
    })
})