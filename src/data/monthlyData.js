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
  income: 9821.41,
  spending: 11725.69,
  investments: 118087.81,
  actualSurplus: -1904.28,
};

const augustMonthlyCloseout = [
  ["Bottom Line", "August was a spending-heavy month and ran about a $1.9k operating shortfall, but move savings still increased from May and now sit around $23.2k."],
  ["Watch Point", "ASH gross shopping was $6,026. Ashley's $764 of work income now goes directly against her shopping, leaving $5,262 as the family-funded ASH spend. Gifts, Grandma / House Repairs, and CK were emptied and applied against ASH."],
  ["Cash Plan", "Keep the Roth 401(k) contribution needed for the employer match. Pause Roth IRA, Kids Brokerage, House Brokerage, and extra mortgage paydown until the move; keep about $5,000 in Chase and direct available cash toward the move."],
];

const augustAllocation = { housePaydown: 0, houseBrokerage: 0 };

const augustMoveMode = {
  active: true,
  nextHomeSavings: 23196.30,
  target: 50000,
  chaseCushion: 5000,
  status: "Roth 401(k) match stays on",
  note: "Roth IRA, Kids Brokerage, House Brokerage, and extra mortgage paydown are paused. Ashley's work income is excluded from household income and offsets ASH shopping directly. All other extra cash goes to the move.",
};

