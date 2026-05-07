const now = new Date();
const month = now.getMonth() + 1;
let Calmonth = now.getMonth();
let Calyear = now.getFullYear();
const year = now.getFullYear();
let calsubid = null;
const hour = now.getHours();
const weekday = now.getDay();
let totalfees = 0;
let paidfees = 0;

const role = localStorage.getItem("role");
const users = JSON.parse(localStorage.getItem("users")) || {};
const departments = JSON.parse(localStorage.getItem("departments")) || {};
const results = JSON.parse(localStorage.getItem("results")) || {};
const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
const hostels = JSON.parse(localStorage.getItem("hostels")) || {};
const user_ID = localStorage.getItem("user_ID");
const details = users[user_ID];
const dept = departments[details.department];
const lastlogin = localStorage.getItem("LastLogin");

let studentactive = true;
let currentSemester = 0;
let currentYear = 0;
let selectedsemester = 0;




function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => el.innerText = value);
}
if (document.querySelector(".chgmonthbtn")) {
    document.querySelector(".chgmonthbtn[value='dec']").addEventListener("click", () => {
        Calmonth--;

        loadAttendanceCalendar(calsubid, Calmonth, Calyear);
    });

    document.querySelector(".chgmonthbtn[value='inc']").addEventListener("click", () => {
        Calmonth++;

        loadAttendanceCalendar(calsubid, Calmonth, Calyear);
    });
}

let leaveformdata;
const leaveform = document.querySelector("#leaveapplication");

if (leaveform) {
    const datefrom = document.querySelector("#l-from");
    const dateto = document.querySelector("#l-to");
    datefrom.addEventListener("change", (e) => {
        e.preventDefault();
        dateto.setAttribute('min', datefrom.value);
    });
    leaveform.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(leaveform);

        leaveformdata = Object.fromEntries(form.entries());
        leaveselect();
        leaveform.reset();

    })
}

function calcPoints(mark) {
    if (mark >= 80) return 10;
    if (mark >= 70) return 9;
    if (mark >= 60) return 8;
    if (mark >= 55) return 7;
    if (mark >= 50) return 6;
    if (mark >= 45) return 5;
    if (mark >= 40) return 4;
    return 0;
}

function calcGrade(mark) {
    if (mark >= 80) return "O";
    if (mark >= 70) return "A+";
    if (mark >= 60) return "A";
    if (mark >= 55) return "B+";
    if (mark >= 50) return "B";
    if (mark >= 45) return "C";
    if (mark >= 40) return "D";
    return "F";
}


function calcSemester() {
    let sem = (year - Number(details.enrollmentYear)) * 2;
    if (month > 6) sem++;

    const maxSem = Number(dept.duration) * 2;

    if (sem > maxSem) {
        sem = maxSem;
        studentactive = false;
    }

    currentSemester = sem;
    currentYear = Math.ceil(sem / 2);
}

function getGreeting() {

    if (hour < 12) return "Morning";
    if (hour < 17) return "Afternoon";
    return "Evening";

}


function loadStudentInfo() {
    const greet = getGreeting();

    setText(".studentFirstName", details.firstName);
    setText(".studentLastName", details.lastName);
    setText(".greet", greet);
    setText(".DOB", details.DOB);
    setText(".Gender", details.Gender);
    setText(".Nationality", details.Nationality);
    setText(".BloodGroup", details.BloodGroup);
    setText(".AdhaarNo", details.AdhaarNo);
    setText(".Category", details.Category);
    setText(".Religion", details.Religon);
    setText(".Advisor", dept.Advisor);
    setText(".AdmissionType", details.AdmissionType);
    setText(".PersonalEmail", details.PersonalEmail);
    setText(".UniversityEmail", details.UniversityEmail);
    setText(".PersonalContact", details.PersonalContact);
    setText(".FatherName", details.FatherName);
    setText(".FatherContact", details.FatherContact);
    setText(".MotherName", details.MotherName);
    setText(".MotherContact", details.MotherContact);
    setText(".FatherOccupation", details.FatherOccupation);
    setText(".AnnualIncome", details.AnnualIncome);
    setText(".EmergencyContact", details.EmergencyContact);
    setText(".PermanentAddress", details.PermanentAddress);
    setText(".currentAddress", details.currentAddress);
    setText(".studentCurrentSemester", currentSemester);
    setText(".studentFullYear", currentYear + Number(details.enrollmentYear));
    setText(".department", dept.departmentname);
    setText(".StudentYear", currentYear);
    setText(".lastLogin", lastlogin);
    setText(".roll_no", details.rollNo);
    setText(".batch_start", details.enrollmentYear);
    setText(".batch_end", Number(details.enrollmentYear) % 100 + Number(dept.duration));
    setText(".nav-avatar", details.firstName[0]);
    setText(".hostel", details.hostel);
    setText(".room_no", details.RoomNo);


    setText(".CGPA", calccgpa());
    calctotalatt();
    if (!studentactive) {
        setText(".currentStatus", "NOT ACTIVE");

        document.querySelectorAll(".Statuscolor").forEach(el => {
            el.style.backgroundColor = "rgba(255,0,0,.15)";
            el.style.borderColor = "rgba(240,63,63,.5)";
        });
    } else {
        setText(".currentStatus", "ACTIVE");
    }
}


function createSemesterTabs() {
    const container = document.querySelector("#semester-tabs");
    if (!container) return;

    for (let i = 1; i <= currentSemester; i++) {
        const tab = document.createElement("a");
        tab.className = "sem-tab";
        tab.dataset.sem = i;

        tab.innerText = i === currentSemester ?
            `(Ongoing) Semester ${i}` :
            `Semester ${i}`;

        if (i === currentSemester) {
            tab.classList.add("active");
            selectedsemester = i;
            showResult();
        }

        container.appendChild(tab);
    }

    container.addEventListener("click", e => {
        if (!e.target.classList.contains("sem-tab")) return;

        document.querySelectorAll(".sem-tab").forEach(tab => tab.classList.remove("active"));
        e.target.classList.add("active");

        selectedsemester = Number(e.target.dataset.sem);
        showResult();
    });
}


