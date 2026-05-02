
const departments = {
  "CSE AI & ML": {
    departmentname: "CSE AI & ML",
    duration: "4",
    block: "Martin Block",
    Advisor: "Dr. Ramesh Kumar Meena",
    subjects: {
      '1': {
        S1: { name: "Python Fundamentals", credit: "5", teacher: "Mrs. Deepali" },
        S2: { name: "Introduction to Web Development", credit: "3", teacher: "Mrs Divyanshi" },
        S3: { name: "Digital Electronic and Computer Architecture", credit: "3", teacher: "Mr Tejraj" },
        S4: { name: "Linear Algebra and Calculus", credit: "4", teacher: "Mr Mohit Dhuria" },
        S5: { name: "Foundation of Computer Science", credit: "3", teacher: "Mrs Ramesh Kumar Meena" },
        S6: { name: "Introduction to Artificial Intelligence", creidt: "3", teacher: "Mr Mukund Kumar Jha" },

      },
      '2': {
        S7: { name: "Fundamentals of C Programming", credit: "4", teacher: "Mr Anuj" },
        S8: { name: "Front End Engineering", credit: "3", teacher: "Mr Divyash Sharma" },
        S9: { name: "Discrete Mathematics", credit: "2", teacher: "Mr Gurpreet" },
        S10: { name: "Operating System and Linux Fundamentals", credit: "3", teacher: "Mr Aakash Kumar" },
        S11: { name: "Fundamentals of AI Algorithms", credit: "4", teacher: "Mr Prabhjot Singh Manocha" },
      },
      '3' : {
        S12: { name: "Data Structures and Algorithm", credit: "4", teacher: "Mrs Fatima" },
        S13: { name: "Database Management System", credit: "3", teacher: "Mr Abhinav Tyagi" },
        S14: { name: "Computer Networks", credit: "3", teacher: "Mr Lokesh Sharma " },
        S15: { name: "Software Engineering", credit: "3", teacher: "Mr Ashutosh Singh" },
        S16: { name: "AI and Machine Learning Lab", credit: "4", teacher: "Mr Naveen Patel" },
      },
      '4' : {
        S17: { name: "Data Science and Visualization", credit: "4", teacher: "Mrs Anjali" },
        S18: { name: "Cloud Computing", credit: "3", teacher: "Mr Satyam Samrat" },
        S19: { name: "Cyber Security", credit: "3", teacher: "Mr Kuldeep Billa" },
        S20: { name: "AI Ethics and Society", credit: "2", teacher: "Mrs Taifa Ayoub Mir" },
        S21: { name: "AI Capstone Project", credit: "4", teacher: "Mr Duleep Singh" },
      },
      '5' : {
        S22: { name: "Natural Language Processing", credit: "4", teacher: "Mrs Ritu" },
        S23: { name: "Computer Vision", credit: "4", teacher: "Mr Ankit Kumar" },
        S24: { name: "Reinforcement Learning", credit: "3", teacher: "Mr Satyarth" },
        S25: { name: "AI in Healthcare", credit: "3", teacher: "Mrs Anushka" },
        S26: { name: "AI Research Methodology", credit: "3", teacher: "Mr Prateek Jain" },
      },
      '6' : {
        S27: { name: "Deep Learning", credit: "4", teacher: "Mr Anubhav" },
        S28: { name: "AI in Finance", credit: "3", teacher: "Mr Anshul" },
        S29: { name: "AI in Robotics", credit: "3", teacher: "Mr Raghav" },
        S30: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mrs Sambhavi" },
        S31: { name: "AI in Computer Vision", credit: "4", teacher: "Mr Arjun" },
      },
      '7' : {
        S32: { name: "AI in Autonomous Systems", credit: "4", teacher: "Mr Pulkit Sooryavanshi" },
        S33: { name: "AI in Gaming", credit: "3", teacher: "Mr Tarandeep Singh" },
        S34: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mr Vaibhav Kaushal" },
        S35: { name: "AI in Computer Vision", credit: "4", teacher: "Mr Aman Kumar" },
        S36: { name: "AI Capstone Project II", credit: "4", teacher: "Mr Darshan Arora" },
      },
      '7': {
        S37: { name: "AI in Autonomous Systems", credit: "4", teacher: "Ms Tanya" },
        S38: { name: "AI in Gaming", credit: "3", teacher: "Mr Bhushan Jadhav" },
        S39: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mr Sooraj Limbachiya" },
        S40: { name: "AI in Computer Vision", credit: "4", teacher: "Mrs Taran Kaur" },
        S41: { name: "AI Capstone Project III", credit: "4", teacher: "Mr Vishal Gupta" },
      },
      '8': {
        S42: { name: "AI in Autonomous Systems", credit: "4", teacher: "Mr Ankit Narwal" },
        S43: { name: "AI in Gaming", credit: "3", teacher: "Mr Vikas Rajana" }, 
        S44: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mr Ashok Dinda" },
        S45: { name: "AI in Computer Vision", credit: "4", teacher: "Ms Gargi" },
        S46: { name: "AI Capstone Project I", credit: "4", teacher: "Mr Kulbhushan Chaddha" },
      },
    },
    "timetable": {
    "1":{
  
      "MON": { "1": "S1", "2": "S2", "3": "S3", "4": "S5", "5": "S6", "6": "S4" },
      "TUE": { "1": "S3", "2": "S5", "3": "S4", "4": "S2", "5": "S1", "6": "S6" },
      "WED": { "1": "S6", "2": "S6", "3": "S4", "4": "S2", "5": "S3", "6": "S1" },
      "THU": { "1": "S1", "2": "S2", "3": "S4", "4": "S4", "5": "S2", "6": "S5" },
      "FRI": { "1": "S3", "2": "S4", "3": "S4", "4": "S2", "5": "S5", "6": "S5" },

    },
      "2":{
      "MON": { "1": "S10", "2": "S10", "3": "S9", "4": "S9", "5": "S7", "6": "S7" },
      "TUE": { "1": "S8", "2": "S8", "3": "S7", "4": "S7", "5": "S11", "6": "S11" },
      "WED": { "1": "S10", "2": "S10", "3": "S9", "4": "S9", "5": "S7", "6": "S7" },
      "THU": { "1": "S8", "2": "S8", "3": "S7", "4": "S7", "5": "S11", "6": "S11" },
      "FRI": { "1": "S10", "2": "S10", "3": "S8", "4": "S8", "5": "S7", "6": "S7" },
    },
        "3":{
      
      "MON": { "1": "S13", "2": "S14", "3": "S12", "4": "S12", "5": "S16", "6": "S16" },
      "TUE": { "1": "S12", "2": "S12", "3": "S14", "4": "S14", "5": "S13", "6": "S13" },
      "WED": { "1": "S12", "2": "S12", "3": "S14", "4": "S14", "5": "S15", "6": "S15" },
      "THU": { "1": "S13", "2": "S13", "3": "S16", "4": "S16", "5": "S12", "6": "S12" },
      "FRI": { "1": "S14", "2": "S16", "3": "S16", "4": "S12", "5": "S15", "6": "S13" },
    },
  },
    "leaves": {
      "2510993660": {
        "LV20264414324733": {
          approvestatus: "pending",
          contact: "9354551403",
          doc: "",
          from: "2026-04-27",
          guardian: "Dilbag Singh",
          reason: "arm fracture",
          to: "2026-05-01",
          type: "casual",
          applytime: "30-4-2026",
        }
      }
    },
    "fees":{
      "feedetails":{
        "Academic Fees": "155000",
        "CAS Fees": "20000",
        "Hostel Fees":"46000",
        "Mess Fees":"30000",
        "Subscription Fees":"1500",
      },
      "feehistory":{
      "2510993660":{
      "2":{
        "TXN202643023495012":{
          "paid on":"12-04-2026",
          "paymentmethod":"UPI",
          "amount":"102450",
        },
      },
      }
    }
  }

  }

};

