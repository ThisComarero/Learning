document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  var siteName = document.getElementById('siteName');
  var url = document.getElementById('siteUrl');

  var bookmark =  {
    name: siteName,
    url: siteUrl
  };

  if (localStorage.getItem('bookmarks') === null) {
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  e.preventDefault();
}
