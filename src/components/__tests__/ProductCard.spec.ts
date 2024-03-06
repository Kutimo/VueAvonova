import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CardComponent from "../cards/ProductCard.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";

describe("CardComponent", () => {
  it("renders card with correct props and buttons", async () => {
    const cardIcon = "example.png";
    const cardHeader = "Example Header";
    const cardContent = "Example Content";

    const wrapper = mount(CardComponent, {
      props: {
        cardIcon,
        cardHeader,
        cardContent,
      },
      global: {
        components: {
          ButtonPrimary,
        },
      },
    });

    // Check if props are rendered correctly
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(cardIcon);
    expect(wrapper.find("h4").text()).toBe(cardHeader);
    expect(wrapper.find("p").text()).toBe(cardContent);

    // Check if buttons are rendered and emit correct events
    const buttons = wrapper.findAllComponents(ButtonPrimary);
    expect(buttons.length).toBe(2);

    // Simulate button clicks and check if corresponding methods are called
    await buttons[0].trigger("click");
    await buttons[1].trigger("click");
    // TODO: Check if methods are called
    // expect(wrapper.emitted().onReadMore).toBeTruthy();
    // expect(wrapper.emitted().onBookAppointment).toBeTruthy();
  });
});
