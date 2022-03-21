let toggle = document.querySelector('input[type="checkbox"]');
let body= document.getElementById('body')
let text = document.getElementById('theme-text')
let icon = document.getElementById('theme')
console.log(icon)

function switched(e){
     if(toggle.checked) {
      body = document.documentElement
        body.setAttribute('data-theme','dark')
        localStorage.setItem('theme','dark')
        darkMode()
        
     } else {
        body.setAttribute('data-theme','light')
        localStorage.setItem('theme','light')
        LightMode()
     }

 }

function darkMode(){
    icon.querySelector('img').src = './img/dark_mode_white_24dp.svg';
    text.innerHTML = "Dark Mode";
}

function LightMode(){
    icon.querySelector('img').src = './img/light_mode_black_24dp.svg';
    text.innerHTML = "Light Mode";
}

 //event listener for toggle switch
toggle.addEventListener('change', switched)


//check if it exists in local storage
let currentTheme = localStorage.getItem('theme');

 if(currentTheme){
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme ==='dark') {
        toggle.checked ='true'
        darkMode()
        
    }
}
