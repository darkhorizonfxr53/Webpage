// // Sample data for the folder
// let folderData = [
//   { name: 'Document 1', url: 'document1.html' },
//   { name: 'Document 2', url: 'document2.html' },
//   { name: 'Document 3', url: 'document3.html' }
// ];

// // Function to render the folder content
// function renderFolder() {
//   let folderElement = document.getElementById('save-later-folder');
//   let folderHTML = '<div class="folder">';
//   folderHTML += '<h2 class="folder-header">Save for Later</h2>';
//   folderHTML += '<ul class="folder-content">';
//   folderData.forEach(function (item) {
//     folderHTML += '<li><a href="' + item.url + '">' + item.name + '</a> <button class="save-button" data-name="' + item.name + '">Save</button></li>';
//   });
//   folderHTML += '</ul></div>';
//   folderElement.innerHTML = folderHTML;

//   let saveButtons = document.getElementsByClassName('save-button');
//   for (let i = 0; i < saveButtons.length; i++) {
//     saveButtons[i].addEventListener('click', saveItem);
//   }
// }

// // Implement the saveItem function to handle the save button click event
// function saveItem(event) {
//   event.preventDefault();

//   let itemName = event.target.getAttribute('data-name');

//   // Retrieve the saved items from session storage
//   let savedItems = sessionStorage.getItem('savedItems');
//   savedItems = savedItems ? JSON.parse(savedItems) : [];

//   // Create a new item object
//   let newItem = {
//     name: itemName,
//     url: '',
//     imageUrl: '',
//     imageAlt: ''
//   };

//   // Push the new item to the saved items array
//   savedItems.push(newItem);

//   // Save the updated items array back to session storage
//   sessionStorage.setItem('savedItems', JSON.stringify(savedItems));

//   alert('Item saved for later!');
// }

// // Call the renderFolder function when the page loads
// renderFolder();

// // Retrieve the saved items from session storage
// let savedItems = JSON.parse(sessionStorage.getItem('savedItems')) || [];
// let savedItemsList = document.getElementById('saved-items-list');

// // Render the saved items on the Save for Later page
// savedItems.forEach(function (item) {
//   let listItem = document.createElement('li');

//   let link = document.createElement('a');
//   link.href = item.url;
//   link.textContent = item.name;

//   let image = document.createElement('img');
//   image.src = item.src
//   image.alt = item.imageAlt;

//   listItem.appendChild(link);
//   listItem.appendChild(image);

//   savedItemsList.appendChild(listItem);
// });


// //const saveButtons = document.querySelector("")
// /*
// saveButtons.forEach((button) => {
//   button.addEventListener("click", () => {

//     //Get the ID of the clicked saved button
//     const itemID = button.dataset.id
//     //Check if it's not already saved
//     const savedItems = localStorage.getItem("savedItems")
//     ? JSON.parse(localStorage.getITem("savedItems"))
//     : []
//     const isItemSaved = savedItems.includes(itemId)

//     if(!isItemSaved) {
//       //Add the item ID to the saved items array
//       savedItems.push(itemID)
//       localStorage.setItem("savedItems", JSON.stringify(savedItems))
//       //alert
//       const numSavedItems = savedItems.length
//       alert("Item saved! You have ${numSavedItems} item(s) saved for later")
//     } else {
//       //if item is already saved, show an error
//       alert("This item is already saved!")
//     }
//   })
// })


// DIFF JS FILE!!

// const savedItems = localStorage.getITem("savedItems") ? JSON.parse(localStorage.getItem("savedItems")) : []
// //get the container div for the saved items
// const savedItemsCOntainer = document.getElementbyID("saved-items")
// //Loop through the saved items and create an element for each one
// savedItems.forEach((itemId) => {
//   const img = document.createElement("img")
//   img.src = `car-${itemId}.jpg
//   savedItemsContainer.appendChild(img)
// })
// */