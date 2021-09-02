import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search';

describe('Search', () => {
  let wrapper, input;
  beforeEach(() => {
    wrapper = shallowMount(Search, {});
    input = wrapper.find('input');
  });
  it('should return a list of all 13 animals if the input field is empty', async () => {
    await input.setValue('');
    const list = wrapper.findAll('li').length;
    expect(list).toEqual(13);
  });
  it('should return both "dog" and "goldfish" when searching for "d"', async () => {
    await input.setValue('d');
    const list = wrapper.find('ul').text();
    expect(list).toContain('dog');
    expect(list).toContain('goldfish');
  });
  it('should return both "crow" and "cow" when searching for "ow"', async () => {
    await input.setValue('ow');
    const list = wrapper.find('ul').text();
    expect(list).toContain('crow');
    expect(list).toContain('cow');
  });
  it('should return both "ant" and "elephant" when searching for "AnT"', async () => {
    await input.setValue('AnT');
    const list = wrapper.find('ul').text();
    expect(list).toContain('ant');
    expect(list).toContain('elephant');
  });
});
