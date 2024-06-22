const endDate = "13 November 2024 10:00 AM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now)/1000; //converting milliseconds into seconds

  if (diff < 0) return; // if the time is in negative the clock function will be returned to the original value
  

  //converting into days
inputs[0].value = Math.floor(diff / 3600 / 24);

//converting into hours
inputs[1].value = Math.floor((diff/ 3600) % 24);

//converting into minutes
inputs[2].value = Math.floor((diff / 60) % 60 );

//converting into seconds
inputs[3].value = Math.floor((diff)% 60);
}

clock();


setInterval(
  () => { // calling every second
    clock()
  },
  1000 //the diff is in miliseconds so we are converting into seconds and calling 
)