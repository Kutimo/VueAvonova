<script lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'

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
}
</script>
<template>
  <div class="container mx-auto px-4 py-6">
    <div class="relative mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Søk blant alle produkter..."
        class="w-full p-4 pl-12 border border-green-800 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 text-xl"
      />
    </div>
    <table class="w-full border-collapse bg-white shadow-md text-lg">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.key"
            class="p-3 border-b border-gray-200 bg-gray-50 text-left font-semibold text-gray-600"
          >
            {{ header.label }}
          </th>
          <th
            class="p-3 border-b border-gray-200 bg-gray-50 text-left font-semibold text-gray-600"
          >
            Handlinger
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredData"
          :key="item.id"
          class="hover:bg-gray-50 border-b border-gray-300"
        >
          <td
            v-for="header in headers"
            :key="header.key"
            class="p-3 border-t border-gray-300 text-gray-700"
            :class="{ 'font-bold': header.key === 'name' }"
          >
            {{ item[header.key] }}
          </td>
          <td class="p-3 border-t border-gray-300 text-gray-700">
            <details class="group">
              <summary class="cursor-pointer text-green-800">Mer info</summary>
              <div class="mt-4">
                <p class="p-3 border border-gray-300 bg-gray-100 rounded">
                  {{ item.description }}
                </p>
                <p
                  class="text-green-1200 mt-2 cursor-pointer hover:text-green-600 underline"
                  @click="orderProduct"
                >
                  Bestill nå
                </p>
              </div>
            </details>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
