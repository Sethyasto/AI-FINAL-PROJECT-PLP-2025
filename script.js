// Enhanced Insurance Data with more details
const insuranceData = {
    plans: {
        inpatient: {
            classic: {
                limit: 500000,
                preExisting: 250000,
                chronicNew: 200000,
                psychiatric: 100000,
                lastExpense: 50000,
                bedType: "General Ward Bed",
                description: "Basic coverage for essential healthcare needs at an affordable price",
                bestFor: "Individuals or young families on a tight budget",
                features: ["Basic hospitalization", "Limited pre-existing coverage", "General ward accommodation"],
                rating: 3
            },
            premier: {
                limit: 1000000,
                preExisting: 300000,
                chronicNew: 400000,
                psychiatric: 200000,
                lastExpense: 50000,
                bedType: "General Ward Bed",
                description: "Enhanced coverage with higher limits for growing families",
                bestFor: "Young families expecting children or with young kids",
                features: ["Higher hospitalization limit", "Better chronic condition coverage", "Basic maternity"],
                rating: 4
            },
            advanced: {
                limit: 2000000,
                preExisting: 400000,
                chronicNew: 800000,
                psychiatric: 250000,
                lastExpense: 75000,
                bedType: "General Ward Bed",
                description: "Comprehensive protection for those wanting more security",
                bestFor: "Middle-income families with some health concerns",
                features: ["High hospitalization limit", "Good chronic condition coverage", "Basic dental/optical"],
                rating: 4.5
            },
            executive: {
                limit: 3000000,
                preExisting: 500000,
                chronicNew: 1200000,
                psychiatric: 300000,
                lastExpense: 100000,
                bedType: "Standard Private Room up to KShs. 12,500",
                description: "Premium coverage with private room benefits",
                bestFor: "Professionals wanting better hospital accommodations",
                features: ["Private room coverage", "High limits for all conditions", "Comprehensive outpatient"],
                rating: 5
            },
            royal: {
                limit: 5000000,
                preExisting: 1000000,
                chronicNew: 2000000,
                psychiatric: 500000,
                lastExpense: 100000,
                bedType: "Standard Private Room up to KShs. 24,000",
                description: "Elite coverage for those seeking the best hospital experience",
                bestFor: "Established families with chronic conditions",
                features: ["Luxury hospital stays", "Highest chronic condition coverage", "Full family coverage"],
                rating: 5
            },
            prestige: {
                limit: 10000000,
                preExisting: 2000000,
                chronicNew: 3000000,
                psychiatric: 750000,
                lastExpense: 100000,
                bedType: "Ensuite Room up to KShs. 32,000",
                description: "Our most comprehensive plan with luxurious hospital stays",
                bestFor: "High-net-worth individuals wanting top-tier coverage",
                features: ["VIP hospital experience", "Highest coverage limits", "Global evacuation"],
                rating: 5
            }
        },
        optional: {
            outpatient: {
                classic: 50000,
                premier: 50000,
                advanced: 80000,
                executive: 100000,
                royal: 150000,
                prestige: 200000,
                description: "Covers consultations, tests, and medications outside hospital",
                bestFor: "Those who frequently visit clinics or need regular medications"
            },
            maternity: {
                classic: 80000,
                premier: 100000,
                advanced: 120000,
                executive: 120000,
                royal: 150000,
                prestige: 200000,
                description: "Covers pregnancy, delivery, and related complications",
                bestFor: "Couples planning to have children in the next 1-3 years"
            },
            dental: {
                classic: 5000,
                premier: 10000,
                advanced: 20000,
                executive: 30000,
                royal: 40000,
                prestige: 50000,
                description: "Covers dental consultations, extractions, and basic treatments",
                bestFor: "People with existing dental issues or who value oral health"
            },
            optical: {
                classic: 5000,
                premier: 10000,
                advanced: 20000,
                executive: 30000,
                royal: 40000,
                prestige: 50000,
                description: "Covers eye tests, glasses, and basic vision care",
                bestFor: "People who wear glasses or have vision problems"
            }
        }
    },
    premiums: {
        inpatient: {
            "18-30": {
                classic: 21316,
                premier: 25621,
                advanced: 30215,
                executive: 36928,
                royal: 48028,
                prestige: 55033
            },
            "31-40": {
                classic: 22569,
                premier: 26709,
                advanced: 32027,
                executive: 40375,
                royal: 50773,
                prestige: 58178
            },
            "41-50": {
                classic: 23215,
                premier: 32027,
                advanced: 39883,
                executive: 46776,
                royal: 62313,
                prestige: 71401
            },
            "51-59": {
                classic: 30989,
                premier: 39266,
                advanced: 48186,
                executive: 61263,
                royal: 78793,
                prestige: 90287
            },
            "60-64": {
                classic: 38737,
                premier: 49083,
                advanced: 60232,
                executive: 67391,
                royal: 86672,
                prestige: 99315
            }
        },
        outpatient: {
            "≤40": {
                classic: 26555,
                premier: 26555,
                advanced: 31982,
                executive: 40354,
                royal: 50175,
                prestige: 55168
            },
            "41-50": {
                classic: 30315,
                premier: 30315,
                advanced: 39711,
                executive: 49158,
                royal: 55750,
                prestige: 60637
            },
            "51-59": {
                classic: 35537,
                premier: 35537,
                advanced: 46641,
                executive: 54294,
                royal: 61006,
                prestige: 65792
            },
            "60-64": {
                classic: 40537,
                premier: 40537,
                advanced: 55302,
                executive: 63832,
                royal: 77731,
                prestige: 82197
            }
        },
        family: {
            "inpatient": {
                "spouse": 0.7, // 70% of principal premium
                "child": 0.5  // 50% of principal premium
            },
            "outpatient": {
                "shared": {
                    "royal": 150000,
                    "prestige": 200000
                }
            }
        }
    },
    benefits: {
        core: [
            "🏥 Coverage for pre-existing and chronic conditions (after waiting periods)",
            "🦠 Cancer treatment coverage (after 2 years waiting period)",
            "🧠 Psychiatric conditions coverage",
            "⚰️ Last expense benefit for principal member",
            "🚑 Personal accident benefit for principal member",
            "🦠 COVID-19 inpatient coverage",
            "✈️ Air and road evacuation services",
            "🏡 Post-hospitalization treatment (up to 3 weeks after discharge)",
            "💊 Take home prescribed medication (up to 30 days after discharge)",
            "👶 Lodger fees for parent accompanying sick child under 10",
            "🩺 Annual general check-up for member and spouse"
        ],
        optional: [
            "👨‍⚕️ Outpatient services (consultations, tests, drugs)",
            "🤰 Maternity services (normal and C-section delivery)",
            "🦷 Dental treatment (consultations, extractions, fillings)",
            "👓 Optical services (eye tests, frames, lenses)",
            "🦠 Enhanced COVID-19 cover",
            "👨‍👩‍👧‍👦 Shared outpatient for family"
        ]
    },
    waitingPeriods: [
        "⏳ 30 days general waiting period for new illness claims",
        "🚨 No waiting period for accident-related treatment",
        "📅 1 year for pre-existing conditions, chronic conditions, maternity",
        "📅 2 years for cancer treatment",
        "📅 1 year for psychiatric conditions",
        "🤰 12 months waiting period for maternity benefits",
        "🦷 1 year waiting period for non-accidental dental surgery"
    ],
    eligibility: [
        "👶 Age: From birth (term baby of 38 weeks) up to 64 years",
        "👵 Existing members 65+ transition to J-Seniors plan",
        "🎓 Dependent children covered up to 25 years with proof of schooling",
        "🧒 Children 0-17 can be principal members under J Care Junior plan",
        "🩺 Medical examination required for applicants 50+ years",
        "📝 Full disclosure of medical history required at application"
    ],
    exclusions: [
        "💄 Cosmetic or plastic surgery unless from accidental injury",
        "🏎️ Riding or driving in any kind of race",
        "💆 Beauty treatment or massage",
        "🎖️ Naval, military and air force operations",
        "🏡 Stays at sanatoria, old age homes, places of rest etc.",
        "💉 Vaccinations except for KEPI & baby-friendly vaccinations",
        "🚗 Transportation other than licensed ambulance",
        "🍎 Nutritional food supplements or replacements",
        "☢️ Injury from war, civil commotion or terrorism",
        "👊 Injury from participating in riot, strike",
        "🌿 Alternative treatment (herbal, acupuncture, chiropractic)",
        "🧗 Extreme/hazardous sports and activities",
        "🦷 Dental treatment unless dental cover purchased",
        "👁️ Optical treatment unless optical cover purchased",
        "💔 Intentional self-injury, suicide, alcoholism, drug addiction",
        "📄 Expenses recoverable under other insurance",
        "⚖️ Any excluded condition and its complications",
        "⚖️ Weight reduction treatments and obesity care",
        "🔄 Hormone replacement therapy, age-related treatment",
        "🦠 Epidemics/pandemics except COVID-19 as specified",
        "⚠️ Treatment from non-compliance with medical advice",
        "👶 Fertility treatment (infertility and impotence)"
    ],
    paymentOptions: [
        "💳 Full annual payment (5% discount)",
        "📅 Quarterly installments (no extra charge)",
        "🗓️ Monthly installments (10% administrative fee)",
        "🤝 Employer payroll deduction (available for corporate clients)"
    ],
    claimsProcess: [
        {
            step: 1,
            title: "Notification",
            description: "Notify Jubilee immediately of any hospitalization or medical event",
            documents: []
        },
        {
            step: 2,
            title: "Pre-authorization",
            description: "Obtain pre-authorization for planned hospitalizations",
            documents: ["Doctor's report", "Treatment plan", "Cost estimate"]
        },
        {
            step: 3,
            title: "Hospitalization",
            description: "Present your Jubilee membership card at the hospital",
            documents: ["ID document", "Membership card"]
        },
        {
            step: 4,
            title: "Discharge",
            description: "Ensure all bills are settled before discharge",
            documents: ["Discharge summary", "Final bill"]
        },
        {
            step: 5,
            title: "Reimbursement (if applicable)",
            description: "Submit any out-of-pocket expenses for reimbursement",
            documents: ["Original receipts", "Claim form", "Medical reports"]
        }
    ],
    applicationProcess: [
        {
            step: 1,
            title: "Application Form",
            description: "Complete the application form with personal and medical details",
            documents: ["Completed application form", "Copy of ID", "Proof of age"]
        },
        {
            step: 2,
            title: "Medical Declaration",
            description: "Disclose any pre-existing medical conditions",
            documents: ["Medical history form", "Any medical reports if applicable"]
        },
        {
            step: 3,
            title: "Premium Calculation",
            description: "Receive premium quote based on age and selected plan",
            documents: ["Premium quotation"]
        },
        {
            step: 4,
            title: "Payment",
            description: "Make initial premium payment to activate coverage",
            documents: ["Payment receipt"]
        },
        {
            step: 5,
            title: "Policy Issuance",
            description: "Receive your policy documents and membership card",
            documents: ["Policy document", "Membership card"]
        }
    ],
    documentRequirements: {
        individual: [
            "Completed application form",
            "Copy of national ID/passport",
            "Proof of age (birth certificate for children)",
            "Recent passport photo",
            "Medical history declaration form"
        ],
        family: [
            "Completed family application form",
            "Copies of IDs for all adult members",
            "Birth certificates for children",
            "Proof of relationship (marriage certificate for spouse)",
            "Recent passport photos for all members"
        ],
        corporate: [
            "Completed group application form",
            "List of all members with details",
            "Company registration documents",
            "Employee identification documents",
            "Signed authorization from company"
        ]
    }
};