function showResult() {
    const semData = results[details.rollNo][selectedsemester];
    const subjects = dept.subjects[selectedsemester];

    document.querySelector("#fullresult").style.display =
        selectedsemester < currentSemester ? "grid" : "none";

    setText(".selectedSemester", selectedsemester);

    const subjecttable = document.querySelector("#subjecttable");
    const internalresult = document.querySelector("#Internalresult");

    subjecttable.innerHTML = "";
    internalresult.innerHTML = "";

    for (const key in subjects) {
        const sub = subjects[key];
        const res = semData[key];

        const extMO = Number(res.external.MO);
        const extMM = Number(res.external.MM);

        let intMO = 0,
            intMM = 0;

        Object.values(res.internal.MO).forEach(v => intMO += Number(v));
        Object.values(res.internal.MM).forEach(v => intMM += Number(v));

        const internal = Math.round((intMO * (100 - extMM)) / intMM);
        const total = internal + extMO;

        const grade = calcGrade(total);
        const point = calcPoints(total);
        setText(".SGPA", calcsgpa(selectedsemester));

        subjecttable.innerHTML += `
        <tr>
            <td>${sub.name}</td>
            <td>${internal}/${100 - extMM}</td>
            <td>${extMO}/${extMM}</td>
            <td>${total}/100</td>
            <td><span class="grade-pill g${grade}">${grade}</span></td>
            <td>${point}</td>
        </tr>`;

        internalresult.innerHTML += `
        <tr>
            <td>${sub.name}</td>
            <td>${res.internal.MO.ST1}/${res.internal.MM.ST1}</td>
            <td>${res.internal.MO.ST2}/${res.internal.MM.ST2}</td>
            <td>${res.internal.MO.Viva}/${res.internal.MM.Viva}</td>
        </tr>`;
    }
}

function calccgpa() {
    let totalCredits = 0;
    let weightedPoints = 0;


    for (let sem = 1; sem < currentSemester; sem++) {

        const semSubjects = departments[details.department].subjects[sem];
        const semResults = results[details.rollNo][sem];

        if (!semSubjects || !semResults) continue;

        for (let sub in semSubjects) {
            const credit = Number(semSubjects[sub].credit || semSubjects[sub].creidt || 0);
            const subject = semResults[sub];

            let internalMO = 0;
            let internalMM = 0;

            for (let k in subject.internal.MO) internalMO += Number(subject.internal.MO[k]);
            for (let k in subject.internal.MM) internalMM += Number(subject.internal.MM[k]);

            const extMO = Number(subject.external.MO || 0);
            const extMM = Number(subject.external.MM || 0);

            const internalConverted =
                Math.round((internalMO * (100 - extMM)) / internalMM);

            const total = internalConverted + extMO;
            const gp = calcPoints(total);

            weightedPoints += gp * credit;
            totalCredits += credit;
        }
    }

    if (totalCredits === 0) return "Pending";

    return (weightedPoints / totalCredits).toFixed(2);
}

function calcsgpa(semester) {

    if (Number(semester) >= Number(currentSemester)) return "Pending";

    const semSubjects = departments[details.department].subjects[semester];
    const semResults = results[details.rollNo][semester];

    let totalCredits = 0;
    let weightedPoints = 0;

    for (let sub in semSubjects) {

        const credit = Number(semSubjects[sub].credit || semSubjects[sub].creidt || 0);
        const subject = semResults[sub];

        let internalMO = 0;
        let internalMM = 0;

        for (let k in subject.internal.MO) internalMO += Number(subject.internal.MO[k]);
        for (let k in subject.internal.MM) internalMM += Number(subject.internal.MM[k]);

        const extMO = Number(subject.external.MO || 0);
        const extMM = Number(subject.external.MM || 0);

        const internalConverted =
            Math.round((internalMO * (100 - extMM)) / internalMM);

        const total = internalConverted + extMO;
        const gp = calcPoints(total);

        weightedPoints += gp * credit;
        totalCredits += credit;

    }

    return (weightedPoints / totalCredits).toFixed(2);
}

function calctotalatt() {
    let totalatt = 0;
    let totalclasses = 0;
    let per = 0;
    for (let i in dept.subjects[currentSemester]) {
        const [att, tot] = calculateattendedclass(i);
        totalatt = totalatt + att;
        totalclasses = totalclasses + tot;
    }

    setText(".totalclasses", totalclasses);
    setText(".attendedclasses", totalatt);
    setText(".missedclasses", totalclasses - totalatt);
    if (totalclasses == 0) { per = 0; } else per = ((totalatt / totalclasses) * 100);

    setText(".attpercentage", `${Math.floor(per)}%`);

}

function calculateattendedclass(subject) {

    let att = 0;
    let total = 0
    for (let i in attendance) {
        const [d, m, y] = i.split('-');
        const date = new Date(y, m - 1, d);
        const weekdays = [
            "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
        ]
        const weekday = weekdays[date.getDay()];
        for (let j in dept.timetable[currentSemester][weekday]) {
            if (subject == dept.timetable[currentSemester][weekday][j] && attendance[i][j] && attendance[i][j][details.rollNo]) {
                total++;

                if (attendance[i][j][details.rollNo] == "P" || attendance[i][j][details.rollNo] == "L") {
                    att++;
                }
            }
        }


    }
    return [att, total];
}

function attcolor(percent) {
    if (percent >= 90) return "green";
    else if (percent >= 75) return "amber";
    else return "red";
}

function badsel(percent) {
    if (percent >= 90) return '<span class="badge badge-green">Excellent</span>';
    else if (percent >= 75) return '<span class="badge badge-amber">Good</span>';
    else return '<span class="badge badge-red">Risk</span>';
}

