export const dashboardMeta = { activeMonth: "May", subtitle: "May 2026" };

export const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const homeMetrics = {
  cash: 23734,
  income: 10665,
  spending: 9171,
  investments: 112784,
  actualSurplus: 1494,
};

export const monthlyCloseout = [
  ["Bottom Line", "May was tight, but the main goals stayed on track. Investing, Kids College, Vacation, and the Bigger House Goal were fully funded."],
  ["Watch Point", "ASH spending was the pressure point. Gifts and Grandma / House Repairs were emptied, and ASH carries a small negative balance."],
  ["Cash Plan", "After closeout payments, move about $3,701 from SoFi to Chase to restore the $5,000 Chase cushion."],
];

export const allocation = { housePaydown: 945.60, houseBrokerage: 236.40 };

export const budgetRows = [
  ["Housing",2450,2449.62,false,null],
  ["Car",350,434.35,false,null],
  ["Utilities",500,527.42,false,null],
  ["Food",1350,1743.42,false,null],
  ["Life Insurance / Will",75,47.54,false,null],
  ["Vacations",100,100,true,3500],
  ["Bigger House Goal",1182,1182,false,null],
  ["Gifts",250,0,true,0],
  ["Grandma / House Repairs",290,0,true,0],
  ["ASH",1000,3583.10,true,-64.81],
  ["CK",100,0,true,0],
  ["Subscriptions",100,78.83,false,null],
  ["Random",150,223.08,false,null],
  ["Medical Debt",200,83.34,false,null],
  ["Kids College",667,666.67,false,null],
  ["Investing",1000,1000,false,null],
].map(([category,budget,actual,fund,endingFund]) => ({category,budget,actual,fund,endingFund}));

export const fundBalances = [
  ["Emergency Fund",20000],
  ["Car Insurance Reserve",600],
  ["Vacation",3500],
  ["Grandma / House Repairs",0],
  ["Gifts",0],
  ["ASH",-64.81],
  ["CK",0],
].map(([name,balance]) => ({name,balance}));

export const netWorthTrend = [
  ["Jan",120500],
  ["Feb",122300],
  ["Mar",126900],
  ["Apr",128200],
  ["May",135562],
].map(([month,netWorth]) => ({month,netWorth}));

export const spendTransactions = {
  Housing: [["5/4","Lakeview mortgage payment",2449.62]],
  Car: [
    ["5/7","Costco Gas",47.36],
    ["5/20","Costco Gas",60.24],
    ["5/23","Kwik Kar",18.50],
    ["5/24","Vehicle registration",76.25],
    ["5/24","Texas.gov service fee",2.00],
    ["5/31","Other gas / tolls / minor car",80.00],
    ["5/31","Car insurance reserve",150.00],
  ],
  Utilities: [
    ["5/8","AT&T normal family plan portion",111.00],
    ["5/27","Farmers Electric",194.00],
    ["5/8","Apple / AT&T related utility bill",75.70],
    ["5/17","Kaufman County M",75.16],
    ["5/21","Forney Lake Water",71.56],
  ],
  Food: [
    ["5/5","Walmart WMTPAY",94.62],
    ["5/5","Walmart.com",129.14],
    ["5/8","Walmart WMTPAY",89.94],
    ["5/7","WM Supercenter",2.17],
    ["5/6","Chick-fil-A",8.98],
    ["5/7","Whataburger",15.69],
    ["5/15","Whataburger",13.52],
    ["5/16","TST 30 Brunch House",112.88],
    ["5/21","Whataburger",13.52],
    ["5/31","Costco warehouse purchases moved to Food",818.48],
  ],
  "Life Insurance / Will": [["5/31","Life insurance / will",47.54]],
  Vacations: [["5/31","Vacation fund allocation",100.00]],
  "Bigger House Goal": [
    ["5/31","Extra mortgage principal",945.60],
    ["5/31","House brokerage contribution",236.40],
  ],
  Gifts: [["5/31","Gifts fund emptied to offset ASH and keep Bigger House fully funded",0]],
  "Grandma / House Repairs": [["5/31","May funding skipped / fund zeroed to keep Bigger House fully funded",0]],
  ASH: [
    ["5/31","ASH net spending per audit register",3583.10],
    ["5/31","Gifts fund used against ASH / May correction",-1000.00],
    ["5/31","Grandma / House Repairs fund used against May correction",-290.00],
    ["5/31","Remaining ASH carryforward balance",-64.81],
  ],
  CK: [],
  Subscriptions: [
    ["5/4","Apple.com/bill",9.99],
    ["5/6","Netflix",9.73],
    ["5/7","Apple.com/bill",0.99],
    ["5/8","Apple.com/bill",21.64],
    ["5/31","Other subscriptions",36.48],
  ],
  Random: [
    ["5/8","AT&T excess paid to help family after car repair",195.08],
    ["5/31","Random / one-off items",28.00],
  ],
  "Medical Debt": [
    ["5/12","Urology Clinics",10.00],
    ["5/31","Medical debt payment / net medical items",85.76],
    ["5/5","Lake Pointe Women's Center refund",-12.42],
  ],
  "Kids College": [["5/31","Kids brokerage contribution",666.67]],
  Investing: [["5/31","Roth IRA / Vanguard contribution",1000.00]],
};

