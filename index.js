//responzivni menu
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});

//vyhledavani
const searchTrigger = document.getElementById("search-trigger");
const searchContainer = document.getElementById("search-container");
const menuContainer = document.getElementById("menu-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchTrigger.addEventListener("click", function () {
  if (searchContainer.classList.contains("active")) {
    if (searchInput.value.length === 0) {
      searchContainer.classList.toggle("active");
      menuContainer.classList.toggle("hidden");
    } else {
      searchForm.submit();
    }
  } else {
    if (menu.classList.contains("active")) {
      menu.classList.toggle("active");
    }
    searchContainer.classList.toggle("active");
    menuContainer.classList.toggle("hidden");
    setTimeout(function () {
      searchInput.focus();
    }, 100);
  }
});

searchForm.addEventListener("submit", function (event) {
  if (searchInput.value.length === 0) {
    event.preventDefault();
  }
});

//prepinani kontaktu
const keySelect = document.getElementById("key-select");
const departmentSelect = document.getElementById("department-select");
const keyContactsGroup = document.getElementById("key-contacts-group");
const departmentContactsGroup = document.getElementById(
  "department-contacts-group"
);

if (departmentSelect) {
  departmentSelect.addEventListener("click", function () {
    keyContactsGroup.classList.add("hidden-group");
    departmentContactsGroup.classList.remove("hidden-group");
    keySelect.classList.remove("active-select");
    departmentSelect.classList.add("active-select");
  });

  keySelect.addEventListener("click", function () {
    keyContactsGroup.classList.remove("hidden-group");
    departmentContactsGroup.classList.add("hidden-group");
    departmentSelect.classList.remove("active-select");
    keySelect.classList.add("active-select");
  });
}

//render kalendare
const currentPage = window.location.pathname.split("/").pop();
let departmentSchedules = {
  alergologie: [
    {
      day: "monday",
      hours: [
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    },
    {
      day: "tuesday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "wednesday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "thursday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "friday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
  ],
  endokrinologie: [
    {
      day: "monday",
      hours: [
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],
    },
    {
      day: "tuesday",
      hours: [
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],
    },
    {
      day: "wednesday",
      hours: [
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],
    },
    {
      day: "thursday",
      hours: [
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],
    },
    {
      day: "friday",
      hours: [
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
      ],
    },
  ],
  gynekologie: [
    {
      day: "monday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
      ],
    },
    {
      day: "tuesday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
      ],
    },
    {
      day: "wednesday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
      ],
    },
    {
      day: "thursday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
      ],
    },
    {
      day: "friday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
      ],
    },
  ],
  hematologie: [
    {
      day: "monday",
      hours: [
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
      ],
    },
    {
      day: "tuesday",
      hours: [
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
      ],
    },
    {
      day: "wednesday",
      hours: [
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
      ],
    },
    {
      day: "thursday",
      hours: [
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
      ],
    },
    {
      day: "friday",
      hours: [
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
      ],
    },
  ],
  chirurgie: [
    {
      day: "monday",
      hours: ["7:00", "10:00", "13:00"],
    },
    {
      day: "tuesday",
      hours: ["7:00", "10:00", "13:00"],
    },
    {
      day: "wednesday",
      hours: ["7:00", "10:00", "13:00"],
    },
    {
      day: "thursday",
      hours: ["7:00", "10:00", "13:00"],
    },
    {
      day: "friday",
      hours: ["7:00", "9:00", "12:00"],
    },
  ],
  nefrologie: [
    {
      day: "monday",
      hours: ["7:00", "8:30", "10:00", "11:30", "14:00"],
    },
    {
      day: "tuesday",
      hours: ["7:00", "8:30", "10:00", "11:30", "14:00"],
    },
    {
      day: "wednesday",
      hours: ["7:00", "8:30", "10:00", "11:30", "14:00"],
    },
    {
      day: "thursday",
      hours: ["7:00", "8:30", "10:00", "11:30", "14:00"],
    },
    {
      day: "friday",
      hours: ["7:00", "8:30", "10:00", "11:30", "14:00"],
    },
  ],
  ortopedie: [
    {
      day: "monday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "tuesday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "wednesday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "thursday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
    {
      day: "friday",
      hours: [
        "7:30",
        "8:30",
        "9:30",
        "10:30",
        "11:30",
        "12:30",
        "13:30",
        "14:30",
      ],
    },
  ],
  pediatrie: [
    {
      day: "monday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ],
    },
    {
      day: "tuesday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ],
    },
    {
      day: "wednesday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ],
    },
    {
      day: "thursday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ],
    },
    {
      day: "friday",
      hours: [
        "7:00",
        "7:30",
        "8:00",
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ],
    },
  ],
};

