import { render,screen } from "@testing-library/react";
import DoneList from './DoneList';

describe('Add task Component', () => {
    test('render To Do',()=>{
        render(<DoneList/>);
        const listElement = screen.findAllByRole("listitem");
        expect(listElement).not.toHaveLength(0);
   })
})