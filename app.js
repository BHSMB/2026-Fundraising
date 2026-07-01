// --- STATE MANAGEMENT ---
let currentRaised = 0;
let currentUserRaised = 0;
let currentUserHistory = []; //Tracks specific individual donations
const goalAmount = 30000;

const allowedUsers = [

    //Staff//
    { firstName: "Samantha", lastName: "Herskowitz", personalGoal: 400 },
    { firstName: "Gary", lastName: "Shur", personalGoal: 400 },
    { firstName: "George", lastName: "Lavelle", personalGoal: 400 },
    { firstName: "Michael", lastName: "Fatouros", personalGoal: 400 },
    { firstName: "Gabriella", lastName: "Megale", personalGoal: 400 },
    { firstName: "Christopher", lastName: "Camizzi", personalGoal: 400 },
    { firstName: "Brian", lastName: "Thomas", personalGoal: 400 },
    { firstName: "Aiden", lastName: "Carr", personalGoal: 400 },
    { firstName: "Samantha", lastName: "Price", personalGoal: 400 },
    { firstName: "Katie", lastName: "Sorrentino", personalGoal: 400 },
    { firstName: "Liz", lastName: "Jessen", personalGoal: 400 },
    { firstName: "Lori", lastName: "Law", personalGoal: 400 },
    { firstName: "Giancarlo", lastName: "Megale", personalGoal: 400 },

    //Woodwinds//
    { firstName: "Sadon", lastName: "Smith", personalGoal: 400 },
    { firstName: "Analia", lastName: "Rosario", personalGoal: 400 },
    { firstName: "Ava", lastName: "Gill", personalGoal: 400 },
    { firstName: "Camryn", lastName: "Banatwala", personalGoal: 400 },
    { firstName: "Cassandra", lastName: "Ortiz", personalGoal: 400 },
    { firstName: "Corinne", lastName: "Hill", personalGoal: 400 },
    { firstName: "Daysie", lastName: "Larin", personalGoal: 400 },
    { firstName: "Kairi", lastName: "Hollingsworth", personalGoal: 400 },
    { firstName: "Gabriel", lastName: "Lopez", personalGoal: 400 },
    { firstName: "Isabella", lastName: "Romero", personalGoal: 400 },
    { firstName: "Leila", lastName: "Hernandez", personalGoal: 400 },
    { firstName: "Lucia", lastName: "Figueroa", personalGoal: 400 },
    { firstName: "Makayla", lastName: "Schumacher", personalGoal: 400 },
    { firstName: "Miranda", lastName: "Varguez", personalGoal: 400 },
    { firstName: "Zoey", lastName: "Arlington", personalGoal: 400 },
    { firstName: "Lyle", lastName: "Tor", personalGoal: 400 },
    { firstName: "Melanie", lastName: "Garcia", personalGoal: 400 },
    { firstName: "Mia", lastName: "Zacchino", personalGoal: 400 },


    //Brass//
    { firstName: "Travis", lastName: "Kui", personalGoal: 400 },
    { firstName: "Isabella", lastName: "Mendez", personalGoal: 400 },
    { firstName: "Justen", lastName: "Fernandez", personalGoal: 400 },
    { firstName: "Jared", lastName: "Mungroo", personalGoal: 400 },
    { firstName: "Samson", lastName: "Caraballo", personalGoal: 400 },
    { firstName: "Abigail", lastName: "Flores", personalGoal: 400 },
    { firstName: "Ashley", lastName: "Polanco", personalGoal: 400 },
    { firstName: "Mia", lastName: "Mejia Rojas", personalGoal: 400 },
    { firstName: "Aliyahna", lastName: "Fana", personalGoal: 400 },
    { firstName: "Joseph", lastName: "Gebhardt", personalGoal: 400 },
    { firstName: "Ashley", lastName: "Sanchez-Hernandez", personalGoal: 400 },
    { firstName: "Kris", lastName: "Gonzalez", personalGoal: 400 },
    { firstName: "Maxine Grace", lastName: "Tacolod", personalGoal: 400 },
    { firstName: "Nateshrohan", lastName: "Sendhivel", personalGoal: 400 },
    { firstName: "Rhys Jaden", lastName: "Pipit", personalGoal: 400 },
    { firstName: "Samuel", lastName: "Ballinas", personalGoal: 400 },

    //Battery
    { firstName: "Amaiya", lastName: "Ratliff", personalGoal: 400 },
    { firstName: "Antonio", lastName: "DeJesus", personalGoal: 400 },
    { firstName: "Charlie", lastName: "Wilson", personalGoal: 400 },
    { firstName: "Christopher", lastName: "Gonzalez", personalGoal: 400 },
    { firstName: "Eleazar", lastName: "Bolesa", personalGoal: 400 },
    { firstName: "Gabriella", lastName: "Leone", personalGoal: 400 },
    { firstName: "Jordynn", lastName: "Besta", personalGoal: 400 },
    { firstName: "Joseph", lastName: "Giovanni", personalGoal: 400 },
    { firstName: "Kimberly", lastName: "Vega", personalGoal: 400 },
    { firstName: "Luis", lastName: "Soriano", personalGoal: 400 },
    { firstName: "Miguel", lastName: "Garcia", personalGoal: 400 },
    { firstName: "Rayyan", lastName: "Khokhar", personalGoal: 400 },
    { firstName: "Shanae", lastName: "Allen", personalGoal: 400 },
    { firstName: "Xavier", lastName: "Nunez", personalGoal: 400 },
    { firstName: "Zoe", lastName: "Buzinkai", personalGoal: 400 },

    //Pit
    { firstName: "Emi Psalmuel", lastName: "Pipit", personalGoal: 400 },
    { firstName: "Ethan", lastName: "Almaria", personalGoal: 400 },
    { firstName: "Isabella", lastName: "Kim", personalGoal: 400 },
    { firstName: "Jeffery", lastName: "Amaro", personalGoal: 400 },
    { firstName: "Julian", lastName: "Salinas", personalGoal: 400 },
    { firstName: "Lynn", lastName: "Nguyen", personalGoal: 400 },
    { firstName: "Sebastian", lastName: "Sanchez", personalGoal: 400 },
    { firstName: "Sofia", lastName: "Paredes", personalGoal: 400 },
    { firstName: "Stella", lastName: "Beninghove", personalGoal: 400 },

    //Color Guard
    { firstName: "Abigail", lastName: "Hill", personalGoal: 400 },
    { firstName: "Anacaren", lastName: "Rivera-Martinez", personalGoal: 400 },
    { firstName: "Anastacia", lastName: "Camacho", personalGoal: 400 },
    { firstName: "Ayden", lastName: "Sackman", personalGoal: 400 },
    { firstName: "Briannaliz", lastName: "Matias", personalGoal: 400 },
    { firstName: "Caroline", lastName: "Americk", personalGoal: 400 },
    { firstName: "Destiny", lastName: "Duverglas", personalGoal: 400 },
    { firstName: "Elsie", lastName: "Mechah", personalGoal: 400 },
    { firstName: "Faith", lastName: "Halsey", personalGoal: 400 },
    { firstName: "Fatima", lastName: "Tounkara", personalGoal: 400 },
    { firstName: "Gana", lastName: "Khalil", personalGoal: 400 },
    { firstName: "Gomana", lastName: "Khalil", personalGoal: 400 },
    { firstName: "Isabella", lastName: "Matera", personalGoal: 400 },
    { firstName: "Maria", lastName: "Santos", personalGoal: 400 },
    { firstName: "Meg", lastName: "Franco", personalGoal: 400 },
    { firstName: "Meredith", lastName: "Juarez", personalGoal: 400 },
    { firstName: "Mia", lastName: "Mancini", personalGoal: 400 },
    { firstName: "Micheal", lastName: "Maharaj", personalGoal: 400 },
    { firstName: "Raquel", lastName: "Collazo", personalGoal: 400 },
    { firstName: "Renzo", lastName: "Pasion", personalGoal: 400 },
    { firstName: "Sofia", lastName: "Balza", personalGoal: 400 },
    { firstName: "Trisha", lastName: "Shah", personalGoal: 400 }
];

