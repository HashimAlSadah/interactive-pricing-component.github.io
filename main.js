const sliderRange = document.querySelector(".slider input");
const sliderBtn = document.querySelector(".selector-btn");
const offerPrice = document.querySelectorAll(".offer-price");
const progressBar = document.querySelector(".selector .progress-bar")
const toggleButton = document.querySelector(".toggle-button");
const toggleCircle = document.querySelector(".circle")
const periods = document.querySelectorAll(".period");


//------------------------------------------
sliderRange.addEventListener("input", ()=> {
    const step = sliderRange.step; 
    const max = (sliderRange.max / step) - 1; //normalize the value by dividing by the step value
    const min = sliderRange.min / step - 1; //subtract 1 since we want to start from zero
    let value = sliderRange.value;
    let normalizedValue = (value / step) - 1;
    sliderBtn.style.left = ( (normalizedValue / max) * 100 ) + "%";
    progressBar.style.width = ( (normalizedValue / max) * 100 ) + "%";
});


toggleButton.addEventListener("click", ()=> {
    if ( toggleButton.classList.contains("active") ){
        toggleButton.classList.remove("active");
        toggleButton.style.backgroundColor = null;
        periods.forEach(period => {
            period.innerText = "/ month";
        })
        offerPrice.forEach(one => { //for each one of the offerprice array entry
            one.innerText = "16.00"
        })
        

    }else{
        toggleButton.classList.add("active");
        toggleButton.style.backgroundColor = "hsl(174, 86%, 45%)";
        periods.forEach(period => {
            period.innerText = "/ year";
        })
        offerPrice.forEach(one => { //for each one of the offerprice array entry
            one.innerText = "144.00"
        })
    }
    
})

