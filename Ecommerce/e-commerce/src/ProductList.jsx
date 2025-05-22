import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Atom} from 'react-loading-indicators'
import Mainavbar from './Mainavbar';
const ProductList = () => {
    let [products,setProducts] = useState([])
    let [error,setError]=useState("")
    let [isLoading,setisLoading]=useState(false)
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products",{method:"GET"})
        .then((response)=>{
            if(response.ok){
                   return(response.json())
            }
            else{
                throw new Error("Search proper data")
            }
           
        })
        .then((data)=>{setProducts(data)})
        .catch((error)=>{
            setError(error.message);
            
        })
        .finally(()=>{
           setisLoading(false)
        })
    },[])
    if(isLoading){
        return(
           <div>
            <center style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'35vh'}}>
               <Atom color="#rgb(80, 250, 74)" size="large" text="Loading .... !!" textColor="rgb(80, 250, 74)" />
            </center>
            
        </div>
        )
        
    }
  return (
    <div>
        <Mainavbar/>
        <h1>Product</h1>
        <section className='products'>
            {
                products.map(x=>(
                     <Card key={x.id} style={{ width: '20rem' }} className='product'>
                      <center>
                         <Card.Img variant="top" src={x.image} style={{width:'9rem',minHeight:'15rem',maxHeight:'12rem'}}/>
                      </center>
                     
                     <Card.Body className='bodycard'>
                        <Card.Title>{x.title}</Card.Title>
                        <Card.Text style={{overflow:'hidden',height:'50px'}}>
                            {x.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Card.Text >Rs: {x.price}</Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Footer>

        
      
    </Card>
                ))
            }
        </section>
        {
            error && <p>{error}</p>
        }
    </div>
  )
}

export default ProductList