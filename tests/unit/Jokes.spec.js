import { shallowMount } from '@vue/test-utils';
import Jokes from '@/components/Jokes';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('Jokes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Jokes);
    enableFetchMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        setup: 'What was a more important invention than the first telephone?',
        punchline: 'The second one.',
      })
    );
  });
  it('should fetch a joke from the API', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    const calls = fetch.mock.calls.length;
    expect(calls).toEqual(1);
  });
  it('should display a joke fetched from the API', async () => {
    await wrapper.setData({
      joke: {
        setup: 'What was a more important invention than the first telephone?',
        punchline: 'The second one.',
      },
    });
    const text = wrapper.find('h1').text();
    expect(text).toContain('What was a more important invention than the first telephone?');
  });
});