function selectAttendanceCalendar() {
    const attendancelist = document.querySelector("#subject-attendance-list");
    if (!attendancelist) return;
    for (let i in dept.subjects[currentSemester]) {
        const subatten = document.createElement("tr");
        subatten.classList.add("att-subject-row");
        subatten.id = i;


        const name = document.createElement("td");
        name.innerText = dept.subjects[currentSemester][i].name;

        const [att, tot] = calculateattendedclass(i);
        let per;
        if (tot == 0) per = 0;
        else per = Math.floor((att / tot) * 100);


        const attended = document.createElement("td");
        attended.innerText = att;

        const total = document.createElement("td");
        total.innerText = tot;

        const progress = document.createElement("td");

        const pctcell = document.createElement("div");
        pctcell.classList.add("pct-cell");

        const progressbar = document.createElement("div");
        progressbar.classList.add("progress-bar");
        progressbar.style.width = "100px";

        const progressfill = document.createElement("div");
        progressfill.classList.add("progress-fill");
        progressfill.classList.add(`fill-${attcolor(per)}`);
        progressfill.style.width = `${per}%`;

        const pctnum = document.createElement("span");
        pctnum.classList.add("pct-num")
        pctnum.innerText = `${per}%`;
        pctnum.classList.add(`${attcolor(per)}`);


        const status = document.createElement("td");
        status.innerHTML = badsel(per);

        progressbar.appendChild(progressfill);
        pctcell.appendChild(progressbar);
        pctcell.appendChild(pctnum);


        progress.appendChild(pctcell);


        subatten.appendChild(name);
        subatten.appendChild(attended);
        subatten.appendChild(total);
        subatten.appendChild(progress);
        subatten.appendChild(status);
        attendancelist.appendChild(subatten);
    }
    attendancelist.firstElementChild.classList.add("active");
    calsubid = attendancelist.firstElementChild.id;
    loadAttendanceCalendar(calsubid, Calmonth, Calyear);
    attendancelist.addEventListener("click", (e) => {
        document.querySelectorAll(".att-subject-row").forEach(line => line.classList.remove("active"));


        e.target.closest("tr").classList.add("active");
        calsubid = e.target.closest("tr").id;

        loadAttendanceCalendar(calsubid, Calmonth, Calyear);

    });
}


function loadAttendanceCalendar(subjid, month, year) {
    if (subjid == null) return;

    const wrap = document.querySelector(".calendar-grid");
    if (!wrap) return;
    const body = document.querySelector("body");








    const time = new Date(year, month);
    setText(".monthtext", time.toLocaleString("default", { month: "long" }));
    setText(".yearfull", `${time.getFullYear()}`);
    const deptName = details.department;
    const sem = String(currentSemester);
    const roll = details.rollNo;

    wrap.innerHTML = "";

    const heads = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    heads.forEach(day => {
        wrap.innerHTML += `<div class="cal-day-head">${day}</div>`;
    });



    if (!attendance) return;







    const monthText = String(month + 1).padStart(2, "0");

    const firstDay = new Date(year, month, 1);



    let start = firstDay.getDay();


    const totalDays = new Date(year, month + 1, 0).getDate();


    for (let i = 0; i < start; i++) {
        wrap.innerHTML += `<div class="cal-day empty"></div>`;
    }

    for (let day = 1; day <= totalDays; day++) {

        const dd = String(day).padStart(2, "0");
        const fullDate = `${dd}-${monthText}-${year}`;

        let cls = "holiday";

        const dayData = attendance[fullDate];

        if (dayData) {

            let found = false;
            let absent = false;
            let leave = false;
            let week = new Date(year, month, day);
            let weekday = weekdaytext(week.getDay());

            if (dept.timetable[currentSemester][weekday]) {
                for (let sub in dept.timetable[currentSemester][weekday]) {

                    if (dept.timetable[currentSemester][weekday][sub] == subjid) {

                        if (dayData[sub][roll]) {

                            found = true;

                            const st = dayData[sub][roll];

                            if (st === "A") absent = true;
                            if (st === "L") leave = true;



                        }
                    }


                    if (found) {
                        if (absent) {
                            cls = "absent";
                            break;
                        }
                        if (leave) {
                            cls = "leave";
                            break;
                        }
                        cls = "present";
                    }

                }
            }
        }



        const today =
            day === now.getDate() &&
            month === now.getMonth() &&
            year === now.getFullYear();

        if (today) cls += " today";

        wrap.innerHTML += `
        <div class="cal-day ${cls}">
            ${day}
        </div>`;
    }




}

function weekdaytext(now) {

    switch (now) {

        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TUE";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
    }
}

function selectperiodcolor() {
    let color = Math.floor(Math.random() * 6);
    switch (color) {
        case 0:
            return "blue";
        case 1:
            return "green";
        case 2:
            return "amber";
        case 3:
            return "purple";
        case 4:
            return "pink";
        case 5:
            return "cyan";

    }
}

function loadtimetable() {
    const now = (new Date().getDay());
    const weekname = weekdaytext(now);
    const weeklytimetable = document.querySelector(".weekly-view");
    if (!weeklytimetable) return;
    const table = document.createElement("table");
    table.classList.add("weekly-table");


    const tableheading = document.createElement("thead");
    const tableheadingrow = document.createElement("tr");
    tableheading.appendChild(tableheadingrow);
    const periodheading = document.createElement("th");
    periodheading.innerText = "Lecture";
    tableheadingrow.appendChild(periodheading);
    for (let i in dept.timetable[currentSemester]) {
        const theading = document.createElement("th");
        theading.innerText = i;

        if (i == weekname) {
            theading.classList.add("today-col");

            theading.innerText += " ★";
        }
        tableheadingrow.appendChild(theading);

    }
    table.appendChild(tableheading);

    const tablebody = document.createElement("tbody");
    for (let i = 1; i <= 6; i++) {
        const tbodyrow = document.createElement("tr");
        const period = (document.createElement("td"));
        period.classList.add("time-col")
        period.innerText = `${i} Lecture`;
        tbodyrow.appendChild(period);
        for (let j in dept.timetable[currentSemester]) {
            const temp = document.createElement("td");
            temp.innerHTML = `<span class="week-cell wc-${selectperiodcolor()}"><div class='wc-sub'>${dept.subjects[currentSemester][dept.timetable[currentSemester][j][i]].name}</div></span>`;
            tbodyrow.appendChild(temp);
        }



        tablebody.appendChild(tbodyrow);
    }

    table.appendChild(tablebody);




    weeklytimetable.appendChild(table);
}

