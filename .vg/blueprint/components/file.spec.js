import { shallowMount } from '@vue/test-utils'
import __name__ from '@/__type__/__nameFull__'

describe('__name__', () => {
  it('should render a __name__ when Vue creates it', () => {
    const wrapper = shallowMount(__name__, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