// Enhanced multilingual translations
const translations = {
    en: {
        welcome: "👋 Hello! I'm Julie, your JubileeCare Advisor. How can I help you today?",
        plans: "Here are our insurance plans:",
        benefits: "These are the benefits:",
        contact: "You can contact us at:",
        thanks: "You're welcome! 😊",
        error: "I didn't understand that. Could you rephrase?",
        budgetQuestion: "What is your budget for insurance?",
        budgetOptions: "Based on your budget of",
        goodbye: "Thank you for chatting! Have a great day! 🌟",
        whoCovered: "Who would you like to cover with this insurance?",
        ageQuestion: "What is your age range?",
        familySize: "How many family members need coverage?",
        coveragePriority: "What's most important in your coverage?",
        healthConcerns: "Do you have any specific health concerns?",
        saveQuote: "Save this quote for later?",
        quoteSaved: "Quote saved! You can view it later under 'My Saved Quotes'",
        comparePlans: "Compare plans side-by-side",
        calculatorTitle: "Premium Calculator",
        claimsTitle: "Claims Assistance",
        speak: "Speak",
        listen: "Listen",
        applicationTitle: "Application Process",
        documentsTitle: "Document Requirements",
        audioExplanation: "Here's what I found:"
    },
    sw: {
        welcome: "👋 Hujambo! Mimi ni Julie, mshauri wako wa JubileeCare. Naweza kukusaidiaje leo?",
        plans: "Hapa kuna mipango yetu ya bima:",
        benefits: "Hizi ni faida:",
        contact: "Unaweza kututafuta kwa:",
        thanks: "Karibu! 😊",
        error: "Sikuelewa. Unaweza kusema tena?",
        budgetQuestion: "Je, bajeti yako kwa bima ni ngapi?",
        budgetOptions: "Kulingana na bajeti yako ya",
        goodbye: "Asante kwa mazungumzo! Siku njema! 🌟",
        whoCovered: "Unataka kumfunika nani kwa bima hii?",
        ageQuestion: "Je, umri wako ni katika kundi gani?",
        familySize: "Je, wanafamilia wangapi wanahitaji kufunikwa?",
        coveragePriority: "Je, ni nini muhimu zaidi katika kifuniko chako?",
        healthConcerns: "Je, una wasiwasi wowote maalum kuhusu afya?",
        saveQuote: "Hifadhi nukuu hii kwa baadaye?",
        quoteSaved: "Nukuu imehifadhiwa! Unaweza kuiona baadaye chini ya 'Nukuu Zangu Zilizohifadhiwa'",
        comparePlans: "Linganisha mipango kwa upande mmoja",
        calculatorTitle: "Kikokotoo cha Ada",
        claimsTitle: "Msaada wa Madai",
        speak: "Sema",
        listen: "Sikiliza",
        applicationTitle: "Mchakato wa Maombi",
        documentsTitle: "Mahitaji ya Nyaraka",
        audioExplanation: "Hapa kuna nilichopata:"
    }
};

// Personality and mood detection with enhanced keywords
const moodKeywords = {
    positive: ["happy", "excited", "great", "wonderful", "fantastic", "awesome", "thanks", "thank you", "perfect", "amazing"],
    negative: ["sad", "angry", "frustrated", "upset", "disappointed", "problem", "issue", "complaint", "unhappy", "angry"],
    greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "habari", "jambo", "salut", "hola"],
    farewell: ["bye", "goodbye", "see you", "later", "farewell", "kwaheri", "adieu", "adiós"],
    urgency: ["urgent", "emergency", "now", "immediately", "quick", "fast", "haraka", "d'urgence", "urgente"],
    claims: ["claim", "hospital", "bill", "treatment", "medical", "submit", "form", "reimbursement", "madai", "hospitali"],
    application: ["apply", "application", "sign up", "register", "join", "enroll", "omba", "jiandikishe", "inscrire", "inscribir"]
};

// Coverage priority options
const coveragePriorities = [
    { id: "hospital", label: "🏥 Hospitalization coverage", description: "Focus on inpatient/surgical coverage" },
    { id: "outpatient", label: "👨‍⚕️ Outpatient coverage", description: "Focus on clinic visits and medications" },
    { id: "maternity", label: "🤰 Maternity coverage", description: "Planning for pregnancy/delivery" },
    { id: "chronic", label: "🩺 Chronic condition coverage", description: "For diabetes, hypertension etc." },
    { id: "comprehensive", label: "🛡️ Comprehensive coverage", description: "Balanced inpatient and outpatient" }
];

// Health concern options
const healthConcerns = [
    { id: "none", label: "😊 No major concerns", emoji: "😊" },
    { id: "diabetes", label: "🩸 Diabetes", emoji: "🩸" },
    { id: "hypertension", label: "❤️ Hypertension", emoji: "❤️" },
    { id: "cancer", label: "🦠 Cancer history", emoji: "🦠" },
    { id: "respiratory", label: "🌬️ Respiratory issues", emoji: "🌬️" },
    { id: "mental", label: "🧠 Mental health", emoji: "🧠" },
    { id: "other", label: "⚠️ Other condition", emoji: "⚠️" }
];

// DOM elements
const chatBody = document.getElementById('chatbot-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const voiceBtn = document.getElementById('voice-btn');
const readAloudBtn = document.getElementById('read-aloud-btn');
const suggestionsContainer = document.getElementById('suggestions-container');
const languageSelect = document.getElementById('language-select');
const quickBtns = document.querySelectorAll('.quick-btn');
const clearChatBtn = document.getElementById('clear-chat');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const decreaseTextBtn = document.getElementById('decrease-text');
const resetTextBtn = document.getElementById('reset-text');
const increaseTextBtn = document.getElementById('increase-text');
const screenReaderToggle = document.getElementById('screen-reader-toggle');
const comparisonModal = document.getElementById('comparison-modal');
const savedQuotesModal = document.getElementById('saved-quotes-modal');
const claimsModal = document.getElementById('claims-modal');
const applicationModal = document.getElementById('application-modal');
const documentsModal = document.getElementById('documents-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');

// User state with enhanced tracking
let userState = {
    name: null,
    age: null,
    budget: null,
    familySize: null,
    currentLanguage: 'en',
    personality: 'neutral',
    urgency: false,
    coveragePriority: null,
    healthConcerns: [],
    conversationHistory: [],
    currentQuestion: null,
    collectedData: {
        budget: null,
        ageGroup: null,
        familyMembers: null,
        coverageNeeds: [],
        healthIssues: []
    },
    savedQuotes: [],
    currentComparison: [],
    claimsData: {},
    applicationData: {},
    textSize: 1,
    darkMode: false,
    audioMode: false, // New state for audio mode
    audioQueue: [] // Queue for audio messages
};

// Initialize chat
document.addEventListener('DOMContentLoaded', function() {
    // Load saved quotes from localStorage
    const savedQuotes = localStorage.getItem('jubileeSavedQuotes');
    if (savedQuotes) {
        userState.savedQuotes = JSON.parse(savedQuotes);
    }
    
    // Load user preferences
    const preferences = localStorage.getItem('jubileeUserPreferences');
    if (preferences) {
        const { darkMode, textSize, language, audioMode } = JSON.parse(preferences);
        if (darkMode) toggleDarkMode();
        if (textSize) setTextSize(textSize);
        if (language) {
            userState.currentLanguage = language;
            languageSelect.value = language;
        }
        if (audioMode) toggleAudioMode();
    }
    
    showWelcomeMessage();
    setupEventListeners();
});

function setupEventListeners() {
    // Input handling
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Voice and audio
    voiceBtn.addEventListener('click', startVoiceRecognition);
    readAloudBtn.addEventListener('click', toggleAudioMode);
    
    // Language and chat controls
    languageSelect.addEventListener('change', function() {
        userState.currentLanguage = this.value;
        saveUserPreferences();
        addMessage(`Language changed to ${this.options[this.selectedIndex].text}`, 'bot');
        updateLanguage(this.value);
    });
    
    clearChatBtn.addEventListener('click', clearChatHistory);
    
    // Quick buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            handleQuickOption(option);
        });
    });
    
    // Accessibility controls
    darkModeToggle.addEventListener('click', toggleDarkMode);
    decreaseTextBtn.addEventListener('click', () => adjustTextSize(-0.1));
    resetTextBtn.addEventListener('click', () => setTextSize(1));
    increaseTextBtn.addEventListener('click', () => adjustTextSize(0.1));
    screenReaderToggle.addEventListener('click', toggleScreenReaderMode);
    
    // Modal controls
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

function saveUserPreferences() {
    const preferences = {
        darkMode: userState.darkMode,
        textSize: userState.textSize,
        language: userState.currentLanguage,
        audioMode: userState.audioMode
    };
    localStorage.setItem('jubileeUserPreferences', JSON.stringify(preferences));
}

function saveQuotesToStorage() {
    localStorage.setItem('jubileeSavedQuotes', JSON.stringify(userState.savedQuotes));
}

function toggleDarkMode() {
    userState.darkMode = !userState.darkMode;
    document.body.setAttribute('data-theme', userState.darkMode ? 'dark' : 'light');
    darkModeToggle.innerHTML = userState.darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    saveUserPreferences();
}

function adjustTextSize(change) {
    userState.textSize = Math.max(0.8, Math.min(1.5, userState.textSize + change));
    document.documentElement.style.setProperty('--message-font-size', `${userState.textSize}rem`);
    saveUserPreferences();
}

function setTextSize(size) {
    userState.textSize = size;
    document.documentElement.style.setProperty('--message-font-size', `${size}rem`);
    saveUserPreferences();
}

function toggleScreenReaderMode() {
    userState.screenReaderMode = !userState.screenReaderMode;
    screenReaderToggle.innerHTML = userState.screenReaderMode ? 
        '<i class="fas fa-assistive-listening-systems"></i>' : 
        '<i class="fas fa-headphones"></i>';
    saveUserPreferences();
    
    if (userState.screenReaderMode) {
        speak("Screen reader mode activated");
    }
}

