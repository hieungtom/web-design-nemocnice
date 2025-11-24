//render kalendare
const calendar = document.getElementById("calendar-grid");

for(let i = 1;  i <= 30; i++){
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    
    const dayTemplateElement = document.getElementById("day-cell");
    
    const dayBody = document.importNode(dayTemplateElement.content, true);
    dayBody.querySelector("p").textContent = i;

    
    dayElement.append(dayBody);
    calendar.append(dayElement);
}

//
const backdrop = document.getElementById('reservation-backdrop');
const modal = document.getElementById('reservation-modal');
const closeButton = document.getElementById('close-modal-button');
const calendarGrid = document.getElementById('calendar-grid');
const selectedDateSpan = document.getElementById('selected-date');
const confirmButton = document.querySelector(".reserve-button");
const departmentValue = document.getElementById("department-reservation").value;



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
}


closeButton.addEventListener('click', hideModal);
backdrop.addEventListener('click', hideModal);
calendarGrid.addEventListener('click', (e) => {
    const dayElement = e.target.closest('.day');
    
    if (dayElement) {
        const dayNumberText = dayElement.querySelector('p')?.textContent;
        
        if (dayNumberText && !isNaN(parseInt(dayNumberText))) {
            showModal(dayNumberText);
        }
    }
});

console.log(departmentValue);