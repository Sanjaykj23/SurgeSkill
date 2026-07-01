/**
 * Real-world geographic data: Country → State/Province → City → Colleges
 * India is covered comprehensively. Other major countries have key cities.
 */
export interface CityColleges { [city: string]: string[] }
export interface StateData    { [state: string]: CityColleges }
export interface LocationData { [country: string]: StateData }

export const LOCATIONS: LocationData = {
  "India": {
    "Karnataka": {
      "Bengaluru": [
        "Indian Institute of Science (IISc)", "RV College of Engineering", "PES University",
        "BMS College of Engineering", "MS Ramaiah Institute of Technology",
        "Dayananda Sagar College of Engineering", "Bangalore Institute of Technology",
        "Christ University", "Nitte Meenakshi Institute of Technology", "Jain University",
        "Alliance University", "REVA University", "Presidency University",
      ],
      "Mysuru": [
        "University of Mysore", "JSS College of Engineering", "The National Institute of Engineering",
        "Vidyavardhaka College of Engineering", "Maharaja's College",
      ],
      "Mangaluru": [
        "NITK Surathkal", "Manipal Academy of Higher Education", "St. Joseph Engineering College",
        "Mangalore University", "Aloysius Institute of Management and Information Technology",
      ],
      "Hubli-Dharwad": [
        "BVB College of Engineering", "KLE Technological University",
        "Karnataka University", "SDM College of Engineering",
      ],
    },
    "Maharashtra": {
      "Mumbai": [
        "IIT Bombay", "VJTI (Veermata Jijabai Technological Institute)", "DJ Sanghvi College of Engineering",
        "Thadomal Shahani Engineering College", "KJ Somaiya College of Engineering",
        "NMIMS University", "Sardar Patel College of Engineering",
        "Fr. C. Rodrigues Institute of Technology", "St. Xavier's College Mumbai",
        "University of Mumbai", "Jai Hind College",
      ],
      "Pune": [
        "COEP Technological University", "MIT World Peace University",
        "Pune Institute of Computer Technology (PICT)", "Symbiosis International University",
        "VIT Pune", "Savitribai Phule Pune University", "Cummins College of Engineering",
        "D.Y. Patil College of Engineering", "Vishwakarma Institute of Technology",
        "Army Institute of Technology",
      ],
      "Nagpur": [
        "VNIT Nagpur", "YCCE", "Shri Ramdeobaba College of Engineering",
        "Nagpur University", "LIT Nagpur",
      ],
      "Aurangabad": [
        "MGM College of Engineering", "Government Engineering College Aurangabad",
        "Dr. Babasaheb Ambedkar Marathwada University",
      ],
    },
    "Tamil Nadu": {
      "Chennai": [
        "IIT Madras",
        "Anna University / CEG",
        "Madras Institute of Technology (MIT)",
        "SSN College of Engineering",
        "SRM Institute of Science and Technology",
        "Sathyabama Institute of Science and Technology",
        "Hindustan Institute of Technology and Science",
        "Easwari Engineering College",
        "St. Joseph's College of Engineering",
        "Sri Venkateswara College of Engineering (SVCE)",
        "Rajalakshmi Engineering College (REC)",
        "Loyola College",
        "Madras Christian College (MCC)",
        "Stella Maris College",
        "Ethiraj College for Women",
        "Women's Christian College (WCC)",
        "Presidency College, Chennai",
        "DG Vaishnav College",
        "Guru Nanak College",
        "BSA Crescent Institute of Science and Technology",
        "Vel Tech University",
        "Chennai Institute of Technology (CIT)",
        "Sri Sairam Engineering College",
        "Panimalar Engineering College",
        "Saveetha Engineering College",
        "Meenakshi Sundararajan Engineering College",
        "Loyola-ICAM College of Engineering (LICET)",
        "KCG College of Technology",
        "RMK Engineering College",
        "Velammal Engineering College"
      ],
      "Coimbatore": [
        "PSG College of Technology",
        "PSG Institute of Technology & Applied Research",
        "Coimbatore Institute of Technology (CIT)",
        "Government College of Technology (GCT)",
        "Amrita School of Engineering",
        "Kumaraguru College of Technology (KCT)",
        "Sri Ramakrishna Engineering College (SREC)",
        "Sri Krishna College of Engineering & Technology",
        "Sri Krishna College of Technology (SKCT)",
        "Karunya Institute of Technology and Sciences",
        "PSG College of Arts and Science (PSG CAS)",
        "Government Arts College Coimbatore",
        "Hindusthan College of Engineering and Technology",
        "SNS College of Technology",
        "KPR Institute of Engineering and Technology",
        "Nirmala College for Women"
      ],
      "Vellore": [
        "VIT Vellore",
        "Christian Medical College (CMC Vellore)",
        "Auxilium College",
        "Voorhees College",
        "Muthurangam Government Arts College",
        "Priyadarshini Engineering College"
      ],
      "Tiruchirappalli": [
        "NIT Tiruchirappalli",
        "St. Joseph's College Trichy",
        "Bishop Heber College",
        "Saranathan College of Engineering",
        "National College Trichy",
        "Jamal Mohamed College",
        "Holy Cross College",
        "Bharathidasan University",
        "K. Ramakrishnan College of Engineering (KRCE)",
        "K. Ramakrishnan College of Technology (KRCT)"
      ],
      "Madurai": [
        "Thiagarajar College of Engineering (TCE)",
        "Thiagarajar College",
        "The American College",
        "Lady Doak College",
        "Fatima College",
        "Velammal College of Engineering & Technology",
        "KLN College of Engineering",
        "Madurai Kamaraj University (MKU)"
      ],
      "Salem": [
        "Sona College of Technology",
        "Government College of Engineering Salem (GCE)",
        "Knowledge Institute of Technology (KIOT)",
        "Periyar University",
        "Vinayaka Mission's Kirupananda Variyar Engineering College"
      ],
      "Erode": [
        "Kongu Engineering College (KEC)",
        "Bannari Amman Institute of Technology (BIT)",
        "Nandha Engineering College",
        "Velalar College of Engineering & Technology",
        "Erode Sengunthar Engineering College"
      ],
      "Thanjavur": [
        "SASTRA Deemed University",
        "Periyar Maniammai Institute of Science & Technology",
        "Government College of Engineering Thanjavur"
      ],
      "Tirunelveli": [
        "Government College of Engineering Tirunelveli",
        "Francis Xavier Engineering College",
        "St. Xavier's College Palayamkottai",
        "National Engineering College",
        "Manonmaniam Sundaranar University"
      ]
    },
    "Delhi": {
      "New Delhi": [
        "IIT Delhi", "Delhi Technological University (DTU)",
        "Netaji Subhas University of Technology (NSUT)", "IIIT Delhi",
        "Jamia Millia Islamia", "University of Delhi", "Indira Gandhi Delhi Technical University for Women",
        "Guru Gobind Singh Indraprastha University", "Amity University Delhi",
        "Jawaharlal Nehru University (JNU)",
      ],
    },
    "Telangana": {
      "Hyderabad": [
        "IIT Hyderabad", "BITS Pilani Hyderabad Campus", "IIIT Hyderabad",
        "Osmania University", "University of Hyderabad", "CBIT",
        "Chaitanya Bharathi Institute of Technology", "JNTU Hyderabad",
        "Vasavi College of Engineering", "Mahindra University",
      ],
      "Warangal": [
        "NIT Warangal", "JNTU Warangal", "Kakatiya University",
      ],
    },
    "Gujarat": {
      "Ahmedabad": [
        "IIT Gandhinagar", "DAIICT", "Nirma University", "Gujarat Technological University",
        "LD College of Engineering", "Ahmedabad University", "PDPU",
      ],
      "Surat": [
        "NIT Surat (SVNIT)", "SVIT Vasad", "Shantilal Shah Engineering College",
      ],
      "Vadodara": [
        "MS University of Baroda", "CKPCET", "Parul University",
      ],
    },
    "West Bengal": {
      "Kolkata": [
        "IIT Kharagpur (Kharagpur campus)", "Jadavpur University", "Presidency University",
        "Calcutta University", "Heritage Institute of Technology",
        "Techno India University", "IIEST Shibpur", "MAKAUT",
      ],
      "Kharagpur": [
        "IIT Kharagpur",
      ],
    },
    "Rajasthan": {
      "Jaipur": [
        "MNIT Jaipur", "Manipal University Jaipur", "Poornima University",
        "LNM Institute of Information Technology", "University of Rajasthan", "Amity University Jaipur",
      ],
      "Jodhpur": [
        "IIT Jodhpur", "NIT Jodhpur", "MBM University",
      ],
      "Pilani": [
        "BITS Pilani (Main Campus)",
      ],
    },
    "Kerala": {
      "Thiruvananthapuram": [
        "College of Engineering Trivandrum (CET)", "University of Kerala",
        "TKM College of Engineering", "Govt. Engineering College Barton Hill",
      ],
      "Kochi": [
        "Rajagiri School of Engineering & Technology", "CUSAT",
        "Model Engineering College", "Federal Institute of Science and Technology",
      ],
      "Calicut": [
        "NIT Calicut", "Government Engineering College Calicut", "Calicut University",
      ],
      "Palakkad": [
        "IIT Palakkad",
      ],
    },
    "Punjab": {
      "Chandigarh": [
        "PEC University of Technology", "UIET Chandigarh", "Chandigarh University",
        "Punjab University", "GGDSD College",
      ],
      "Patiala": [
        "Thapar Institute of Engineering & Technology",
      ],
      "Ludhiana": [
        "Punjab Engineering College (PEC Ludhiana)", "Guru Nanak Dev Engineering College",
      ],
    },
    "Madhya Pradesh": {
      "Bhopal": [
        "IIT Indore (Indore)", "MANIT Bhopal", "LNCT Bhopal", "Sage University",
      ],
      "Indore": [
        "IIT Indore", "IIM Indore", "DAVV Indore", "Symbiosis Institute Indore",
      ],
    },
    "Uttar Pradesh": {
      "Kanpur": [
        "IIT Kanpur", "HBTU Kanpur", "CSJM University",
      ],
      "Lucknow": [
        "IIM Lucknow", "BBAU Lucknow", "AKTU Lucknow", "Amity University Lucknow",
      ],
      "Allahabad": [
        "IIT Allahabad (IIT BHU adjacent)", "MNNIT Allahabad", "University of Allahabad",
      ],
    },
    "Haryana": {
      "Gurugram": [
        "BITS Pilani Pilani Campus", "ITM University", "Amity University Gurugram",
        "Shiv Nadar University",
      ],
      "Faridabad": [
        "Manav Rachna International Institute", "Asian School of Media Studies",
      ],
    },
    "Andhra Pradesh": {
      "Visakhapatnam": [
        "Andhra University", "GITAM University", "MVGR College of Engineering",
        "Raghu Engineering College",
      ],
      "Tirupati": [
        "SRM University AP", "VIT AP University",
      ],
    },
    "Goa": {
      "Panaji": [
        "Goa University", "NIT Goa",
      ],
      "Vasco da Gama": [
        "Padre Conceição College of Engineering", "Don Bosco College of Engineering",
      ],
    },
    "Odisha": {
      "Bhubaneswar": [
        "IIT Bhubaneswar", "NIT Rourkela", "KIIT University", "Utkal University",
      ],
    },
    "Assam": {
      "Guwahati": [
        "IIT Guwahati", "NIT Silchar", "Gauhati University", "Assam Engineering College",
      ],
    },
    "Bihar": {
      "Patna": [
        "IIT Patna", "NIT Patna", "Patna University",
      ],
    },
    "Jharkhand": {
      "Ranchi": [
        "IIT (ISM) Dhanbad", "NIT Jamshedpur", "BIT Mesra", "Ranchi University",
      ],
    },
    "Uttarakhand": {
      "Dehradun": [
        "IIT Roorkee", "Graphic Era University", "DIT University", "Uttaranchal University",
      ],
      "Roorkee": [
        "IIT Roorkee",
      ],
    },
    "Himachal Pradesh": {
      "Shimla": [
        "NIT Hamirpur", "Himachal Pradesh University",
      ],
      "Hamirpur": [
        "NIT Hamirpur",
      ],
    },
    "Chhattisgarh": {
      "Raipur": [
        "NIT Raipur", "Raipur Institute of Technology",
      ],
    },
  },

  "United States": {
    "California": {
      "San Francisco Bay Area": [
        "Stanford University", "UC Berkeley", "UC San Francisco", "San Jose State University",
      ],
      "Los Angeles": [
        "UCLA", "USC", "Caltech", "LMU", "Pepperdine University",
      ],
    },
    "Massachusetts": {
      "Boston": [
        "MIT", "Harvard University", "Boston University", "Northeastern University",
        "Tufts University", "Boston College",
      ],
    },
    "New York": {
      "New York City": [
        "Columbia University", "NYU", "Cornell Tech", "Fordham University",
        "The New School",
      ],
    },
    "Texas": {
      "Austin": [
        "UT Austin", "Texas A&M University", "University of Texas at Dallas",
      ],
    },
    "Illinois": {
      "Chicago": [
        "University of Chicago", "Northwestern University", "IIT Chicago",
        "Loyola University Chicago",
      ],
    },
    "Washington": {
      "Seattle": [
        "University of Washington", "Seattle University",
      ],
    },
    "Georgia": {
      "Atlanta": [
        "Georgia Tech", "Emory University", "Georgia State University",
      ],
    },
  },

  "United Kingdom": {
    "England": {
      "London": [
        "University College London (UCL)", "Imperial College London",
        "King's College London", "LSE", "Queen Mary University of London",
        "City University London",
      ],
      "Oxford": ["University of Oxford"],
      "Cambridge": ["University of Cambridge"],
      "Manchester": ["University of Manchester", "Manchester Metropolitan University"],
      "Birmingham": ["University of Birmingham", "Aston University"],
    },
    "Scotland": {
      "Edinburgh": ["University of Edinburgh", "Heriot-Watt University", "Edinburgh Napier"],
      "Glasgow": ["University of Glasgow", "University of Strathclyde"],
    },
    "Wales": {
      "Cardiff": ["Cardiff University"],
    },
  },

  "Canada": {
    "Ontario": {
      "Toronto": ["University of Toronto", "Ryerson University (TMU)", "York University", "OCAD University"],
      "Waterloo": ["University of Waterloo", "Wilfrid Laurier University"],
      "Ottawa": ["Carleton University", "University of Ottawa"],
    },
    "British Columbia": {
      "Vancouver": ["UBC", "Simon Fraser University (SFU)", "Langara College"],
    },
    "Quebec": {
      "Montreal": ["McGill University", "Concordia University", "Université de Montréal"],
    },
  },

  "Australia": {
    "New South Wales": {
      "Sydney": ["University of Sydney", "UNSW Sydney", "UTS", "Macquarie University"],
    },
    "Victoria": {
      "Melbourne": ["University of Melbourne", "Monash University", "RMIT University", "Deakin University"],
    },
    "Queensland": {
      "Brisbane": ["University of Queensland", "QUT", "Griffith University"],
    },
  },

  "Germany": {
    "Bavaria": {
      "Munich": ["TU Munich", "LMU Munich"],
    },
    "Berlin": {
      "Berlin": ["TU Berlin", "FU Berlin", "Humboldt University of Berlin"],
    },
    "Baden-Württemberg": {
      "Karlsruhe": ["KIT (Karlsruhe Institute of Technology)"],
      "Stuttgart": ["University of Stuttgart"],
    },
  },

  "Singapore": {
    "Singapore": {
      "Singapore": [
        "National University of Singapore (NUS)", "Nanyang Technological University (NTU)",
        "Singapore Management University (SMU)", "SUTD", "SIT",
      ],
    },
  },

  "United Arab Emirates": {
    "Dubai": {
      "Dubai": ["University of Dubai", "Middlesex University Dubai", "Amity University Dubai", "Heriot-Watt Dubai"],
    },
    "Abu Dhabi": {
      "Abu Dhabi": ["New York University Abu Dhabi", "Khalifa University"],
    },
  },

  "Other": {
    "Other": {
      "Other": ["Other Institution"],
    },
  },
};

/** All country names sorted */
export const COUNTRIES = Object.keys(LOCATIONS).sort();

/** States/provinces for a given country */
export function getStates(country: string): string[] {
  return Object.keys(LOCATIONS[country] || {}).sort();
}

/** Cities for a given country + state */
export function getCities(country: string, state: string): string[] {
  return Object.keys((LOCATIONS[country] || {})[state] || {}).sort();
}

/** Colleges for a given country + state + city */
export function getColleges(country: string, state: string, city: string): string[] {
  return (((LOCATIONS[country] || {})[state] || {})[city] || []).slice().sort();
}
