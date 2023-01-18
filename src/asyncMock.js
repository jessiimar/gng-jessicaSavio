
const products =[
    {
        id: '1',
        name: 'Body',
        price:1000,
        category:'ropa para bebe',
        img: './assets/bodys.webp',
        stock: 75,
        description:'hermosos bodys para beba'
    },

    {
        id: '2',
        name:'conjunto ceremonial',
        price: 1200,
        category:'ropa para bebe',
        img:'./assets/ceremonia-nino.webp',
        stock:150,
        description:'conjunto ceremonial para bebe',

    
    },
    {
        id: '3',
        name:'fashionista',
        price: 2500,
        category:'ropa para niños',
        img: './assets/fashionista.webp',
        stock: 90,
        description:'conjunto estilo fashion para niña',
     
    
    },

    {
        id: '4',
        name:'conjunto bicolor',
        price: 2300,
        category:'ropa para niños',
        img: './assets/conjuntoNene.webp',
        stock: 50,
        description:'conjunto bicolor para nene',
    },

    {
        id: '5',
        name:'pantalon',
        price: 1500,
        category:'ropa para adolescentes',
        img: './assets/ropa-juvenil-2.webp',
        stock: 90,
        description:'pantalon con adorno de cadena y tobillo ajustado',
    },
    {
        id: '6',
        name:'buzo',
        price:1700,
        category:'ropa para adolescentes',
        img: './assets/LOOKSVARON.webp',
        stock: 90,
        description:'buzo azul francia para joven adulto',
    }

]
export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category ===categoryId))
        }, 1000)
    })
}
export const getProductsById = (Id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.Id === Id))
        }, 500)
        
    })
}




 
 