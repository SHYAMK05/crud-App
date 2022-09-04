import { useEffect , useState} from 'react';
import {Table,TableHead,TableCell,TableBody,TableRow} from '@mui/material';
import { getProducts } from '../service/api.js';


const Allpro= () =>{

    const [users, setUser]=useState(0);

    useEffect(()=>{
        getallProducts();
    }, []);

    const getallProducts= async()=>{
        let response = await getProducts();
        setUser(response.data);
    }

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>PRODUCT ID</TableCell>
                    <TableCell>PRODUCT NAME</TableCell>
                    <TableCell>PRODUCT PRICE</TableCell>
                    <TableCell>QUANTITY</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TableRow>
                            <TableCell>{user._id}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
};

export default Allpro;