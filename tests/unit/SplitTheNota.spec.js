import { shallowMount } from '@vue/test-utils';
import SplitTheNota from '@/components/SplitTheNota';

describe('SplitTheNota', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SplitTheNota);
  });
  test('if the result is 275', async () => {
    const inputs = wrapper.findAll('input');
    await inputs.at(0).setValue('1000');
    await inputs.at(1).setValue('4');
    await inputs.at(2).setValue('.10');
    const button = wrapper.find('button');
    await button.trigger('click');
    const result = wrapper.find('span').text();
    expect(result).toContain('275');
  });
  test('if the result is 480', async () => {
    const inputs = wrapper.findAll('input');
    await inputs.at(0).setValue('800');
    await inputs.at(1).setValue('2');
    await inputs.at(2).setValue('.20');
    const button = wrapper.find('button');
    await button.trigger('click');
    const result = wrapper.find('span').text();
    expect(result).toContain('480');
  });
  test('if the result is 200', async () => {
    const inputs = wrapper.findAll('input');
    await inputs.at(0).setValue('600');
    await inputs.at(1).setValue('3');
    await inputs.at(2).setValue('0');
    const button = wrapper.find('button');
    await button.trigger('click');
    const result = wrapper.find('span').text();
    expect(result).toContain('200');
  });
});