Object.keys(spendTransactions).forEach((key) => {
  spendTransactions[key] = spendTransactions[key].map(([date, merchant, amount]) => ({date, merchant, amount}));
});

export const investmentAccounts = [
  ["Roth 401(k)","Retirement",55000.48,"Tax-free"],
  ["Roth IRA","Retirement",46514.56,"Tax-free"],
  ["Kids Brokerage","Kids / future flexibility",5247.74,"Taxable"],
  ["Kids ESA","Legacy education account",5308,"Education"],
  ["House Brokerage","Future house down payment",712.84,"Taxable"],
].map(([name,purpose,value,tax]) => ({name,purpose,value,tax}));

export const collegeProjection = [
  [4,10556],
  [8,48300],
  [12,96000],
  [16,156200],
  [18,192000],
].map(([age,balance]) => ({age,balance}));

export const retirementProjection = [
  [31,99400],
  [35,243600],
  [40,486000],
  [45,820000],
  [50,1277600],
  [55,1901800],
  [60,2749900],
  [65,3899200],
].map(([age,balance]) => ({age,balance}));

export const retirementSummary = { projectedAt65: 3899200, fourPercentAnnualIncome: 156000 };

export const houseGoal = {
  downPaymentTarget: 50000,
  nextHomeSavings: 20000,
  projectedDate: "March 2027",
  monthlyPace: 3139,
  estimatedHomeValue: 284000,
  estimatedMortgageBalance: 284887.94,
  estimatedHomeEquity: -887.94,
  houseBrokerage: 712.84,
  source: "Public home value estimate, refreshed monthly when possible",
};

export const targetHome = {
  address: "3313 Robin Trl, Melissa, TX 75454",
  price: 490000,
  offerInsightsPrice: 490000,
  zestimate: 493100,
  beds: 4,
  baths: 4,
  sqft: 3314,
  lotSqft: 8058,
  builtYear: 2016,
  hoaMonthly: 55,
  homeInsuranceMonthly: 167,
  estimatedPropertyTaxAnnual: 7056,
  downPayment: 50000,
  interestRate: 0.0625,
  loanTermYears: 30,
  mortgageInsuranceMonthly: 73,
  incomeMultiplier: 45.4545,
  incomeTargetAnnual: 165000,
  schoolNote: "This Melissa area shows strong household income, solid home values, and a well-educated, stable homeowner base. Median household income is about $124,821, median owner-occupied home value is about $466,600, and 48.3% of adults have a bachelor's degree or higher. The area is also heavily owner-occupied, with a diverse population that is about 57% White, 16% Black, 5% Asian, and 18% Hispanic.",
  imageUrl: "https://photos.zillowstatic.com/fp/8013d937ce5d65b46e2151f4d1933068-uncropped_scaled_within_1536_1152.webp",
  listingUrl: "https://www.zillow.com/homedetails/3313-Robin-Trl-Melissa-TX-75454/168648390_zpid/",
};


