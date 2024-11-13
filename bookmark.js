function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const bookmarkList = document.getElementById('bookmark-list');
  bookmarkList.innerHTML = ''; 

  bookmarks.forEach((bookmark, index) => {
      const bookmarkEl = document.createElement('div');
      bookmarkEl.classList.add('bookmark');
      bookmarkEl.innerHTML = `
         <p>${bookmark.name}</p>
          <p><a href="${bookmark.url}"<i class="fa fa-external-link"aria-hidden="true">${bookmark.url}</a></p>
          
          <button style="background-color: rgba(112, 153, 112, 0.906); ;width: 100px; height: 30px; color: white; border-radius: 7px" onclick="editBookmark(${index})"><i class="fa fa-edit" aria-hidden="true"></i> Edit</button>
          <button style="background-color: rgba(243, 40, 17, 0.795) ;width: 100px; height: 30px; color: white; border-radius: 7px" onclick="deleteBookmark(${index})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
    `;
      bookmarkList.appendChild(bookmarkEl);
  });
}

document.getElementById('bookmark-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('website-name').value;
  const url = document.getElementById('website-url').value;

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.push({ name, url });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  document.getElementById('bookmark-form').reset();
  loadBookmarks();
});

function editBookmark(index) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  const bookmark = bookmarks[index];

  document.getElementById('website-name').value = bookmark.name;
  document.getElementById('website-url').value = bookmark.url;
  deleteBookmark(index);
}

function deleteBookmark(index) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  bookmarks.splice(index, );
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  loadBookmarks();
}

document.addEventListener('DOMContentLoaded', loadBookmarks);
