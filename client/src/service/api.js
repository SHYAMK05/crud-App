import axios from 'axios';

const URL='http://localhost:8000';

export const addProduct= async (data)=>{
    try{
        await axios.post(`${URL}/add`,data);

    }catch(error){
        console.log("error while handling API ",error);
    }
};

export const getProducts = async()=>{
    try{
        await axios.get(`${URL}/all`);
    }catch(error){
        console.log("error while calling ",error);
    }
};