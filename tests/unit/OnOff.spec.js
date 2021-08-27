import { shallowMount } from '@vue/test-utils';
import OnOff from '@/components/OnOff';

describe('OnOff', () => {
  const wrapper = shallowMount(OnOff, {});
  const button = wrapper.find('button');
  it('should change the inner text of button to off from on', async () => {
    await button.trigger('click');
    expect(button.text()).toBe('Off');
  });
  it('should then change back to on if user clicks again', async () => {
    await button.trigger('click');
    expect(button.text()).toBe('On');
  });
});
