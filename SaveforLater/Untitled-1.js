
//     // Sample data for the folder
//     var folderData = [
//         { name: 'Document 1', url: 'document1.html' },
//         { name: 'Document 2', url: 'document2.html' },
//         { name: 'Document 3', url: 'document3.html' }
//     ];

//     // Function to render the folder content
//     async function renderFolder() {
//         var folderElement = document.getElementById('save-later-folder');
//         var folderHTML = '<div class="folder">';
//         folderHTML += '<h2 class="folder-header">Save for Later</h2>';
//         folderHTML += '<ul class="folder-content">';
//         folderData.forEach(function (item) {
//             folderHTML += '<li><a href="' + item.url + '">' + item.name + '</a> <button class="save-button" data-name="' + item.name + '">Save</button></li>';
//         });
//         folderHTML += '</ul></div>';
//         folderElement.innerHTML = folderHTML;

//         // Attach event listeners to the save buttons
//         var saveButtons = document.getElementsByClassName('save-button');
//         for (var i = 0; i < saveButtons.length; i++) {
//             saveButtons[i].addEventListener('click', saveItem);
//         }
//     }

//     // Implement the saveItem function to handle the save button click event
//     function saveItem(event) {
//         event.preventDefault();

//         var itemName = event.target.getAttribute('data-name');

//         // Add the item to the saved items list (you can store it in localStorage or a server-side storage)
//         // Example using localStorage:
//         var savedItems = localStorage.getItem('savedItems');
//         savedItems = savedItems ? JSON.parse(savedItems) : [];
//         savedItems.push(itemName);
//         localStorage.setItem('savedItems', JSON.stringify(savedItems));

//         // Update the UI or provide feedback to the user
//         alert('Item saved for later!');
//     }

//     // Call the renderFolder function when the page loads
//     renderFolder();
    

//     // Rest of the code...

//     let savedItems1 = sessionStorage.getItem('savedItems');
//     savedItems = savedItems ? JSON.parse(savedItems) : [];

//     let savedItemsList1 = document.getElementById('saved-items')
//     savedItems.forEach(function (itemName) {
//         let li = document.createElement('li')
//         li.textContent = itemName;
//         savedItemsList.appendChild(li)
//     })

//     //Function to generate a unique ID



// function generateId () {
//     return '-' + Math.random().toString(36).substr(2, 9)
//   }
  
//   // //Function to save an item for later
  
//    function saveItem(button) {
    
  
//     let item = button.parentElement;
//     let link = item.querySelector('a');
//     let img = item.querySelector('img');
//     let itemName = link.textContent;
//     let itemSrc = img.getAttribute('src')
  
//   //   //Retrieve the existing saved items from session storage
  
//     let savedItems = sessionStorage.getItem('savedItems')
  
//     if(savedItems) {
//       //If there are existing saved items, parse them from JSON
//       savedItems = JSON.parse(savedItems);
//     } else {
//       //If nothing's there, create an empty array
//       savedItems = []
//     }
  
//   //   //Creating a unique ID for the item
  
//     let itemId = generateId()
  
//   //   //Creating an object for the item
  
//     let itemObject = {
//       id: itemId,
//       name: itemName,
//       src: itemSrc
//     }
  
//   //   //Add the item object to the saved items array
//      savedItems.push(itemObject)
  
//   //   //saving the updated items back into session storage
//      sessionStorage.setItem('savedItems', JSON.stringify(savedItems))
  
//   //   //Display a message to the user
//      console.log('Item saved! You have ' + savedItems.length + ' item(s) in your "Save for later" folder.');
//      console.log(savedItems)
//    }
   
//    saveItem(button)

//    let displayItems = fetch(sessionStorage)
//    console.log(displayItems)
//    //user click on s4l
//    //have it displayed on s4l
//    //edit or create f(x) to have sessionstorage displayed on s4l page
  
//    //have img saved
//    //has src 
//    //on that s4l, can re-create img element
//    //for src, use whats been saved on sessionStorage
//    // has the item displayed on s4l
//   let savedItems = JSON.parse(sessionStorage.getItem('savedItems')) || []
//   let savedItemsList = document.getElementById('saved-items-list')

//   savedItems.forEach(function(item) {
//     let listItem = document.createElement('li')

//     let link = document.createElement('a')
//     link.href = item.url;
//     link.textContent = item.name;

//     let image = document.createElement('img')
//     image.src = item.imageUrl;
//     image.alt = item.imageAlt;

//     listItem.appendChild(link)
//     listItem.appendChild(image)

//     savedItemsList.appendChild(listItem)
//   })


// //Get the items from local Storage
// const savingItems = localStorage.getItem("savedItems") ? JSON.parse(localStorage.getItem("savedItems")) :[]
// //Get the container div for the saved items
// const savedItemsContainer = document.getElementById("saved-items")
// //Loop through the saved items and create an element for each one.
// savingItems.forEach((itemId) => {
//   //for(let i = 0, i > savingItems.length, i++)   console.log(i)
//     const img = document.createElement("a")
//     // img.innerHTML = 
//      img.href = `${itemId}`
//     //img.src = `${itemId}.jpg`
//     savedItemsContainer.appendChild(img)
//     alert("Items are here!")
// })


const savedItemsContainer = document.getElementById('saved-items');

// Get the saved items from localStorage
const savedItems = localStorage.getItem('savedItems')
  ? JSON.parse(localStorage.getItem('savedItems'))
  : [];

// Render the saved items on the page
savedItems.forEach((itemId) => {
  const itemElement = document.createElement('div');
  itemElement.textContent = itemId;
  savedItemsContainer.appendChild(itemElement);

});
// let link = document.getElementbyId("a")

// link.innerHTML = <span>itemId</span>




//console.log(JSON.parse(window.localStorage.getItem("savedItems")))

/*
document.getElementbyID looks at the doc and extracts info with the tag given in brackets



savingItems.forEach((itemId) => {
  //for(let i = 0, i > savingItems.length, i++)   console.log(i)
    const img = document.createElement("a")
     img.href = `${itemId}`
    //img.src = `${itemId}.jpg`
    savingItems.appendChild("a")
    alert("Items are here!")
})

Saving items doesnt exist on the page, threfore cannot appendChild to something that doesnt exist.
*/