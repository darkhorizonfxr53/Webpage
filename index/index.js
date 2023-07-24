    // Sample data for the folder
    let folderData = [
        { name: 'Document 1', url: 'document1.html' },
        { name: 'Document 2', url: 'document2.html' },
        { name: 'Document 3', url: 'document3.html' }
      ];
  
      // Function to render the "Save for Later" folder content
      function renderFolder() {
       let folderElement = document.getElementById('save-later-folder');
       let folderHTML = '<div class="folder">';
        folderHTML += '<h2 class="folder-header">Save for Later</h2>';
        folderHTML += '<ul class="folder-list">';
  
        folderData.forEach(function (item) {
          folderHTML += '<li class="folder-item">';
          folderHTML += '<a href="' + item.url + '">' + item.name + '</a>';
          folderHTML += '</li>';
        });
  
        folderHTML += '</ul></div>';
        folderElement.innerHTML = folderHTML;
      }
  
      // Event listener for the comment form submission
      function createComment() {
        document.getElementById('comment-form').addEventListener('submit', function (event) {
          event.preventDefault();
          submitForm();
        });
    
        // Function to handle comment form submission
        function submitForm() {
         let nameInput = document.getElementById('name');
         let emailInput = document.getElementById('email');
         let commentInput = document.getElementById('comment');
    
         let comment = {
            name: nameInput.value,
            email: emailInput.value,
            comment: commentInput.value
          };
    
          addComment(comment);
          nameInput.value = '';
          emailInput.value = '';
          commentInput.value = '';
        }
      }
  
      // Function to add a comment to the comment list
      function addComment(comment) {
       let commentList = document.getElementById('comment-list');
       let commentHTML = '<div class="comment">';
        commentHTML += '<h4 class="comment-name">' + comment.name + '</h4>';
        commentHTML += '<p class="comment-email">' + comment.email + '</p>';
        commentHTML += '<p class="comment-content">' + comment.comment + '</p>';
        commentHTML += '</div>';
  
        commentList.insertAdjacentHTML('beforeend', commentHTML);
      }
  
      // Fetch and insert content from the "About" and "Contact" pages
      function loadContent(url, containerId) {
       let container = document.getElementById(containerId);
  
        fetch(url)
          .then(function (response) {
            return response.text();
          })
          .then(function (content) {
            container.innerHTML = content;
          })
          .catch(function (error) {
            console.log('Error loading content:', error);
          });
      }
  const likeButton = document.querySelectorAll(".like-button")
  likeButton.forEach((button) => {
    button.addEventListener("click", handleLike)
  })

  // //Event handler for the like button click
  // function handleLike(event){
  //   event.preventDefault()
  // }

  // const itemContainer = event.target.parentElement
  // const itemName = itemContainer.querySelector(".item-name").textContent

  // alert("You liked this!")
      // Event listeners for "About" and "Contact" links
      // document.getElementById('about-link').addEventListener('click', function (event) {
      //   event.preventDefault();
      //   loadContent('about.html', 'content-container');
      // });
  
      // document.getElementById('contact-link').addEventListener('click', function (event) {
      //   event.preventDefault();
      //   loadContent('contact.html', 'content-container');
      // });
  
      // Render the "Save for Later" folder
      // renderFolder();


