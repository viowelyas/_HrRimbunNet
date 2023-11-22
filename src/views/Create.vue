<template>
  <div class="list">
    <h1>Create New Office Resource</h1>
    <hr class="mb50">
    <div class="form">
        <v-select
            label="Type of Resource"
            :items="['Room', 'Desk', 'Monitor']"
            v-model="storeResource.resource.typeOfResource"
        ></v-select>
        <v-text-field label="Name" v-model="storeResource.resource.name"></v-text-field>
        <v-text-field label="Description" v-model="storeResource.resource.description"></v-text-field>
        <label>Is Active</label>
        <v-switch
            v-model="storeResource.resource.isActive"
            hide-details
            inset
            :label="storeResource.resource.isActive? 'Active' : 'Inactive'"
            style="margin-bottom: 10px;"
        ></v-switch>
        <v-text-field label="Location" v-model="storeResource.resource.location"></v-text-field>
        <v-text-field label="Cost of Item" v-model="storeResource.resource.costOfItem" type="number"></v-text-field>
        <v-text-field label="Last Status Checked" v-model="storeResource.resource.lastStatusChecked" placeholder="yyyy-MM-dd"></v-text-field>
        <v-btn :onclick="createResource">Submit</v-btn>
    </div>
  </div>
</template>

<script>
import { useCompositeApi } from '@/stores/api'
import { useResource } from '@/stores/resource'
import { ref, onMounted } from 'vue'

export default {
    data () {
      return {
        model: true,
      }
    },
  setup() {
    const storeResource = useResource()
    const { getResource, createResource } = useCompositeApi()

    return {
      storeResource,
      getResource,
      createResource
    }
  },
}
</script>