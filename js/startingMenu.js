const enter = document.getElementById("enter")
enter.addEventListener("click" , () =>{
  let calenderStyles =  document.querySelector(".calender")
  if (calenderStyles === true) {
      calenderStyles.setAttribute("class" , "set")  
  }
  console.log(calenderStyles)
})
