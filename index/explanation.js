const savedButtons = document.querySelectorAll("button")
//Add event listener to each button
savedButtons.forEach((button) => {
    button.addEventListener("click", function() {
        //Get an ID of the click
        const id = button.dataset.item
        //Check if the item is already saved
        const savedItems = localStorage.getItem("savedItems")
         ? JSON.parse(localStorage.getItem("savedItems"))
         :[]
    const isItemSaved = savedItems.includes("savedItems")    
            
    if(!isItemSaved) {
        //Add the item ID to the saved items array
        savedItems.push(id)
        localStorage.setItem("savedItems", JSON.stringify(savedItems))
        //Alert the user of the number of saved items
        let savedItemsLength = savedItems.length
        alert(`Item saved! You have ${savedItemsLength} item(s) for later`)
    } else {
        //If this item was already saved, show this message
        alert("This item is already saved")
    }

    }) 

})