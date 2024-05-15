import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ContactCardPFA from '../../cards/ContactCardPFA.vue'

describe('ContactCardPFA', () => {
  it('renders contact information correctly', () => {
    // Mock data for contact
    const contactData = {
      name: 'Navn Navnesen',
      email: 'navnnavnesen@example.com',
      phone: '123-456-7890',
    }

    // Shallow mount the component
    const wrapper = shallowMount(ContactCardPFA, {
      data() {
        return {
          contact: contactData,
        }
      },
    })

    expect(wrapper.exists()).toBe(true)
    // expect(wrapper.find("h4").text()).toBe(cardHeader);

    // Asserts that the component renders the contact information correctly
    expect(wrapper.find('h4').text()).toBe(contactData.name)

    // Find all <p> elements and filter out the ones without specific class names
    const paragraphs = wrapper.findAll('p')

    // Check the content of each <p> element
    expect(paragraphs[0].text()).toContain(`Email: ${contactData.email}`)
    expect(paragraphs[1].text()).toContain(`Phone: ${contactData.phone}`)
  })
})
