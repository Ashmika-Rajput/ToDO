import {render, screen,fireEvent} from '@testing-library/react';

import TodoList from './TodoList';

const MockFunc=jest.fn();

describe('TodoList Component',()=>{
      test('renders deleting todo from todoList',async () => {
        //Arrange    
             render( <TodoList  pendingTodos={['Do It']}
                        completedTodos={[]}
                        completeHandler={MockFunc}
                        deleteHandler={MockFunc}     
                   />);
       //Act 
             const todoParaElement=await screen.findByText('Do It');
             const buttonElement=await screen.findByRole('button',{name:'Delete'});
             fireEvent.click(buttonElement);
             fireEvent.emptied(todoParaElement);
       //Assert          
             expect(todoParaElement).toBeInTheDocument();
     })
})