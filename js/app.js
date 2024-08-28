let fromUnit = document.getElementById("dropDown1");
let toUnit = document.getElementById("dropDown2");
let tempInput = document.getElementById("startTemp");
let tempOutput = document.getElementById("result");
let convertBtn = document.getElementById("convert");
let finalResult = document.getElementById("result");

convertBtn.addEventListener("click", () =>
    {
        let tempNumber = Number(tempInput.value);
        let currentUnit = Number(fromUnit.value);
        let outputUnit = Number(toUnit.value);
        let convertedTemp = 0;

        switch(currentUnit) {

            case 0:
                finalResult.innerHTML = "cannot convert";
                break;


            case 1:
                switch(outputUnit){
                    case 0:
                        finalResult.innerHTML = "cannot convert";
                        break;
                    case 1:
                        finalResult.innerHTML = "same number!";
                        break;
                    case 2:
                        convertedTemp = (tempNumber - 32) * (5/9);
                        finalResult.innerHTML = `${convertedTemp.toFixed(2)}°C`;
                        break;
                    case 3:
                        convertedTemp = (tempNumber - 32) * (5/9) + 273.15;
                        finalResult.innerHTML = `${convertedTemp.toFixed(2)}°K`;
                        break;
                }
                break;


            case 2:
                switch(outputUnit){
                    case 0:
                        finalResult.innerHTML = "cannot convert";
                        break;
                    case 1:
                        convertedTemp = (tempNumber * (9/5)) + 32;
                        finalResult.innerHTML = `${convertedTemp.toFixed(2)}°F`;
                        break;
                    case 2:
                        finalResult.innerHTML = "same number!";
                        break;
                    case 3:
                        convertedTemp = tempNumber + 273.15;
                        finalResult.innerHTML = `${convertedTemp.toFixed(2)}°K`;
                        break;
                }
                break;


            case 3:
                switch(outputUnit){
                    case 0:
                        finalResult.innerHTML = "cannot convert";
                        break;
                    case 1:
                        convertedTemp = (tempNumber - 273.15) * (9/5) + 32;
                        finalResult.innerHTML = `${convertedTemp.toFixed(2)}°F`;
                        break;
                    case 2:
                        convertedTemp = tempNumber - 273.15;
                        finalResult.innerHTML = `${convertedTemp.toFixed(2)}°C`;
                        break;
                    case 3:
                        finalResult.innerHTML = "same number!";
                        break;
                }
                break;
        }
    })
