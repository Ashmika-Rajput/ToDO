import {render, screen,fireEvent} from '@testing-library/react';

import NewTask from './NewTask';

const MockFunc=jest.fn();

describe('New Task Component',()=>{
    test('renders newtask', () => {
         //Arrange    
              render( <NewTask  newTask={['Do It']}
                         completedTodos={[]}
                         completeTodo={MockFunc}
                         deleteTodo={MockFunc}     
                    />);
        //Act  
        //Assert           
              const paraElement=screen.getByText('Do It');
              expect(paraElement).toBeVisible();
      })
      test('renders deleting newtask', () => {
        //Arrange    
             render( <NewTask  newTask={['Do It']}
                        completedTodos={[]}
                        completeTodo={MockFunc}
                        deleteTodo={MockFunc}     
                   />);
       //Act 
             const paraElement=screen.getByText('Do It');
             const buttonElement=screen.getByRole('button',{name:'Delete'});
             fireEvent.emptied(paraElement);
             fireEvent.click(buttonElement);
       //Assert          
             expect(paraElement).toBeInTheDocument();
     })
})