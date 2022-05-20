import { fireEvent, render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTask from './AddTask';

/*Testing
    -whether user is allowed to add todo in input field or not
    -whether input field changes to empty once todo is added
    -whether single todo is rendered on screen properly or not
    -whether multiple todos is rendered on screen properly or not
*/   
const addTodo=(todo)=>{
    const inputElement=screen.getByPlaceholderText('Add todo...');
    const buttonElement=screen.getByRole('button',{name:'Create Task'});
    todo.forEach(todo=>{
        fireEvent.change(inputElement,{target:{value:todo}});
        fireEvent.click(buttonElement);
    })
}

describe('Add task Component', () => {
    test('renders input field accepting user input or not',()=>{
       //Arrange   
           render(<AddTask/>);
       //Act
           const inputElement=screen.getByPlaceholderText('Add todo...','Go Shopping');
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
     test('render single todo on screen',()=>{
        //Arrange
           render(<AddTask/>);
        //Act
           addTodo(['Go Shopping']);
        //Assert
           const divElement=screen.getByText('Go Shopping');
           expect(divElement).toBeInTheDocument();
    })
    test('render multiple todos on screen',()=>{
        //Arrange
           render(<AddTask/>);
        //Act
           addTodo(['Go Shopping','Pay Bill','Rent a Flat']);
        //Assert
           const divElement=screen.getAllByTestId("task");
           expect(divElement.length).toBe(5);
    })
})
