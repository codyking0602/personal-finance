export const dashboardMeta = { activeMonth: "Apr", subtitle: "April 2026 actual closeout" };

export const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const homeMetrics = {
  cash: 35627,
  spending: 10450,
  investments: 109324,
  actualSurplus: 2050,
};

export const monthlyCloseout = [
  ["Bottom Line", "April closed as a normal operating month with no bonus or seasonal spike, so results reflect the core monthly rhythm."],
  ["What Went Well", "Cash stayed protected, emergency fund remains at $20,000, and most categories were close to plan."],
  ["Where We Missed", "A few discretionary categories ran above target, but overall variance was manageable."],
  ["Cash Available", "Actual surplus is about $2,050 before final fund decisions."],
  ["Goal Progress", "Mortgage balance auto-updated to $285,400.33. House brokerage increased to $874.79. Using the $284,000 public estimate, the house goal is still basically at $0 of the $100,000 target until equity turns positive."],
];

export const allocation = { housePaydown: 1640, houseBrokerage: 410 };

export const budgetRows = [
  ["Housing",2450,2450,false,null],
  ["Car",350,335,false,null],
  ["Utilities",500,465,false,null],
  ["Food",1425,1425,false,null],
  ["Life Insurance / Will",75,75,false,null],
  ["Gifts",250,90,true,1160],
  ["Vacations",100,0,true,3500],
  ["ASH",1035,1035,false,null],
  ["CK",100,72,true,28],
  ["Subscriptions",100,96,false,null],
  ["Random",150,115,false,null],
  ["Grandma / House Repairs",290,0,true,580],
  ["Medical Debt",200,200,false,null],
  ["Kids College",667,667,false,null],
  ["Investing",1000,1000,false,null],
].map(([category,budget,actual,fund,endingFund]) => ({category,budget,actual,fund,endingFund}));

export const fundBalances = [
  ["Emergency Fund",20000],
  ["Insurance",450],
  ["Vacation",3500],
  ["Grandma / House Repairs",580],
  ["Gifts",1160],
  ["CK",28],
  ["Family",0],
].map(([name,balance]) => ({name,balance}));

export const netWorthTrend = [
  ["Jan",120500],
  ["Feb",122300],
  ["Mar",126900],
  ["Apr",128200],
].map(([month,netWorth]) => ({month,netWorth}));

export const spendTransactions = {
  Housing: [["4/1","Mortgage Payment",2450]],
  Car: [["4/4","Shell",72],["4/12","State Farm",210],["4/24","QuikTrip",53]],
  Utilities: [["4/8","TXU Energy",185],["4/17","Kaufman County Water",88],["4/21","AT&T / Internet",92],["4/25","Phone reimbursement",100]],
  Food: [["4/3","Walmart",210],["4/7","Costco",325],["4/11","Kroger",185],["4/18","Walmart",200],["4/20","Chick-fil-A",58],["4/25","Restaurants / fast food",247],["4/29","Grocery stores",200]],
  "Life Insurance / Will": [["4/5","Life Insurance",75]],
  Gifts: [["4/14","Birthday gift",90]],
  Vacations: [],
  ASH: [["4/2","Target",260],["4/9","Amazon",225],["4/13","Kids / family items",310],["4/19","Other ASH spending",240]],
  CK: [["4/10","CK spending",72]],
  Subscriptions: [["4/1","Streaming / subscriptions",96]],
  Random: [["4/6","School fundraiser",45],["4/15","Small household item",38],["4/26","Misc one-off charge",32]],
  "Grandma / House Repairs": [],
  "Medical Debt": [["4/12","Medical debt payment",200]],
  "Kids College": [["4/28","Kids brokerage contribution",667]],
  Investing: [["4/28","Vanguard contribution",1000]],
};

Object.keys(spendTransactions).forEach((key) => {
  spendTransactions[key] = spendTransactions[key].map(([date, merchant, amount]) => ({date, merchant, amount}));
});

export const investmentAccounts = [
  ["Roth 401(k)","Retirement",53738.92,"Tax-free"],
  ["Roth IRA","Retirement",45647.62,"Tax-free"],
  ["Kids Brokerage","Kids / future flexibility",5152.38,"Taxable"],
  ["Kids ESA","Legacy education account",5308,"Education"],
  ["House Brokerage","Future house down payment",874.79,"Taxable"],
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
  estimatedMortgageBalance: 285400.33,
  estimatedHomeEquity: -1400.33,
  houseBrokerage: 874.79,
  source: "Realtor.com public estimate, refreshed monthly when possible",
};

export const targetHome = {
  address: "3122 Spring Creek Trl, Prosper, TX 75078",
  price: 599000,
  beds: 4,
  baths: 4,
  sqft: 2784,
  lotSqft: 8100,
  hoaMonthly: 150,
  estimatedPropertyTaxAnnual: 11980,
  schoolNote: "Appears in Zillow search near Prosper High School. Verify exact zoning before relying on it.",
  imageUrl: "https://tse2.mm.bing.net/th/id/OIP.iQjd_m29_6goXvNohqX1TAHaFj?pid=Api",
  listingUrl: "https://www.zillow.com/homedetails/3122-Spring-Creek-Trl-Prosper-TX-75078/242102403_zpid/",
};  
