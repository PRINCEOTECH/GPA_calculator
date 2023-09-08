const GPA = document.getElementById("gpa")
const display = document.getElementById("calculator_display")
const user_choice = document.getElementById("input")

let box = document.createElement("form")
box.className = "gpa-box";
box.onsubmit =()=>{return false}

let counter = 0

function numberOfCourses(){
    box.innerHTML = "";
    for(let i = 0; i < user_choice.value; i++){
        counter++;
        box.innerHTML +=
        `<input type="text" placeholder="Code" class="course" id="${counter}"  required="true">
        <input type="number" placeholder="Units" class="Units" id="${counter}"required="true">

        <select class ="grades" name="grades" id="${counter}">
            <option value="GRADE">GRADE</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option  value="D">D</option>
            <option  value="E">E</option>
            <option value="F">F</option>
        </select>
        
        `
        
    }
    box.innerHTML += `<div><button class="submit" type="submit" onclick="Submit()">submit</button></div>`
    display.appendChild(box)
    
}


function Submit() {
    let Grade_array = [];
    const gradeSelects = document.querySelectorAll(".grades");

    gradeSelects.forEach((grades) => {
        const selectedIndex = grades.selectedIndex;
        const selectedOption = grades.options[selectedIndex];
        if(selectedOption.textContent === "A"){
            Grade_array.push(5)
        }else if(selectedOption.textContent === "B"){
            Grade_array.push(4)
        }else if(selectedOption.textContent === "C"){
            Grade_array.push(3)
        }else if(selectedOption.textContent === "D"){
            Grade_array.push(2)
        }else if(selectedOption.textContent === "E"){
            Grade_array.push(1)
        }else  if(selectedOption.textContent === "F"){
            Grade_array.push(0)
        }
    }); 

    console.log(Grade_array);
    const totalGrade = Grade_array.reduce((total, number) => total + number)

    console.log("tot grade:", totalGrade)

    //to get the whole units
    let unitArry = []
    const unitSelected = document.querySelectorAll(".Units")

    unitSelected.forEach((Units) =>{
        const SelectedUnit = parseInt(Units.value, 10);
        unitArry.push(SelectedUnit)
    })
    console.log(unitArry)

    const totalUnits = unitArry.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log("Total Units:", totalUnits);


    weightedGPA = 0;

    for(let i = 0; i < Grade_array.length; i++){
        const grade = Grade_array[i];
        const unit = unitArry[i];
        const weightGrade = grade * unit;

        weightedGPA += weightGrade
    }

    // console.log(weightedGPA)

    const CGPA = parseFloat(weightedGPA / totalUnits)
    console.log("Your GPA Is",CGPA)


    GPA.innerText = `Your GPA is: ${CGPA.toFixed(2)}`
}

