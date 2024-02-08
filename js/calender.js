// calender
const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcons = document.querySelectorAll(".calender-box-header-icons span");

let date = new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , 
                "Agosto" , "Septiembre", "Octubre" , "Noviembre", "Diciembre"]

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1 , 0).getDate();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();  
    let litag = "";
    
    for (let i = firstDayOfMonth; i > 0; i--) {
        litag += `<li class="inactive" >${lastDateOfLastMonth - i + 1}</li>`
        
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
            && currentYear === new Date().getFullYear() ? "active" : "";
        litag += `<li class="${isToday}">${i}</li>`
    }

        for (let i = lastDayOfMonth; i < 6; i++) {
        litag += `<li class="inactive" >${i - lastDayOfMonth + 1}</li>`
        
    }
    currentDate.innerText=`${months[currentMonth]} ${currentYear}`
    daysTag.innerHTML= litag
}
renderCalendar();

//Función que permite extender el calender por mas años
prevNextIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
        currentMonth = icon.id === "prev" ? currentMonth -1 : currentMonth + 1;
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else
            date = new Date();
        renderCalendar();
    })
})