const augustBudgetRows = [
  ["Housing",2450,2449.62,false,null,false],
  ["Car",350,477.56,false,null,false],
  ["Utilities",500,503.96,false,null,false],
  ["Food",1350,2061.70,false,null,false],
  ["Life Insurance / Will",75,47.54,false,null,false],
  ["Vacations",100,0,true,3800,false],
  ["Bigger House Goal",1182,0,false,null,true],
  ["Gifts",250,0,true,0,false],
  ["Grandma / House Repairs",290,377.79,true,0,false],
  ["ASH",1000,5262.24,true,-758.70,false],
  ["CK",100,157.76,true,0,false],
  ["Subscriptions",100,60.36,false,null,false],
  ["Random",150,209.85,false,null,false],
  ["Medical Debt",200,117.31,false,null,false],
  ["Kids College",667,0,false,null,true],
  ["Investing",1000,0,false,null,true],
].map(([category,budget,actual,fund,endingFund,paused]) => ({category,budget,actual,fund,endingFund,paused}));

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
  "Housing": [
    ["8/3","Lakeview mortgage payment",2449.62],
  ],
  "Car": [
    ["8/2","Costco Gas",29.27],
    ["8/7","Costco Gas",23.18],
    ["8/11","NTTA Autocharge",40],
    ["8/14","Costco Gas",42.22],
    ["8/17","Costco Gas",48.06],
    ["8/18","Christian Brothers Automotive",18.5],
    ["8/18","O'Reilly Auto Parts",93.07],
    ["8/18","Texas.gov registration fee",2],
    ["8/18","Vehicle registration",76.25],
    ["8/23","NTTA Autocharge",10],
    ["8/25","Costco Gas",55.01],
    ["8/25","NTTA Autocharge",40],
  ],
  "Utilities": [
    ["8/4","AT&T bill payment",75.7],
    ["8/10","Forney Lake Water",61.2],
    ["8/20","Kaufman County MUD",71.06],
    ["8/27","Farmers Electric",296],
  ],
  "Food": [
    ["8/1","McDonald's",36.65],
    ["8/2","Chuy's",60.42],
    ["8/3","Whataburger",13.74],
    ["8/4","Costco warehouse (90% Food)",201.852],
    ["8/5","Walmart.com",105.85],
    ["8/6","Chick-fil-A",42.33],
    ["8/6","Walmart.com",36.36],
    ["8/7","Walmart",79.56],
    ["8/8","Costco warehouse (90% Food)",176.31],
    ["8/11","Costco warehouse (90% Food)",86.859],
    ["8/14","Costco warehouse (90% Food)",136.071],
    ["8/14","Walmart.com",46.48],
    ["8/16","Buttermilk Sky Pie",40.25],
    ["8/17","Costco warehouse (90% Food)",197.235],
    ["8/19","McDonald's",27.68],
    ["8/21","Walmart.com",46.03],
    ["8/22","Costco warehouse (90% Food)",214.56],
    ["8/24","Whataburger",13.74],
    ["8/25","Starbucks",13.12],
    ["8/26","McDonald's",36.73],
    ["8/27","Chick-fil-A",8.49],
    ["8/28","Costco warehouse (90% Food)",361.215],
    ["8/28","Walmart.com",0.72],
    ["8/28","Walmart.com",79.45],
  ],
  "Life Insurance / Will": [
    ["8/10","Lincoln National",20.63],
    ["8/12","Brighthouse",26.91],
  ],
  "Vacations": [],
  "Bigger House Goal": [],
  "Gifts": [],
  "Grandma / House Repairs": [
    ["8/1","Home Depot",377.79],
  ],
  "ASH": [
    ["8/1","Amazon",90.83],
    ["8/1","Inn Style Resale",4],
    ["8/2","Amazon",5.14],
    ["8/2","Target",114.57],
    ["8/3","BaubleBar",43.84],
    ["8/3","Jellycat",99.38],
    ["8/3","Magnolia Market",144.93],
    ["8/3","Magnolia Market",133.62],
    ["8/3","Pierced Co.",18.25],
    ["8/3","Zelle wife-shopping reimbursement from Lauren Sanchez",-55],
    ["8/4","BaubleBar",28.24],
    ["8/4","Costco warehouse (10% ASH)",22.428],
    ["8/4","Hobby Lobby",64.08],
    ["8/4","Mackenzie-Childs",58.35],
    ["8/4","Pottery Barn Kids",50.84],
    ["8/4","Pottery Barn Kids",42.22],
    ["8/5","Amazon",23.8],
    ["8/5","Pottery Barn Kids",12.96],
    ["8/5","The Foggy Dog",23.28],
    ["8/6","Pottery Barn",19.45],
    ["8/7","Amazon",5.47],
    ["8/7","Amazon",27.05],
    ["8/7","Gathre",38.57],
    ["8/7","McGee & Co.",42.98],
    ["8/7","Pottery Barn",82.21],
    ["8/7","The Foggy Dog",18.28],
    ["8/7","The Foggy Dog",23.86],
    ["8/8","Costco warehouse (10% ASH)",19.59],
    ["8/8","Crate & Barrel",43.25],
    ["8/8","Michaels",58.27],
    ["8/9","Amazon",23.79],
    ["8/9","Mackenzie-Childs",16.68],
    ["8/9","Pottery Barn return",-40.02],
    ["8/9","Target",77.88],
    ["8/10","Zelle wife-shopping reimbursement from Jeaneth Sagales",-10],
    ["8/10","Zelle wife-shopping reimbursement from Lauren Sanchez",-40],
    ["8/11","Amazon",21.1],
    ["8/11","Costco warehouse (10% ASH)",9.651],
    ["8/11","FNBO wife shopping (payment proxy)",104.76],
    ["8/11","HomeGoods",197.98],
    ["8/11","Jellycat",86.4],
    ["8/11","Jellycat",177.14],
    ["8/11","Ruggable",40.24],
    ["8/12","Amazon",44.34],
    ["8/12","Mackenzie-Childs",83.59],
    ["8/12","Maileg Toys",21.11],
    ["8/13","Amazon",18.16],
    ["8/13","BaubleBar",95.26],
    ["8/13","Capital One cash-back reward",-107],
    ["8/13","Mackenzie-Childs",126.22],
    ["8/13","Mackenzie-Childs",85.73],
    ["8/13","Maileg Toys",17.32],
    ["8/13","Nordstrom",48.71],
    ["8/13","Pottery Barn",35.55],
    ["8/13","Pottery Barn",2.34],
    ["8/13","The Foggy Dog",44.22],
    ["8/14","Costco warehouse (10% ASH)",15.119],
    ["8/17","Amazon",27.05],
    ["8/17","BaubleBar",43.86],
    ["8/17","Costco warehouse (10% ASH)",21.915],
    ["8/17","Magnolia Market",133.63],
    ["8/17","The Children's Place",72.9],
    ["8/18","Amazon",77.13],
    ["8/18","Amazon",40.49],
    ["8/18","Amazon",44.3],
    ["8/18","Magnolia Market",144.93],
    ["8/18","Target",61.26],
    ["8/19","American Eagle",116.76],
    ["8/19","Pottery Barn Kids",191.13],
    ["8/19","Pottery Barn Kids",17.19],
    ["8/19","The Foggy Dog",23.26],
    ["8/19","Zelle wife shopping to David Rincon",210],
    ["8/20","Pottery Barn Kids",71.3],
    ["8/20","Pottery Barn Kids",51.95],
    ["8/21","Amazon",21.64],
    ["8/21","Gathre",38.57],
    ["8/21","Jellycat",112.33],
    ["8/21","The Foggy Dog",23.86],
    ["8/22","Amazon",40.04],
    ["8/22","Amazon",10.81],
    ["8/22","Costco warehouse (10% ASH)",23.84],
    ["8/23","Amazon",32.46],
    ["8/23","Amazon",40],
    ["8/24","Amazon",216.26],
    ["8/24","Jellycat",100.46],
    ["8/24","Kohl's",34.64],
    ["8/24","Target",81.76],
    ["8/24","Target",75.78],
    ["8/24","The Foggy Dog",18.28],
    ["8/24","Zelle wife shopping to Lauren Sanchez",60],
    ["8/25","Nordstrom",24.9],
    ["8/25","Pottery Barn Kids",58.4],
    ["8/25","Pottery Barn Kids",30.3],
    ["8/25","Ross Stores",10.81],
    ["8/25","Target",102.84],
    ["8/25","Target",57.34],
    ["8/25","Target",34.63],
    ["8/25","Target",47.6],
    ["8/25","Zelle wife-shopping reimbursement from Lauren Sanchez",-25],
    ["8/26","American Eagle",124.49],
    ["8/26","Maileg Toys",21.11],
    ["8/26","Pottery Barn",40.02],
    ["8/26","Zelle wife-shopping reimbursement from Lauren Sanchez",-50],
    ["8/27","Anthropologie",204.61],
    ["8/27","FNBO wife shopping (payment proxy)",47.9],
    ["8/27","Pottery Barn Kids",43.15],
    ["8/28","Bloomingdale’s",64.8],
    ["8/28","Costco warehouse (10% ASH)",40.135],
    ["8/28","Five Below",3.25],
    ["8/28","Five Below",12.99],
    ["8/28","Target",65.56],
    ["8/28","Target",22.72],
    ["8/28","Target return",-6.48],
    ["8/31","American Eagle",170.82],
    ["8/31","Echo Park Paper",98.61],
    ["8/5","Ashley work income offset - Wisely",-250.00],
    ["8/7","Ashley work income offset - Shear Drive",-264.92],
    ["8/21","Ashley work income offset - Shear Drive",-249.14],
  ],
  "CK": [
    ["8/28","Fanatics",157.76],
  ],
  "Subscriptions": [
    ["8/1","Disney+",5.39],
    ["8/4","Netflix",9.73],
    ["8/7","Apple.com/bill",0.99],
    ["8/8","Apple.com/bill",21.64],
    ["8/11","Prime Video Channels",4.32],
    ["8/19","Peacock",11.9],
    ["8/24","Amazon Kids",6.39],
  ],
  "Random": [
    ["8/19","Dallas World Aquarium",102.68],
    ["8/19","Dallas World Aquarium",10.83],
    ["8/25","NEX Playground",96.34],
  ],
  "Medical Debt": [
    ["8/7","CVS Pharmacy",6],
    ["8/7","Southwest Allergy",10],
    ["8/7","Urology Clinics",50],
    ["8/18","Pediatric Kare Klinik",20],
    ["8/24","Southwest Allergy",31.31],
  ],
  "Kids College": [],
  "Investing": [],
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


