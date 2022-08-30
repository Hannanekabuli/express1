async function onLoad() {
    await getProducts()
 
}

const getProducts = async (event) => {

    try {
        
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json()
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            const product = data[i]
            console.log(product.bookName)

        const container = document.getElementById("books")
        let productContainer = document.createElement("div")
        productContainer.classList.add("productDiv")
        let title = document.createElement("a")
        title.innerHTML = product.bookName + product.author
        container.append(productContainer)
        productContainer.append(title) 
        
        }

    } catch(err) {
        console.error(err)
    }
}

const addProducts = async (event) => {
    
    try {
        
        const newProduct = {
            bookName: "Harry Potter ",
            author: "(J: K. Rowling)"
        }

        
        const response = await fetch("http://localhost:3000/products", {
            method: "POST", 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(newProduct)

        }) 
        
        const data = await response.json()
            console.log(data)

        } catch(err) {
            console.error(err)
        }
    }

    
document.getElementById("createBtn").addEventListener("click", getProducts)
document.getElementById("collectBtn").addEventListener("click", addProducts)
window.addEventListener('load', onLoad) 


    