function DailyTable(input) {
    let day;

    switch (input) {
        case "Monday":
            day = "MON";
            break;
        case "Tuesday":
            day = "TUE";
            break;
        case "Wednesday":
            day = "MON";
            break;
        case "Thursday":
            day = "THU";
            break;
        case "Friday":
            day = "FRI"
            break;

    }

    const table = document.querySelector(".timetable-grid");
    table.innerText = "";
    for (let i in dept.timetable[currentSemester][day]) {
        const row = document.createElement("div");
        row.classList.add("tt-row");

        const time = document.createElement("div");
        time.classList.add("tt-time");
        time.innerText = `Lecture ${i}`;
        row.appendChild(time);


        const slot = document.createElement("div");
        slot.classList.add("tt-slot");


        const color = document.createElement("div");
        color.classList.add("tt-color");
        color.classList.add(`daily-${selectperiodcolor()}`);
        slot.appendChild(color);


        const name = document.createElement("div");

        const subject = document.createElement("div");
        subject.classList.add("tt-subject");
        subject.innerText = `${dept.subjects[currentSemester][dept.timetable[currentSemester][day][i]].name}`;

        const meta = document.createElement("div");
        meta.classList.add("tt-meta");


        meta.innerHTML = ` 🏛️ ${dept.block} 👨‍🏫 ${dept.subjects[currentSemester][dept.timetable[currentSemester][day][i]].teacher} ⏱️ 50 min`;


        name.appendChild(subject);
        name.appendChild(meta);
        slot.appendChild(name);
        row.appendChild(slot);
        table.appendChild(row);
    }
}

function loadDailytable() {
    const daytabs = document.querySelector(".day-tabs");
    if (!daytabs) return;
    const tab = document.querySelectorAll(".day-tab");

    if (tab[weekday - 1]) {
        tab[weekday - 1].classList.add("active", "today-tab");
        DailyTable(tab[weekday - 1].innerText);

    } else {
        tab[0].classList.add("active", "today-tab");
        DailyTable(tab[0].innerText);
    }

    daytabs.addEventListener("click", (e) => {

        tab.forEach((t) => {
            t.classList.remove("today-tab");
            t.classList.remove("active");
        });
        e.target.classList.add("active");
        e.target.classList.add("today-tab");
        DailyTable(e.target.innerText);
    });
}

function subname(name) {
    let smallname = "";
    let arr = name.split(' ');
    if (arr.length == 1) smallname = arr[0][0];
    else if (arr.length == 2) smallname = arr[1][0];
    else if (arr.length == 3) smallname = arr[1][0] + arr[2][0];
    else smallname = arr[1][0] + arr[3][0];

    return smallname;
}

function faculty() {
    const facultylist = document.querySelector(".faculty-list");
    if (!facultylist) return;
    for (let i in dept.subjects[currentSemester]) {
        const facultycard = document.createElement("div");
        facultycard.classList.add("faculty-card");

        const logo = document.createElement("div");
        logo.classList.add("fav-avatar");

        logo.classList.add(`card-${selectperiodcolor()}`);


        const info = document.createElement("div");

        const name = document.createElement("div");
        name.classList.add("fav-name")
        name.innerText = dept.subjects[currentSemester][i].teacher;

        const sub = document.createElement("div");
        sub.classList.add("fav-sub");
        sub.innerText = dept.subjects[currentSemester][i].name;

        const loc = document.createElement("div");
        loc.classList.add("fav-room");
        loc.innerText = dept.block;

        logo.innerText = subname(name.innerText);

        info.appendChild(name);
        info.appendChild(sub);
        info.appendChild(loc);

        facultycard.appendChild(logo);
        facultycard.appendChild(info);
        facultylist.appendChild(facultycard);
    }
}
let leavetype = "casual";

function leaveapply() {
    const leavetyperow = document.querySelector(".leave-type-row");
    if (!leavetyperow) return;
    const leavetypebtns = document.querySelectorAll(".leave-type-btn");


    leavetyperow.addEventListener("click", (b) => {
        leavetypebtns.forEach((e) => {
            e.classList.remove("selected");
        })

        b.target.closest("div").classList.add("selected");
        leavetype = b.target.closest("div").id

    });
}

function leaveselect() {
    const now = new Date();
    const leavename = `LV${now.getTime()}`;


    leaveformdata.type = leavetype;
    leaveformdata.approvestatus = "pending";
    leaveformdata.applytime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
    dept.leaves[details.rollNo][leavename] = leaveformdata;

    departments[details.department] = dept;

    localStorage.setItem("departments", JSON.stringify(departments));
    const leavesuccessfull = document.querySelector(".leavesucessfull");
    leavesuccessfull.style.display = "block";
    setTimeout(function() {
        leavesuccessfull.style.display = "none";

    }, 2000)
    showleaves()
}

function showleaves() {
    const list = document.querySelector("#leavehistory");
    if (!list) return;
    list.innerText = "";
    for (let i in dept.leaves[details.rollNo]) {


        const leaverow = document.createElement("tr");

        const leaveid = document.createElement("td");
        leaveid.innerText = i;
        leaveid.style.color = "var(--muted)";

        const type = document.createElement("td");
        type.innerText = dept.leaves[details.rollNo][i].type;

        const from = document.createElement("td");
        from.innerText = dept.leaves[details.rollNo][i].from;

        const to = document.createElement("td");
        to.innerText = dept.leaves[details.rollNo][i].to;

        const days = document.createElement("td");
        const d1 = new Date(dept.leaves[details.rollNo][i].from);
        const d2 = new Date(dept.leaves[details.rollNo][i].to);
        days.innerText = `${((d2 - d1) / (1000 * 60 * 60 * 24) + 1)} Days`;


        const reason = document.createElement("td");
        reason.innerText = dept.leaves[details.rollNo][i].reason;

        const applieddate = document.createElement("td");
        applieddate.innerText = dept.leaves[details.rollNo][i].applytime;

        const status = document.createElement("td");
        status.innerHTML = `<span class="status-chip chip-${dept.leaves[details.rollNo][i].approvestatus}">${dept.leaves[details.rollNo][i].approvestatus}</span>`;
        leaverow.appendChild(leaveid);
        leaverow.appendChild(type);
        leaverow.appendChild(from);
        leaverow.appendChild(to);
        leaverow.appendChild(days);
        leaverow.appendChild(reason);
        leaverow.appendChild(applieddate);
        leaverow.appendChild(status);
        list.appendChild(leaverow);
    }
    calcleaves();
}

