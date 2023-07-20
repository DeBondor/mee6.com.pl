window.onload = function() {
    setTimeout(redirect, 2000);
  };
  
  function redirect() {
    window.location.href = "https://startit.bot/";
  }
  
  function redirectToAnotherPage() {
    window.location.href = "https://startit.bot/plus";
  }

   if (typeof history.replaceState === "function") {
     
    history.replaceState(null, null, window.location.pathname.replace(".html", ""));
  }
