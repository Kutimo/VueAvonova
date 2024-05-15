<template>
  <div class="container mx-auto px-4">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Søk blant produktene...."
      class="mb-2 p-2 box-border w-full"
    />
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            class="p-2 border border-gray-300"
          >
            {{ header.label }}
          </th>
          <th class="p-2 border border-gray-300">Handlinger</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.id">
          <td
            v-for="header in headers"
            :key="header.key"
            class="p-2 border border-gray-300"
          >
            {{ item[header.key] }}
          </td>
          <td class="p-2 border border-gray-300">
            <details class="group">
              <summary class="cursor-pointer">Mere info</summary>
              <div class="m-10">
                <p class="p-1 border border-gray-300 bg-gray-100">
                  {{ item.description }}
                </p>
                <ButtonPrimary buttonText="Bestill nå!" @click="orderProduct" />
              </div>
            </details>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'

export default {
  props: {
    data: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
    headers: {
      type: Array as PropType<
        Array<{
          key: string
          label: string
        }>
      >,
      required: true,
    },
  },
  setup(props) {
    const searchQuery = ref('')
    const filteredData = computed(() => {
      return props.data.filter((item) => {
        return props.headers.some((header) => {
          return item[header.key]
            .toString()
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase())
        })
      })
    })
    function orderProduct(item: any) {
      alert(`Bestilling for ${item.name} initiert!`)
    }
    return { searchQuery, filteredData, orderProduct }
  },
  components: { ButtonPrimary },
}
</script>
