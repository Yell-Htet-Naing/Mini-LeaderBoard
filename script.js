//Button 

let button = document.querySelector("button");
let p = document.querySelector('p');



//wrapper 
let wrap = document.querySelector(".wrapper");

//dom input
let firstName = document.querySelector(".f-name");
let lastName = document.querySelector(".l-name");
let country = document.querySelector(".country");
let score = document.querySelector(".mark");



const now = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

//human readable time format start
function getFormattedDate() {
  let hour = parseInt(now.getHours());
  let min = parseInt(now.getMinutes());

  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  hour = (hour < 10 ? "0" : "") + hour;
  min = min < 10 ? '0'+min : min;

  var str =  hour + ":" + min;
 return str;
}
//human readable time format end



button.addEventListener('click',()=>{
  let finalScore = 0;

  let div = document.createElement("div");
  div.setAttribute("class", "division");
  div.style.backgroundColor = "#E5C9C5";
  let fullName = `${(firstName.value).toUpperCase()} ${(lastName.value).toUpperCase()}`;


  let nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "name-div")
  let nameForp = document.createElement("p");
  nameForp.setAttribute("class", "text");
  nameForp.textContent = fullName;
  let timeforP = document.createElement("p");
  timeforP.setAttribute("class", "tim");
  timeforP.textContent = `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}, ${getFormattedDate()}`;
  nameDiv.appendChild(nameForp);
  nameDiv.appendChild(timeforP);
  div.appendChild(nameDiv);

  let countryForp = document.createElement("p");
  countryForp.setAttribute("class", "text");      
  countryForp.textContent = (country.value).toUpperCase();

  let scoreForp = document.createElement("p");
  scoreForp.setAttribute("class", "text compareScore");
  
  finalScore = parseInt(score.value);
  scoreForp.textContent = finalScore;

  //Sorting Score with jquery start
  function sortScore(){
    var theWrapper = $(".wrapper")

    theDivs = $(".division").get(); //an array
   theDivs.sort(function(a, b){
    var first =  parseInt($(".compareScore", a).text()),
        second = parseInt($(".compareScore", b).text())   
        return first > second ? -1 : first > second ? 1 : 0
   })
   
   theWrapper.append(theDivs)
  }
  //Sorting Score with jquery end

  div.appendChild(countryForp);
  div.appendChild(scoreForp);

  let divforMani = document.createElement("div");
  divforMani.setAttribute("class", "manipulate");

  let deleteP = document.createElement("p");
  deleteP.setAttribute("class", "a delete");
  deleteP.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>";

  let plusP = document.createElement("p");
  plusP.setAttribute("class", "a plus");
  plusP.textContent = "+5";

  let minusP = document.createElement("p");
  minusP.setAttribute("class", "a minus");
  minusP.textContent = "-5";

  divforMani.appendChild(deleteP);
  divforMani.appendChild(plusP);
  divforMani.appendChild(minusP);


  div.appendChild(divforMani);
  wrap.appendChild(div);
  

  // Click Manipulation
  deleteP.addEventListener("click", ()=>{
    div.remove();
  })
  plusP.addEventListener("click",()=>{
    finalScore += 5;
    scoreForp.textContent = finalScore;
    sortScore();
    
  })
  minusP.addEventListener("click", ()=>{
    finalScore -= 5;
    scoreForp.textContent = finalScore;
    sortScore();
  })

    //all input check start
    if ((firstName.value === '' || firstName.value == null) || (lastName.value === '' || lastName.value == null) || (country.value === '' || country.value == null) || (score.value === '' || score.value == NaN)) {
      p.textContent = "All fields are required";
      p.style.color = "red";
     div.remove();
    }else{
      p.textContent = "";
    }
    //all input check end

    sortScore();
    
});






