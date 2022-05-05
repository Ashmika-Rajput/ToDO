import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTask from './AddTask';


describe('Add task Component', () => {
    test('render To Do',()=>{
        render(<AddTask/>);
        const taskElement = screen.getByText('ToDo',{exact:false});
        expect(taskElement).toBeInTheDocument();
   })
   
//    test('render changed! if the button was clicked',()=>{
//        //Arrange
//           render(<AddTask/>);
//        //Act
//           const buttonElement=screen.getByRole('button');
//           userEvent.click(buttonElement);
//        //Assert
//           const outputElement=screen.getByText('Create Task');
//           expect(outputElement).toBeInTheDocument();
//    })
})