function calcleaves() {
    let pdl = 0;
    let apl = 0;
    ;
    for (let i in dept.leaves[details.rollNo]) {

        if (dept.leaves[details.rollNo][i].approvestatus == "pending") {
            pdl++;
        }
        if (dept.leaves[details.rollNo][i].approvestatus == "approved") {
            apl++;
        }
    }
    setText(".approvedleaves", apl);
    setText(".pendingleaves", pdl);
}

function feesbreakdown() {
    const feestructure = document.querySelector(".feestructure");
    if (!feestructure) return;
    let totalfees = 0;
    feestructure.innerHTML = "";
    for (let i in dept.fees.feedetails) {
        const feerow = document.createElement("div");
        feerow.classList.add("fee-row");

        const name = document.createElement("span");
        name.classList.add("name");
        name.innerText = i;

        const amt = document.createElement("span");
        amt.classList.add("amt");
        amt.innerText = `₹${dept.fees.feedetails[i]}`;
        totalfees += Number(dept.fees.feedetails[i]);

        feerow.appendChild(name);
        feerow.appendChild(amt);
        feestructure.appendChild(feerow);


    }
    const total = document.querySelector(".netpayableamt");
    total.innerText = `₹${totalfees}`;

}
let paymentmethod = "Card";

const paymentmode = document.querySelector(".payment-modes");
if (paymentmode) {
    paymentmode.addEventListener("click", (e) => {
        {
            const pym = document.querySelectorAll(".pm-btn");
            pym.forEach((t) => {
                t.classList.remove("sel")
            })
            paymentmethod = e.target.closest("div").id;
            e.target.closest("div").classList.add("sel");
            payfee();

        }
    })
}

function payfee() {
    if (!document.querySelector(".payment-form")) return;
    if (paymentmethod == "Card") {
        document.querySelector("#Cardpay").style.display = "block";
        document.querySelector("#UPIpay").style.display = "none";
        document.querySelector("#NetBankingpay").style.display = "none";
    } else if (paymentmethod == "UPI") {
        document.querySelector("#Cardpay").style.display = "none";
        document.querySelector("#UPIpay").style.display = "block";
        document.querySelector("#NetBankingpay").style.display = "none";
    } else {
        document.querySelector("#Cardpay").style.display = "none";
        document.querySelector("#UPIpay").style.display = "none";
        document.querySelector("#NetBankingpay").style.display = "block";
    }

}
let paymentformdata = {};

function submitpayment() {
    if (!document.querySelector(".payment-form")) return;

    document.querySelector(".payment-form").addEventListener("submit", (e) => {
        e.preventDefault();


        transactionid = `TXN${new Date().getTime()}`;
        const form = new FormData(e.target.closest("form"));
        const feeamount = form.get("feeamount");
        paymentformdata.paymentmethod = paymentmethod;
        paymentformdata.amount = feeamount;
        paymentformdata["paid on"] = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
        dept.fees.feehistory[details.rollNo][currentSemester][transactionid] = paymentformdata;
        departments[details.department] = dept;
        localStorage.setItem("departments", JSON.stringify(departments));
        const feesuccessfull = document.querySelector(".feesucessfull");
        feesuccessfull.style.display = "block";
        setTimeout(function() {
            feesuccessfull.style.display = "none";

        }, 2000);
        e.target.closest("form").reset();
        showfeepaymenthistory();



    });
}

function showfeepaymenthistory() {
    const list = document.querySelector(".paymenthistory");

    if (!list) return;
    list.innerText = "";

    for (let i in dept.fees.feehistory[details.rollNo][currentSemester]) {

        const row = document.createElement("div");
        row.classList.add("receipt-row");

        const left = document.createElement("div");
        left.classList.add("receipt-left");

        const txn = document.createElement("span");
        txn.classList.add("receipt-name");
        txn.innerText = `Transaction ID: ${i}`;

        const date = document.createElement("span");
        date.classList.add("receipt-date");
        date.innerText = `Date: ${dept.fees.feehistory[details.rollNo][currentSemester][i]["paid on"]} · ${dept.fees.feehistory[details.rollNo][currentSemester][i].paymentmethod}`;

        left.appendChild(txn);
        left.appendChild(date);

        const right = document.createElement("div");
        right.classList.add("receipt-right");
        const amt = document.createElement("span");
        amt.classList.add("receipt-amt");
        amt.innerText = `₹${dept.fees.feehistory[details.rollNo][currentSemester][i].amount}`;

        right.appendChild(amt);

        row.appendChild(left);
        row.appendChild(right);
        list.appendChild(row);

    }
    updatedue();
    setText(".receipts", Object.keys(dept.fees.feehistory[details.rollNo][currentSemester]).length);
    setText(".lastdateofpayment", lastdateofpayment());

    function lastdateofpayment() {
        if (currentSemester % 2 == 0) {
            return "30th July";
        } else {
            return "31st December";
        }
    }

}

function updatedue() {
    totalfees = 0;
    paidfees = 0;
    for (let i in dept.fees.feedetails) {
        totalfees += Number(dept.fees.feedetails[i]);
    }
    for (let i in dept.fees.feehistory[details.rollNo][currentSemester]) {
        paidfees += Number(dept.fees.feehistory[details.rollNo][currentSemester][i].amount);
    }
    setText(".feesPaid", `₹${paidfees}`);
    setText(".feePending", `₹${totalfees - paidfees}`);
    const myInput = document.querySelectorAll("input[name='feeamount']");
    if (myInput) {
        myInput.forEach(input => input.max = totalfees - paidfees);
    }
    return totalfees - paidfees;
}

function editdetails() {
    if (!document.querySelector("#edit-details")) return;
    const inputs = document.querySelector("#edit-details");
    inputs.email.value = details.PersonalEmail;
    inputs.contact.value = details.PersonalContact;
    inputs.address.value = details.PermanentAddress;

    document.querySelector("#edit-details").addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.target.closest("form"));
        details.PersonalEmail = form.get("email");
        details.PersonalContact = form.get("contact");
        details.PermanentAddress = form.get("address");
        setText(".PersonalEmail", details.PersonalEmail);
        setText(".PersonalContact", details.PersonalContact);
        setText(".PermanentAddress", details.PermanentAddress);
        users[details.rollNo] = details;
        localStorage.setItem("users", JSON.stringify(users));
        const detailssuccessfull = document.querySelector(".detailssucessfull");
        detailssuccessfull.style.display = "block";
        setTimeout(function() {
            detailssuccessfull.style.display = "none";
            e.target.closest("form").reset();
        }, 2000);

    });
}