function toggleAudioMode() {
    userState.audioMode = !userState.audioMode;
    readAloudBtn.innerHTML = userState.audioMode ? 
        '<i class="fas fa-volume-mute"></i>' : 
        '<i class="fas fa-volume-up"></i>';
    readAloudBtn.style.backgroundColor = userState.audioMode ? 'var(--error-color)' : 'var(--accent-color)';
    saveUserPreferences();
    
    if (userState.audioMode) {
        speak("Audio mode activated. I will now read all messages aloud.");
        // Read the last message if there is one
        if (userState.conversationHistory.length > 0) {
            const lastMessage = userState.conversationHistory[userState.conversationHistory.length - 1].message;
            speak(lastMessage);
        }
    } else {
        speechSynthesis.cancel();
    }
}

function clearChatHistory() {
    chatBody.innerHTML = '';
    userState.conversationHistory = [];
    showWelcomeMessage();
}

function handleQuickOption(option) {
    switch(option) {
        case 'plans':
            showInsurancePlans();
            break;
        case 'calculator':
            showPremiumCalculator();
            break;
        case 'benefits':
            showAllBenefits();
            break;
        case 'saved':
            showSavedQuotes();
            break;
        case 'application':
            showApplicationProcess();
            break;
        case 'documents':
            showDocumentRequirements();
            break;
        default:
            addMessage("Sorry, I didn't understand that option.", 'bot');
    }
}

function showWelcomeMessage() {
    addMessage(translations[userState.currentLanguage].welcome, 'bot');
    showSuggestions([
        "What are the different insurance plans?",
        "Help me choose a plan based on my needs",
        "How much does health insurance cost?",
        "What's covered in the basic plan?"
    ]);
}

function updateLanguage(lang) {
    // Update quick buttons
    const quickOptions = {
        en: {
            plans: "📋 View Insurance Plans",
            calculator: "💰 Premium Calculator",
            benefits: "🛡️ Learn About Benefits",
            saved: "💾 My Saved Quotes",
            application: "📝 Application Process",
            documents: "📄 Document Requirements"
        },
        sw: {
            plans: "📋 Angalia Mipango ya Bima",
            calculator: "💰 Kikokotoo cha Ada",
            benefits: "🛡️ Jifunze Kuhusu Faida",
            saved: "💾 Nukuu Zangu Zilizohifadhiwa",
            application: "📝 Mchakato wa Maombi",
            documents: "📄 Mahitaji ya Nyaraka"
        }
    };
    
    document.querySelector('[data-option="plans"]').textContent = quickOptions[lang].plans;
    document.querySelector('[data-option="calculator"]').textContent = quickOptions[lang].calculator;
    document.querySelector('[data-option="benefits"]').textContent = quickOptions[lang].benefits;
    document.querySelector('[data-option="saved"]').textContent = quickOptions[lang].saved;
    document.querySelector('[data-option="application"]').textContent = quickOptions[lang].application;
    document.querySelector('[data-option="documents"]').textContent = quickOptions[lang].documents;
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    // Add personality indicator for bot messages
    if (sender === 'bot') {
        const personalitySpan = document.createElement('span');
        personalitySpan.className = `personality-indicator personality-${userState.personality}`;
        personalitySpan.title = userState.personality === 'happy' ? 'Positive tone' : 
                              userState.personality === 'sad' ? 'Negative/urgent tone' : 'Neutral tone';
        messageDiv.appendChild(personalitySpan);
    }
    
    // Add urgency indicator if needed
    if (sender === 'bot' && userState.urgency) {
        const urgencySpan = document.createElement('span');
        urgencySpan.className = 'urgency-indicator';
        urgencySpan.innerHTML = ' ⚠️';
        urgencySpan.title = 'Urgent response';
        messageDiv.appendChild(urgencySpan);
    }
    
    messageDiv.appendChild(document.createTextNode(text));
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Add to conversation history
    userState.conversationHistory.push({ sender, message: text });
    
    // Auto-scroll for screen reader users
    if (userState.screenReaderMode) {
        messageDiv.setAttribute('aria-live', 'polite');
    }
    
    // Speak the message if audio mode is on
    if (userState.audioMode && sender === 'bot') {
        speak(text);
    }
}

function speak(text) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language
    switch(userState.currentLanguage) {
        case 'sw': utterance.lang = 'sw-KE'; break;
        case 'fr': utterance.lang = 'fr-FR'; break;
        case 'es': utterance.lang = 'es-ES'; break;
        case 'ar': utterance.lang = 'ar-SA'; break;
        default: utterance.lang = 'en-US';
    }
    
    // Set voice properties
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    speechSynthesis.speak(utterance);
}

function speakElementContent(element) {
    if (!userState.audioMode) return;
    
    let text = '';
    if (element.tagName === 'TABLE') {
        // Special handling for tables
        const rows = element.querySelectorAll('tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('th, td');
            cells.forEach((cell, index) => {
                text += cell.textContent.trim();
                if (index < cells.length - 1) text += ', ';
            });
            text += '. ';
        });
    } else {
        text = element.textContent.trim();
    }
    
    if (text) {
        speak(translations[userState.currentLanguage].audioExplanation + ' ' + text);
    }
}

function showLoadingIndicator() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-dots bot-message';
    loadingDiv.id = 'loading-indicator';
    loadingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(loadingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeLoadingIndicator() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        chatBody.removeChild(loadingDiv);
    }
}

function showSuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';
    
    // Don't show suggestions if user is in a multi-step process
    if (userState.currentQuestion) return;
    
    suggestions.forEach(suggestion => {
        const btn = document.createElement('button');
        btn.className = 'suggestion-btn';
        btn.textContent = suggestion;
        btn.addEventListener('click', () => {
            addMessage(suggestion, 'user');
            processUserMessage(suggestion);
        });
        suggestionsContainer.appendChild(btn);
    });
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    addMessage(message, 'user');
    userInput.value = '';
    
    // Analyze user mood/personality
    analyzeUserMood(message);
    
    // Show loading indicator
    showLoadingIndicator();
    
    // Process message after a short delay
    setTimeout(() => {
        removeLoadingIndicator();
        processUserMessage(message);
    }, 800);
}

function analyzeUserMood(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for urgent keywords
    userState.urgency = moodKeywords.urgency.some(word => lowerMessage.includes(word));
    
    // Determine personality/mood
    if (moodKeywords.positive.some(word => lowerMessage.includes(word))) {
        userState.personality = 'happy';
    } else if (moodKeywords.negative.some(word => lowerMessage.includes(word))) {
        userState.personality = 'sad';
    } else if (moodKeywords.greeting.some(word => lowerMessage.includes(word))) {
        userState.personality = 'happy';
    } else if (moodKeywords.farewell.some(word => lowerMessage.includes(word))) {
        userState.personality = 'neutral';
    } else {
        // Default to neutral unless urgency is detected
        userState.personality = userState.urgency ? 'sad' : 'neutral';
    }
}

function startVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        
        // Set language based on user selection
        let langCode;
        switch(userState.currentLanguage) {
            case 'sw': langCode = 'sw-KE'; break;
            case 'fr': langCode = 'fr-FR'; break;
            case 'es': langCode = 'es-ES'; break;
            case 'ar': langCode = 'ar-SA'; break;
            default: langCode = 'en-US';
        }
        recognition.lang = langCode;
        
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        recognition.onstart = function() {
            addMessage(translations[userState.currentLanguage].listen, 'bot');
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            voiceBtn.style.backgroundColor = 'var(--error-color)';
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            sendMessage();
        };
        
        recognition.onerror = function(event) {
            const errorMsg = {
                'no-speech': "I didn't hear anything. Please try again.",
                'audio-capture': "Couldn't capture audio. Please check your microphone.",
                'not-allowed': "Microphone access was denied. Please enable it in your browser settings."
            }[event.error] || "Sorry, I couldn't understand you. Please try again.";
            
            addMessage(errorMsg, 'bot');
            resetVoiceButton();
        };
        
        recognition.onend = resetVoiceButton;
        
        recognition.start();
    } else {
        addMessage("Voice recognition is not supported in your browser", 'bot');
    }
}

function resetVoiceButton() {
    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    voiceBtn.style.backgroundColor = 'var(--secondary-color)';
}

function processUserMessage(message) {
    const lowerMessage = message.toLowerCase();
    const currentLang = userState.currentLanguage;
    
    // Check for greetings
    if (moodKeywords.greeting.some(word => lowerMessage.includes(word))) {
        addMessage(getResponseBasedOnMood([
            "Hello there! 😊 How can I assist you with Jubilee Health Insurance today?",
            "Hi! 👋 Ready to explore your health insurance options?",
            "Greetings! 🌟 What can I help you with?"
        ]), 'bot');
        showSuggestions([
            "What plans do you offer?",
            "How do I apply for coverage?",
            "What's covered in the basic plan?"
        ]);
        return;
    }
    
    // Check for farewells
    if (moodKeywords.farewell.some(word => lowerMessage.includes(word))) {
        addMessage(getResponseBasedOnMood([
            translations[currentLang].goodbye,
            "Have a wonderful day! 🌞",
            "Take care! Hope to chat again soon! 😊"
        ]), 'bot');
        return;
    }
    
    // Check for thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        addMessage(getResponseBasedOnMood([
            translations[currentLang].thanks,
            "Happy to help! 😊",
            "You're very welcome! Let me know if you need anything else. 🌟"
        ]), 'bot');
        showSuggestions([
            "What's the difference between Classic and Prestige?",
            "How do I apply?",
            "What documents do I need?"
        ]);
        return;
    }
    
    // Check for claims assistance
    if (moodKeywords.claims.some(word => lowerMessage.includes(word))) {
        startClaimsProcess();
        return;
    }
    
    // Check for application process
    if (moodKeywords.application.some(word => lowerMessage.includes(word))) {
        showApplicationProcess();
        return;
    }
    
    // Handle multi-step questions first
    if (userState.currentQuestion) {
        handleMultiStepResponse(message);
        return;
    }
    
    // Check for budget-related questions
    if (lowerMessage.includes('budget') || lowerMessage.includes('money') || 
        lowerMessage.includes('cost') || lowerMessage.includes('price') ||
        /\b\d+[kK]?\b/.test(lowerMessage)) {
        handleBudgetQuestion(message);
        return;
    }
    
    // Check for plan comparisons
    if (lowerMessage.includes('compare') || lowerMessage.includes('difference between')) {
        preparePlanComparison(message);
        return;
    }
    
    // Check for document requirements
    if (lowerMessage.includes('document') || lowerMessage.includes('paperwork') || 
        lowerMessage.includes('require') || lowerMessage.includes('need')) {
        showDocumentRequirements();
        return;
    }
    
    // Check for help choosing a plan
    if (lowerMessage.includes('help choose') || lowerMessage.includes('which plan') || 
        lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
        startPlanRecommendationProcess();
        return;
    }
    
    // Check for saved quotes
    if (lowerMessage.includes('saved') || lowerMessage.includes('quote') || lowerMessage.includes('reference')) {
        showSavedQuotes();
        return;
    }
    
    // Check for premium calculator
    if (lowerMessage.includes('calculator') || lowerMessage.includes('calculate') || lowerMessage.includes('estimate')) {
        showPremiumCalculator();
        return;
    }
    
    // Check for specific plan information
    const planMatch = lowerMessage.match(/(classic|premier|advanced|executive|royal|prestige)/);
    if (planMatch) {
        showPlanDetails(planMatch[1]);
        return;
    }
    
    // Main processing logic
    if (lowerMessage.includes('plan') || lowerMessage.includes('package') || lowerMessage.includes('coverage')) {
        showInsurancePlans();
    } 
    else if (lowerMessage.includes('benefit') || lowerMessage.includes('cover') || lowerMessage.includes('include')) {
        if (lowerMessage.includes('core') || lowerMessage.includes('basic') || lowerMessage.includes('inpatient')) {
            showCoreBenefits();
        } 
        else if (lowerMessage.includes('optional') || lowerMessage.includes('add-on') || lowerMessage.includes('extra')) {
            showOptionalBenefits();
        } 
        else {
            showAllBenefits();
        }
    } 
    else if (lowerMessage.includes('premium') || lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('rate')) {
        if (lowerMessage.includes('inpatient')) {
            showPremiumRates('inpatient');
        } 
        else if (lowerMessage.includes('outpatient')) {
            showPremiumRates('outpatient');
        } 
        else {
            askAboutPremiumType();
        }
    } 
    else if (lowerMessage.includes('wait') || lowerMessage.includes('period')) {
        showWaitingPeriods();
    } 
    else if (lowerMessage.includes('eligible') || lowerMessage.includes('qualify') || lowerMessage.includes('age')) {
        showEligibility();
    } 
    else if (lowerMessage.includes('contact') || lowerMessage.includes('help') || lowerMessage.includes('support')) {
        showContactInfo();
    }
    else if (lowerMessage.includes('exclude') || lowerMessage.includes('not cover')) {
        showExclusions();
    }
    else if (lowerMessage.includes('payment option') || lowerMessage.includes('pay') || lowerMessage.includes('installment')) {
        showPaymentOptions();
    }
    else {
        handleUnknownInput();
    }
}

