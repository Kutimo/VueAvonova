import { shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import ButtonPrimary from "../../buttons/ButtonPrimary.vue";

describe("ButtonPrimary", () => {
  it("renders button text and icon correctly", () => {
    const buttonText = "Click me";
    const icon = "<svg></svg>";

    const wrapper = shallowMount(ButtonPrimary, {
      props: {
        buttonText,
        icon,
      },
    });

    // Asserts that the button text and icon are rendered correctly
    expect(wrapper.text()).toContain(buttonText);
    expect(wrapper.find(".icon").exists()).toBe(true);
    expect(wrapper.find(".icon").html()).toContain(icon);
  });

  it("emits click event when clicked", async () => {
    const buttonText = "Click me";
    const wrapper = shallowMount(ButtonPrimary, {
      props: { buttonText },
    });

    // Simulate click event
    await wrapper.trigger("click");

    // Assert that a click event is emitted
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it('Checks that the route has a "to" prop', async () => {
    const buttonText = "Click me";
    const to = "/some-route";

    const wrapper = shallowMount(ButtonPrimary, {
      props: { buttonText, to },
    });

    // Simulate click event
    await wrapper.trigger("click");

    // Assert that the component has the "to" prop to the specified route
    expect(wrapper.props("to")).toBe(to);
  });
});
