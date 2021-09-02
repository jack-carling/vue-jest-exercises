import { shallowMount } from '@vue/test-utils';
import Options from '@/components/Options';

describe('Options', () => {
  it('should set the class selected on clicked element', async () => {
    const wrapper = shallowMount(Options);
    const divArray = wrapper.findAll('div');
    const secondDiv = divArray.at(1);
    await secondDiv.trigger('click');
    expect(secondDiv.classes('selected')).toBeTruthy();
  });
  it('should remove the class selected on an element if another element is clicked', async () => {
    const options = [
      {
        name: 'First',
        selected: false,
      },
      {
        name: 'Second',
        selected: true,
      },
      {
        name: 'Third',
        selected: false,
      },
      {
        name: 'Fourth',
        selected: false,
      },
      {
        name: 'Fifth',
        selected: false,
      },
    ];
    const wrapper = shallowMount(Options, {
      data() {
        return { options };
      },
    });
    const divArray = wrapper.findAll('div');
    const secondDiv = divArray.at(1);
    const thirdDiv = divArray.at(2);
    await thirdDiv.trigger('click');
    expect(secondDiv.classes('selected')).toBeFalsy();
  });
});
