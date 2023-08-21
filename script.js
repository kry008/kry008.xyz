particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  window.onscroll = function () { window.scrollTo(0, 0); };
  function f1() {
      navigator.clipboard.writeText('kry008').catch(function(err) {
          document.getElementById("info").style.color = "rgb(255, 0, 0)";
          console.log('Failed to copy text: ', err);
          return setTimeout(() => {
              document.getElementById("info").innerHTML = "";
              document.getElementById("info").style.color = "rgb(9, 255, 0)";
          }, 1000);
      });
      document.getElementById("info").innerHTML = "Copied username to clipboard";
      setTimeout(() => {
          document.getElementById("info").innerHTML = "";
          document.getElementById("info").style.color = "rgb(9, 255, 0)";
      }, 1000);
  }