function showInsurancePlans() {
    addMessage(translations[userState.currentLanguage].plans, 'bot');
    const plansDiv = document.createElement('div');
    plansDiv.className = 'plans-list';

    let html = '<h4>🏥 Inpatient Plans:</h4>';
    Object.entries(insuranceData.plans.inpatient).forEach(([plan, details]) => {
        html += `
            <div class="plan-card">
                <h3>${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</h3>
                <p><strong>Limit:</strong> ${formatCurrency(details.limit)}</p>
                <p><strong>Pre-existing:</strong> ${formatCurrency(details.preExisting)}</p>
                <p><strong>Chronic (new):</strong> ${formatCurrency(details.chronicNew)}</p>
                <p><strong>Psychiatric:</strong> ${formatCurrency(details.psychiatric)}</p>
                <p><strong>Last Expense:</strong> ${formatCurrency(details.lastExpense)}</p>
                <p><strong>Bed Type:</strong> ${details.bedType}</p>
                <p><em>${details.description}</em></p>
                <p><small>Best for: ${details.bestFor}</small></p>
                <button class="save-quote-btn" data-plan="${plan}" data-type="inpatient">💾 Save Quote</button>
                <button class="compare-plan-btn" data-plan="${plan}">🔍 Compare</button>
            </div>
        `;
    });

    html += '<h4>🩺 Optional Add-ons:</h4>';
    Object.entries(insuranceData.plans.optional).forEach(([addon, details]) => {
        if (typeof details === 'object') {
            html += `<div class="plan-card"><h3>${addon.charAt(0).toUpperCase() + addon.slice(1)}</h3>`;
            Object.entries(details).forEach(([plan, value]) => {
                if (plan !== 'description' && plan !== 'bestFor') {
                    html += `<p><strong>${plan.charAt(0).toUpperCase() + plan.slice(1)}:</strong> ${formatCurrency(value)}</p>`;
                }
            });
            html += `<p><em>${details.description || ''}</em></p>`;
            html += `<p><small>Best for: ${details.bestFor || ''}</small></p>`;
            html += `<button class="save-quote-btn" data-plan="${addon}" data-type="optional">💾 Save Quote</button>`;
            html += `</div>`;
        }
    });

    plansDiv.innerHTML = html;
    chatBody.appendChild(plansDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(plansDiv);
        }, 500);
    }
    
    // Add event listeners to the new buttons
    document.querySelectorAll('.save-quote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const type = this.getAttribute('data-type');
            saveQuote(plan, type);
        });
    });
    
    document.querySelectorAll('.compare-plan-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            togglePlanComparison(plan);
        });
    });
    
    chatBody.scrollTop = chatBody.scrollHeight;
    showSuggestions([
        "Tell me more about the Classic plan",
        "What are the optional add-ons?",
        "How do I apply?",
        "Compare plans side-by-side"
    ]);
}

function showApplicationProcess() {
    if (applicationModal) applicationModal.style.display = 'block';
    const stepsDiv = document.querySelector('.application-steps');
    
    // Show steps
    stepsDiv.innerHTML = '<h4>Application Process Steps:</h4><ol>';
    insuranceData.applicationProcess.forEach(step => {
        stepsDiv.innerHTML += `
            <li>
                <strong>${step.title}</strong>
                <p>${step.description}</p>
                ${step.documents.length > 0 ? 
                    `<p>Documents required: ${step.documents.join(', ')}</p>` : ''}
            </li>
        `;
    });
    stepsDiv.innerHTML += '</ol>';
    
    // Add action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'application-actions';
    actionsDiv.innerHTML = `
        <button id="start-application-btn" class="quick-btn">Start Online Application</button>
        <button id="download-form-btn" class="quick-btn">Download Application Form</button>
        <button id="contact-agent-btn" class="quick-btn">Contact an Agent</button>
    `;
    
    stepsDiv.appendChild(actionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(stepsDiv);
        }, 500);
    }
    
    // Set up event listeners
    document.getElementById('start-application-btn').addEventListener('click', function() {
        addMessage("Redirecting you to our online application portal...", 'bot');
        applicationModal.style.display = 'none';
    });
    
    document.getElementById('download-form-btn').addEventListener('click', function() {
        addMessage("Downloading the application form...", 'bot');
        applicationModal.style.display = 'none';
    });
    
    document.getElementById('contact-agent-btn').addEventListener('click', function() {
        addMessage("Connecting you with an agent. Please wait...", 'bot');
        applicationModal.style.display = 'none';
    });
}

function showDocumentRequirements() {
    if (documentsModal) documentsModal.style.display = 'block';
    const docsDiv = document.querySelector('.documents-list');
    
    if (!docsDiv) {
        console.error("Documents list element not found");
        return;
    }
    
    docsDiv.innerHTML = `
        <h4>Document Requirements</h4>
        <div class="documents-tabs">
            <button class="doc-tab active" data-type="individual">Individual</button>
            <button class="doc-tab" data-type="family">Family</button>
            <button class="doc-tab" data-type="corporate">Corporate</button>
        </div>
        <div class="documents-content">
            <ul id="individual-docs" class="active">
                ${insuranceData.documentRequirements.individual.map(doc => `<li>${doc}</li>`).join('')}
            </ul>
            <ul id="family-docs">
                ${insuranceData.documentRequirements.family.map(doc => `<li>${doc}</li>`).join('')}
            </ul>
            <ul id="corporate-docs">
                ${insuranceData.documentRequirements.corporate.map(doc => `<li>${doc}</li>`).join('')}
            </ul>
        </div>
    `;    
    
}
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(docsDiv);
        }, 500);
    }
    
    // Set up tab switching
    document.querySelectorAll('.doc-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            
            // Update active tab
            document.querySelectorAll('.doc-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.documents-content ul').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${type}-docs`).classList.add('active');
            
            // Speak the new content if audio mode is on
            if (userState.audioMode) {
                speakElementContent(document.getElementById(`${type}-docs`));
            }
        });
    });


function showPlanDetails(planName) {
    const plan = insuranceData.plans.inpatient[planName.toLowerCase()];
    if (plan) {
        const planDiv = document.createElement('div');
        planDiv.className = 'plan-card';
        planDiv.innerHTML = `
            <h3>${planName.charAt(0).toUpperCase() + planName.slice(1)} Plan</h3>
            <p><strong>Limit:</strong> ${formatCurrency(plan.limit)}</p>
            <p><strong>Pre-existing:</strong> ${formatCurrency(plan.preExisting)}</p>
            <p><strong>Chronic (new):</strong> ${formatCurrency(plan.chronicNew)}</p>
            <p><strong>Psychiatric:</strong> ${formatCurrency(plan.psychiatric)}</p>
            <p><strong>Last Expense:</strong> ${formatCurrency(plan.lastExpense)}</p>
            <p><strong>Bed Type:</strong> ${plan.bedType}</p>
            <p><em>${plan.description}</em></p>
            <p><small>Best for: ${plan.bestFor}</small></p>
            <button class="save-quote-btn" data-plan="${planName.toLowerCase()}" data-type="inpatient">💾 Save Quote</button>
            <button class="compare-plan-btn" data-plan="${planName.toLowerCase()}">🔍 Compare</button>
        `;
        chatBody.appendChild(planDiv);
        
        // Speak the content if audio mode is on
        if (userState.audioMode) {
            setTimeout(() => {
                speakElementContent(planDiv);
            }, 500);
        }
        
        // Add event listeners
        planDiv.querySelector('.save-quote-btn').addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const type = this.getAttribute('data-type');
            saveQuote(plan, type);
        });
        
        planDiv.querySelector('.compare-plan-btn').addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            togglePlanComparison(plan);
        });
        
        addMessage("Would you like to compare this plan with another or see premium rates?", 'bot');
        showSuggestions([
            `Compare ${planName} with Prestige plan`,
            "Show premium rates",
            "How do I apply?"
        ]);
    } else {
        addMessage("Sorry, I couldn't find details for that plan.", 'bot');
    }
}

function showEligibility() {
    addMessage("Eligibility criteria for Jubilee Health Insurance:", 'bot');
    const eligibilityDiv = document.createElement('div');
    eligibilityDiv.className = 'eligibility-list';
    let html = '<ul>';
    insuranceData.eligibility.forEach(item => {
        html += `<li>${item}</li>`;
    });
    html += '</ul>';
    eligibilityDiv.innerHTML = html;
    chatBody.appendChild(eligibilityDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(eligibilityDiv);
        }, 500);
    }
    
    showSuggestions([
        "What documents do I need?",
        "How do I apply?",
        "Show me insurance plans"
    ]);
}

function showCoreBenefits() {
    addMessage("Core benefits included in all inpatient plans:", 'bot');
    const benefitsDiv = document.createElement('div');
    benefitsDiv.className = 'benefits-list';
    let html = '<ul>';
    insuranceData.benefits.core.forEach(benefit => {
        html += `<li>${benefit}</li>`;
    });
    html += '</ul>';
    benefitsDiv.innerHTML = html;
    chatBody.appendChild(benefitsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(benefitsDiv);
        }, 500);
    }
    
    showSuggestions([
        "What about optional benefits?",
        "Show me the plans",
        "What are the exclusions?"
    ]);
}

function showOptionalBenefits() {
    addMessage("Optional benefits you can add to your plan:", 'bot');
    const benefitsDiv = document.createElement('div');
    benefitsDiv.className = 'benefits-list';
    let html = '<ul>';
    insuranceData.benefits.optional.forEach(benefit => {
        html += `<li>${benefit}</li>`;
    });
    html += '</ul>';
    benefitsDiv.innerHTML = html;
    chatBody.appendChild(benefitsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(benefitsDiv);
        }, 500);
    }
    
    showSuggestions([
        "How much do these add-ons cost?",
        "Show me the plans",
        "What are the core benefits?"
    ]);
}

function showAllBenefits() {
    addMessage("All available benefits:", 'bot');
    const benefitsDiv = document.createElement('div');
    benefitsDiv.className = 'benefits-list';
    
    let html = '<h4>Core Benefits:</h4><ul>';
    insuranceData.benefits.core.forEach(benefit => {
        html += `<li>${benefit}</li>`;
    });
    html += '</ul>';
    
    html += '<h4>Optional Benefits:</h4><ul>';
    insuranceData.benefits.optional.forEach(benefit => {
        html += `<li>${benefit}</li>`;
    });
    html += '</ul>';
    
    benefitsDiv.innerHTML = html;
    chatBody.appendChild(benefitsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(benefitsDiv);
        }, 500);
    }
    
    showSuggestions([
        "Show me the plans",
        "What are the premium rates?",
        "How do I apply?"
    ]);
}

function showPremiumRates(type) {
    addMessage(`Premium rates for ${type} coverage:`, 'bot');
    const ratesDiv = document.createElement('div');
    ratesDiv.className = 'premium-rates';
    
    let html = '<table><tr><th>Age Group</th>';
    const plans = Object.keys(insuranceData.premiums[type][Object.keys(insuranceData.premiums[type])[0]]);
    plans.forEach(plan => {
        html += `<th>${plan.charAt(0).toUpperCase() + plan.slice(1)}</th>`;
    });
    html += '</tr>';
    
    Object.entries(insuranceData.premiums[type]).forEach(([ageGroup, premiums]) => {
        html += `<tr><td>${ageGroup}</td>`;
        plans.forEach(plan => {
            html += `<td>${formatCurrency(premiums[plan])}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
    
    ratesDiv.innerHTML = html;
    chatBody.appendChild(ratesDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(ratesDiv);
        }, 500);
    }
    
    showSuggestions([
        "Show me the plans",
        "How do I apply?",
        "What are the benefits?"
    ]);
}

