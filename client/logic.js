async function onLoad() {
    await loadProducts()
    await getExternalApi()
 }
 
 
 const loadProducts = async (event) => {
 
     try {
         const response = await fetch("http://localhost:3000/api/products");
         const data = await response.json();
 
         const container = document.getElementById("Data") 
         container.innerHTML = ""
 
         for (let i = 0; i < data.length; i++) { 
             const product = data[i] 
 
             let productContainer = document.createElement("div")
             productContainer.classList.add("productDiv")
 
             let title = document.createElement("h2")
             title.innerHTML = product.name
             productContainer.append(title) 
 
             let desc = document.createElement("h3")
             desc.innerHTML = product.productName
             productContainer.append(desc) 
 
             container.append(productContainer)
         }    
 
         } catch(err) {
             console.error(err)
     }
 
 }
 
 const getExternalApi = async (event) => {
 
     try {
         const response = await fetch("http://localhost:3000/api/phone") 
         const data = await response.json()
 
         for (let i = 0; i < data.length; i++) {
             const product = data[i]
             
             if(product.product_type === "iphone x" && product.brand === "Apple") {
 
             const div = document.getElementById("information")
 
             let productDiv = document.createElement("div")
             productDiv.classList.add("apitDiv")
 
             let name = document.createElement("h3")
             name.innerHTML = product.name
             productDiv.append(name) 
 
             div.append(productDiv)
             }
         } 
         
         } catch(err) {
             console.error(err)
     }
 } 
 
 
 const saveProduct = async (event) => {
     
     try {
         let brand = document.getElementById("name").value 
         let product = document.getElementById("productName").value 
 
         const newProduct = {
             name: brand,
             productName: product
         }
         console.log(newProduct)
 
         const response = await fetch("http://localhost:3000/api/products", {
             method: "POST", 
             headers: { "Content-Type": "application/json"}, 
             body: JSON.stringify(newProduct)
         }) 
         const data = await response.json() 
             alert(data) 
  
     } catch(err) {
         console.error(err)
     }
 }
 
 document.getElementById("saveBtn").addEventListener("click", saveProduct)
 document.getElementById("productBtn").addEventListener("click", loadProducts)
 
 window.addEventListener('load', onLoad) 
 