import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../asyncMock"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {produtId} = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(produc =>{
                setProduct(produc)
            })
            .catch(error => {
                console.log(error)
            })
    }, [produtId])

    return(
        <div>
            <h1>detalle de producto</h1>

        </div>
    )
}

export default ItemDetailContainer