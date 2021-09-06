import { shallowMount } from '@vue/test-utils';
import TodoAPI from '@/components/TodoAPI';
import { enableFetchMocks, resetMocks } from 'jest-fetch-mock';

describe('TodoAPI', () => {
  beforeEach(() => {
    enableFetchMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        success: true,
        todos: [
          {
            task: 'Buy milk',
            id: '2c9edac3-602a-41ef-ba7a-b9754812451a',
          },
        ],
      })
    );
  });
  afterEach(() => {
    resetMocks();
  });
  it('should call the function "getData" on mount and fetch from API', () => {
    const testMethod = jest.spyOn(TodoAPI.methods, 'getData');
    shallowMount(TodoAPI);
    expect(testMethod).toBeCalled();
    const calls = fetch.mock.calls.length;
    expect(calls).toEqual(1);
  });
  it('should be able to add a second todo', async () => {
    const wrapper = shallowMount(TodoAPI);
    fetch.mockResponseOnce(JSON.stringify({ success: true }));
    const input = wrapper.find('#todo-text');
    await input.setValue('Buy coffee');
    const button = wrapper.find('button');
    await button.trigger('click');
    const calls = fetch.mock.calls.length;
    expect(calls).toEqual(2);
  });
  it('should be able to remove a todo', async () => {
    const wrapper = shallowMount(TodoAPI);
    await wrapper.setData({
      todos: [
        {
          task: 'Buy milk',
          id: '2c9edac3-602a-41ef-ba7a-b9754812451a',
        },
      ],
    });
    fetch.mockResponseOnce(JSON.stringify({ success: true }));
    const button = wrapper.find('button.delete');
    await button.trigger('click');
    const calls = fetch.mock.calls.length;
    expect(calls).toEqual(2);
  });
});