let userLogged = localStorage.getItem("userLogged") === "true"; //pororvnani, zda se hodnota rovna true

if (currentPage === "prihlaseni.html") {
  const logInBtn = document.getElementById("login-submit");

  logInBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const insuranceValue = document.getElementById("insurance-number").value;
    const passwordValue = document.getElementById("password").value;

    if (insuranceValue === "0000000000" && passwordValue === "abc") {
      localStorage.setItem("userLogged", "true"); //local storage uklada stringy
      userLogged = true;
      window.location.href = "rezervace.html";
    }
  });
}

if (currentPage === "rezervace.html") {
  document.addEventListener("DOMContentLoaded", function () {
    userLogged = localStorage.getItem("userLogged") === "true";
    if (!userLogged) {
      window.location.href = "prihlaseni.html";
      return;
    }
  });

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("userLogged");
      userLogged = false;
      window.location.href = "index.html";
    });
  }

  const deleteReservationBtns = document.querySelectorAll(".btn-delete");
  const deleteReservationHandler = (e) => {
    e.target.closest(".reservation-card").remove()
    
  }

  deleteReservationBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener("click", deleteReservationHandler.bind(this))
  });
}

if (currentPage === "terminy.html") {
  //renderovani kalndare
  const calendar = document.getElementById("calendar-grid");
  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const departmentSelect = document.getElementById("department-reservation");

  function initializeDepartmentSchedules() {
    const schedules = {};
    const month = 12;
    const year = "20XX";

    // kazde oddeleni
    Object.keys(departmentSchedules).forEach((dept) => {
      schedules[dept] = [];

      for (let day = 1; day <= 30; day++) {
        const date = `${year}-${month}-${day}`;
        const dayOfWeek = daysOfWeek[(day - 1) % 7];

        if (dayOfWeek === "saturday" || dayOfWeek === "sunday") continue;

        // referuj puvodni rozvrh
        const originalSchedule = departmentSchedules[dept].find(
          (schedule) => schedule.day === dayOfWeek
        );
        if (originalSchedule) {
          schedules[dept].push({
            day: dayOfWeek,
            date: date,
            hours: [...originalSchedule.hours], // kopie pole
          });
        }
      }
    });

    return schedules;
  }
  departmentSchedules = initializeDepartmentSchedules();

  function getDepartmentHours(department) {
    return departmentSchedules[department] || [];
  }

  renderCalendar();
  departmentSelect.addEventListener("change", renderCalendar);

  function renderCalendar() {
    calendar.innerHTML = "";
    const currentMonth = 12;
    const currentYear = "20XX";

    for (let i = 0; i <= 29; i++) {
      const dayElement = document.createElement("div");
      const currentDate = `${currentYear}-${currentMonth}-${i + 1}`;
      dayElement.className = "day";
      dayElement.dataset.date = currentDate;

      const dayTemplateElement = document.getElementById("day-cell");
      const dayBody = document.importNode(dayTemplateElement.content, true);
      const slotsAvailable = dayBody.querySelector(".num-of-slots");

      dayBody.querySelector("p").textContent = i + 1;
      defineDayOfWeek(i, dayElement);

      const departmentValue = document.getElementById(
        "department-reservation"
      ).value;

      if (departmentValue) {
        const schedule = getDepartmentHours(departmentValue).find(
          (schedule) => schedule.date === currentDate
        );

        if (schedule && slotsAvailable) {
          if (schedule.hours.length === 0)
            dayElement.classList.add("not-available");
          slotsAvailable.textContent =
            (schedule.hours.length > 4) | (schedule.hours.length === 0)
              ? `${schedule.hours.length} míst`
              : schedule.hours.length > 1
              ? `${schedule.hours.length} místa`
              : `${schedule.hours.length} místo`;
        } else if (slotsAvailable) {
          slotsAvailable.textContent = "";
        }
      }

      dayElement.append(dayBody);
      calendar.append(dayElement);
    }
  }

  function defineDayOfWeek(iteration, element) {
    const position = iteration % 7;
    element.classList.add(daysOfWeek[position]);

    if (position === 5 || position === 6)
      element.classList.add("not-available");
  }

  //konfigurace rezervaci (backdrop, modal a casy)
  const backdrop = document.getElementById("reservation-backdrop");
  const modal = document.getElementById("reservation-modal");
  const closeButton = document.getElementById("close-modal-button");
  const calendarGrid = document.getElementById("calendar-grid");
  const selectedDateSpan = document.getElementById("selected-date");
  const confirmButton = document.getElementById("reserve-button");
  const hourOptionsSelect = document.getElementById("time-slot");

  function showModal(dayNumber) {
    selectedDateSpan.textContent = dayNumber;

    backdrop.style.display = "block";
    modal.style.display = "block";

    document.body.style.overflow = "hidden";
  }
  function hideModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";

    document.body.style.overflow = "";
    resetTimeSelect();
  }

  closeButton.addEventListener("click", hideModal);
  backdrop.addEventListener("click", hideModal);
  calendarGrid.addEventListener("click", (e) => {
    const dayElement = e.target.closest(".day");

    if (dayElement) {
      const weekend = [daysOfWeek[5], daysOfWeek[6]];
      if (weekend.some((day) => dayElement.classList.contains(day))) return;

      const dayNumberText = dayElement.querySelector("p")?.textContent;
      if (dayNumberText && !isNaN(parseInt(dayNumberText))) {
        const departmentValue = document.getElementById(
          "department-reservation"
        ).value;
        renderReservationOptions(dayElement, departmentValue);
        showModal(dayNumberText);
      }
    }
  });

  //potvrzeni rezervace
  confirmButton.addEventListener("click", (e) => {
    e.preventDefault();

    const selectedDate = selectedDateSpan.textContent;
    const department = departmentSelect.value;
    const selectedTime = hourOptionsSelect.value;

    if (!selectedTime) {
      alert("Vyberte prosím čas");
      return;
    }

    const dayElements = document.querySelectorAll(".day");
    const dayElement = Array.from(dayElements).find(
      (day) => day.querySelector("p")?.textContent === selectedDate
    );

    if (dayElement) {
      const date = dayElement.dataset.date;
      const success = removeReservedTime(department, date, selectedTime);

      if (success) {
        renderCalendar();
        console.log(
          `Rezervace proběhla na termín: ${date}, ${selectedTime}, ${department}`
        );

        hideModal();
      } else {
        console.log("Error rezervace");
      }
    }
  });

  function renderReservationOptions(dayEl, department) {
    const date = dayEl.dataset.date;
    const hoursOfDay = getDepartmentHours(department);
    const schedule = hoursOfDay.find((schedule) => schedule.date === date);

    if (schedule && hourOptionsSelect) {
      resetTimeSelect();
      schedule.hours.forEach((hour) => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", hour);
        newOption.textContent = hour;
        hourOptionsSelect.appendChild(newOption);
      });
    }
  }
  function resetTimeSelect() {
    hourOptionsSelect.innerHTML =
      '<option value="" disabled selected>Zvolte čas</option>';
  }
  function removeReservedTime(department, date, time) {
    const departmentSchedule = departmentSchedules[department];
    if (!departmentSchedule) return false;

    const daySchedule = departmentSchedule.find(
      (schedule) => schedule.date === date
    );
    if (!daySchedule) return false;

    const reservedTimeIndex = daySchedule.hours.indexOf(time);
    if (reservedTimeIndex > -1) {
      daySchedule.hours.splice(reservedTimeIndex, 1);
      return true;
    }
    return false;
  }
}