function askAboutPremiumType() {
    addMessage("Would you like to see premium rates for inpatient or outpatient coverage?", 'bot');
    showSuggestions([
        "Show inpatient premiums",
        "Show outpatient premiums",
        "Show both"
    ]);
}

function showWaitingPeriods() {
    addMessage("Waiting periods for various conditions:", 'bot');
    const periodsDiv = document.createElement('div');
    periodsDiv.className = 'waiting-periods';
    let html = '<ul>';
    insuranceData.waitingPeriods.forEach(period => {
        html += `<li>${period}</li>`;
    });
    html += '</ul>';
    periodsDiv.innerHTML = html;
    chatBody.appendChild(periodsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(periodsDiv);
        }, 500);
    }
    
    showSuggestions([
        "Show me the plans",
        "What are the benefits?",
        "How do I apply?"
    ]);
}

function showExclusions() {
    addMessage("Conditions and treatments not covered:", 'bot');
    const exclusionsDiv = document.createElement('div');
    exclusionsDiv.className = 'exclusions-list';
    let html = '<ul>';
    insuranceData.exclusions.forEach(exclusion => {
        html += `<li>${exclusion}</li>`;
    });
    html += '</ul>';
    exclusionsDiv.innerHTML = html;
    chatBody.appendChild(exclusionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(exclusionsDiv);
        }, 500);
    }
    
    showSuggestions([
        "What is covered then?",
        "Show me the plans",
        "How do I apply?"
    ]);
}

function showPaymentOptions() {
    addMessage("Payment options available:", 'bot');
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'payment-options';
    let html = '<ul>';
    insuranceData.paymentOptions.forEach(option => {
        html += `<li>${option}</li>`;
    });
    html += '</ul>';
    optionsDiv.innerHTML = html;
    chatBody.appendChild(optionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(optionsDiv);
        }, 500);
    }
    
    showSuggestions([
        "What are the premium rates?",
        "Show me the plans",
        "How do I apply?"
    ]);
}

function showContactInfo() {
    addMessage(translations[userState.currentLanguage].contact, 'bot');
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-info';
    contactDiv.innerHTML = `
        <p><strong>Phone:</strong> 0709 907 000</p>
        <p><strong>Email:</strong> info@jubileekenya.com</p>
        <p><strong>Website:</strong> www.jubileekenya.com</p>
        <p><strong>Branches:</strong> All major towns in Kenya</p>
        <p><strong>Working Hours:</strong> Mon-Fri 8:30AM-5:00PM, Sat 9:00AM-1:00PM</p>
    `;
    chatBody.appendChild(contactDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(contactDiv);
        }, 500);
    }
    
    showSuggestions([
        "Show me the plans",
        "How do I apply?",
        "What are the benefits?"
    ]);
}

function handleUnknownInput() {
    addMessage(translations[userState.currentLanguage].error, 'bot');
    showSuggestions([
        "Show me insurance plans",
        "How much does it cost?",
        "What are the benefits?"
    ]);
}

function handleMultiStepResponse(message) {
    addMessage("I'm still working on multi-step conversations. For now, please ask single questions.", 'bot');
    userState.currentQuestion = null;
}

function handleBudgetQuestion(message) {
    const budgetMatch = message.match(/\b(\d+[kK]?)\b/);
    if (budgetMatch) {
        let budget = parseInt(budgetMatch[1]);
        if (budgetMatch[1].toLowerCase().includes('k')) {
            budget *= 1000;
        }
        userState.collectedData.budget = budget;
    }
    
    if (userState.collectedData.budget) {
        showPlansWithinBudget(userState.collectedData.budget);
    } else {
        askForBudget();
    }
}

function askForBudget() {
    addMessage(translations[userState.currentLanguage].budgetQuestion, 'bot');
    userState.currentQuestion = 'budget';
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'budget-options';
    optionsDiv.innerHTML = `
        <p>Select a budget range:</p>
        <button class="budget-option" data-budget="10000">Under 10,000 KES/month</button>
        <button class="budget-option" data-budget="20000">10,000-20,000 KES/month</button>
        <button class="budget-option" data-budget="30000">20,000-30,000 KES/month</button>
        <button class="budget-option" data-budget="50000">30,000-50,000 KES/month</button>
        <button class="budget-option" data-budget="100000">Over 50,000 KES/month</button>
    `;
    
    chatBody.appendChild(optionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(optionsDiv);
        }, 500);
    }
    
    // Add event listeners to budget buttons
    document.querySelectorAll('.budget-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const budget = parseInt(this.getAttribute('data-budget'));
            addMessage(`Budget: ${formatCurrency(budget)} KES/month`, 'user');
            userState.collectedData.budget = budget;
            userState.currentQuestion = null;
            showPlansWithinBudget(budget);
        });
    });
}

function showPlansWithinBudget(budget) {
    const annualBudget = budget * 12;
    const suitablePlans = [];
    
    // Check all age groups (using 31-40 as example)
    Object.entries(insuranceData.premiums.inpatient['31-40']).forEach(([plan, premium]) => {
        if (premium <= annualBudget) {
            suitablePlans.push({
                plan,
                premium,
                coverage: insuranceData.plans.inpatient[plan].limit
            });
        }
    });
    
    if (suitablePlans.length === 0) {
        addMessage(`No plans fit within your budget of ${formatCurrency(budget)} KES/month. Consider increasing your budget.`, 'bot');
        return;
    }
    
    addMessage(`${translations[userState.currentLanguage].budgetOptions} ${formatCurrency(budget)} KES/month:`, 'bot');
    
    const plansDiv = document.createElement('div');
    plansDiv.className = 'budget-plans';
    
    suitablePlans.forEach(plan => {
        const planDiv = document.createElement('div');
        planDiv.className = 'budget-plan';
        planDiv.innerHTML = `
            <h4>${plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)} Plan</h4>
            <p><strong>Annual Premium:</strong> ${formatCurrency(plan.premium)}</p>
            <p><strong>Monthly Equivalent:</strong> ${formatCurrency(Math.ceil(plan.premium / 12))}</p>
            <p><strong>Coverage Limit:</strong> ${formatCurrency(plan.coverage)}</p>
            <button class="save-quote-btn" data-plan="${plan.plan}" data-type="inpatient">💾 Save Quote</button>
        `;
        plansDiv.appendChild(planDiv);
    });
    
    chatBody.appendChild(plansDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(plansDiv);
        }, 500);
    }
    
    // Add event listeners to save buttons
    document.querySelectorAll('.save-quote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const type = this.getAttribute('data-type');
            saveQuote(plan, type);
        });
    });
    
    showSuggestions([
        "Compare these plans",
        "What are the benefits?",
        "How do I apply?"
    ]);
}

function startPlanRecommendationProcess() {
    addMessage("Let me help you choose the best plan. First, who needs coverage?", 'bot');
    userState.currentQuestion = 'whoCovered';
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'coverage-options';
    optionsDiv.innerHTML = `
        <button class="coverage-option" data-coverage="individual">Just me</button>
        <button class="coverage-option" data-coverage="couple">Me and my spouse</button>
        <button class="coverage-option" data-coverage="family">My whole family</button>
    `;
    
    chatBody.appendChild(optionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(optionsDiv);
        }, 500);
    }
    
    // Add event listeners to coverage buttons
    document.querySelectorAll('.coverage-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const coverage = this.getAttribute('data-coverage');
            addMessage(this.textContent, 'user');
            
            if (coverage === 'individual') {
                userState.collectedData.familyMembers = 1;
            } else if (coverage === 'couple') {
                userState.collectedData.familyMembers = 2;
            } else {
                userState.collectedData.familyMembers = 3; // Default to 3 for family
            }
            
            askAboutAgeGroup();
        });
    });
}

