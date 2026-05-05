
const departments = {
  "CSE AI & ML": {
    departmentname: "CSE AI & ML",
    duration: "4",
    block: "Martin Block",
    Advisor: "Dr. Ramesh Kumar Meena",
    Notifications: {
      Academic: {
        "Midterm Exams": "Midterm exams for all subjects will be held from 15th to 20th May. Please check the timetable for details.-10 May 2026",
      },
      Finance: {
        "Fee Payment Deadline": "The deadline for fee payment for the upcoming semester is 30th June. Please ensure to complete the payment to avoid late fees.-25 April 2026",
      },
      Events: {
        "Tech Talk": "Join us for an exciting tech talk on 'The Future of AI' by Dr. Anjali Sharma on 5th May at 3 PM in the Martin Block Auditorium.-28 April 2026",
      },
      General: {
        "Department Meeting": "There will be a department meeting on 12th May at 2 PM in the conference room. All students are encouraged to attend.-5 May 2026",
      },
    },
    KeyContacts: {
      "Academics": { Name: "Dr. Saravjeet Singh", Position: "Dean of Department", Email: "dr.saravjeet@college.edu", Contact: "9876553210" },
      "Hostel": { Name: "Mr. Bipin Jamwal", Position: "Chief Warden", Email: "mr.bipin@college.edu", Contact: "9876542210" },
      "Finance": { Name: "Ms. Anjali Sharma", Position: "Finance Officer", Email: "ms.anjali@college.edu", Contact: "9876548210" },
      "IT Support": { Name: "Mr. Raghav", Position: "IT Support Head", Email: "mr.raghav@college.edu", Contact: "8876549210" },
      "Health Center": { Name: "Dr. Priya", Position: "Chief Medical Officer", Email: "dr.priya@college.edu", Contact: "9876547210" },
      "Anti Ragging Cell": { Name: "Ms. Kavita", Position: "Anti Ragging Officer", Email: "ms.kavita@college.edu", Contact: "9876546210" },
    },
    FAQs: {
      "How to register for courses?": "You can register for courses through the student portal. Log in with your credentials, navigate to the 'Course Registration' section, and select your desired courses for the semester.",
      "What are the library timings?": "The library is open from 8 AM to 10 PM on weekdays and from 9 AM to 5 PM on weekends. It is closed on public holidays.",
      "How to apply for hostel accommodation?": "To apply for hostel accommodation, please fill out the hostel application form available on the student portal. Submit the form along with the required documents before the deadline.",
      "What is the procedure for applying for leave?": "To apply for leave, please fill out the leave application form available on the student portal. Submit the form along with the required documents before the deadline.",
      "Is there a student counseling service available?": "Yes, we have a student counseling service available. You can book an appointment with our counselors through the student portal or visit the counseling center located in the Martin Block.",
    },
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
      '3': {
        S12: { name: "Data Structures and Algorithm", credit: "4", teacher: "Mrs Fatima" },
        S13: { name: "Database Management System", credit: "3", teacher: "Mr Abhinav Tyagi" },
        S14: { name: "Computer Networks", credit: "3", teacher: "Mr Lokesh Sharma " },
        S15: { name: "Software Engineering", credit: "3", teacher: "Mr Ashutosh Singh" },
        S16: { name: "AI and Machine Learning Lab", credit: "4", teacher: "Mr Naveen Patel" },
      },
      '4': {
        S17: { name: "Data Science and Visualization", credit: "4", teacher: "Mrs Anjali" },
        S18: { name: "Cloud Computing", credit: "3", teacher: "Mr Satyam Samrat" },
        S19: { name: "Cyber Security", credit: "3", teacher: "Mr Kuldeep Billa" },
        S20: { name: "AI Ethics and Society", credit: "2", teacher: "Mrs Taifa Ayoub Mir" },
        S21: { name: "AI Capstone Project", credit: "4", teacher: "Mr Duleep Singh" },
      },
      '5': {
        S22: { name: "Natural Language Processing", credit: "4", teacher: "Mrs Ritu" },
        S23: { name: "Computer Vision", credit: "4", teacher: "Mr Ankit Kumar" },
        S24: { name: "Reinforcement Learning", credit: "3", teacher: "Mr Satyarth" },
        S25: { name: "AI in Healthcare", credit: "3", teacher: "Mrs Anushka" },
        S26: { name: "AI Research Methodology", credit: "3", teacher: "Mr Prateek Jain" },
      },
      '6': {
        S27: { name: "Deep Learning", credit: "4", teacher: "Mr Anubhav" },
        S28: { name: "AI in Finance", credit: "3", teacher: "Mr Anshul" },
        S29: { name: "AI in Robotics", credit: "3", teacher: "Mr Raghav" },
        S30: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mrs Sambhavi" },
        S31: { name: "AI in Computer Vision", credit: "4", teacher: "Mr Arjun" },
      },
      '7': {
        S32: { name: "AI in Autonomous Systems", credit: "4", teacher: "Mr Pulkit Sooryavanshi" },
        S33: { name: "AI in Gaming", credit: "3", teacher: "Mr Tarandeep Singh" },
        S34: { name: "AI in Natural Language Processing", credit: "4", teacher: "Mr Vaibhav Kaushal" },
        S35: { name: "AI in Computer Vision", credit: "4", teacher: "Mr Aman Kumar" },
        S36: { name: "AI Capstone Project I", credit: "4", teacher: "Mr Darshan Arora" },
      },

      '8': {
        S37: { name: "Java Programming", credit: "4", teacher: "Mr Ankit Narwal" },
        S38: { name: "Network Security", credit: "3", teacher: "Mr Vikas Rajana" },
        S39: { name: "AI Model Training", credit: "4", teacher: "Mr Ashok Dinda" },
        S40: { name: "AI in Analytics", credit: "4", teacher: "Ms Gargi" },
        S14: { name: "AI Capstone Project II", credit: "4", teacher: "Mr Kulbhushan Chaddha" },
      },
    },
    "timetable": {
      "1": {

        "MON": { "1": "S1", "2": "S2", "3": "S3", "4": "S5", "5": "S6", "6": "S4" },
        "TUE": { "1": "S3", "2": "S5", "3": "S4", "4": "S2", "5": "S1", "6": "S6" },
        "WED": { "1": "S6", "2": "S6", "3": "S4", "4": "S2", "5": "S3", "6": "S1" },
        "THU": { "1": "S1", "2": "S2", "3": "S4", "4": "S4", "5": "S2", "6": "S5" },
        "FRI": { "1": "S3", "2": "S4", "3": "S4", "4": "S2", "5": "S5", "6": "S5" },

      },
      "2": {
        "MON": { "1": "S10", "2": "S10", "3": "S9", "4": "S9", "5": "S7", "6": "S7" },
        "TUE": { "1": "S8", "2": "S8", "3": "S7", "4": "S7", "5": "S11", "6": "S11" },
        "WED": { "1": "S10", "2": "S10", "3": "S9", "4": "S9", "5": "S7", "6": "S7" },
        "THU": { "1": "S8", "2": "S8", "3": "S7", "4": "S7", "5": "S11", "6": "S11" },
        "FRI": { "1": "S10", "2": "S10", "3": "S8", "4": "S8", "5": "S7", "6": "S7" },
      },
      "3": {

        "MON": { "1": "S13", "2": "S14", "3": "S12", "4": "S12", "5": "S16", "6": "S16" },
        "TUE": { "1": "S12", "2": "S12", "3": "S14", "4": "S14", "5": "S13", "6": "S13" },
        "WED": { "1": "S12", "2": "S12", "3": "S14", "4": "S14", "5": "S15", "6": "S15" },
        "THU": { "1": "S13", "2": "S13", "3": "S16", "4": "S16", "5": "S12", "6": "S12" },
        "FRI": { "1": "S14", "2": "S16", "3": "S16", "4": "S12", "5": "S15", "6": "S13" },
      },
      "4": {
        "MON": { "1": "S17", "2": "S17", "3": "S19", "4": "S20", "5": "S21", "6": "S18" },
        "TUE": { "1": "S18", "2": "S18", "3": "S17", "4": "S17", "5": "S19", "6": "S19" },
        "WED": { "1": "S21", "2": "S21", "3": "S20", "4": "S20", "5": "S19", "6": "S20" },
        "THU": { "1": "S18", "2": "S18", "3": "S17", "4": "S17", "5": "S19", "6": "S19" },
        "FRI": { "1": "S17", "2": "S19", "3": "S20", "4": "S20", "5": "S21", "6": "S18" },
      },
      "5": {
        "MON": { "1": "S22", "2": "S22", "3": "S24", "4": "S25", "5": "S26", "6": "S23" },
        "TUE": { "1": "S23", "2": "S23", "3": "S22", "4": "S22", "5": "S24", "6": "S24" },
        "WED": { "1": "S26", "2": "S26", "3": "S25", "4": "S25", "5": "S24", "6": "S24" },
        "THU": { "1": "S23", "2": "S23", "3": "S22", "4": "S22", "5": "S24", "6": "S24" },
        "FRI": { "1": "S22", "2": "S21", "3": "S25", "4": "S25", "5": "S26", "6": "S23" },
      },
      "6": {
        "MON": { "1": "S27", "2": "S27", "3": "S29", "4": "S30", "5": "S31", "6": "S28" },
        "TUE": { "1": "S28", "2": "S28", "3": "S27", "4": "S27", "5": "S29", "6": "S29" },
        "WED": { "1": "S31", "2": "S31", "3": "S30", "4": "S30", "5": "S29", "6": "S29" },
        "THU": { "1": "S28", "2": "S28", "3": "S27", "4": "S27", "5": "S29", "6": "S29" },
        "FRI": { "1": "S27", "2": "S29", "3": "S30", "4": "S30", "5": "S31", "6": "S28" },
      },
      "7": {
        "MON": { "1": "S32", "2": "S32", "3": "S34", "4": "S35", "5": "S36", "6": "S33" },
        "TUE": { "1": "S33", "2": "S33", "3": "S32", "4": "S32", "5": "S34", "6": "S34" },
        "WED": { "1": "S36", "2": "S36", "3": "S35", "4": "S35", "5": "S34", "6": "S34" },
        "THU": { "1": "S33", "2": "S33", "3": "S32", "4": "S32", "5": "S34", "6": "S34" },
        "FRI": { "1": "S32", "2": "S35", "3": "S35", "4": "S33", "5": "S36", "6": "S33" },
      },
      "8": {
        "MON": { "1": "S41", "2": "S37", "3": "S39", "4": "S39", "5": "S40", "6": "S38" },
        "TUE": { "1": "S38", "2": "S41", "3": "S41", "4": "S37", "5": "S39", "6": "S39" },
        "WED": { "1": "S40", "2": "S39", "3": "S38", "4": "S38", "5": "S37", "6": "S37" },
        "THU": { "1": "S38", "2": "S38", "3": "S37", "4": "S40", "5": "S39", "6": "S39" },
        "FRI": { "1": "S37", "2": "S40", "3": "S39", "4": "S38", "5": "S38", "6": "S41" },
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
    "fees": {
      "feedetails": {
        "Academic Fees": "155000",
        "CAS Fees": "20000",
        "Hostel Fees": "46000",
        "Mess Fees": "30000",
        "Subscription Fees": "1500",
      },
      "feehistory": {
        "2510993660": {
          "2": {
            "TXN202643023495012": {
              "paid on": "12-04-2026",
              "paymentmethod": "UPI",
              "amount": "102450",
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
    hostel: "Alfred Nobel",
    RoomNo: "205",
    Messplan: "Active",
    DOB: "2007-08-15",
    Gender: "Male",
    Nationality: "Indian",
    BloodGroup: "B+",
    AdhaarNo: "1234 5678 9012",
    Category: "General",
    Religon: "Hindu",
    AdmissionType: "Jee Mains",
    PersonalEmail: "vishwas.mahiwal@example.com",
    UniversityEmail: "vishwas.mahiwal@university.edu",
    PersonalContact: "8954231597",
    FatherName: "Dilbag Singh",
    HostelAllotment: "Aug 2025",
    FatherContact: "9856321245",
    FatherOccupation: "Businessman",
    MotherName: "Suman Singh",
    MotherContact: "9876543210",
    AnnualIncome: "10,00,000",
    EmergencyContact: "9876543210",
    PermanentAddress: "123, Green Street, Jaipur- 302001",
    currentAddress: "123, Green Street, Jaipur- 302001",
    myTickets: {
      TKT86451320: {
        "Category": "Academic/Results",
        "Priority": "Medium",
        "contactmethod": "Email",
        "Submitted": "2026-04-25 14:30",
        "Status": "Open",
        "Title": "Attendance marked wrong in the portal",
        "Description": "I have noticed that my attendance for the subject 'Discrete Mathematics' is marked as absent for the date 20th April, but I was present in the class. Kindly look into this issue and update my attendance record accordingly.",
      },


    },
  },
  "2510993661": {
    user_ID: "2510993661",
    password: "1234",
    firstName: "Anjali",
    lastName: "Sharma",
    rollNo: "2510993661",
    enrollmentYear: "2024",
    department: "CSE AI & ML",
    hostel: "Vasco Da Gama",
    RoomNo: "305",
    Messplan: "Active",
    DOB: "2006-05-20",
    Gender: "Female",
    Nationality: "Indian", 
    Religon: "Hindu",
      BloodGroup: "A+",
    AdhaarNo: "2345 6789 0123",
    Category: "OBC",
    AdmissionType: "Jee Mains",
    PersonalEmail: "anjali.sharma@example.com",
    UniversityEmail: "anjali.sharma@university.edu",
    PersonalContact: "8954231597",
    FatherName: "Ramesh Sharma",
    HostelAllotment: "Aug 2024",
    FatherContact: "9856321245",
    FatherOccupation: "Engineer",
    MotherName: "Priya Sharma",
    MotherContact: "9876543210",
    AnnualIncome: "10,00,000",
    EmergencyContact: "9876543210",
    PermanentAddress: "123, Red Street, Jaipur- 302001",
    currentAddress: "123, Red Street, Jaipur- 302001",
    myTickets: {
      TKT86451320: {
        "Category": "Academic/Results",
        "Priority": "Medium",
        "contactmethod": "Email",
        "Submitted": "2026-04-25 14:30",
        "Status": "Open",
        "Title": "Result marked wrong in the portal",
        "Description": "I have noticed that my result for the subject 'Discrete Mathematics' is marked wrong, Kindly look into this issue and update my result record accordingly.",
      },


    },
  },
}
const results = {
  "2510993660": {
    '1': {
      S1: {
        external: { MO: "45", MM: "70" },
        internal: { MO: { ST1: "24", ST2: "28", Viva: "17", }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S2: {
        external: { MO: "69", MM: "70" },
        internal: { MO: { ST1: "29", ST2: "21", Viva: "11" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S3: {
        external: { MO: "55", MM: "70" },
        internal: { MO: { ST1: "26", ST2: "29", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S4: {
        external: { MO: "59", MM: "70" },
        internal: { MO: { ST1: "22", ST2: "28", Viva: "15" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S5: {
        external: { MO: "30", MM: "70" },
        internal: { MO: { ST1: "21", ST2: "27", Viva: "20" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S6: {
        external: { MO: "70", MM: "70" },
        internal: { MO: { ST1: "23", ST2: "28", Viva: "16" }, MM: { ST1: "30", ST2: "30", Viva: "20" } },

      }
    },
    '2': {
      S7: {
        external: {},
        internal: { MO: { ST1: "11", ST2: "16", Viva: "8" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S8: {
        external: {},
        internal: { MO: { ST1: "28", ST2: "18", Viva: "14" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S9: {
        external: {},
        internal: { MO: { ST1: "25", ST2: "24", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S10: {
        external: {},
        internal: { MO: { ST1: "21", ST2: "28", Viva: "15" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S11: {
        external: {},
        internal: { MO: { ST1: "26", ST2: "20", Viva: "10" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
    }

  },
  "2510993661": {
    '1': {
      S1: {
        external: { MO: "65", MM: "70" },
        internal: { MO: { ST1: "27", ST2: "29", Viva: "19", }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S2: {
        external: { MO: "68", MM: "70" },
        internal: { MO: { ST1: "29", ST2: "28", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
        
      },
      S3: {
        external: { MO: "60", MM: "70" },
        internal: { MO: { ST1: "28", ST2: "27", Viva: "19" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S4: {
        external: { MO: "62", MM: "70" },
        internal: { MO: { ST1: "27", ST2: "29", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S5: {
        external: { MO: "58", MM: "70" },
        internal: { MO: { ST1: "26", ST2: "28", Viva: "20" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S6: {
        external: { MO: "69", MM: "70" },
        internal: { MO: { ST1: "28", ST2: "29", Viva: "19" }, MM: { ST1: "30", ST2: "30", Viva: "20" } },
      }
    },
    '2': {
      S7: {
        external: {MO: "60", MM: "70" },
        internal: { MO: { ST1: "27", ST2: "29", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S8: {
        external: {MO: "65", MM: "70" },
        internal: { MO: { ST1: "28", ST2: "28", Viva: "19" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S9: {
        external: {MO: "62", MM: "70" },
        internal: { MO: { ST1: "27", ST2: "29", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S10: {
        external: {MO: "64", MM: "70" },
        internal: { MO: { ST1: "28", ST2: "28", Viva: "19" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
      S11: {
        external: {MO: "63", MM: "70" },
        internal: { MO: { ST1: "27", ST2: "29", Viva: "18" }, MM: { ST1: "30", ST2: "30", Viva: "20" } }
      },
    }

  },


};
const hostels = {
  "Alfred Nobel": {
    hostelname: "Alfred Nobel",
    warden: "Mr. Vijay Singh",
    contact: "9876543210",
    RoomsTypes: "Four Seater Non AC Attached Washroom",
    Mess: "ALred Nobel Mess",
    Timigs: "24x7",
    Facilities: {
      Wifi: "Available",
      Laundry: "Wed,Sat",
      Gymnasium: "Available",
      CommonRoom: "Available",
      Canteen: "7:00 AM - 10:00 PM",
      MedicalRoom: "24x7",
      HotWater: "7-9am,7-10pm",
      Parking: " Not Available",

    },


  },
  "Vasco Da Gama": {
    hostelname: "Vasco Da Gama",
    warden: "Ms. Kavita Sharma",
    contact: "9876543210",
    RoomsTypes: "three Seater AC Attached Washroom",
    Mess: "Vasco Da Gama Mess",
    Timigs: "24x7",
    Facilities: {
      Wifi: "Available",
      Laundry: "Tue,Fri",
      Gymnasium: "Available",
      CommonRoom: "Available",
      Canteen: "7:00 AM - 10:00 PM",
      MedicalRoom: "24x7",
      HotWater: "7-9am,7-10pm",
      AC: "Available",
    },

  },

  MessMenu: {
    Monday:
    {
      Breakfast: {
        Veg: ["Aloo Paratha", "Curd", "Tea"], NonVeg: ["Omelette"]
      },
      Lunch: {
        Veg: ["Dal", "Rice", "Salad"], NonVeg: ["Chicken"]
      },
      Snacks: {
        Veg: ["Pani Puri"], NonVeg: ["Chicken Tikka"]
      },
      Dinner: {
        Veg: ["Khichdi", "Raita", "Papdi"], NonVeg: ["Chicken Biryani"]
      },
    },
    Tuesday:
    {
      Breakfast: {
        Veg: ["Masala dosa", "Chutney", "Tea", "Sambhar"], NonVeg: ["Egg Bhurji"]
      },
      Lunch: {
        Veg: ["Rajma", "Chawal", "Roti", "Salad"], NonVeg: ["fish curry"]
      },
      Snacks: {
        Veg: ["Mad angles"], NonVeg: ["Chicken Roll"]
      },
      Dinner: {
        Veg: ["Kofta Curry", "Raita", "Gulab Jamun", "Roti"], NonVeg: ["Mutton Curry"]
      }
    },
    Wednesday:
    {
      Breakfast: {
        Veg: ["Paneer Paratha", "Curd", "Tea"], NonVeg: ["Egg Paratha"]
      },
      Lunch: {
        Veg: ["Moong Dal", "Chawal", "Roti"], NonVeg: ["Egg Curry"]
      },
      Snacks: {
        Veg: ["Poha"], NonVeg: ["Chicken lollipop"]
      },
      Dinner: {
        Veg: ["Dal Tadka", "Rice", "Naan"], NonVeg: ["Chicken Korma"]
      },
    },
    Thursday:
    {
      Breakfast: {
        Veg: ["Potato Sandwich", "Tea"], NonVeg: ["Egg Sandwich"]
      },
      Lunch: {
        Veg: ["Chole", "Chawal", "Roti"], NonVeg: ["Egg Butter Masala"]
      },
      Snacks: {
        Veg: ["Breadroll"], NonVeg: ["Chicken Roll"]
      },
      Dinner: {
        Veg: ["Rajma", "Chawal", "Roti"], NonVeg: ["Fish Curry"]
      },
    },
    Friday:
    {
      Breakfast: {
        Veg: ["Plain paratha", "Curd", "Tea"], NonVeg: ["Egg Paratha"]
      },
      Lunch: {
        Veg: ["Black Chana", "Chawal", "Roti"], NonVeg: ["Chicken Curry"]
      },
      Snacks: {
        Veg: ["Biscuits"], NonVeg: ["Chicken Nuggets"]
      },
      Dinner: {
        Veg: ["Shahi Paneer", "Roti", "Gulab Jamun"], NonVeg: ["Mutton Biryani"]
      },
    },
    Saturday:
    {
      Breakfast: {
        Veg: ["Paneer Sandwich", "Poha", "Tea"], NonVeg: ["Egg Sandwich"]
      },
      Lunch: {
        Veg: ["Arhar Dal", "Chawal", "Roti"], NonVeg: ["Egg Curry"]
      },
      Snacks: {
        Veg: ["Pani Puri"], NonVeg: ["Chicken Tikka"]
      },
      Dinner: {
        Veg: ["Shahi Chaap", "Rice", "Naan"], NonVeg: ["Chicken lollipop"]
      },
    },
    Sunday:
    {
      Breakfast: {
        Veg: ["Mix Paratha", "Curd", "Tea"], NonVeg: ["Egg Paratha"]
      },
      Lunch: {
        Veg: ["Malai Kofta", "Raita", "Roti"], NonVeg: ["Mutton Curry"]
      },
      Snacks: {
        Veg: ["Cream Roll"], NonVeg: ["Chicken Roll"]
      },
      Dinner: {
        Veg: ["Kofta Curry", "Raita", "Gulab Jamun", "Roti"], NonVeg: ["Fish Curry"]
      },
    },
  },
  Notices: {
    "Maintence Work": "Hostel maintenance work will be carried out on 8th May. Please ensure to keep your rooms clean and cooperate with the staff.-02 May 2026",
  }
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



