var subReddit = "";
setSubReddit("");

function setSubReddit(userString) {
  subReddit = document.getElementById('subreddit').value;

  if (subReddit == "") {
    subReddit = "earthporn";
  }

  if(userString !=""){
    subReddit = userString;
  }

  addImages();
}

function addImages() {
  document.getElementById('app').innerHTML = `<div class="spinner-grow" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;

  $.getJSON(`https://www.reddit.com/r/${subReddit}/.json?limit=100`, function(data) {

    var content = "";
    document.getElementById('app').innerHTML = "";
    $.each(data.data.children, function(i, item) {

      content = `<div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>`;
      content = `<a href="${item.data.url}" target="_blank"><img src="${item.data.url}" class="imgItem" onerror='this.style.display = "none"'></a>`;
      $('#app').append(content);
    });
  });
}