function changepassword() {
    if (!document.querySelector("#change-password-form")) return;
    document.querySelector("#change-password-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.target.closest("form"));
        const current = form.get("current-password");
        const newpass = form.get("new-password");
        const confirmpass = form.get("confirm-password");
        if (current != details.password) {
            const passwordfail = document.querySelector(".passwordfail");
            passwordfail.style.display = "block";
            setTimeout(function() {
                passwordfail.style.display = "none";

            }, 2000)

            return;
        }
        if (newpass != confirmpass) {
            const confirm = document.querySelector(".confirmmismatch");
            confirm.style.display = "block";
            setTimeout(function() {
                confirm.style.display = "none";
                e.target.closest("form").reset();
            }, 2000);
            return;
        }
        details.password = newpass;
        users[details.rollNo] = details;
        localStorage.setItem("users", JSON.stringify(users));
        const passwordsuccess = document.querySelector(".passwordsuccess");
        passwordsuccess.style.display = "block";
        setTimeout(function() {
            passwordsuccess.style.display = "none";

        }, 2000)
        showleaves()
        logout();
    });
}
let messday;

function hostelinfo() {
    setText(".hostelname", details.hostel);
    setText(".roomno", details.RoomNo);
    setText(".Roomtype", hostels[details.hostel].RoomsTypes);
    setText(".warden", hostels[details.hostel].warden);
    setText(".MessPlan", details.Messplan);
    setText(".wardencontact", hostels[details.hostel].contact);
    setText(".timings", hostels[details.hostel].Timigs);
    setText(".allotmentdate", details.HostelAllotment);

    const noticelist = document.querySelector(".notice-list");
    if (noticelist) {
        noticelist.innerHTML = "";
        for (let i in hostels.Notices) {
            const notice = document.createElement("div");
            notice.classList.add("notice-item");
            const dot = document.createElement("span");
            dot.classList.add("notice-dot");
            dot.classList.add(`notice-dot-${Math.ceil(Math.random() * 4)}`);
            const con = document.createElement("div");
            const title = document.createElement("p");
            title.classList.add("notice-title");
            title.innerText = i;

            const desc = document.createElement("p");
            desc.classList.add("notice-desc");
            desc.innerText = hostels.Notices[i];

            con.appendChild(title);
            con.appendChild(desc);
            notice.appendChild(dot);
            notice.appendChild(con);
            noticelist.appendChild(notice);
        }
    }
    const facilitygrid = document.querySelector(".facility-grid");
    if (facilitygrid) {
        facilitygrid.innerHTML = "";
        for (let i in hostels[details.hostel].Facilities) {
            const facility = document.createElement("div");
            facility.classList.add("facility-item");
            const group = document.createElement("div");
            const name = document.createElement("div");
            name.innerText = i;
            name.style.fontWeight = "800";
            name.style.fontSize = "1rem";

            const desc = document.createElement("div");
            desc.innerText = hostels[details.hostel].Facilities[i];
            desc.style.color = "var(--success)";
            group.appendChild(name);
            group.appendChild(desc);
            facility.appendChild(group);
            facilitygrid.appendChild(facility);
        }
    }
    const messdaytabs = document.querySelector(".mess-day-tabs");
    if (!messdaytabs) return;
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    messday = dayNames[now.getDay()];
    document.querySelectorAll(".mess-tab").forEach(tab => {
        if (tab.innerText == messday) {
            tab.classList.add("active");
        }
    });
    loadMessMenu(messday);
    messdaytabs.addEventListener("click", (e) => {
        document.querySelectorAll(".mess-tab").forEach(tab => tab.classList.remove("active"));
        e.target.classList.add("active");
        messday = e.target.innerText;
        loadMessMenu(messday);
    });

}

function loadMessMenu(day) {
    const mealcards = document.querySelector(".meal-cards");
    if (!mealcards) {

        return;
    }
    mealcards.innerHTML = "";
    for (let k in hostels.MessMenu[day]) {
        const mealcard = document.createElement("div");
        mealcard.classList.add("meal-card");




        const mealname = document.createElement("div");
        mealname.classList.add("meal-name");
        mealname.innerText = `${k}`;

        const mealitems = document.createElement("div");
        mealitems.classList.add("meal-items");
        for (let i in hostels.MessMenu[day][k]) {
            for (let j of hostels.MessMenu[day][k][i]) {
                const item = document.createElement("div");
                item.classList.add("meal-item");
                item.innerHTML = `<span class="${i}-tag"></span>${j}`;
                mealitems.appendChild(item);
            }
        }

        mealcard.appendChild(mealname);
        mealcard.appendChild(mealitems);

        mealcards.appendChild(mealcard);
    }
}


function loadalerts() {
    const filterow = document.querySelector(".filter-row");
    if (!filterow) return;
    let filter = "All";
    showalerts(filter);
    filterow.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            const filter = e.target.innerText;
            showalerts(filter);
        }

    });

    function showalerts(filter) {
        const alertlist = document.querySelector(".notif-list");
        if (!alertlist) return;
        alertlist.innerHTML = "";
        if (filter == "All") {
            for (let i in dept.Notifications) {

                for (let j in dept.Notifications[i]) {
                    const card = document.createElement("div");
                    card.classList.add("notif-card");

                    const body = document.createElement("div");
                    body.classList.add("notif-body");
                    const title = document.createElement("div");
                    title.classList.add("notif-title");
                    title.innerText = [j];

                    const desc = document.createElement("div");
                    desc.classList.add("notif-desc");
                    desc.innerText = dept.Notifications[i][j];

                    const meta = document.createElement("div");
                    meta.classList.add("notif-meta");
                    meta.innerText = `Category: ${i}`;

                    body.appendChild(title);
                    body.appendChild(desc);
                    body.appendChild(meta);
                    card.appendChild(body);
                    alertlist.appendChild(card);
                }
            }
        }
        else {
            for (let i in dept.Notifications[filter]) {
                const card = document.createElement("div");
                card.classList.add("notif-card");

                const body = document.createElement("div");
                body.classList.add("notif-body");
                const title = document.createElement("div");
                title.classList.add("notif-title");
                title.innerText = [i];

                const desc = document.createElement("div");
                desc.classList.add("notif-desc");
                desc.innerText = dept.Notifications[filter][i];

                const meta = document.createElement("div");
                meta.classList.add("notif-meta");
                meta.innerText = `Category: ${filter}`;

                body.appendChild(title);
                body.appendChild(desc);
                body.appendChild(meta);
                card.appendChild(body);
                alertlist.appendChild(card);
            }
        }
    }
}

