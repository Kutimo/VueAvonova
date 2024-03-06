import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import EmailInput from "../../input/EmailInput.vue";

describe("EmailInput", () => {
  test("valid email format", async () => {
    const wrapper = mount(EmailInput);
    const input = wrapper.find("input");

    // Simulate user input
    await input.setValue("test@example.com");
    await input.trigger("blur");

    // Ensure no error message is displayed
    expect(wrapper.find("p").exists()).toBe(false);
  });

  test("invalid email format", async () => {
    const wrapper = mount(EmailInput);
    const input = wrapper.find("input");

    // Simulate user input
    await input.setValue("invalid-email");

    // Ensure error message is displayed
    await input.trigger("blur");
    expect(wrapper.find("p").text()).toBe("Skriv inn en gyldig epost adresse");
  });
});