export const currentTargetHome = {
  address: "3609 Red Deer Ln, Melissa, TX 75454",
  price: 489000,
  offerInsightsPrice: 489000,
  zestimate: null,
  beds: 4,
  baths: 2.5,
  sqft: 3020,
  lotSqft: 8363,
  builtYear: 2020,
  hoaMonthly: 54.17,
  homeInsuranceMonthly: 167,
  estimatedPropertyTaxAnnual: 9795,
  downPayment: 50000,
  interestRate: 0.0625,
  loanTermYears: 30,
  principalAndInterestMonthly: 2703,
  mortgageInsuranceMonthly: 73.17,
  incomeMultiplier: 45.4545,
  incomeTargetAnnual: 175000,
  schoolNote: "Strong Melissa-area household income, home values, education, and homeownership remain the location fit. This home adds a 2020 build, rare 3-car garage, private office, game room, media room, pool-sized backyard, and solar panels that the seller says will be paid off at closing, while keeping the family in Melissa ISD with convenient access to US-75, H-E-B, Kroger, parks, and trails.",
  imageUrl: "https://photos.zillowstatic.com/fp/8d72064c6815e0e23242e922edb012a3-cc_ft_960.jpg",
  listingUrl: "https://www.zillow.com/homedetails/3609-Red-Deer-Ln-Melissa-TX-75454/336111536_zpid/",
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
    moveMode: augustMoveMode,
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
