


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


const users = JSON.parse(localStorage.getItem("users")) || {};
const departments = JSON.parse(localStorage.getItem("departments")) || {};
const results = JSON.parse(localStorage.getItem("results")) || {};
const attendance = JSON.parse(localStorage.getItem("attendance")) || {};

const user_ID = localStorage.getItem("user_ID");
const details = users[user_ID];
const dept = departments[details.department];
const lastlogin = localStorage.getItem("LastLogin");

let studentactive = true;
let currentSemester = 0;
let currentYear = 0;
let selectedsemester = 0;


const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function setText(selector, value) {
    $$(selector).forEach(el => el.innerText = value);
}
if ($(".chgmonthbtn")) {
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
const leaveform = $("#leaveapplication");

if (leaveform) {
    const datefrom = $("#l-from");
    const dateto = $("#l-to");
    datefrom.addEventListener("change", (e) => {
        e.preventDefault();
        dateto.setAttribute('min', datefrom.value);
    });
    leaveform.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(leaveform);

        leaveformdata = Object.fromEntries(form.entries());
        leaveselect();

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
    if (hour < 21) return "Evening";
    return "Night";
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

        $$(".Statuscolor").forEach(el => {
            el.style.backgroundColor = "rgba(255,0,0,.15)";
            el.style.borderColor = "rgba(240,63,63,.5)";
        });
    } else {
        setText(".currentStatus", "ACTIVE");
    }
}


function createSemesterTabs() {
    const container = $("#semester-tabs");
    if (!container) return;

    for (let i = 1; i <= currentSemester; i++) {
        const tab = document.createElement("a");
        tab.className = "sem-tab";
        tab.dataset.sem = i;

        tab.innerText = i === currentSemester
            ? `(Ongoing) Semester ${i}`
            : `Semester ${i}`;

        if (i === currentSemester) {
            tab.classList.add("active");
            selectedsemester = i;
            showResult();
        }

        container.appendChild(tab);
    }

    container.addEventListener("click", e => {
        if (!e.target.classList.contains("sem-tab")) return;

        $$(".sem-tab").forEach(tab => tab.classList.remove("active"));
        e.target.classList.add("active");

        selectedsemester = Number(e.target.dataset.sem);
        showResult();
    });
}


