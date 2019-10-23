var subReddit = "";
setSubReddit();

function setSubReddit() {
  subReddit = document.getElementById('subreddit').value;
  console.log(subReddit);

  if (subReddit == "") {
    subReddit = "earthporn";
  }
  addImages();
}

function addImages() {
  document.getElementById('app').innerHTML = `<div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-blue-only">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div><div class="gap-patch">
      <div class="circle"></div>
    </div><div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>`;

  $.getJSON(`http://www.reddit.com/r/${subReddit}/.json?limit=100`, function(data) {
    var content = "";

    $.each(data.data.children, function(i, item) {
      content += `<img src="${item.data.url}" class="memeImg" onerror='this.style.display = "none"' >`;
    });

    document.getElementById('app').innerHTML = "";
    $('#app').append(content);
  });
}