function askAboutAgeGroup() {
    addMessage(translations[userState.currentLanguage].ageQuestion, 'bot');
    userState.currentQuestion = 'ageGroup';
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'age-options';
    optionsDiv.innerHTML = `
        <button class="age-option" data-age="18-30">18-30 years</button>
        <button class="age-option" data-age="31-40">31-40 years</button>
        <button class="age-option" data-age="41-50">41-50 years</button>
        <button class="age-option" data-age="51-59">51-59 years</button>
        <button class="age-option" data-age="60-64">60-64 years</button>
    `;
    
    chatBody.appendChild(optionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(optionsDiv);
        }, 500);
    }
    
    // Add event listeners to age buttons
    document.querySelectorAll('.age-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const ageGroup = this.getAttribute('data-age');
            addMessage(this.textContent, 'user');
            userState.collectedData.ageGroup = ageGroup;
            askAboutCoveragePriority();
        });
    });
}

function askAboutCoveragePriority() {
    addMessage(translations[userState.currentLanguage].coveragePriority, 'bot');
    userState.currentQuestion = 'coveragePriority';
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'priority-options';
    
    coveragePriorities.forEach(priority => {
        const btn = document.createElement('button');
        btn.className = 'priority-option';
        btn.setAttribute('data-priority', priority.id);
        btn.innerHTML = priority.label;
        btn.title = priority.description;
        optionsDiv.appendChild(btn);
    });
    
    chatBody.appendChild(optionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(optionsDiv);
        }, 500);
    }
    
    // Add event listeners to priority buttons
    document.querySelectorAll('.priority-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const priority = this.getAttribute('data-priority');
            addMessage(this.textContent, 'user');
            userState.collectedData.coverageNeeds = [priority];
            askAboutHealthConcerns();
        });
    });
}

function askAboutHealthConcerns() {
    addMessage(translations[userState.currentLanguage].healthConcerns, 'bot');
    userState.currentQuestion = 'healthConcerns';
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'health-options';
    
    healthConcerns.forEach(concern => {
        const btn = document.createElement('button');
        btn.className = 'health-option';
        btn.setAttribute('data-concern', concern.id);
        btn.innerHTML = `${concern.emoji} ${concern.label}`;
        optionsDiv.appendChild(btn);
    });
    
    chatBody.appendChild(optionsDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(optionsDiv);
        }, 500);
    }
    
    // Add event listeners to health buttons
    document.querySelectorAll('.health-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const concern = this.getAttribute('data-concern');
            addMessage(this.textContent, 'user');
            userState.collectedData.healthIssues = [concern];
            providePlanRecommendation();
        });
    });
}

function providePlanRecommendation() {
    userState.currentQuestion = null;
    
    // Simple recommendation logic based on collected data
    let recommendedPlan = 'classic';
    
    if (userState.collectedData.coverageNeeds.includes('hospital') && 
        userState.collectedData.healthIssues.includes('none')) {
        recommendedPlan = 'premier';
    }
    
    if (userState.collectedData.coverageNeeds.includes('chronic') || 
        userState.collectedData.healthIssues.includes('diabetes') || 
        userState.collectedData.healthIssues.includes('hypertension')) {
        recommendedPlan = 'advanced';
    }
    
    if (userState.collectedData.coverageNeeds.includes('comprehensive') || 
        userState.collectedData.familyMembers > 2) {
        recommendedPlan = 'executive';
    }
    
    if (userState.collectedData.healthIssues.includes('cancer') || 
        userState.collectedData.coverageNeeds.includes('maternity')) {
        recommendedPlan = 'royal';
    }
    
    addMessage("Based on your needs, I recommend:", 'bot');
    showPlanDetails(recommendedPlan);
}

function saveQuote(planName, planType) {
    const quote = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        plan: planName,
        type: planType,
        details: planType === 'inpatient' ? insuranceData.plans.inpatient[planName] : 
                { coverage: insuranceData.plans.optional[planName], ...insuranceData.plans.optional }
    };
    
    userState.savedQuotes.push(quote);
    saveQuotesToStorage();
    
    addMessage(translations[userState.currentLanguage].quoteSaved, 'bot');
}

function showSavedQuotes() {
    if (userState.savedQuotes.length === 0) {
        addMessage("You don't have any saved quotes yet. View plans and save them for later reference.", 'bot');
        return;
    }
    
    if (savedQuotesModal) savedQuotesModal.style.display = 'block';
    const quotesList = document.querySelector('.saved-quotes-list');
    quotesList.innerHTML = '';
    
    userState.savedQuotes.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'saved-quote';
        
        let html = `
            <h4>${quote.plan.charAt(0).toUpperCase() + quote.plan.slice(1)} ${quote.type === 'inpatient' ? 'Inpatient' : 'Add-on'}</h4>
            <p><small>Saved on ${quote.date}</small></p>
        `;
        
        if (quote.type === 'inpatient') {
            html += `
                <p><strong>Limit:</strong> ${formatCurrency(quote.details.limit)}</p>
                <p><strong>Pre-existing:</strong> ${formatCurrency(quote.details.preExisting)}</p>
                <p><em>${quote.details.description}</em></p>
            `;
        } else {
            html += `
                <p><strong>Coverage:</strong> ${formatCurrency(quote.details.coverage[quote.plan])}</p>
                <p><em>${quote.details.description}</em></p>
            `;
        }
        
        html += `
            <div class="saved-quote-actions">
                <button class="view-quote-btn" data-id="${quote.id}">👀 View Details</button>
                <button class="delete-quote-btn" data-id="${quote.id}">🗑️ Delete</button>
            </div>
        `;
        
        quoteDiv.innerHTML = html;
        quotesList.appendChild(quoteDiv);
    });
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(quotesList);
        }, 500);
    }
    
    // Add event listeners
    document.querySelectorAll('.view-quote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const quoteId = parseInt(this.getAttribute('data-id'));
            viewSavedQuote(quoteId);
        });
    });
    
    document.querySelectorAll('.delete-quote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const quoteId = parseInt(this.getAttribute('data-id'));
            deleteSavedQuote(quoteId);
        });
    });
}

function viewSavedQuote(quoteId) {
    const quote = userState.savedQuotes.find(q => q.id === quoteId);
    if (!quote) return;
    
    savedQuotesModal.style.display = 'none';
    
    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'plan-card';
    
    let html = `
        <h3>${quote.plan.charAt(0).toUpperCase() + quote.plan.slice(1)} ${quote.type === 'inpatient' ? 'Inpatient Plan' : 'Add-on'}</h3>
        <p><small>Saved on ${quote.date}</small></p>
    `;
    
    if (quote.type === 'inpatient') {
        html += `
            <p><strong>Limit:</strong> ${formatCurrency(quote.details.limit)}</p>
            <p><strong>Pre-existing:</strong> ${formatCurrency(quote.details.preExisting)}</p>
            <p><strong>Chronic (new):</strong> ${formatCurrency(quote.details.chronicNew)}</p>
            <p><strong>Psychiatric:</strong> ${formatCurrency(quote.details.psychiatric)}</p>
            <p><strong>Last Expense:</strong> ${formatCurrency(quote.details.lastExpense)}</p>
            <p><strong>Bed Type:</strong> ${quote.details.bedType}</p>
            <p><em>${quote.details.description}</em></p>
            <p><small>Best for: ${quote.details.bestFor}</small></p>
        `;
    } else {
        html += `
            <p><strong>Coverage:</strong> ${formatCurrency(quote.details.coverage[quote.plan])}</p>
            <p><em>${quote.details.description}</em></p>
            <p><small>Best for: ${quote.details.bestFor}</small></p>
        `;
    }
    
    quoteDiv.innerHTML = html;
    chatBody.appendChild(quoteDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(quoteDiv);
        }, 500);
    }
    
    showSuggestions([
        "Compare this with another plan",
        "Check premium rates",
        "View all saved quotes"
    ]);
}

function deleteSavedQuote(quoteId) {
    userState.savedQuotes = userState.savedQuotes.filter(q => q.id !== quoteId);
    saveQuotesToStorage();
    showSavedQuotes();
    addMessage("Quote deleted successfully.", 'bot');
}

function preparePlanComparison(message) {
    // Extract plan names from message
    const planNames = Object.keys(insuranceData.plans.inpatient).filter(plan => 
        message.toLowerCase().includes(plan.toLowerCase())
    );
    
    if (planNames.length > 0) {
        planNames.forEach(plan => togglePlanComparison(plan));
        showPlanComparison();
    } else {
        addMessage("Which plans would you like to compare? Select from the list below:", 'bot');
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-container';
        
        Object.keys(insuranceData.plans.inpatient).forEach(plan => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = plan.charAt(0).toUpperCase() + plan.slice(1);
            btn.addEventListener('click', () => {
                togglePlanComparison(plan);
                showPlanComparison();
            });
            optionsDiv.appendChild(btn);
        });
        
        chatBody.appendChild(optionsDiv);
        
        // Speak the content if audio mode is on
        if (userState.audioMode) {
            setTimeout(() => {
                speakElementContent(optionsDiv);
            }, 500);
        }
    }
}

function togglePlanComparison(planName) {
    const index = userState.currentComparison.indexOf(planName);
    if (index === -1) {
        if (userState.currentComparison.length < 4) {
            userState.currentComparison.push(planName);
        } else {
            addMessage("You can compare up to 4 plans at a time.", 'bot');
        }
    } else {
        userState.currentComparison.splice(index, 1);
    }
}