let loggedInUser = null; 
let currentDayIndexGlobal = 0;

// Link to Google Apps Script (For Spreadsheet)
const CONFIG_URL = "https://script.google.com/macros/s/AKfycbxirbQqB31Jm9blojaJM2v0xQr-hI4-DaVw93wCiGOKbn5Nqz_d4heFg-l3KpA8qRWdfQ/exec";

const campaignStart = new Date("2026-06-09T19:30:00");
const campaignDeadline = new Date("2026-11-06T00:00:00");

// --- DOM ELEMENTS ---
const loginModal = document.getElementById('login-modal');
const navLoginBtn = document.getElementById('nav-login-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const raisedAmountSpan = document.getElementById('raised-amount');
const progressFill = document.getElementById('progress-fill');
const countdownTimerEl = document.getElementById('countdown-timer');
const historyChartTitle = document.getElementById('history-chart-title');
const progressPercentageLabel = document.getElementById('progress-percentage-label');

// New separate wrappers
const growthChartWrapper = document.getElementById('growth-chart-wrapper');
const historyChartWrapper = document.getElementById('history-chart-wrapper');

// --- CHART 1 SETUP (CUMULATIVE GROWTH) ---
const ctxGrowth = document.getElementById('growthChartCanvas').getContext('2d');
const growthChart = new Chart(ctxGrowth, {
    type: 'line',
    data: {
        labels: [], 
        datasets: [
            {
                label: 'Actual Progress ($)',
                data: [], 
                borderColor: '#2ecc71', 
                backgroundColor: 'rgba(46, 204, 113, 0.05)',
                fill: true,
                stepped: true,
                tension: 0,
                borderWidth: 3
            },
            {
                label: 'Future Projection ($)',
                data: [], 
                borderColor: '#e67e22', 
                backgroundColor: 'transparent',
                fill: false,
                borderDash: [6, 6], 
                tension: 0,
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { 
            y: { 
                beginAtZero: true, 
                title: { display: true, text: 'Total Amount Raised ($)' } 
            } 
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        let value = context.parsed.y;
                        
                        if (context.datasetIndex === 1) {
                            return `${label}: $${value.toLocaleString()} (Target: $${window.dailyProjectedRate}/day)`;
                        }
                        
                        //Standard display for actual progress
                        return `${label}: $${value.toLocaleString()}`;
                    }
                }
            }
        }
    }
});