const augustDashboardMeta = { activeMonth: "Aug", subtitle: "August 2026" };

const augustHomeMetrics = {
  cash: 28196.30,
  income: 10585.47,
  spending: 12489.75,
  investments: 118087.81,
  actualSurplus: -1904.28,
};

const augustMonthlyCloseout = [
  ["Bottom Line", "August was a spending-heavy month and ran about a $1.9k operating shortfall, but move savings still increased from May and now sit around $23.2k."],
  ["Watch Point", "ASH spending was about $6.0k and was the clear pressure point. Gifts, Grandma / House Repairs, and CK were emptied and applied against ASH."],
  ["Cash Plan", "Pause retirement and investing contributions until the move. Keep about $5,000 in Chase and direct available cash toward the move; Next Home liquid savings are about $23.2k."],
];

const augustAllocation = { housePaydown: 0, houseBrokerage: 0 };

const augustBudgetRows = [
  ["Housing",2450,2449.62,false,null],
  ["Car",350,477.56,false,null],
  ["Utilities",500,503.96,false,null],
  ["Food",1350,2061.70,false,null],
  ["Life Insurance / Will",75,47.54,false,null],
  ["Vacations",100,0,true,3800],
  ["Bigger House Goal",1182,0,false,null],
  ["Gifts",250,0,true,0],
  ["Grandma / House Repairs",290,377.79,true,0],
  ["ASH",1000,6026.30,true,-758.70],
  ["CK",100,157.76,true,0],
  ["Subscriptions",100,60.36,false,null],
  ["Random",150,209.85,false,null],
  ["Medical Debt",200,117.31,false,null],
  ["Kids College",667,0,false,null],
  ["Investing",1000,0,false,null],
].map(([category,budget,actual,fund,endingFund]) => ({category,budget,actual,fund,endingFund}));

const augustFundBalances = [
  ["Emergency Fund",20000],
  ["Car Insurance Reserve",155],
  ["Vacation",3800],
  ["Grandma / House Repairs",0],
  ["Gifts",0],
  ["ASH",-758.70],
  ["CK",0],
].map(([name,balance]) => ({name,balance}));

const augustNetWorthTrend = [
  ["Jan",120500],
  ["Feb",122300],
  ["Mar",126900],
  ["Apr",128200],
  ["May",135562],
  ["Aug",147090],
].map(([month,netWorth]) => ({month,netWorth}));

const augustSpendTransactions = {
  Housing: [["8/4","Lakeview mortgage payment",2449.62]],
  Car: [
    ["8/31","Costco gas",197.74],
    ["8/31","O'Reilly Auto Parts",93.07],
    ["8/31","Vehicle registration",76.25],
    ["8/31","NTTA tolls",90.00],
    ["8/31","Christian Brothers Automotive",18.50],
    ["8/31","Texas.gov registration fee",2.00],
  ],
  Utilities: [["8/31","August utilities per reconciled audit",503.96]],
  Food: [["8/31","August food per reconciled audit",2061.70]],
  "Life Insurance / Will": [["8/31","August life insurance / will",47.54]],
  Vacations: [],
  "Bigger House Goal": [],
  Gifts: [],
  "Grandma / House Repairs": [["8/31","Home Depot",377.79]],
  ASH: [["8/31","Wife shopping per reconciled August audit",6026.30]],
  CK: [["8/31","Fanatics",157.76]],
  Subscriptions: [["8/31","August subscriptions per reconciled audit",60.36]],
  Random: [
    ["8/31","Dallas World Aquarium",113.51],
    ["8/31","NEX Playground",96.34],
  ],
  "Medical Debt": [["8/31","August medical spending per reconciled audit",117.31]],
  "Kids College": [],
  Investing: [],
};

