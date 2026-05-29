export const dashboardMeta = { activeMonth: "May", subtitle: "May 2026 actual closeout" };

export const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const homeMetrics = {
  cash: 26583,
  spending: 11100,
  investments: 112784,
  actualSurplus: 505,
};

export const monthlyCloseout = [
  ["Bottom Line", "May fully funded Investing, Kids College, Vacation, Grandma/House Repairs, and the Bigger House Goal. The Bigger House Goal was sent out 80/20, with $945.60 to extra mortgage principal and $236.40 to the house brokerage."],
  ["What Went Well", "The core wealth-building items got funded, Food was unusually low, and Ashley income/tips helped the month work even with higher ASH spending."],
  ["Where We Missed", "ASH was the pressure point. The Gifts fund was emptied and the unused Food budget helped absorb ASH, so May worked, but it was not a clean month."],
  ["Cash Movement", "After paying credit cards, investing, kids college, and the Bigger House Goal, transfer about $3,701.28 from SoFi to Chase to restore the $5,000 Chase cushion."],
  ["Vanguard Buys", "Drift-based buys: Roth IRA buy VTI $475, VXUS $294, FBTC $231. Kids brokerage buy VTI $554, VXUS $31, FBTC $83. House brokerage buy VTI $201.83 and VXUS $34.57, with no FBTC for the house account."],
  ["Goal Progress", "Mortgage balance was reduced immediately for the confirmed $945.60 extra principal payment. House brokerage was increased for the confirmed $236.40 contribution. Vehicle values were added to net worth using Good-condition estimates."],
];

export const allocation = { housePaydown: 945.60, houseBrokerage: 236.40 };

export const budgetRows = [
  ["Housing",2450,2449.62,false,null],
  ["Car",350,434.35,false,null],
  ["Utilities",500,527.42,false,null],
  ["Food",1350,480.46,false,null],
  ["Life Insurance / Will",75,47.54,false,null],
  ["Vacations",100,100,true,3500],
  ["Bigger House Goal",1182,1182,false,null],
  ["Gifts",250,0,true,0],
  ["Grandma / House Repairs",290,290,true,580],
  ["ASH",1000,3536.58,true,0],
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
  ["Grandma / House Repairs",580],
  ["Gifts",0],
  ["ASH",0],
  ["CK",0],
  ["Family",0],
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
  ],
  "Life Insurance / Will": [["5/31","Life insurance / will",47.54]],
  Vacations: [["5/31","Vacation fund allocation",100.00]],
  "Bigger House Goal": [
    ["5/31","Extra mortgage principal",945.60],
    ["5/31","House brokerage contribution",236.40],
  ],
  Gifts: [["5/31","Gifts fund emptied to offset ASH",0]],
  "Grandma / House Repairs": [["5/31","Grandma / House Repairs fund allocation",290.00]],
  ASH: [
    ["5/31","ASH gross spending before offsets",3536.58],
    ["5/31","Gifts fund offset used against ASH",-1000.00],
    ["5/31","Unused Food budget offset used against ASH",-869.54],
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
  ["Vehicles","Paid-off vehicle values",27000,"Asset"],
].map(([name,purpose,value,tax]) => ({name,purpose,value,tax}));

export const collegeProjection = [
  [4,10460],
  [8,52300],
  [12,100900],
  [16,157400],
  [18,191900],
].map(([age,balance]) => ({age,balance}));

export const retirementProjection = [
  [31,99387],
  [35,204000],
  [40,385000],
  [45,648000],
  [50,1031000],
  [55,1589000],
  [60,2402000],
  [65,3899000],
].map(([age,balance]) => ({age,balance}));

export const retirementSummary = { projectedAt65: 3899000, fourPercentAnnualIncome: 156000 };

export const houseGoal = {
  downPaymentTarget: 100000,
  estimatedHomeValue: 284000,
  estimatedMortgageBalance: 284887.94,
  estimatedHomeEquity: -887.94,
  houseBrokerage: 712.84,
  source: "Public home value estimate, refreshed monthly when possible",
};

export const targetHome = {
  address: "3633 Keechi Creek Dr, Prosper, TX 75078",
  price: 639000,
  offerInsightsPrice: 639000,
  zestimate: 6621,
  beds: 5,
  baths: 4,
  sqft: 3473,
  lotSqft: 3473,
  hoaMonthly: 78,
  homeInsuranceMonthly: 220,
  estimatedPropertyTaxAnnual: 9000,
  schoolNote: "Current bigger-house example that appears to fit the Prosper-area search. Verify exact Prosper High School zoning before relying on it.",
  imageUrl: "https://photos.zillowstatic.com/fp/93f89e04c7df033dd3aceef280797835-cc_ft_768.webp",
  listingUrl: "https://www.zillow.com/homedetails/3633-Keechi-Creek-Dr-Prosper-TX-75078/338526232_zpid/",
};
