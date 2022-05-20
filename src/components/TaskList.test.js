import {render, screen,fireEvent} from '@testing-library/react';

import TaskList from './TaskList';

const MockFunc=jest.fn();

describe('Task List Component',()=>{
    test('renders taskList', () => {
         //Arrange    
              render( <TaskList  pendingTodos={['Do It']}
                         completedTodos={[]}
                         completeHandler={MockFunc}
                         deleteHandler={MockFunc}     
                    />);
        //Act  
        //Assert           
              const paraElement=screen.getByText('Do It');
              expect(paraElement).toBeVisible();
      })
      test('renders deleting newtask', () => {
        //Arrange    
             render( <TaskList  pendingTodos={['Do It']}
                        completedTodos={[]}
                        completeHandler={MockFunc}
                        deleteHandler={MockFunc}     
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