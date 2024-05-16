<script lang="ts">
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'
import TextInput from '@/components/input/TextInput.vue'
import DatePicker from '@/components/DatePicker.vue'
import ContactCardPFA from '@/components/cards/ContactCardPFA.vue'
import TextAreaField from '@/components/input/TextAreaField.vue'
import SelectField from '@/components/select/SelectField.vue'
import CheckBoxField from '@/components/checkbox/CheckBoxField.vue'
import ConfirmationDialog from '@/components/Layout/Modal/ConfirmationDialog.vue'
import InfoCard from '@/components/cards/InfoCard.vue'
import { ref } from 'vue'

export default {
  name: 'ViewComponents',
  components: {
    ConfirmationDialog,
    SelectField,
    TextAreaField,
    CheckBoxField,
    TextInput,
    ButtonPrimary,
    ButtonSecondary,
    DatePicker,
    ContactCardPFA,
  },
  setup() {
    const options = ref([
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ])

    const selectedValue = ref('')

    const updateSelectedValue = (value: string) => {
      selectedValue.value = value
      console.log(selectedValue.value)
    }

    return {
      options,
      selectedValue,
      updateSelectedValue,
    }
  },
}
</script>

<template>
  <main id="Components" class="flex flex-col gap-10 m-10">
    <div class="buttons">
      <ButtonPrimary button-text="Buy now" />
      <ButtonSecondary button-text="secondary" />
    </div>
    <div class="flex flex-col gap-10 m-10">
      <p class="text-lg">inputs:</p>
      <TextInput
        label="Text"
        name="lastName"
        descriptive-text="hello"
        error
        error-text="test"
      />
      <TextInput
        label="with error"
        name="lastName"
        descriptive-text="hello"
        error
        error-text="test"
      />
      <TextInput
        label="with question icon"
        name="lastName"
        descriptive-text="hello"
        icon
      />
    </div>
    <div>
      <p>date picker:</p>
      <DatePicker />
    </div>
    <div>
      <p>contact card:</p>
      <ContactCardPFA />
    </div>
    <div>
      <CheckBoxField label="Checkbox" />
    </div>
    <div>
      <p>Textarea:</p>
      <TextAreaField />
    </div>
    <div>
      <p>Select</p>
      <SelectField
        placeholder="Select a option:"
        :data="options"
        @change="updateSelectedValue"
      />
    </div>
    <div>
      <ConfirmationDialog />
    </div>
  </main>
</template>
