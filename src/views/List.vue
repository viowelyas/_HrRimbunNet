<template>
  <div class="list">
    <div>
      <h1>Office Resource</h1>
      <RouterLink to="/create">
        <v-btn variant="outlined">+ New</v-btn>
      </RouterLink>
    </div>
    <v-table
      fixed-header
    >
      <thead>
        <tr>
          <th class="text-left">TypeOfResource</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">IsActive</th>
          <th class="text-left">Location</th>
          <th class="text-left">CostOfItem</th>
          <th class="text-left">LastStatusChecked</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in storeResource.listResource"
          :key="item.name"
        >
          <td>{{ item.typeOfResource === 1? 'Room' : item.typeOfResource === 2? 'Desk' : 'Monitor' }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <v-btn v-if="item.isActive" variant="flat" style="background-color: green; color: white;">Active</v-btn>
            <v-btn v-else variant="flat" style="background-color: red; color: white;">Inactive</v-btn>
          </td>
          <td>{{ item.location }}</td>
          <td>{{ item.costOfItem }}</td>
          <td>{{ item.lastStatusChecked }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { useCompositeApi } from '@/stores/api'
import { useResource } from '@/stores/resource'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  setup() {
    const storeResource = useResource()
    const { getResource } = useCompositeApi();

    onMounted(() => {
      getResource()
    })
    
    return {
      storeResource,
      getResource
    }
  },
}
</script>