import { shallowMount } from '@vue/test-utils';
import Todo from '@/components/Todo';

describe('Todo', () => {
  const wrapper = shallowMount(Todo, {});
  it('should render the todo from the input field', async () => {
    const input = wrapper.find('#todo-text');
    await input.setValue('Buy coffee');
    const button = wrapper.find('button');
    await button.trigger('click');
    const count = wrapper.findAll('ul > li').length;
    expect(count).toEqual(1);
  });
  it('should be able to delete a todo', async () => {
    const button = wrapper.find('button.delete');
    await button.trigger('click');
    const count = wrapper.findAll('ul > li').length;
    expect(count).toEqual(0);
  });
});
