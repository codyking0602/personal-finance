export const dashboardMeta = { activeMonth: "May", subtitle: "May 2026 mock closeout" };

export const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const homeMetrics = {
  cash: 35627,
  spending: 10450,
  investments: 109324,
  actualSurplus: 2050,
};

export const monthlyCloseout = [
  ["Bottom Line", "May looks like a normal operating month. No bonus and no seasonal CPA spike, so the surplus is more useful for judging the real monthly rhythm."],
  ["What Went Well", "Cash stayed protected, emergency fund remains at $20,000, and most categories were close to plan."],
  ["Where We Missed", "Food and ASH were slightly over, but not out of control. It is what it is, but they still need the clean detail."],
  ["Cash Available", "Actual surplus is about $2,050 before final fund decisions."],
  ["Goal Progress", "Mortgage balance auto-updated to $285,400.33. House brokerage increased to $874.79. Using the $284,000 public estimate, the house goal is still basically at $0 of the $100,000 target until equity turns positive."],
];

export const allocation = { housePaydown: 1640, houseBrokerage: 410 };

export const budgetRows = [
  ["Housing",2450,2450,false,null],
  ["Car",350,335,false,null],
  ["Utilities",500,465,false,null],
  ["Food",1350,1425,false,null],
  ["Life Insurance / Will",75,75,false,null],
  ["Gifts",250,90,true,1160],
  ["Vacations",100,0,true,3500],
  ["ASH",1000,1035,true,0],
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
  ["ASH",0],
  ["Family",0],
].map(([name,balance]) => ({name,balance}));

export const netWorthTrend = [
  ["Jan",120500],
  ["Feb",122300],
  ["Mar",126900],
  ["Apr",128200],
  ["May",131600],
].map(([month,netWorth]) => ({month,netWorth}));

export const spendTransactions = {
  Housing: [["5/1","Mortgage Payment",2450]],
  Car: [["5/4","Shell",72],["5/12","State Farm",210],["5/24","QuikTrip",53]],
  Utilities: [["5/8","TXU Energy",185],["5/17","Kaufman County Water",88],["5/21","AT&T / Internet",92],["5/25","Phone reimbursement",100]],
  Food: [["5/3","Walmart",210],["5/7","Costco",325],["5/11","Kroger",185],["5/18","Walmart",200],["5/20","Chick-fil-A",58],["5/25","Restaurants / fast food",247],["5/29","Grocery stores",200]],
  "Life Insurance / Will": [["5/5","Life Insurance",75]],
  Gifts: [["5/14","Birthday gift",90]],
  Vacations: [],
  ASH: [["5/2","Target",260],["5/9","Amazon",225],["5/13","Kids / family items",310],["5/19","Other ASH spending",240]],
  CK: [["5/10","CK spending",72]],
  Subscriptions: [["5/1","Streaming / subscriptions",96]],
  Random: [["5/6","School fundraiser",45],["5/15","Small household item",38],["5/26","Misc one-off charge",32]],
  "Grandma / House Repairs": [],
  "Medical Debt": [["5/12","Medical debt payment",200]],
  "Kids College": [["5/28","Kids brokerage contribution",667]],
  Investing: [["5/28","Vanguard contribution",1000]],
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
  hoa: "$78/mo",
  schoolNote: "Appears in Zillow search near Prosper High School. Verify exact zoning before relying on it.",
  imageUrl: "https://tse2.mm.bing.net/th/id/OIP.iQjd_m29_6goXvNohqX1TAHaFj?pid=Api",
  listingUrl: "https://www.zillow.com/homedetails/3122-Spring-Creek-Trl-Prosper-TX-75078/242102403_zpid/",
};  
