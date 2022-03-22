import axios from "axios";

const API_URL = "http://localhost:5005";
export const services = {

    materials: {
        list: async () => {
            try {
                const response = await axios.get(`${API_URL}/api/materials`)
                return response.data
            } catch (error) {
                console.log(error)
            }
        },

    },
    usedMaterials: {
        list: async () => {
            try {
                const response =await axios.get(`${API_URL}/api/orders`)
                return response.data.map(p => ({ id: p._id, title: p.material.title, ...p }))
            } catch (error) {
                console.log(error)
            }
        },
        add: async ({ materialId, count, batchNumber }) => {
            const requestBody = { count, batchNumber, materialId };
            try {
                const response = await axios.post(`${API_URL}/api/orders`, requestBody)
                return response.data
            }
            catch (error) {
                console.log(error)
            }
        },
        removeItem: async ({ id }) => {

        },
        update: async ({ id, title, count, nr }) => {

        }


    }
}

