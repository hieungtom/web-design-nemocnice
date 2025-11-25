//render kalendare
const calendar = document.getElementById("calendar-grid");
const daysOfWeek =  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for(let i = 0;  i <= 29; i++){
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    
    const dayTemplateElement = document.getElementById("day-cell");
    
    const dayBody = document.importNode(dayTemplateElement.content, true);
    dayBody.querySelector("p").textContent = i + 1;

    defineDayOfWeek(i, dayElement)

    dayElement.append(dayBody);
    calendar.append(dayElement);
}

function defineDayOfWeek(iteration, element){
  const position = iteration % 7;
  element.classList.add(daysOfWeek[position])

  if(position === 5 || position === 6) element.classList.add("not-available")
}

//konfigurace rezervaci (backdrop, modal a casy)
const backdrop = document.getElementById('reservation-backdrop');
const modal = document.getElementById('reservation-modal');
const closeButton = document.getElementById('close-modal-button');
const calendarGrid = document.getElementById('calendar-grid');
const selectedDateSpan = document.getElementById('selected-date');
const confirmButton = document.querySelector(".reserve-button");
const hourOptionsSelect = document.getElementById("time-slot");



function showModal(dayNumber) {
    selectedDateSpan.textContent = dayNumber;
    
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    
    document.body.style.overflow = 'hidden'; 
}

function hideModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    
    document.body.style.overflow = '';
    resetTimeSelect();
}


closeButton.addEventListener('click', hideModal);
backdrop.addEventListener('click', hideModal);
calendarGrid.addEventListener('click', (e) => {
    const dayElement = e.target.closest('.day');
    
    if (dayElement) {

        const weekend = [daysOfWeek[5], daysOfWeek[6]];
        if(weekend.some(day => dayElement.classList.contains(day))) return; 

        const dayNumberText = dayElement.querySelector('p')?.textContent;
        const departmentValue = document.getElementById("department-reservation").value;
        
        if (dayNumberText && !isNaN(parseInt(dayNumberText))) {
            getDepartmentHours(departmentValue, dayElement);
            showModal(dayNumberText);
        }
    }
});


function getDepartmentHours(department, dayEl){
    let availableHours; 
    
    switch(department){
        case "alergologie":
            console.log("alergologie");
            availableHours = [
                {
                    days:["monday"],
                    hours: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
                },
                {
                    days:["tuesday", "wednesday", "thursday", "friday"],
                    hours: ["7:30", "8:30", "9:30", "10:30", "11:30", "12:30", "13:30", "14:30"]
                }
            ]
            break;
        case "endokrinologie":
            console.log("endo");
            break;
        case "gynekologie":
            console.log("gynda");
            break;
        case "hematologie":
            console.log("hema");
            break;
        case "chirurgie":
            console.log("chir");
            break;
        case "nefrologie":
            console.log("nefro");
            break;
        default:
            throw{message: "Invalid department"}
    }

    return renderReservationOptions(availableHours, dayEl);
}

function renderReservationOptions(hoursOfDay, dayEl){
    const schedule = hoursOfDay.find(schedule => schedule.days.some(day => dayEl.classList.contains(day)));
    
    if(schedule && hourOptionsSelect){
        schedule.hours.forEach(hour => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", hour);
        newOption.textContent = hour;
        hourOptionsSelect.appendChild(newOption);
    });
    }
}

function resetTimeSelect() {
    hourOptionsSelect.innerHTML = '<option value="" disabled selected>Zvolte čas</option>';
}

//nyni se renderuji hodiny spravne (tedy alespon v testovaci alergologii)
//ale rezervace zatim NEFUNGUJI; bude mozna potreba modifikovat zpusob zapisu pole availableHours na jednotlive dny