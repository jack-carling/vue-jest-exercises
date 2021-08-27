import { shallowMount } from '@vue/test-utils';
import Capitalization from '@/components/Capitalization';

describe('Capitalization', () => {
  const wrapper = shallowMount(Capitalization, {});
  const input = wrapper.find('input');
  it('should return the input in a span with the first letter capitalized', async () => {
    await input.setValue('word');
    expect(wrapper.find('#result').text()).toBe('Word');
  });
});