Object.keys(augustSpendTransactions).forEach((key) => {
  augustSpendTransactions[key] = augustSpendTransactions[key].map(([date, merchant, amount]) => ({date, merchant, amount}));
});

const augustInvestmentAccounts = [
  ["Roth 401(k)","Retirement",59312.97,"Tax-free"],
  ["Roth IRA","Retirement",47396.17,"Tax-free"],
  ["Kids Brokerage","Kids / future flexibility",5345.70,"Taxable"],
  ["Kids ESA","Legacy education account",5308,"Education"],
  ["House Brokerage","Future house down payment",724.97,"Taxable"],
].map(([name,purpose,value,tax]) => ({name,purpose,value,tax}));

const augustCollegeProjection = [
  [4,10556],
  [8,48300],
  [12,96000],
  [16,156200],
  [18,192000],
].map(([age,balance]) => ({age,balance}));

const augustRetirementProjection = [
  [31,99400],
  [35,243600],
  [40,486000],
  [45,820000],
  [50,1277600],
  [55,1901800],
  [60,2749900],
  [65,3899200],
].map(([age,balance]) => ({age,balance}));

const augustRetirementSummary = { projectedAt65: 3899200, fourPercentAnnualIncome: 156000 };

const augustHouseGoal = {
  downPaymentTarget: 50000,
  nextHomeSavings: 23196.30,
  projectedDate: "June 2027",
  monthlyPace: 3139,
  estimatedHomeValue: 284000,
  estimatedMortgageBalance: 283126.35,
  estimatedHomeEquity: 873.65,
  houseBrokerage: 724.97,
  source: "Public home value estimate, refreshed monthly when possible",
};

const augustTargetHome = {
  address: "3313 Robin Trl, Melissa, TX 75454",
  price: 490000,
  offerInsightsPrice: 490000,
  zestimate: 493100,
  beds: 4,
  baths: 4,
  sqft: 3314,
  lotSqft: 8058,
  builtYear: 2016,
  hoaMonthly: 55,
  homeInsuranceMonthly: 167,
  estimatedPropertyTaxAnnual: 7056,
  downPayment: 50000,
  interestRate: 0.0625,
  loanTermYears: 30,
  principalAndInterestMonthly: 2709,
  mortgageInsuranceMonthly: 73,
  incomeMultiplier: 45.4545,
  incomeTargetAnnual: 165000,
  schoolNote: "This Melissa area shows strong household income, solid home values, and a well-educated, stable homeowner base. Median household income is about $124,821, median owner-occupied home value is about $466,600, and 48.3% of adults have a bachelor's degree or higher. The area is also heavily owner-occupied, with a diverse population that is about 57% White, 16% Black, 5% Asian, and 18% Hispanic.",
  imageUrl: "https://photos.zillowstatic.com/fp/8013d937ce5d65b46e2151f4d1933068-uncropped_scaled_within_1536_1152.webp",
  listingUrl: "https://www.zillow.com/homedetails/3313-Robin-Trl-Melissa-TX-75454/168648390_zpid/",
};

export const monthlyRecords = {
  May: {
    dashboardMeta,
    homeMetrics,
    monthlyCloseout,
    allocation,
    budgetRows,
    fundBalances,
    netWorthTrend,
    spendTransactions,
    investmentAccounts,
    collegeProjection,
    retirementProjection,
    retirementSummary,
    houseGoal,
    targetHome,
  },
  Aug: {
    dashboardMeta: augustDashboardMeta,
    homeMetrics: augustHomeMetrics,
    monthlyCloseout: augustMonthlyCloseout,
    allocation: augustAllocation,
    budgetRows: augustBudgetRows,
    fundBalances: augustFundBalances,
    netWorthTrend: augustNetWorthTrend,
    spendTransactions: augustSpendTransactions,
    investmentAccounts: augustInvestmentAccounts,
    collegeProjection: augustCollegeProjection,
    retirementProjection: augustRetirementProjection,
    retirementSummary: augustRetirementSummary,
    houseGoal: augustHouseGoal,
    targetHome: augustTargetHome,
  },
};
