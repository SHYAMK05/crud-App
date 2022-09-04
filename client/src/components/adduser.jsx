import { useState } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button} from '@mui/material';
import { addProduct } from '../service/api.js';

const Container=styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
    & > div > Button{
        background-color: #111111;
    }
`

const defaultValue={
    id:"",
    product:"",
    price:"",
    quantity:""
}


const Addpro=()=>{
    const [user, setUser]= useState(defaultValue);
    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addProductDetails=async()=>{
        await addProduct(user);
    }
    return(
        <Container>
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
                <InputLabel>Product Id</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="id"/>
            </FormControl>
            <FormControl>
                <InputLabel>Product Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="product"/>
            </FormControl>
            <FormControl>
                <InputLabel>Product Price</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="price"/>
            </FormControl>
            <FormControl>
                <InputLabel>Quantity</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="quantity"/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={()=>addProductDetails()}>ADD PRODUCT</Button>
            </FormControl>
        </Container>
        
    )
}

export default Addpro;