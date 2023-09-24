$(document).ready(function () {
    // Function to load content via AJAX
    function loadContent(url) {
      return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.responseText);
            } else {
              reject(xhr.statusText);
            }
          }
        };
        xhr.send();
      });
    }
  
    // Function to animate content and update #content div
    function animateAndLoadContent(content) {
      $("#content").fadeOut(200, function () {
        $(this).html(content).fadeIn(200);
      });
    }
  
    // Click event handlers for the links
    $("#prospect").click(function (e) {
      e.preventDefault();
      loadContent("prospect.html")
        .then(function (content) {
          animateAndLoadContent(content);
        })
        .catch(function (error) {
          console.error("Error loading content: " + error);
        });
    });
  
    $("#convert").click(function (e) {
      e.preventDefault();
      loadContent("convert.html")
        .then(function (content) {
          animateAndLoadContent(content);
        })
        .catch(function (error) {
          console.error("Error loading content: " + error);
        });
    });
  
    $("#retain").click(function (e) {
      e.preventDefault();
      loadContent("retain.html")
        .then(function (content) {
          animateAndLoadContent(content);
        })
        .catch(function (error) {
          console.error("Error loading content: " + error);
        });
    });
  });
  