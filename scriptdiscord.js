window.onload = function() {
    setTimeout(redirect, 2000);
  };
  
  function redirect() {
    window.location.href = "https://discord.com/invite/GEanJ2g";
  }
  
  function redirectToAnotherPage() {
    window.location.href = "https://bio.link/debondor";
  }

   if (typeof history.replaceState === "function") {
     
    history.replaceState(null, null, window.location.pathname.replace(".html", ""));
  }
