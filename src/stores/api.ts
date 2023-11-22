import { useLogin } from './login'
import { useResource } from './resource'
import axios from 'axios'
import router from '@/router';

export const useCompositeApi = () => {
    const login = useLogin();
    const resource = useResource();
    var create = {}
    const valLogin = async () => {
        if(login.username) {
            try{
                const res = await axios.get('http://localhost:3000/users/' + login.username);
                if(res.data.password === login.password){
                    router.push({name:'list'})
                } else {
                    login.showSnackbar = true
                }
            }catch(err){
                login.showSnackbar = true
            }
        }
    }
    const getResource = async () => {
        try{
            const res = await axios.get('http://localhost:3000/resources');
            resource.listResource = res.data
        }catch(err){
            console.log("err")
        }
    }
    const createResource = async () => {
        try{
            create = {
                typeOfResource: resource.resource.typeOfResource === 'Room'? 1 : resource.resource.typeOfResource === 'Desk'? 2 : 3,
                name: resource.resource.name,
                description: resource.resource.description,
                isActive: resource.resource.isActive,
                location: resource.resource.location,
                costOfItem: resource.resource.costOfItem,
                lastStatusChecked: resource.resource.lastStatusChecked
            }
            console.log("iniiii create", create)
            axios.post('http://localhost:3000/resources/', create)
            router.push({name:'list'})
            resource.resource = {
                typeOfResource: '',
                name: '',
                description: '',
                isActive: false,
                location: '',
                costOfItem: 0,
                lastStatusChecked: ''
            }
        }catch(err){
            console.log("err")
        }
    }
    return {
        valLogin,
        getResource,
        createResource
    }
}