function supportpage() {
    const contactgrid = document.querySelector(".contact-grid");
    if (contactgrid) {
        contactgrid.innerHTML = "";
        for (let i in dept.KeyContacts) {

            const card = document.createElement("div");
            card.classList.add("contact-card");

            const dep = document.createElement("div");
            dep.classList.add("cc-dept");
            dep.innerText = i;

            const name = document.createElement("div");
            name.classList.add("cc-name");
            name.innerText = dept.KeyContacts[i].Name;

            const info = document.createElement("div");
            info.classList.add("cc-info");
            info.innerHTML = ` ${dept.KeyContacts[i].Position}<br>
            ${dept.KeyContacts[i].Email}<br> ${dept.KeyContacts[i].Contact}`;

            card.appendChild(dep);
            card.appendChild(name);
            card.appendChild(info);
            contactgrid.appendChild(card);
        }
    }
    const faqlist = document.querySelector(".faq-list");
    if (faqlist) {
        faqlist.innerHTML = "";
        for (let i in dept.FAQs) {
            const item = document.createElement("div");
            item.classList.add("faq-item");

            const q = document.createElement("div");
            q.classList.add("faq-q");
            q.innerText = i;

            const a = document.createElement("div");
            a.classList.add("faq-a");
            a.innerText = dept.FAQs[i];

            item.appendChild(q);
            item.appendChild(a);
            faqlist.appendChild(item);
        }
    }
}

function ticketform() {
    if (!document.querySelector("#ticket-form")) return;
    showtickethistory();
    document.querySelector("#ticket-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.target.closest("form"));
        const formdata = Object.fromEntries(form.entries());
        formdata["Priority"] = ((formdata.Priority).split(" "))[0];
        formdata.Status = "Open";
        formdata.Submitted = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
        const ticketid = `TICK${new Date().getTime()}`;
        details.myTickets[ticketid] = formdata;
        users[details.rollNo] = details;
        localStorage.setItem("users", JSON.stringify(users));
        const submitticket = document.querySelector(".submitticket");
        submitticket.style.display = "block";
        setTimeout(function() {
            submitticket.style.display = "none";

        }, 2000)
        e.target.closest("form").reset();
        showtickethistory();
    });

    function showtickethistory() {
        const ticketlist = document.querySelector(".ticket-list");
        if (ticketlist) {
            ticketlist.innerHTML = "";
            // Load and display ticket history here
            for (let i in details.myTickets) {
                const ticket = document.createElement("div");
                ticket.classList.add("ticket-item");

                const left = document.createElement("div");
                left.classList.add("ticket-left");

                const id = document.createElement("div");
                id.classList.add("ticket-id");
                id.innerText = i;

                const title = document.createElement("div");
                title.classList.add("ticket-title");
                title.innerText = details.myTickets[i].Title;

                const desc = document.createElement("div");
                desc.classList.add("ticket-desc");
                desc.innerText = details.myTickets[i].Description;

                const meta = document.createElement("div");
                meta.classList.add("ticket-meta");
                meta.innerHTML = `<span>${details.myTickets[i].Category}</span> <span>Submitted on: ${details.myTickets[i].Submitted}</span>`;

                left.appendChild(id);
                left.appendChild(title);
                left.appendChild(desc);
                left.appendChild(meta);

                const right = document.createElement("div");
                right.classList.add("ticket-right");
                const status = document.createElement("span");
                status.classList.add("chip", `chip-${details.myTickets[i].Status.toLowerCase()}`);
                status.innerText = details.myTickets[i].Status;
                const priority = document.createElement("span");
                priority.classList.add("chip", `chip-${details.myTickets[i].Priority.toLowerCase()}`);
                priority.innerText = details.myTickets[i].Priority;

                right.appendChild(status);
                right.appendChild(priority);

                ticket.appendChild(left);
                ticket.appendChild(right);
                ticketlist.appendChild(ticket);
            }

        }
    }
}

function showannouncements() {
    if (!document.querySelector(".notification-list")) return;
    const notiflist = document.querySelector(".notification-list");

    notiflist.innerHTML = "";
    for (let i in dept.Notifications) {
        for (let j in dept.Notifications[i]) {
            const announceitem = document.createElement("div");
            announceitem.classList.add("announce-item");

            const dot = document.createElement("span");
            dot.classList.add("a-dot");
            dot.classList.add(`${selectperiodcolor(Math.ceil(Math.random() * 6))}`);

            const body = document.createElement("div");
            const head = document.createElement("div");
            head.classList.add("a-head");
            head.innerText = j;

            const meta = document.createElement("div");
            meta.classList.add("a-meta");
            meta.innerHTML = `Category: ${i} | ${dept.Notifications[i][j].substring(0, 40)}...`;

            body.appendChild(head);
            body.appendChild(meta);
            announceitem.appendChild(dot);
            announceitem.appendChild(body);
            notiflist.appendChild(announceitem);
        }
    }
    notiflist.addEventListener("click", (e) => {

        window.location.href = "notifications.html";

    });
}

