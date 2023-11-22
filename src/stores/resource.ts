import { defineStore } from 'pinia'

export const useResource = defineStore('resource', {
  state: () => {
    return {
      resource: {
        typeOfResource: '',
        name: '',
        description: '',
        isActive: false,
        location: '',
        costOfItem: 0,
        lastStatusChecked: ''
      },
      listResource: [],
      headers: ['TypeOfResource', 'Name', 'Description', 'IsActive', 'Location', 'CostOfItem', 'LastStatusChecked']
    }
  }
})
