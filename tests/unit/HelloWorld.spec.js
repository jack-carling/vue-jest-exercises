import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld', () => {
  it('should render the text Hello World', () => {
    const wrapper = shallowMount(HelloWorld, {});
    const expected = 'Hello World';
    const actual = wrapper.find('h1').text();
    expect(actual).toBe(expected);
  });
});