function showResult() {
    const semData = results[details.rollNo][selectedsemester];
    const subjects = dept.subjects[selectedsemester];

    $("#fullresult").style.display =
        selectedsemester < currentSemester ? "grid" : "none";

    setText(".selectedSemester", selectedsemester);

    const subjecttable = $("#subjecttable");
    const internalresult = $("#Internalresult");

    subjecttable.innerHTML = "";
    internalresult.innerHTML = "";

    for (const key in subjects) {
        const sub = subjects[key];
        const res = semData[key];

        const extMO = Number(res.external.MO);
        const extMM = Number(res.external.MM);

        let intMO = 0, intMM = 0;

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
    for (i in dept.subjects[currentSemester]) {
        const [att, tot] = calculateattendedclass(i);
        totalatt = totalatt + att;
        totalclasses = totalclasses + tot;
    }

    setText(".totalclasses", totalclasses);
    setText(".attendedclasses", totalatt);
    setText(".missedclasses", totalclasses - totalatt);
    if (totalclasses == 0) { per = 0; }
    else per = ((totalatt / totalclasses) * 100);

    setText(".attpercentage", `${Math.floor(per)}%`);

}
function calculateattendedclass(subject) {

    let att = 0;
    let total = 0
    for (i in attendance[details.department][currentSemester]) {
        const [d, m, y] = i.split('-');
        const date = new Date(y, m - 1, d);
        const weekdays = [
            "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
        ]
        const weekday = weekdays[date.getDay()];
        for (j in dept.timetable[currentSemester][weekday]) {
            if (subject == dept.timetable[currentSemester][weekday][j]) {
                total++;
                if (attendance[details.department][currentSemester][i][j][details.rollNo] == "P" || attendance[details.department][currentSemester][i][details.rollNo] == "L") {
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
    for (i in dept.subjects[currentSemester]) {
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
        $$(".att-subject-row").forEach(line => line.classList.remove("active"));


        e.target.closest("tr").classList.add("active");
        calsubid = e.target.closest("tr").id;

        loadAttendanceCalendar(calsubid, Calmonth, Calyear);

    });
}


function loadAttendanceCalendar(subjid, month, year) {
    if (subjid == null) return;

    const wrap = document.querySelector(".calendar-grid");
    if (!wrap) return;
    const body = $("body");







    const deptName = details.department;
    const sem = String(currentSemester);
    const roll = details.rollNo;

    wrap.innerHTML = "";

    const heads = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    heads.forEach(day => {
        wrap.innerHTML += `<div class="cal-day-head">${day}</div>`;
    });



    if (
        !attendance[deptName] ||
        !attendance[deptName][sem]
    ) return;







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

        const dayData = attendance[deptName][sem][fullDate];

        if (dayData) {

            let found = false;
            let absent = false;
            let leave = false;
            let week = new Date(year, month, day);
            let weekday = weekdaytext(week.getDay());

            if (dept.timetable[currentSemester][weekday]) {
                for (sub in dept.timetable[currentSemester][weekday]) {

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
    const weeklytimetable = $(".weekly-view");
    if (!weeklytimetable) return;
    const table = document.createElement("table");
    table.classList.add("weekly-table");


    const tableheading = document.createElement("thead");
    const tableheadingrow = document.createElement("tr");
    tableheading.appendChild(tableheadingrow);
    const periodheading = document.createElement("th");
    periodheading.innerText = "Period";
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
        period.innerText = `${i} Period`;
        tbodyrow.appendChild(period);
        for (j in dept.timetable[currentSemester]) {
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

    const table = $(".timetable-grid");
    table.innerText = "";
    for (i in dept.timetable[currentSemester][day]) {
        const row = document.createElement("div");
        row.classList.add("tt-row");

        const time = document.createElement("div");
        time.classList.add("tt-time");
        time.innerText = `Period ${i}`;
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
    const daytabs = $(".day-tabs");
    if (!daytabs) return;
    const tab = $$(".day-tab");

    if (tab[weekday - 1]) {
        tab[weekday - 1].classList.add("active", "today-tab");
        DailyTable(tab[weekday - 1].innerText);

    }
    else {
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
    const facultylist = $(".faculty-list");
    if (!facultylist) return;
    for (i in dept.subjects[currentSemester]) {
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
    const leavetyperow = $(".leave-type-row");
    if (!leavetyperow) return;
    const leavetypebtns = $$(".leave-type-btn");


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
    showleaves()
}
function showleaves() {
    const list = $("#leavehistory");
    if (!list) return;
    list.innerText = "";
    for (i in dept.leaves[details.rollNo]) {


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
    for (i in dept.leaves[details.rollNo]) {

        if (dept.leaves[details.rollNo][i].approvestatus == "pending") {
            pdl++;
        }
        if (dept.leaves[details.rollNo][i].approvestatus == "approve") {
            apl++;
        }
    }
    setText(".approvedleaves", apl);
    setText(".pendingleaves", pdl);
}
function feesbreakdown() {
    const feestructure = $(".feestructure");
    if (!feestructure) return;
    let totalfees = 0;
    feestructure.innerHTML = "";
    for (i in dept.fees.feedetails) {
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
    const total = $(".netpayableamt");
    total.innerText = `₹${totalfees}`;

}
let paymentmethod = "Card";

const paymentmode = $(".payment-modes");
if(paymentmode){
paymentmode.addEventListener("click", (e) => {
    {
        const pym = $$(".pm-btn");
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
    if(!$(".payment-form")) return;
    if (paymentmethod == "Card") {
        $("#Cardpay").style.display = "block";
        $("#UPIpay").style.display = "none";
        $("#NetBankingpay").style.display = "none";
    }
    else if (paymentmethod == "UPI") {
        $("#Cardpay").style.display = "none";
        $("#UPIpay").style.display = "block";
        $("#NetBankingpay").style.display = "none";
    }
    else {
        $("#Cardpay").style.display = "none";
        $("#UPIpay").style.display = "none";
        $("#NetBankingpay").style.display = "block";
    }
}
let paymentformdata={};
function submitpayment() {
    if(!$(".payment-form")) return;

    $(".payment-form").addEventListener("submit", (e) => {
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
        showfeepaymenthistory();
        
        
    });
}
function showfeepaymenthistory() {
    const list = $(".paymenthistory");
   
    if(!list) return;
    list.innerText = "";
    
    for(i in dept.fees.feehistory[details.rollNo][currentSemester]){

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
}

function updatedue(){
    totalfees = 0;
    paidfees = 0;
    for (i in dept.fees.feedetails) {
        totalfees += Number(dept.fees.feedetails[i]);
    }
    for(i in dept.fees.feehistory[details.rollNo][currentSemester]){
        paidfees += Number(dept.fees.feehistory[details.rollNo][currentSemester][i].amount);
    }
    setText(".feesPaid", `₹${paidfees}`);
    setText(".feePending", `₹${totalfees-paidfees}`);
    const myInput = document.querySelector("input[name='feeamount']");
    myInput.max = totalfees - paidfees;
    return totalfees - paidfees;    
}



calcSemester();
loadStudentInfo();

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

