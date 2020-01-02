import { shallowMount } from '@vue/test-utils'
import VerticalMarquee from '@/components/VerticalMarquee/index.vue'

describe('VerticalMarquee', () => {
  it('renders a message and responds correctly to user input', () => {
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallowMount(VerticalMarquee, {
      data() {
        return {
          previousImage: '',
          nextImage: '',
          hellArr: ''
        }
      }
    })
    wrapper.setProps({ previousImage: 'sssss' })
  })
})
