let btnStarters = document.getElementById("btnStarters")
let btnEntrees = document.getElementById("btnEntrees")
let btnDesserts = document.getElementById("btnDesserts")

btnStarters.addEventListener("click", function() {
    dishesUL.innerHTML = ""
    let starters = dishes.filter(function (dish) {
        return dish.course == "Starters"
    })
    for (let index = 0; index < starters.length; index++) {
        let starter = starters[index]

        const starterItem = `
                            <div class="box">
                                <img src="${starter.imageURL}" width="150" height="150" class="menuImage"></img>
                                <div class="titlePriceDescription">
                                    <div class="titlePrice">
                                        <b>${starter.title}</b>
                                        <b>$ ${starter.price}</b>
                                    </div>
                                    <br>
                                    <i>${starter.description}</i>
                                </div>
                            </div>
        `
        dishesUL.insertAdjacentHTML('beforeend', starterItem)
    }
})

btnEntrees.addEventListener("click", function () {
    dishesUL.innerHTML = ""
    let entrees = dishes.filter(function (dish) {
        return dish.course == "Entrees"
    })
    for (let index = 0; index < entrees.length; index++) {
        let entree = entrees[index]

        const entreeItem = `
                            <div class="box">
                                <img src="${entree.imageURL}" width="150" height="150" height=auto class="menuImage"></img>
                                <div class="titlePriceDescription">
                                    <div class="titlePrice">
                                        <b>${entree.title}</b>
                                        <b>$ ${entree.price}</b>
                                    </div><br>
                                    <i>${entree.description}</i>
                                </div>
                            </div>        
        `
        dishesUL.insertAdjacentHTML('beforeend', entreeItem)
    }
})

btnDesserts.addEventListener("click", function () {
    dishesUL.innerHTML = ""
    let desserts = dishes.filter(function (dish) {
        return dish.course == "Desserts"
    })
    for (let index = 0; index < desserts.length; index++) {
        let dessert = desserts[index]

        const dessertItem = `
                            <div class="box">
                                <img src="${dessert.imageURL}" width="150" height="150" height=auto class="menuImage"></img>
                                <div class="titlePriceDescription">
                                    <div class="titlePrice">
                                        <b>${dessert.title}</b>
                                        <b>$ ${dessert.price}</b>
                                    </div><br>
                                    <i>${dessert.description}</i>
                                </div>
                            </div>             
        `
        dishesUL.insertAdjacentHTML('beforeend', dessertItem)
    }
})


// const dishesUL = document.getElementById("dishesUL")

// let dishItems = dishes.map(function (dish) { 
//     return `<li class = "dish-item">
//                 <div class="dishImage">
//                     <img src="${dish.imageURL}">
//                 </div>
//                 <b>${dish.title}</b>
//                 <i>${dish.description}</i>
//                 <b>${dish.price}</b>
//                 `

// })

// console.log(dishItems)
// dishesUL.innerHTML = dishItems.join("")