// --- CHART 2 SETUP (DONATION HISTORY) ---
const ctxHistory = document.getElementById('historyChartCanvas').getContext('2d');
const historyChart = new Chart(ctxHistory, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Individual Donation Amount ($)',
            data: [],
            backgroundColor: '#3498db',
            borderRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { 
            y: { 
                beginAtZero: true, 
                title: { display: true, text: 'Donation Size ($)' } 
            },
            x: {
                ticks: { 
                    display: false //Hide date on axis
                }, 
                title: { display: true, text: 'Timeline Progress' }
            }
        }
    }
});

//Loading data from Google Sheets
async function loadDonationTotal() {
    try {
        raisedAmountSpan.textContent = "Loading..."; 
        
        let url = CONFIG_URL;
        if (loggedInUser) {
            url += `?firstName=${encodeURIComponent(loggedInUser.firstName)}&lastName=${encodeURIComponent(loggedInUser.lastName)}`;
        }

        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();
        
        currentRaised = data.totalRaised || 0;       
        currentUserRaised = data.userRaised || 0; 
        currentUserHistory = data.userHistory || [];
        
        updateUI(); 
    } catch (error) {
        console.error("Error loading data:", error);
        raisedAmountSpan.textContent = "Error loading total"; 
    }
}

loadDonationTotal();

