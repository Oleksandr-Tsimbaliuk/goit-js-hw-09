!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,document.body.style.backgroundColor=o(),timerId=setInterval((()=>{document.body.style.backgroundColor=o()}),500),console.log("Start")})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(timerId),console.log("Stop")}))}();
//# sourceMappingURL=01-color-switcher.611e0e1b.js.map
