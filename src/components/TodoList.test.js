import {render, screen,fireEvent} from '@testing-library/react';

import TodoList from './TodoList';

const MockFunc=jest.fn();

describe('Task List Component',()=>{
    test('renders taskList', () => {
         //Arrange    
              render( <TodoList  pendingTodos={['Do It']}
                         completedTodos={[]}
                         completeHandler={MockFunc}
                         deleteHandler={MockFunc}     
                    />);
        //Act  
        //Assert           
              const todoParaElement=screen.getByText('Do It');
              expect(todoParaElement).toBeVisible();
      })
      test('renders deleting newtask', () => {
        //Arrange    
             render( <TodoList  pendingTodos={['Do It']}
                        completedTodos={[]}
                        completeHandler={MockFunc}
                        deleteHandler={MockFunc}     
                   />);
       //Act 
             const todoParaElement=screen.getByText('Do It');
             const buttonElement=screen.getByRole('button',{name:'Delete'});
             fireEvent.click(buttonElement);
             fireEvent.emptied(todoParaElement);
       //Assert          
             expect(todoParaElement).toBeInTheDocument();
     })
})