// --- UI UPDATE FUNCTION ---
function updateUI() {
    raisedAmountSpan.textContent = `$${currentRaised.toLocaleString()}`;
    
    let percentage = (currentRaised / goalAmount) * 100;
    if (percentage > 100) percentage = 100;
    
    //Vertical Growth for progress bar
    progressFill.style.height = `${percentage}%`;
    progressFill.textContent = "";
    
    if (progressPercentageLabel) {
        progressPercentageLabel.textContent = `${Math.round(percentage)}%`;
    }

    const totalDurationMs = campaignDeadline - campaignStart;
    const totalDays = Math.ceil(totalDurationMs / (1000 * 60 * 60 * 24)); 
    
    const now = new Date();
    const timeElapsedMs = now - campaignStart;
    
    const startMidnight = new Date(campaignStart.getFullYear(), campaignStart.getMonth(), campaignStart.getDate());
    const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const currentDayIdx = Math.round((nowMidnight - startMidnight) / (1000 * 60 * 60 * 24));

    if (loggedInUser) {
        const personalGoal = loggedInUser.personalGoal || 400;
        
        let growthLabels = [];
        let actualLineData = [];
        let projectionLineData = [];
        
        let historyLabels = [];
        let historyData = [];
        let maxDailyDonation = 0;

        const daysRemaining = Math.max(1, totalDays - currentDayIdx);
        const remainingToRaise = Math.max(0, personalGoal - currentUserRaised);
        const projectedRateNeeded = remainingToRaise / daysRemaining;
        
        window.dailyProjectedRate = projectedRateNeeded.toFixed(2);    

        const donationsByDateMap = {};
        if (Array.isArray(currentUserHistory)) {
            currentUserHistory.forEach(entry => {
                if (entry && entry.date && entry.date !== "Unknown") {
                    const cleanKey = String(entry.date).trim().toLowerCase(); // "yyyy-mm-dd"
                    if (!donationsByDateMap[cleanKey]) donationsByDateMap[cleanKey] = 0;
                    donationsByDateMap[cleanKey] += Number(entry.amount) || 0;
                }
            });
        }

        let runningTotal = 0;


        for (let i = 0; i <= totalDays; i++) {
            let loopDate = new Date(campaignStart.getTime() + (i * 24 * 60 * 60 * 1000));
            
            let year = loopDate.getFullYear();
            let month = String(loopDate.getMonth() + 1).padStart(2, '0');
            let day = String(loopDate.getDate()).padStart(2, '0');
            let strictDateKey = `${year}-${month}-${day}`; 
            
            let dateStringDisplay = loopDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            let tooltipDateLabel = loopDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            if (i === 0) {
                growthLabels.push(`Start (${dateStringDisplay})`);
            } else if (i === totalDays) {
                growthLabels.push(`End (${dateStringDisplay})`);
            } else if (i % 7 === 0) {
                growthLabels.push(dateStringDisplay);
            } else {
                growthLabels.push("");
            }

            historyLabels.push(tooltipDateLabel); 

            //Extract the data values for this day
            let dailyDonation = donationsByDateMap[strictDateKey] || 0;

            //Populate History Bar Chart array
            historyData.push(dailyDonation);
            if (dailyDonation > maxDailyDonation) {
                maxDailyDonation = dailyDonation;
            }

            //Populate Cumulative Growth Line array
            if (i <= currentDayIdx) {
                runningTotal += dailyDonation; //Add today's money to the running sum
                actualLineData.push(runningTotal); //Push the cumulative total up to this day
                
                //Link the projection line to current total of the day
                if (i === currentDayIdx) {
                    projectionLineData.push(runningTotal);
                } else {
                    projectionLineData.push(null); 
                }
            } else {
                let daysIntoFuture = i - currentDayIdx;
                let projectedValue = runningTotal + (projectedRateNeeded * daysIntoFuture);
                projectionLineData.push(Number(projectedValue.toFixed(2)));
                actualLineData.push(null); 
            }
        }

        //Update the Growth Chart
        growthChart.data.labels = growthLabels;
        growthChart.data.datasets[0].label = `${loggedInUser.firstName}'s Progress (Goal: $${personalGoal})`;
        growthChart.data.datasets[0].data = actualLineData;       
        growthChart.data.datasets[1].data = projectionLineData;   
        growthChart.update();

        //Update the History Chart
        if (historyChart && historyChart.options?.scales?.y) {
            historyChart.options.scales.y.max = maxDailyDonation > 0 ? maxDailyDonation + 50 : 50;
            
            const formattedUserTotal = currentUserRaised.toLocaleString();
            if (historyChartTitle) {
                historyChartTitle.textContent = `Donation Breakdown History (Total Raised: $${formattedUserTotal})`;
            }
            
            if (historyChart.options.plugins && historyChart.options.plugins.title) {
                historyChart.options.plugins.title.display = false;
            }
            
            historyChart.data.labels = historyLabels;
            historyChart.data.datasets[0].data = historyData;
            historyChart.update();
        }
    }
}

// --- COUNTDOWN LOGIC ---
function updateCountdown() {
    const now = new Date().getTime();
    const distance = campaignDeadline.getTime() - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const format = (num) => String(num).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownTimerEl.textContent = "CAMPAIGN CONCLUDED";
        countdownTimerEl.style.color = "#7f8c8d"; 
    } else {
        countdownTimerEl.textContent = `${format(days)}d : ${format(hours)}h : ${format(minutes)}m : ${format(seconds)}s`;
    }
}
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// --- MODAL & LOGIN TOGGLES ---
navLoginBtn.addEventListener('click', () => loginModal.classList.remove('hidden'));
closeModalBtn.addEventListener('click', () => loginModal.classList.add('hidden'));
window.addEventListener('click', (e) => { if (e.target === loginModal) loginModal.classList.add('hidden'); });

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstNameInput = document.getElementById('first-input').value.trim();
    const lastNameInput = document.getElementById('surname-input').value.trim();
    const validUser = allowedUsers.find(user => 
        user.firstName.toLowerCase() === firstNameInput.toLowerCase() && 
        user.lastName.toLowerCase() === lastNameInput.toLowerCase()
    );

    if (validUser) {
        loginError.style.display = 'none';
        loggedInUser = validUser; 
        loadDonationTotal();
        
        //Show BOTH charts on login
        growthChartWrapper.classList.remove('hidden');
        historyChartWrapper.classList.remove('hidden');
        
        navLoginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        loginModal.classList.add('hidden');
        loginForm.reset();
        
        growthChart.resize();
        historyChart.resize();
    } else {
        loginError.style.display = 'block';
    }
});

logoutBtn.addEventListener('click', function() {
    loggedInUser = null; 
    
    //Hide charts on logout
    growthChartWrapper.classList.add('hidden'); 
    historyChartWrapper.classList.add('hidden'); 
    
    logoutBtn.classList.add('hidden');
    navLoginBtn.classList.remove('hidden');
    updateUI();
    if (historyChartTitle) historyChartTitle.textContent = "Donation Breakdown History"; 
});