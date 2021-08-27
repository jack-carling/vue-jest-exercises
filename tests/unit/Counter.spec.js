import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter', () => {
  const wrapper = shallowMount(Counter, {});
  const counter = wrapper.find('#result');
  it('should start at 1', () => {
    expect(Number(counter.text())).toEqual(1);
  });
  it('should change to 2 when user clicks the increase button', async () => {
    const button = wrapper.find('#increase');
    await button.trigger('click');
    expect(Number(counter.text())).toEqual(2);
  });
  it('should change back to 1 when user clicks the decrease button', async () => {
    const button = wrapper.find('#decrease');
    await button.trigger('click');
    expect(Number(counter.text())).toEqual(1);
  });
});