const users = {
  "2510993660": {
    user_ID: "2510993660",
    password: "1234",
    firstName: "Vishwas",
    lastName: "Mahiwal",
    rollNo: "2510993660",
    enrollmentYear: "2025",
    department: "CSE AI & ML",
    hostel:"Alfred Nobel",
    RoomNo:"205",
    DOB: "2007-08-15",
    Gender:"Male",
    Nationality:"Indian",
    BloodGroup:"B+",
    AdhaarNo:"1234 5678 9012",
    Category:"General",
    Religon:"Hindu",
    AdmissionType:"Jee Mains",
    PersonalEmail:"vishwas.mahiwal@example.com",
    PersonalContact:"8954231597",
    FatherName:"Dilbag Singh",
    FatherContact:"9856321245",
    FatherOccupation:"Businessman",
    MotherName:"Suman Singh",
    MotherContact:"9876543210",
    AnnualIncome:"10,00,000",
    EmercengyContact:"9876543210",
    PermanentAddress:"123, Green Street, Jaipur- 302001",
    currentAddress:"123, Green Street, Jaipur- 302001",


  }
};
const results = {
  "2510993660": {
    '1': {
      S1: {
        external: { MO: "50", MM: "70" },
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18", }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S2: {
        external: { MO: "50", MM: "70" },
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S3: {
        external: { MO: "50", MM: "70" },
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S4: {
        external: { MO: "50", MM: "70" },
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S5: {
        external: { MO: "50", MM: "70" },
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S6: {
        external: { MO: "50", MM: "70" },
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } },

      }
    },
    '2': {
      S7: {
        external: {},
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S8: {
        external: {},
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S9: {
        external: {},
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S10: {
        external: {},
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S11: {
        external: {},
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
    }

  },
  

};
const attendance = {
  "CSE AI & ML": {
    "2": {
      "31-03-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "A",
        },
        "4": {
          "2510993660": "A",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "01-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },

      },
      "02-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "A",
        },
        "4": {
          "2510993660": "A",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "03-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "06-04-2026": {
        "1": {
          "2510993660": "A",
        },
        "2": {
          "2510993660": "A",
        },
        "3": {
          "2510993660": "A",
        },
        "4": {
          "2510993660": "A",
        },
        "5": {
          "2510993660": "A",
        },
        "6": {
          "2510993660": "A",
        },
      },
      "07-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "08-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "09-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "10-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "13-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "14-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "A",
        },
        "6": {
          "2510993660": "A",
        },
      },
      "15-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "16-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "17-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "20-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "A",
        },
        "4": {
          "2510993660": "A",
        },
        "5": {
          "2510993660": "A",
        },
        "6": {
          "2510993660": "A",
        },
      },
      "21-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "22-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "23-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "24-04-2026": {
        "1": {
          "2510993660": "A",
        },
        "2": {
          "2510993660": "A",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "27-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "28-04-2026": {
        "1": {
          "2510993660": "A",
        },
        "2": {
          "2510993660": "A",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "A",
        },
        "6": {
          "2510993660": "A",
        },
      },
      "29-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "30-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "P",
        },
        "4": {
          "2510993660": "P",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "01-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "A",
        },
        "4": {
          "2510993660": "A",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      },
      "01-04-2026": {
        "1": {
          "2510993660": "P",
        },
        "2": {
          "2510993660": "P",
        },
        "3": {
          "2510993660": "A",
        },
        "4": {
          "2510993660": "A",
        },
        "5": {
          "2510993660": "P",
        },
        "6": {
          "2510993660": "P",
        },
      }

    }

  }
};