function showofpendingleaves(dept, roll) {
    return `
    <table>
    <thead>
    <tr>
    <th>Leave ID</th>
    <th>Type</th>
<th>From</th>
<th>To</th>
<th>Days</th>
<th>Reason</th>
<th>Applied On</th>
<th>Status</th>
    </tr>
    </thead>
    <tbody>
    ${(() => {
            let temp = '';
            for (let i in departments[dept].leaves[roll]) {

                const row = `<tr>
            <td>${i}</td>
            <td>${departments[dept].leaves[roll][i].type}</td>
            <td>${departments[dept].leaves[roll][i].from}</td>
            <td>${departments[dept].leaves[roll][i].to}</td>
            <td>${(() => {
                        const d1 = new Date(departments[dept].leaves[roll][i].from);
                        const d2 = new Date(departments[dept].leaves[roll][i].to);
                        return ((d2 - d1) / (1000 * 60 * 60 * 24) + 1);
                    })()}</td>
            <td>${departments[dept].leaves[roll][i].reason}</td>
            <td>${departments[dept].leaves[roll][i].applytime}</td>
            <td><select onChange="updateleavestatus(this.value,'${dept}','${roll}','${i}')">
                <option value="pending" ${departments[dept].leaves[roll][i].approvestatus == 'pending' ? 'selected' : ''}>Pending</option>
                <option value="approved" ${departments[dept].leaves[roll][i].approvestatus == 'approved' ? 'selected' : ''}>Approved</option>
                <option value="rejected" ${departments[dept].leaves[roll][i].approvestatus == 'rejected' ? 'selected' : ''}>Rejected</option>
            </select></td>
            </tr>`;


                temp += row;

            }

            return temp;
        })()}
    </tbody>
    </table>
    `;


}
function updateleavestatus(status, dept, roll, i) {
    departments[dept].leaves[roll][i].approvestatus = status;
    localStorage.setItem("departments", JSON.stringify(departments));
    const d1 = new Date(departments[dept].leaves[roll][i].from);
    const d2 = new Date(departments[dept].leaves[roll][i].to);
    const days = ((d2 - d1) / (1000 * 60 * 60 * 24) + 1);
    for (let i = 1; i <= days; i++) {
        const date = new Date(d1.getTime() + (i - 1) * (1000 * 60 * 60 * 24));
        const dateString = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;

        if (!attendance[dateString]) {
            attendance[dateString] = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };
        }
        for (let j in attendance[dateString]) {

            if (status == "approved") {
                attendance[dateString][j][roll] = "L";
            }
            else {
                attendance[dateString][j][roll] = "A";
            }

        }
        localStorage.setItem("attendance", JSON.stringify(attendance));
    }
}
function appliedleaves() {
    const body = document.querySelector(".leaverequestbody");
    if (body) {
        body.innerHTML = "";

        for (let i in departments) {

            for (let j in departments[i].leaves) {

                if (Object.keys(departments[i].leaves[j]).length > 0) {

                    body.innerHTML += `
                <tr class="studentrow">
                <td>${users[j].firstName} ${users[j].lastName}</td>
                <td>${i}</td>
                <td>${j}</td>
                </tr>
                <tr style="display: none;" class="studentleaverow">
                <td colspan="3">
                ${showofpendingleaves(i, j)}
                </td>
                </tr>
                    `;

                }
            }
        }
        body.addEventListener("click", (e) => {
            if (e.target.closest(".studentrow")) {
                document.querySelectorAll(".studentleaverow").forEach(row => row.style.display = "none");
                (e.target.closest(".studentrow").nextElementSibling).style.display = "table-row";
            }

        });
    }
}
function getAttendance() {
    const form = document.querySelector("#attendanceform");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const formdata = new FormData(e.target.closest("form"));
            let [year,month,day] = formdata.get("date").split("-");
            const lec = formdata.get("lecture");
            if(!lec || !day || !month || !year){

            } ;

            
            const date = `${(String(day).padStart(2, '0'))}-${String(month).padStart(2, '0')}-${year}`;
            if(!attendance[date]){
                attendance[date] = {1:{},2:{},3:{},4:{},5:{},6:{}};
            }
            const body = document.querySelector(".attendanceofstudents");
            const now = new Date(form.date.value);
            
            if(now.getDay() == 0 || now.getDay() == 6){
                body.innerHTML="<tr><td colspan='5'>No Lecture on weekends</td></tr>";
                
            }
             else if(!lec || !day || !month || !year){
                body.innerHTML="<tr><td colspan='5'>Please fill in all the fields</td></tr>";
            }
            else{
                const now = new Date(form.date.value);
                const week = ["","MON","TUE","WED","THU","FRI",""];
                
            body.innerHTML = "";
            for(let i in users){
                if(users[i].role == "student"){
                    
                    const sem = (Number(now.getFullYear())-Number(users[i].enrollmentYear))*2;
                    if (month>6) sem++;
                   
                    body.innerHTML += `
                    <tr>
                    <td>${users[i].firstName} ${users[i].lastName}</td>
                    <td>${users[i].department}</td>
                    <td>${users[i].rollNo}</td>
                    <td>${departments[users[i].department].subjects[sem][departments[users[i].department].timetable[sem][week[now.getDay()]][lec]].name}</td>
                    
                    <td><select onChange="updateAttendance(this.value,'${date}','${lec}',${i})">
                        <option value="">Select Status</option>
                        <option value="L" ${attendance[date][lec]?.[i] === "L" ? "selected" : ""}>Leave</option>
                        <option value="P" ${attendance[date][lec]?.[i] === "P" ? "selected" : ""}>Present</option>
                        <option value="A" ${attendance[date][lec]?.[i] === "A" ? "selected" : ""}>Absent</option>
                    </select></td>
                    </tr>`;
                }
            }
        }
    });
    }
}
function updateAttendance(status,date,lec,i){
    if(!attendance[date]){
        attendance[date] = {1:{},2:{},3:{},4:{},5:{},6:{}};
    }
    if(status == ""){
        delete attendance[date][lec][i];
    }
    else {
    attendance[date][lec][i] = status;
    }
    localStorage.setItem("attendance", JSON.stringify(attendance));
}
if (role == "student") {

    calcSemester();

    loadStudentInfo();
    showannouncements();

    createSemesterTabs();

    selectAttendanceCalendar();

    loadtimetable();
    loadDailytable();
    faculty();

    leaveapply();
    showleaves();
    calcleaves();

    feesbreakdown();
    payfee();
    submitpayment();
    showfeepaymenthistory();
    updatedue();

    editdetails();
    changepassword();

    hostelinfo();



    loadalerts();

    supportpage();
    ticketform();
}
if (role == "admin") {
    appliedleaves();
    getAttendance();
}