const TRIVIA_DATA = {
  categories: [
    {
      id: "paraco",
      name: "Paraco / Propane Specific",
      emoji: "🔥",
      questions: [
        {
          id: "p1",
          question: "In what year was Paraco Gas founded?",
          choices: ["1968", "1989", "1975", "2001"],
          answer: 0
        },
        {
          id: "p2",
          question: 'What does "Paraco" stand for?',
          choices: [
            "Pat Armentano / Rose Armentano Co.",
            "Pressurized and Recycled Air Co.",
            "Propane and Residential Appliance Co.",
            "Propane And Renewable Air Combustion"
          ],
          answer: 0
        },
        {
          id: "p3",
          question: "How many states does Paraco currently serve customers in?",
          choices: ["4", "6", "8", "10"],
          answer: 1
        },
        {
          id: "p4",
          question: "When is a leak check required?",
          choices: [
            "Anytime there is an interruption in propane service",
            "Only when customer calls in to tell us they smell gas",
            "If the customer feels they are using more gas than they should",
            "At the time of the customer's next scheduled delivery"
          ],
          answer: 0
        }
      ]
    },
    {
      id: "basics",
      name: "Propane Basics",
      emoji: "🧪",
      questions: [
        {
          id: "b1",
          question: "Is propane stored as a liquid or gas inside a tank?",
          choices: ["Liquid", "Gas", "Both liquid and gas", "It depends on the tank size"],
          answer: 0
        },
        {
          id: "b2",
          question: "What is added to propane to give it its distinct smell?",
          choices: ["Ethyl Mercaptan", "Sulfur Dioxide", "Hydrogen Peroxide", "Nothing — that is how propane smells"],
          answer: 0
        },
        {
          id: "b3",
          question: "What color is propane in its natural state?",
          choices: ["Yellow", "Tan", "White", "Clear"],
          answer: 3
        },
        {
          id: "b4",
          question: "Propane is a byproduct of the refining/processing of what energy sources?",
          choices: [
            "Natural Gas and Crude Oil",
            "Ethylene and CO2",
            "HydroElectric and Geothermal",
            "Crude Oil and Gasoline"
          ],
          answer: 0
        },
        {
          id: "b5",
          question: "At approximately what temperature does propane boil?",
          choices: ["-44°F", "100°F", "180°F", "Propane doesn't boil"],
          answer: 0
        },
        {
          id: "b6",
          question: "Is propane heavier or lighter than air?",
          choices: ["Heavier", "Lighter", "The same weight", "It depends on humidity"],
          answer: 0
        }
      ]
    },
    {
      id: "delivery",
      name: "Delivery",
      emoji: "🚚",
      questions: [
        {
          id: "d1",
          question: "What is the approximate percentage a tank is filled to for safety?",
          choices: ["0%", "100%", "80%", "50%"],
          answer: 2
        },
        {
          id: "d2",
          question: "What type of delivery is prioritized during outages or extreme cold?",
          choices: ["Heating", "Dryers", "Cooking", "BBQ"],
          answer: 0
        },
        {
          id: "d3",
          question: "What is the purpose of a tank regulator?",
          choices: [
            "To measure how much gas is being used",
            "To regulate the gas pressure going from the tank to the house",
            "It is used during the filling process",
            "To allow for the expansion/contraction of the gas in the tank"
          ],
          answer: 1
        },
        {
          id: "d4",
          question: "What is the name of the device that measures propane levels in a tank?",
          choices: ["Tank Monitor", "Regulator", "Gauge Reporter", "Deliver Sure"],
          answer: 0
        }
      ]
    },
    {
      id: "safety",
      name: "Safety & Compliance",
      emoji: "⚠️",
      questions: [
        {
          id: "s1",
          question: "What should a customer do FIRST if they smell propane?",
          choices: [
            "Check their tank gauge",
            "Turn off the tank",
            "Call a neighbor to see if they smell it too",
            "Order a delivery — the smell means they are low on product"
          ],
          answer: 1
        }
      ]
    },
    {
      id: "cx",
      name: "Customer Experience",
      emoji: "💡",
      questions: [
        {
          id: "cx1",
          question: "What is the best way to reduce OOG/emergency delivery requests?",
          choices: [
            "Suggest Automatic Delivery",
            "Remind the customer to frequently check their tank gauge",
            "Advise them to reduce their consumption",
            "Suggest Auto Pay / Ebilling"
          ],
          answer: 0
        },
        {
          id: "cx2",
          question: "Who can authorize a switch from Will Call to Auto Delivery?",
          choices: [
            "Immediate family of the Account Holder",
            "The Account Holder only",
            "Anyone authorized on the account",
            "Delivery/Routing staff"
          ],
          answer: 1
        },
        {
          id: "cx3",
          question: "Are Paraco Heating Unit Service Plans available in all areas?",
          choices: ["Yes", "No"],
          answer: 1
        },
        {
          id: "cx4",
          question: "What is Paraco's standard Tank Lease fee cost?",
          choices: ["$390", "$195", "$129", "$79"],
          answer: 2
        },
        {
          id: "cx5",
          question: "Are Paraco Summer Promotions limited to Pool Use only?",
          choices: ["Yes", "No"],
          answer: 1
        }
      ]
    },
    {
      id: "fun",
      name: "Lighter Questions",
      emoji: "🎉",
      questions: [
        {
          id: "f1",
          question: "Which of these is NOT an appliance that can run on propane?",
          choices: ["Bus", "Crop Dryer", "Refrigerator", "Sewing Machine"],
          answer: 3
        },
        {
          id: "f2",
          question: "What does CEA stand for?",
          choices: [
            "Customer Experience Agent",
            "Customer Expert Agent",
            "Customer Expectation Advocate",
            "Caller Empathy Assistant"
          ],
          answer: 0
        }
      ]
    },
    {
      id: "hard",
      name: "Hard Mode",
      emoji: "🧠",
      questions: [
        {
          id: "h1",
          question: "What is the approximate energy content of one gallon of propane?",
          choices: ["91,500 BTU", "1,000,000 BTU", "1 BTU", "Unlimited"],
          answer: 0
        },
        {
          id: "h2",
          question: "What does BTU stand for?",
          choices: ["British Thermal Unit", "Before Tank Unit", "Below Tank Usage", "Basic Tank Use"],
          answer: 0
        },
        {
          id: "h3",
          question: "What is the full cost of the Admin fee for the Summer PreBuy?",
          choices: ["$49.99", "$69.99", "$39.99", "There is no Admin fee for PreBuy"],
          answer: 2
        },
        {
          id: "h4",
          question: "Do customers need to be home for a Tank Monitor Installation?",
          choices: ["Yes", "No"],
          answer: 1
        },
        {
          id: "h5",
          question: "What SLPP is used to gradually increase a customer's Price Per Gallon from a very low rate back to their correct Right Price?",
          choices: ["RENT", "# Del", "BRDG", "RFIX"],
          answer: 2
        },
        {
          id: "h6",
          question: "Can you add additional Gallons to a MHFBC SLPP?",
          choices: ["Yes", "No"],
          answer: 0
        },
        {
          id: "h7",
          question: "What is the toll free phone number for Paraco?",
          choices: ["888-385-9494", "844-297-5600", "914-489-3000", "800-647-4427"],
          answer: 3
        },
        {
          id: "h8",
          question: "What is the agent commission for each Will Call to Auto Conversion?",
          choices: ["$10", "$5", "$4", "$7"],
          answer: 0
        },
        {
          id: "h9",
          question: "An Auto Pay CC cannot be set up using a Debit Card.",
          choices: ["True", "False"],
          answer: 1
        },
        {
          id: "h10",
          question: "If a Tank Monitor is not reporting readings correctly, which of the below is NOT a possible reason?",
          choices: [
            "Battery needs to be replaced",
            "Spotty Cell Service",
            "The unit has failed",
            "The customer went off auto delivery"
          ],
          answer: 3
        },
        {
          id: "h11",
          question: "If a pool customer uses over 400 gallons a year, their Tank Lease fee can be waived.",
          choices: ["True", "False"],
          answer: 1
        },
        {
          id: "h12",
          question: "If a customer is on Delivery Hold for a past due balance and they make a full payment, we must contact the Credit Team to remove the hold before placing a delivery ticket.",
          choices: ["True", "False"],
          answer: 1
        },
        {
          id: "h13",
          question: "A HEAP benefit cannot be used to clear an existing balance so the customer can receive a delivery.",
          choices: ["True", "False"],
          answer: 0
        },
        {
          id: "h14",
          question: "Agents can add a customer credit card to an account in ADDS.",
          choices: ["True", "False"],
          answer: 1
        },
        {
          id: "h15",
          question: "A customer calls in and says they've already sent in a check for their past due balance. What should you do?",
          choices: [
            "Reach out to AR by email and ask if the check has been received",
            "Call the Credit Team for help",
            "Ask the customer if the check has cleared (shows as cashed)",
            "Send a request to the lockbox to investigate the missing check"
          ],
          answer: 2
        },
        {
          id: "h16",
          question: "Will Paraco respond to a gas odor call received from a NON customer?",
          choices: ["Yes", "No"],
          answer: 0
        },
        {
          id: "h17",
          question: "What is Paraco's Tank Pick Up (Restocking) Fee?",
          choices: ["$750", "$195", "$150", "$129"],
          answer: 1
        },
        {
          id: "h18",
          question: "Propane tanks what size and larger often require a pump out prior to removal/transport?",
          choices: ["120 gallon", "330 gallon", "500 gallon", "250 gallon"],
          answer: 2
        },
        {
          id: "h19",
          question: "A pump station is a place where customers can go to swap out their tanks for freshly filled ones.",
          choices: ["True", "False"],
          answer: 1
        },
        {
          id: "h20",
          question: "What is the name of the robotic refurbishing unit at our Waterbury facility?",
          choices: ["Art", "Pat", "Cy", "Reba"],
          answer: 1
        },
        {
          id: "h21",
          question: "A customer calls in looking for signage and banners for their BBQ cage. What do you do?",
          choices: [
            "Place a delivery ticket noting 'needs stickers'",
            "Email the request to dispatch@paracogas.com so the driver can bring materials at next delivery",
            "Forward the request to ContactUs@paracogas.com so they can mail materials",
            "Advise the customer that signage must be requested from the fire marshal in their municipality"
          ],
          answer: 1
        }
      ]
    }
  ]
};
