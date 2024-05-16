import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardComponent from '../../cards/ProductCard.vue'

describe('CardComponent', () => {
  it('renders card with correct props and buttons', async () => {
    const cardIcon = 'example.png'
    const cardHeader = 'Example Header'
    const cardContent = 'Example Content'

    const wrapper = mount(CardComponent, {
      props: {
        cardIcon,
        cardHeader,
        cardContent,
      },
    })

    // Check if props are rendered correctly
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(cardIcon)
    expect(wrapper.find('h4').text()).toBe(cardHeader)
    expect(wrapper.find('p').text()).toBe(cardContent)
  })
})
