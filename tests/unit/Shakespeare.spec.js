import { shallowMount } from '@vue/test-utils';
import Shakespeare from '@/components/Shakespeare';

describe('Shakespeare', () => {
  const wrapper = shallowMount(Shakespeare, {});
  const insult = wrapper.find('#insult');
  const button = wrapper.find('button');
  it('should show the text "insult me!" when mounted', () => {
    expect(insult.text()).toBe('insult me!');
  });
  it('should generate an insult when the button is pushed', async () => {
    await button.trigger('click');
    expect(insult.text()).not.toBe('insult me!');
  });
  it('should generate a new insult when the button is pushed again', async () => {
    const previousInsult = insult.text();
    await button.trigger('click');
    expect(insult.text()).not.toBe(previousInsult);
  });
});
