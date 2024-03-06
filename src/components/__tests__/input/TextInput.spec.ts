import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TextInput from "../../input/TextInput.vue";

describe("TextInput", () => {
  it("renders label, placeholder, and descriptive text correctly", () => {
    const label = "Name";
    const placeholder = "Enter your name";
    const descriptiveText = "Please enter your full name";

    const wrapper = shallowMount(TextInput, {
      props: {
        label,
        name: "name",
        placeholder,
        descriptiveText,
      },
    });

    // Asserts that the label, placeholder, and descriptive text are rendered correctly
    expect(wrapper.find("label").text()).toBe(label);
    expect(wrapper.find("input").attributes("placeholder")).toBe(placeholder);
    expect(wrapper.find("p").classes("descriptiveText")).toBe(true);
  });

  it("toggles icon text visibility when icon is clicked", async () => {
    const iconText = "Test icon text";

    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Name",
        name: "name",
        icon: true,
        iconText,
      },
    });

    // Simulate clicking on the icon
    await wrapper.find("img").trigger("click");

    // Icon text should be visible after clicking on the icon
    expect(wrapper.find("p").exists()).toBe(true);
    expect(wrapper.find("p").text()).toBe(iconText);
  });

  it("renders error message when error prop is true", () => {
    const errorText = "Field is required";

    const wrapper = shallowMount(TextInput, {
      props: {
        label: "Name",
        name: "name",
        error: true,
        errorText,
      },
    });

    // Asserts that the error message is rendered correctly
    expect(wrapper.find(".text-red").exists()).toBe(true);
    expect(wrapper.find(".text-red").text()).toBe(errorText);
  });
});