function showPlanComparison() {
    if (userState.currentComparison.length === 0) {
        addMessage("No plans selected for comparison. Please select plans to compare.", 'bot');
        return;
    }
    
    if (comparisonModal) comparisonModal.style.display = 'block';
    const planCheckboxes = document.querySelector('.plan-checkboxes');
    const comparisonTable = document.querySelector('.comparison-table');
    const scoreContainer = document.querySelector('.score-container');
    
    // Update plan checkboxes
    planCheckboxes.innerHTML = '';
    Object.keys(insuranceData.plans.inpatient).forEach(plan => {
        const isChecked = userState.currentComparison.includes(plan);
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'plan-checkbox';
        checkboxDiv.innerHTML = `
            <input type="checkbox" id="compare-${plan}" ${isChecked ? 'checked' : ''}>
            <label for="compare-${plan}">${plan.charAt(0).toUpperCase() + plan.slice(1)}</label>
        `;
        
        const checkbox = checkboxDiv.querySelector('input');
        checkbox.addEventListener('change', () => {
            togglePlanComparison(plan);
            showPlanComparison(); // Refresh the comparison
        });
        
        planCheckboxes.appendChild(checkboxDiv);
    });
    
    // Create comparison table
    comparisonTable.innerHTML = '';
    const table = document.createElement('table');
    table.className = 'plan-comparison';
    
    // Table header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Feature</th>';
    userState.currentComparison.forEach(plan => {
        headerRow.innerHTML += `<th>${plan.charAt(0).toUpperCase() + plan.slice(1)}</th>`;
    });
    table.appendChild(headerRow);
    
    // Table rows for each feature
    const features = [
        { name: 'Annual Limit', key: 'limit', format: 'currency' },
        { name: 'Pre-existing Conditions', key: 'preExisting', format: 'currency' },
        { name: 'Chronic Conditions', key: 'chronicNew', format: 'currency' },
        { name: 'Psychiatric Coverage', key: 'psychiatric', format: 'currency' },
        { name: 'Last Expense Benefit', key: 'lastExpense', format: 'currency' },
        { name: 'Bed Type', key: 'bedType', format: 'text' },
        { name: 'Rating', key: 'rating', format: 'stars' },
        { name: 'Best For', key: 'bestFor', format: 'text' }
    ];
    
    features.forEach(feature => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${feature.name}</td>`;
        
        userState.currentComparison.forEach(plan => {
            const planData = insuranceData.plans.inpatient[plan];
            let value = planData[feature.key];
            
            if (feature.format === 'currency') {
                value = formatCurrency(value);
            } else if (feature.format === 'stars') {
                value = '★'.repeat(value) + '☆'.repeat(5 - value);
            }
            
            row.innerHTML += `<td>${value}</td>`;
        });
        
        table.appendChild(row);
    });
    
    comparisonTable.appendChild(table);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(table);
        }, 500);
    }
    
    // Create comparison charts
    createComparisonCharts();
    
    // Calculate and show match score
    calculateMatchScore();
    
    // Add save comparison button
    const saveComparisonBtn = document.createElement('button');
    saveComparisonBtn.textContent = '💾 Save This Comparison';
    saveComparisonBtn.className = 'quick-btn';
    saveComparisonBtn.style.marginTop = '15px';
    saveComparisonBtn.addEventListener('click', saveCurrentComparison);
    scoreContainer.appendChild(saveComparisonBtn);
}

function createComparisonCharts() {
    const coverageCtx = document.getElementById('coverage-chart').getContext('2d');
    const premiumCtx = document.getElementById('premium-chart').getContext('2d');
    
    const plans = userState.currentComparison;
    const labels = plans.map(plan => plan.charAt(0).toUpperCase() + plan.slice(1));
    
    // Coverage chart data
    const coverageData = plans.map(plan => insuranceData.plans.inpatient[plan].limit);
    
    // Premium chart data (using 31-40 age group as example)
    const premiumData = plans.map(plan => insuranceData.premiums.inpatient['31-40'][plan]);
    
    // Destroy existing charts if they exist
    if (window.coverageChart) window.coverageChart.destroy();
    if (window.premiumChart) window.premiumChart.destroy();
    
    // Create coverage chart
    window.coverageChart = new Chart(coverageCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Annual Coverage Limit (KES)',
                data: coverageData,
                backgroundColor: plans.map((_, i) => getPlanColor(i)),
                borderColor: plans.map((_, i) => getPlanColor(i, true)),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Coverage Limits Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
    
    // Create premium chart
    window.premiumChart = new Chart(premiumCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Annual Premium (KES)',
                data: premiumData,
                backgroundColor: plans.map((_, i) => getPlanColor(i)),
                borderColor: plans.map((_, i) => getPlanColor(i, true)),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Premium Comparison (Age 31-40)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
}

function getPlanColor(index, border = false) {
    const colors = [
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(255, 99, 132, 0.7)'
    ];
    
    const borderColors = [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)'
    ];
    
    return border ? borderColors[index % borderColors.length] : colors[index % colors.length];
}

function calculateMatchScore() {
    if (!userState.collectedData.coverageNeeds || userState.collectedData.coverageNeeds.length === 0) {
        return;
    }
    
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.innerHTML = '<h4>Your Plan Match Score</h4>';
    
    userState.currentComparison.forEach(plan => {
        const planData = insuranceData.plans.inpatient[plan];
        let score = 50; // Base score
        
        // Adjust score based on coverage needs
        if (userState.collectedData.coverageNeeds.includes('hospital')) {
            score += (planData.limit / 1000000) * 10;
        }
        
        if (userState.collectedData.coverageNeeds.includes('outpatient')) {
            score += 15; // All plans can add outpatient
        }
        
        if (userState.collectedData.coverageNeeds.includes('maternity')) {
            score += plan === 'premier' || plan === 'advanced' ? 15 : 5;
        }
        
        if (userState.collectedData.coverageNeeds.includes('chronic')) {
            score += (planData.chronicNew / 500000) * 20;
        }
        
        // Adjust for health concerns
        if (userState.collectedData.healthIssues.includes('diabetes') || 
            userState.collectedData.healthIssues.includes('hypertension')) {
            score += (planData.chronicNew / 500000) * 15;
        }
        
        if (userState.collectedData.healthIssues.includes('cancer')) {
            score += (planData.limit / 5000000) * 20;
        }
        
        // Cap score at 100
        score = Math.min(100, Math.max(0, Math.round(score)));
        
        // Create score display
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'score-item';
        scoreDiv.innerHTML = `
            <p>${plan.charAt(0).toUpperCase() + plan.slice(1)}: ${score}% match</p>
            <div class="score-bar">
                <div class="score-fill" style="width: ${score}%"></div>
            </div>
        `;
        
        scoreContainer.appendChild(scoreDiv);
    });
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(scoreContainer);
        }, 500);
    }
}

function saveCurrentComparison() {
    const comparison = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        plans: userState.currentComparison,
        data: userState.currentComparison.map(plan => ({
            plan,
            details: insuranceData.plans.inpatient[plan]
        }))
    };
    
    userState.savedQuotes.push(comparison);
    saveQuotesToStorage();
    
    comparisonModal.style.display = 'none';
    addMessage("Comparison saved! You can view it later under 'My Saved Quotes'.", 'bot');
}

function showPremiumCalculator() {
    addMessage(translations[userState.currentLanguage].calculatorTitle, 'bot');
    
    const calculatorDiv = document.createElement('div');
    calculatorDiv.className = 'calculator-container';
    
    calculatorDiv.innerHTML = `
        <div class="calculator-controls">
            <label for="age-group-select">Select Age Group:</label>
            <select id="age-group-select">
                <option value="18-30">18-30 years</option>
                <option value="31-40">31-40 years</option>
                <option value="41-50">41-50 years</option>
                <option value="51-59">51-59 years</option>
                <option value="60-64">60-64 years</option>
            </select>
            
            <label for="budget-slider">Monthly Budget (KES):</label>
            <input type="range" id="budget-slider" min="2000" max="100000" step="1000" value="30000">
            <div id="budget-value">30,000 KES</div>
            
            <div class="family-configurator">
                <h4>Family Members</h4>
                <div class="family-member">
                    <label>Principal Member</label>
                    <input type="checkbox" id="principal-member" checked disabled>
                </div>
                <div class="family-member">
                    <label>Spouse</label>
                    <input type="checkbox" id="spouse-member">
                </div>
                <div class="family-member">
                    <label>Children</label>
                    <input type="number" id="children-count" min="0" max="10" value="0">
                </div>
            </div>
            
            <button id="calculate-premium-btn" class="quick-btn">Calculate Premium</button>
        </div>
        
        <div class="calculator-results">
            <div class="calculator-chart">
                <canvas id="premium-breakdown-chart"></canvas>
            </div>
            <div class="calculator-breakdown">
                <h4>Premium Breakdown</h4>
                <div id="premium-breakdown"></div>
                <button id="save-calculation-btn" class="quick-btn">💾 Save This Calculation</button>
            </div>
        </div>
    `;
    
    chatBody.appendChild(calculatorDiv);
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(calculatorDiv);
        }, 500);
    }
    
    // Set up event listeners
    document.getElementById('budget-slider').addEventListener('input', function() {
        document.getElementById('budget-value').textContent = formatCurrency(this.value) + ' KES';
    });
    
    document.getElementById('calculate-premium-btn').addEventListener('click', calculatePremium);
    document.getElementById('save-calculation-btn').addEventListener('click', savePremiumCalculation);
    
    chatBody.scrollTop = chatBody.scrollHeight;
}

function calculatePremium() {
    const ageGroup = document.getElementById('age-group-select').value;
    const budget = parseInt(document.getElementById('budget-slider').value);
    const hasSpouse = document.getElementById('spouse-member').checked;
    const childrenCount = parseInt(document.getElementById('children-count').value);
    
    const familyMembers = 1 + (hasSpouse ? 1 : 0) + childrenCount;
    const familyMultiplier = 1 + (hasSpouse ? 0.7 : 0) + (childrenCount * 0.5);
    
    // Find suitable plans within budget
    const suitablePlans = [];
    Object.entries(insuranceData.premiums.inpatient[ageGroup]).forEach(([plan, premium]) => {
        const totalPremium = premium * familyMultiplier;
        if (totalPremium <= budget * 12) { // Compare annual premium to annual budget
            suitablePlans.push({
                plan,
                individualPremium: premium,
                familyPremium: totalPremium,
                monthlyPremium: totalPremium / 12,
                coverage: insuranceData.plans.inpatient[plan].limit
            });
        }
    });
    
    // Sort by premium (low to high)
    suitablePlans.sort((a, b) => a.familyPremium - b.familyPremium);
    
    // Display results
    const breakdownDiv = document.getElementById('premium-breakdown');
    breakdownDiv.innerHTML = '';
    
    if (suitablePlans.length === 0) {
        breakdownDiv.innerHTML = '<p>No plans fit within your budget. Consider increasing your budget or reducing family members.</p>';
        return;
    }
    
    // Show top 3 recommendations
    const topPlans = suitablePlans.slice(0, 3);
    topPlans.forEach((plan, index) => {
        const planDiv = document.createElement('div');
        planDiv.className = 'budget-option';
        planDiv.innerHTML = `
            <h4>${index + 1}. ${plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)} Plan</h4>
            <p><strong>Annual Premium:</strong> ${formatCurrency(plan.familyPremium)}</p>
            <p><strong>Monthly Premium:</strong> ${formatCurrency(plan.monthlyPremium)}</p>
            <p><strong>Coverage Limit:</strong> ${formatCurrency(plan.coverage)}</p>
            <p><em>${insuranceData.plans.inpatient[plan.plan].description}</em></p>
            <button class="save-quote-btn" data-plan="${plan.plan}" data-type="inpatient">💾 Save Quote</button>
        `;
        breakdownDiv.appendChild(planDiv);
    });
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(breakdownDiv);
        }, 500);
    }
    
    // Create chart
    const ctx = document.getElementById('premium-breakdown-chart').getContext('2d');
    if (window.premiumBreakdownChart) window.premiumBreakdownChart.destroy();
    
    window.premiumBreakdownChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topPlans.map(plan => plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)),
            datasets: [{
                label: 'Monthly Premium (KES)',
                data: topPlans.map(plan => plan.monthlyPremium),
                backgroundColor: topPlans.map((_, i) => getPlanColor(i)),
                borderColor: topPlans.map((_, i) => getPlanColor(i, true)),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Premium Comparison'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatCurrency(value);
                        }
                    }
                }
            }
        }
    });
    
    // Add event listeners to save buttons
    document.querySelectorAll('.save-quote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const type = this.getAttribute('data-type');
            saveQuote(plan, type);
        });
    });
}

function savePremiumCalculation() {
    const ageGroup = document.getElementById('age-group-select').value;
    const budget = parseInt(document.getElementById('budget-slider').value);
    const hasSpouse = document.getElementById('spouse-member').checked;
    const childrenCount = parseInt(document.getElementById('children-count').value);
    
    const calculation = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        type: 'premium_calculation',
        data: {
            ageGroup,
            budget,
            familyMembers: 1 + (hasSpouse ? 1 : 0) + childrenCount,
            results: []
        }
    };
    
    // Get top 3 plans
    const suitablePlans = [];
    Object.entries(insuranceData.premiums.inpatient[ageGroup]).forEach(([plan, premium]) => {
        const familyMultiplier = 1 + (hasSpouse ? 0.7 : 0) + (childrenCount * 0.5);
        const totalPremium = premium * familyMultiplier;
        
        if (totalPremium <= budget * 12) {
            suitablePlans.push({
                plan,
                individualPremium: premium,
                familyPremium: totalPremium,
                monthlyPremium: totalPremium / 12,
                coverage: insuranceData.plans.inpatient[plan].limit
            });
        }
    });
    
    suitablePlans.sort((a, b) => a.familyPremium - b.familyPremium);
    calculation.data.results = suitablePlans.slice(0, 3);
    
    userState.savedQuotes.push(calculation);
    saveQuotesToStorage();
    
    addMessage("Premium calculation saved! You can view it later under 'My Saved Quotes'.", 'bot');
}

function startClaimsProcess() {
    if (claimsModal) claimsModal.style.display = 'block';
    const stepsDiv = document.querySelector('.claims-steps');
    const formContainer = document.querySelector('.claims-form-container');
    
    // Show steps
    stepsDiv.innerHTML = '<h4>Claims Process Steps:</h4><ol>';
    insuranceData.claimsProcess.forEach(step => {
        stepsDiv.innerHTML += `
            <li>
                <strong>${step.title}</strong>
                <p>${step.description}</p>
                ${step.documents.length > 0 ? 
                    `<p>Documents required: ${step.documents.join(', ')}</p>` : ''}
            </li>
        `;
    });
    stepsDiv.innerHTML += '</ol>';
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(stepsDiv);
        }, 500);
    }
    
    // Show initial form
    formContainer.innerHTML = `
        <div class="claims-step active" data-step="1">
            <h4>Start Your Claim</h4>
            <form class="claims-form">
                <div class="form-group">
                    <label for="claim-type">Type of Claim:</label>
                    <select id="claim-type">
                        <option value="inpatient">Inpatient/Hospitalization</option>
                        <option value="outpatient">Outpatient</option>
                        <option value="maternity">Maternity</option>
                        <option value="dental">Dental</option>
                        <option value="optical">Optical</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="claim-date">Date of Treatment:</label>
                    <input type="date" id="claim-date">
                </div>
                <button type="button" class="next-step-btn">Next</button>
            </form>
        </div>
    `;
    
    // Speak the content if audio mode is on
    if (userState.audioMode) {
        setTimeout(() => {
            speakElementContent(formContainer);
        }, 500);
    }
    
    // Set up event listeners
    document.querySelector('.next-step-btn').addEventListener('click', nextClaimsStep);
}

function nextClaimsStep() {
    const currentStep = document.querySelector('.claims-step.active');
    const currentStepNum = parseInt(currentStep.getAttribute('data-step'));
    const formContainer = document.querySelector('.claims-form-container');
    
    // Save data from current step
    if (currentStepNum === 1) {
        userState.claimsData.type = document.getElementById('claim-type').value;
        userState.claimsData.date = document.getElementById('claim-date').value;
    }
    // Add more steps as needed
    
    // Show next step
    if (currentStepNum < 5) {
        currentStep.classList.remove('active');
        
        const nextStepDiv = document.createElement('div');
        nextStepDiv.className = 'claims-step active';
        nextStepDiv.setAttribute('data-step', currentStepNum + 1);
        
        // Customize form for each step
        switch(currentStepNum + 1) {
            case 2:
                nextStepDiv.innerHTML = `
                    <h4>Treatment Details</h4>
                    <form class="claims-form">
                        <div class="form-group">
                            <label for="hospital-name">Hospital/Clinic Name:</label>
                            <input type="text" id="hospital-name">
                        </div>
                        <div class="form-group">
                            <label for="doctor-name">Treating Doctor:</label>
                            <input type="text" id="doctor-name">
                        </div>
                        <div class="form-group">
                            <label for="diagnosis">Diagnosis:</label>
                            <input type="text" id="diagnosis">
                        </div>
                        <button type="button" class="prev-step-btn">Previous</button>
                        <button type="button" class="next-step-btn">Next</button>
                    </form>
                `;
                break;
            case 3:
                nextStepDiv.innerHTML = `
                    <h4>Documents Upload</h4>
                    <form class="claims-form">
                        <div class="form-group">
                            <label for="doctor-report">Doctor's Report:</label>
                            <input type="file" id="doctor-report">
                        </div>
                        <div class="form-group">
                            <label for="bills">Medical Bills:</label>
                            <input type="file" id="bills">
                        </div>
                        <div class="form-group">
                            <label for="receipts">Payment Receipts:</label>
                            <input type="file" id="receipts">
                        </div>
                        <button type="button" class="prev-step-btn">Previous</button>
                        <button type="button" class="next-step-btn">Next</button>
                    </form>
                `;
                break;
            case 4:
                nextStepDiv.innerHTML = `
                    <h4>Review Your Claim</h4>
                    <div class="claim-summary">
                        <p><strong>Claim Type:</strong> ${userState.claimsData.type}</p>
                        <p><strong>Date of Treatment:</strong> ${userState.claimsData.date}</p>
                        <!-- Add more summary info from previous steps -->
                    </div>
                    <button type="button" class="prev-step-btn">Previous</button>
                    <button type="button" class="submit-claim-btn">Submit Claim</button>
                `;
                break;
            case 5:
                nextStepDiv.innerHTML = `
                    <h4>Claim Submitted Successfully</h4>
                    <p>Your claim has been submitted. Here's your reference number: <strong>JCL-${Date.now().toString().slice(-6)}</strong></p>
                    <p>We'll process your claim within 5-7 working days. You'll receive an SMS with updates.</p>
                    <button type="button" class="finish-claim-btn">Finish</button>
                `;
                break;
        }
        
        formContainer.innerHTML = '';
        formContainer.appendChild(nextStepDiv);
        
        // Speak the content if audio mode is on
        if (userState.audioMode) {
            setTimeout(() => {
                speakElementContent(nextStepDiv);
            }, 500);
        }
        
        // Set up event listeners for new buttons
        if (nextStepDiv.querySelector('.prev-step-btn')) {
            nextStepDiv.querySelector('.prev-step-btn').addEventListener('click', prevClaimsStep);
        }
        
        if (nextStepDiv.querySelector('.next-step-btn')) {
            nextStepDiv.querySelector('.next-step-btn').addEventListener('click', nextClaimsStep);
        }
        
        if (nextStepDiv.querySelector('.submit-claim-btn')) {
            nextStepDiv.querySelector('.submit-claim-btn').addEventListener('click', submitClaim);
        }
        
        if (nextStepDiv.querySelector('.finish-claim-btn')) {
            nextStepDiv.querySelector('.finish-claim-btn').addEventListener('click', () => {
                claimsModal.style.display = 'none';
                addMessage("Your claim has been submitted successfully. Is there anything else I can help you with?", 'bot');
            });
        }
    }
}

function prevClaimsStep() {
    const currentStep = document.querySelector('.claims-step.active');
    const currentStepNum = parseInt(currentStep.getAttribute('data-step'));
    const formContainer = document.querySelector('.claims-form-container');
    
    if (currentStepNum > 1) {
        currentStep.classList.remove('active');
        
        const prevStepDiv = document.createElement('div');
        prevStepDiv.className = 'claims-step active';
        prevStepDiv.setAttribute('data-step', currentStepNum - 1);
        
        // Recreate previous step form
        switch(currentStepNum - 1) {
            case 1:
                prevStepDiv.innerHTML = `
                    <h4>Start Your Claim</h4>
                    <form class="claims-form">
                        <div class="form-group">
                            <label for="claim-type">Type of Claim:</label>
                            <select id="claim-type">
                                <option value="inpatient" ${userState.claimsData.type === 'inpatient' ? 'selected' : ''}>Inpatient/Hospitalization</option>
                                <option value="outpatient" ${userState.claimsData.type === 'outpatient' ? 'selected' : ''}>Outpatient</option>
                                <option value="maternity" ${userState.claimsData.type === 'maternity' ? 'selected' : ''}>Maternity</option>
                                <option value="dental" ${userState.claimsData.type === 'dental' ? 'selected' : ''}>Dental</option>
                                <option value="optical" ${userState.claimsData.type === 'optical' ? 'selected' : ''}>Optical</option>
                                <option value="other" ${userState.claimsData.type === 'other' ? 'selected' : ''}>Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="claim-date">Date of Treatment:</label>
                            <input type="date" id="claim-date" value="${userState.claimsData.date || ''}">
                        </div>
                        <button type="button" class="next-step-btn">Next</button>
                    </form>
                `;
                break;
            // Add cases for other steps as needed
        }
        
        formContainer.innerHTML = '';
        formContainer.appendChild(prevStepDiv);
        
        // Speak the content if audio mode is on
        if (userState.audioMode) {
            setTimeout(() => {
                speakElementContent(prevStepDiv);
            }, 500);
        }
        
        // Set up event listeners
        if (prevStepDiv.querySelector('.next-step-btn')) {
            prevStepDiv.querySelector('.next-step-btn').addEventListener('click', nextClaimsStep);
        }
    }
}

function submitClaim() {
    // In a real implementation, this would send data to the server
    nextClaimsStep(); // Move to confirmation step
}

function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getResponseBasedOnMood(responses) {
    if (userState.personality === 'happy') {
        return responses[0] + (userState.urgency ? " ⚡" : " 😊");
    } else if (userState.personality === 'sad') {
        return responses[1] + (userState.urgency ? " ⚠️" : " 🤗");
    }
    return responses[2] + (userState.urgency ? " ⏱️" : "");
}