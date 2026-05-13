import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  Cell,
} from "recharts";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const sections = [
  { key: "dashboard", label: "Home", icon: "▦" },
  { key: "budgeting", label: "Budget", icon: "◉" },
  { key: "income", label: "Income", icon: "↗" },
  { key: "expenses", label: "Spend", icon: "↘" },
  { key: "investments", label: "Invest", icon: "▰" },
  { key: "debts", label: "Debt", icon: "◌" },
  { key: "goals", label: "Goals", icon: "◎" },
];

const budgetRows = [
  { category: "Housing", budget: 2450, actual: 2450, fund: false, endingFund: null },
  { category: "Car", budget: 350, actual: 335, fund: false, endingFund: null },
  { category: "Utilities", budget: 500, actual: 465, fund: false, endingFund: null },
  { category: "Food", budget: 1350, actual: 1425, fund: false, endingFund: null },
  { category: "Life Insurance / Will", budget: 75, actual: 75, fund: false, endingFund: null },
  { category: "Gifts", budget: 250, actual: 90, fund: true, endingFund: 1160 },
  { category: "Vacations", budget: 100, actual: 0, fund: true, endingFund: 3500 },
  { category: "ASH", budget: 1000, actual: 1035, fund: true, endingFund: 0 },
  { category: "CK", budget: 100, actual: 72, fund: true, endingFund: 28 },
  { category: "Subscriptions", budget: 100, actual: 96, fund: false, endingFund: null },
  { category: "Random", budget: 150, actual: 115, fund: false, endingFund: null },
  { category: "Grandma / House Repairs", budget: 290, actual: 0, fund: true, endingFund: 580 },
  { category: "Medical Debt", budget: 200, actual: 200, fund: false, endingFund: null },
  { category: "Kids College", budget: 667, actual: 667, fund: false, endingFund: null },
  { category: "Investing", budget: 1000, actual: 1000, fund: false, endingFund: null },
];

const fundBalances = [
  { name: "Emergency Fund", balance: 20000 },
  { name: "Insurance", balance: 450 },
  { name: "Vacation", balance: 3500 },
  { name: "Grandma / House Repairs", balance: 580 },
  { name: "Gifts", balance: 1160 },
  { name: "CK", balance: 28 },
  { name: "ASH", balance: 0 },
  { name: "Family", balance: 0 },
];

const incomeTrend = [
  { month: "Jan", normal: 12400, bonus: 0, cpa: 0 },
  { month: "Feb", normal: 12400, bonus: 0, cpa: 0 },
  { month: "Mar", normal: 12500, bonus: 0, cpa: 1800 },
  { month: "Apr", normal: 12500, bonus: 4276, cpa: 4212 },
  { month: "May", normal: 12500, bonus: 0, cpa: 0 },
  { month: "Jun", normal: 0, bonus: 0, cpa: 0 },
  { month: "Jul", normal: 0, bonus: 0, cpa: 0 },
  { month: "Aug", normal: 0, bonus: 0, cpa: 0 },
  { month: "Sep", normal: 0, bonus: 0, cpa: 0 },
  { month: "Oct", normal: 0, bonus: 0, cpa: 0 },
  { month: "Nov", normal: 0, bonus: 0, cpa: 0 },
  { month: "Dec", normal: 0, bonus: 0, cpa: 0 },
];

const monthBars = [
  { label: "Income", amount: 12500 },
  { label: "Spending", amount: 10450 },
  { label: "Surplus", amount: 2050 },
];

const foodDetail = [
  { label: "Walmart", amount: 410 },
  { label: "Costco", amount: 325 },
  { label: "Kroger / grocery stores", amount: 385 },
  { label: "Restaurants / fast food", amount: 305 },
];

const ashDetail = [
  { label: "Target", amount: 260 },
  { label: "Amazon", amount: 225 },
  { label: "Kids / family items", amount: 310 },
  { label: "Other ASH spending", amount: 240 },
];

const randomDetail = [
  { label: "School fundraiser", amount: 45 },
  { label: "Small household item", amount: 38 },
  { label: "Misc one-off charge", amount: 32 },
];

const investmentAccounts = [
  { name: "Roth 401(k)", purpose: "Retirement", value: 53738.92, tax: "Tax-free" },
  { name: "Roth IRA", purpose: "Retirement", value: 45647.62, tax: "Tax-free" },
  { name: "Kids Brokerage", purpose: "Kids / future flexibility", value: 5152.38, tax: "Taxable" },
  { name: "Kids ESA", purpose: "Legacy education account", value: 5308.00, tax: "Education" },
  { name: "House Brokerage", purpose: "Future house down payment", value: 874.79, tax: "Taxable" },
];

const investmentFunds = [
  { ticker: "VTI", label: "Domestic", target: 83.3, current: 83.45 },
  { ticker: "VXUS", label: "International", target: 14.7, current: 14.75 },
  { ticker: "FBTC", label: "Bitcoin ETF", target: 2.0, current: 1.80 },
];

const debts = [
  { name: "Mortgage", balance: 285400.33, note: "Auto-updated from prior principal minus scheduled principal" },
  { name: "Medical Debt", balance: 29800, note: "Temporary estimate after May payment" },
];

const mortgagePayment = {
  monthlyPayment: 2449.62,
  principal: 433.21,
  interest: 1280.30,
  escrow: 736.11,
  nextDueDate: "07/01/2026",
};

const mortgageTrend = [
  { month: "Jan", balance: 287100, equity: -3100 },
  { month: "Feb", balance: 286650, equity: -2650 },
  { month: "Mar", balance: 286250, equity: -2250 },
  { month: "Apr", balance: 285833.54, equity: -1833.54 },
  { month: "May", balance: 285400.33, equity: -1400.33 },
];

const houseGoal = {
  downPaymentTarget: 100000,
  estimatedHomeValue: 284000,
  estimatedMortgageBalance: 285400.33,
  estimatedHomeEquity: -1400.33,
  houseBrokerage: 874.79,
  source: "Realtor.com public estimate, refreshed monthly when possible",
};

function money(value) {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-3xl border border-white/10 bg-[#171b34] shadow-xl shadow-black/20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SmallMetric({ label, value, note, tone = "cyan" }) {
  const color = {
    cyan: "text-cyan-300 bg-cyan-400/10",
    orange: "text-orange-300 bg-orange-400/10",
    rose: "text-rose-300 bg-rose-400/10",
    emerald: "text-emerald-300 bg-emerald-400/10",
    violet: "text-violet-300 bg-violet-400/10",
  }[tone];

  return (
    <Card className="p-4">
      <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${color}`}>{label}</div>
      <div className="text-2xl font-black tracking-tight text-white">{value}</div>
      {note && <div className="mt-1 text-xs leading-5 text-slate-400">{note}</div>}
    </Card>
  );
}

function MonthTabs({ activeMonth, setActiveMonth }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
      <div className="flex min-w-max gap-2">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setActiveMonth(month)}
            className={`rounded-2xl px-4 py-2 text-sm font-black transition ${
              activeMonth === month ? "bg-orange-500 text-white shadow-lg shadow-orange-950/30" : "bg-white/5 text-slate-400"
            }`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileNav({ activeSection, setActiveSection }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#090d1f]/95 px-2 py-2 backdrop-blur md:hidden">
      <div className="flex justify-between gap-1">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-bold transition ${
              activeSection === section.key ? "bg-orange-500 text-white" : "text-slate-400"
            }`}
          >
            <span className="text-base leading-none">{section.icon}</span>
            <span className="truncate">{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function DesktopSidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-white/10 bg-[#0a0d1c] px-4 py-6 md:block">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-2xl font-black text-slate-950">PF</div>
        <div>
          <div className="text-sm text-slate-400">Cody King</div>
          <div className="font-bold text-white">Command Center</div>
        </div>
      </div>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              activeSection === section.key ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white" : "text-slate-300 hover:bg-white/10"
            }`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

function Header({ activeMonth, setActiveMonth }) {
  return (
    <header className="mb-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Household CFO</p>
          <h1 className="mt-1 text-3xl font-black leading-tight text-white md:text-5xl">Command Center</h1>
          <p className="mt-1 text-sm text-slate-400">May 2026 mock closeout</p>
        </div>
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-right">
          <div className="text-xs text-slate-400">View</div>
          <div className="text-lg font-black text-white">{activeMonth}</div>
        </div>
      </div>
      <MonthTabs activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
    </header>
  );
}

function DetailBreakdown({ title, subtitle, rows, total, budget }) {
  const over = total - budget;
  return (
    <Card className="p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black md:text-xl">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <div className="rounded-2xl bg-rose-400/10 px-3 py-2 text-right text-rose-300">
          <div className="text-xs">Over</div>
          <div className="text-lg font-black">{money(over)}</div>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {rows.map((row) => {
          const pct = total > 0 ? Math.round((row.amount / total) * 100) : 0;
          return (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-slate-200">{row.label}</span>
                <span className="font-black text-white">{money(row.amount)}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function ProgressBar({ value, max, label }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-bold text-white">{pct}%</span>
      </div>
      <div className="h-3 rounded-full bg-slate-800">
        <div className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-slate-500">
        <span>{money(value)}</span>
        <span>{money(max)}</span>
      </div>
    </div>
  );
}

function MonthlyBarChart() {
  return (
    <Card className="p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black md:text-xl">May at a Glance</h2>
          <p className="text-sm text-slate-400">Normal month view: income, spending, and actual surplus.</p>
        </div>
      </div>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthBars} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27314f" />
            <XAxis dataKey="label" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip formatter={(value) => money(value)} contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16 }} />
            <Bar dataKey="amount" radius={[12, 12, 0, 0]}>
              <Cell fill="#22d3ee" />
              <Cell fill="#fb7185" />
              <Cell fill="#10b981" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function DashboardView() {
  const actualSurplus = 2050;
  const houseAllocation = actualSurplus * 0.8;
  const vanguardAllocation = actualSurplus * 0.2;

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        <SmallMetric label="Cash" value={money(35627)} note="Before allocation" tone="cyan" />
        <SmallMetric label="Spending" value={money(10450)} note="May categorized" tone="rose" />
        <SmallMetric label="Investments" value={money(109324)} note="Roth + Vanguard" tone="violet" />
        <SmallMetric label="Actual Surplus" value={money(actualSurplus)} note="After reconciliation" tone="emerald" />
      </section>

      <MonthlyBarChart />

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">May Monthly Closeout</h2>
        <p className="mt-1 text-sm text-slate-400">This is the main monthly overview. The final dashboard should be generated after review questions and surplus allocation are settled.</p>
        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
          <p><span className="font-bold text-white">Bottom Line:</span> May looks like a normal operating month. No bonus and no seasonal CPA spike, so the surplus is more useful for judging the real monthly rhythm.</p>
          <p><span className="font-bold text-white">What Went Well:</span> Cash stayed protected, emergency fund remains at $20,000, and most categories were close to plan.</p>
          <p><span className="font-bold text-white">Where We Missed:</span> Food and ASH were slightly over, but not out of control. It is what it is, but they still need the clean detail.</p>
          <p><span className="font-bold text-white">Cash Available:</span> Actual surplus is about $2,050 before final fund decisions.</p>
          <p><span className="font-bold text-white">Goal Progress:</span> Mortgage balance auto-updated to $285,400.33. House brokerage increased to $874.79. Using the $284,000 public estimate, the house goal is still basically at $0 of the $100,000 target until equity turns positive.</p>
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Month-End Allocation</h2>
        <p className="mt-1 text-sm text-slate-400">Based on actual surplus after reconciliation, subject to your approval and fund reserve needs.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-orange-400/10 p-4">
            <div className="text-xs text-orange-200">House Paydown</div>
            <div className="mt-2 text-2xl font-black">{money(houseAllocation)}</div>
            <div className="mt-1 text-xs text-slate-400">80% target</div>
          </div>
          <div className="rounded-2xl bg-cyan-400/10 p-4">
            <div className="text-xs text-cyan-200">House Brokerage</div>
            <div className="mt-2 text-2xl font-black">{money(vanguardAllocation)}</div>
            <div className="mt-1 text-xs text-slate-400">20% target</div>
          </div>
        </div>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <DetailBreakdown title="Food Biggest Purchases" subtitle="Actual merchants/transactions driving the overage" rows={foodDetail} total={1425} budget={1350} />
        <DetailBreakdown title="ASH Biggest Purchases" subtitle="Actual transactions or merchant groups driving the overage" rows={ashDetail} total={1035} budget={1000} />
      </section>
    </div>
  );
}

function BudgetingView() {
  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Budgeting</h2>
        <p className="mt-1 text-sm text-slate-400">Spending vs budget, plus fund balances where applicable.</p>
        <div className="mt-4 space-y-3">
          {budgetRows.map((row) => {
            const variance = row.budget - row.actual;
            const pct = row.budget > 0 ? Math.min(130, Math.round((row.actual / row.budget) * 100)) : 0;
            return (
              <div key={row.category} className="rounded-2xl bg-slate-950/35 p-4">
                <div className="flex justify-between gap-3">
                  <div>
                    <div className="font-bold text-white">{row.category}</div>
                    <div className="mt-1 text-xs text-slate-400">{money(row.actual)} spent of {money(row.budget)}</div>
                    {row.fund && row.endingFund !== null && <div className="mt-1 text-xs text-cyan-300">Ending fund: {money(row.endingFund)}</div>}
                    {row.fund && row.endingFund === null && <div className="mt-1 text-xs text-amber-300">Ending fund: pending final reserve balance</div>}
                  </div>
                  <div className={`font-black ${variance >= 0 ? "text-emerald-300" : "text-rose-300"}`}>{money(variance)}</div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className={`h-2 rounded-full ${variance >= 0 ? "bg-cyan-400" : "bg-rose-400"}`} style={{ width: `${Math.min(100, pct)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Fund Reserves</h2>
        <p className="mt-1 text-sm text-slate-400">Ending fund balances help decide surplus allocation before finalizing the dashboard.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {fundBalances.map((fund) => (
            <div key={fund.name} className="rounded-2xl bg-slate-950/35 p-4">
              <div className="text-xs text-slate-400">{fund.name}</div>
              <div className="mt-1 text-xl font-black text-white">{money(fund.balance)}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Budget vs Actual Chart</h2>
        <div className="mt-4 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgetRows.slice(0, 12)} layout="vertical" margin={{ left: 0, right: 5, top: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27314f" />
              <XAxis type="number" stroke="#94a3b8" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="category" stroke="#94a3b8" width={120} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value) => money(value)} contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16 }} />
              <Legend />
              <Bar dataKey="budget" fill="#334155" radius={[8, 8, 8, 8]} />
              <Bar dataKey="actual" fill="#22d3ee" radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

function IncomeView() {
  return (
    <div className="space-y-4">
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <SmallMetric label="Normal" value={money(12500)} note="Paychecks, including SoFi split" tone="cyan" />
        <SmallMetric label="Bonus" value={money(0)} note="Annual, not run-rate" tone="orange" />
        <SmallMetric label="CPA Side" value={money(0)} note="Seasonal March/April" tone="emerald" />
      </section>
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">12-Month Income Trend</h2>
        <p className="mt-1 text-sm text-slate-400">Normal income separated from annual/seasonal income.</p>
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={incomeTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27314f" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => money(value)} contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16 }} />
              <Legend />
              <Bar dataKey="normal" stackId="a" fill="#22d3ee" radius={[8, 8, 0, 0]} />
              <Bar dataKey="bonus" stackId="a" fill="#f97316" radius={[8, 8, 0, 0]} />
              <Bar dataKey="cpa" stackId="a" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

function ExpensesView() {
  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Expense Overview</h2>
        <p className="mt-1 text-sm text-slate-400">Overview of the month, not the full transaction detail.</p>
        <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
          <p><span className="font-bold text-white">Food:</span> Over budget by {money(75)}. Show the actual biggest merchants/transactions, not generic labels.</p>
          <p><span className="font-bold text-white">ASH:</span> Over budget by {money(35)}. Broad family/personal bucket, so this is visibility more than blame.</p>
          <p><span className="font-bold text-white">Utilities:</span> On track after water bill classification.</p>
          <p><span className="font-bold text-white">CK:</span> Essentially on budget.</p>
          <p><span className="font-bold text-white">Random:</span> Always show item-level detail because it is a one-off bucket.</p>
        </div>
      </Card>
      <section className="grid gap-4 md:grid-cols-2">
        <DetailBreakdown title="Food Biggest Purchases" subtitle="Actual merchants/transactions driving the overage" rows={foodDetail} total={1425} budget={1350} />
        <DetailBreakdown title="ASH Biggest Purchases" subtitle="Actual transactions or merchant groups driving the overage" rows={ashDetail} total={1035} budget={1000} />
        <DetailBreakdown title="Random Detail" subtitle="Actual one-off transactions, never generic misc" rows={randomDetail} total={115} budget={150} />
        <DetailBreakdown title="Housing Detail" subtitle="Mortgage actual vs budget" rows={[{ label: "Mortgage payment", amount: 2450 }]} total={2450} budget={2450} />
      </section>
    </div>
  );
}

function InvestmentsView() {
  const totalInvestments = investmentAccounts.reduce((sum, row) => sum + row.value, 0);
  const allocationDollars = investmentFunds.map((row) => ({ name: row.label, actual: row.current, target: row.target }));

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <SmallMetric label="Retirement" value={money(99386.54)} note="Roth 401(k) + Roth IRA" tone="violet" />
        <SmallMetric label="Kids" value={money(10460.38)} note="Brokerage + legacy ESA" tone="cyan" />
        <SmallMetric label="House Brokerage" value={money(874.79)} note="Future down payment" tone="orange" />
      </section>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Investment Accounts</h2>
        <div className="mt-4 space-y-3">
          {investmentAccounts.map((row) => (
            <div key={row.name} className="rounded-2xl bg-slate-950/35 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-white">{row.name}</div>
                  <div className="mt-1 text-xs text-slate-400">{row.purpose} · {row.tax}</div>
                </div>
                <div className="font-black text-cyan-200">{money(row.value)}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Allocation vs Target</h2>
        <p className="mt-1 text-sm text-slate-400">Target: 83.3% VTI/domestic, 14.7% VXUS/international, 2% FBTC/Bitcoin ETF.</p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={allocationDollars}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27314f" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16 }} />
              <Legend />
              <Bar dataKey="target" fill="#334155" radius={[8, 8, 0, 0]} />
              <Bar dataKey="actual" fill="#22d3ee" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {investmentFunds.map((fund) => (
            <div key={fund.ticker} className="rounded-2xl bg-slate-950/35 p-4">
              <div className="text-xs text-slate-400">{fund.label}</div>
              <div className="mt-1 text-xl font-black text-white">{fund.ticker}</div>
              <div className="mt-1 text-xs text-slate-400">Target {fund.target}% · Current {fund.current}%</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-slate-400">Total tracked investments: {money(totalInvestments)}. New surplus contributions should be allocated across VTI, VXUS, and FBTC to move toward target allocation.</p>
      </Card>
    </div>
  );
}

function DebtsView() {
  return (
    <div className="space-y-4">
      <section className="grid gap-3 md:grid-cols-2">
        {debts.map((debt) => (
          <SmallMetric key={debt.name} label={debt.name} value={money(debt.balance)} note={debt.note} tone={debt.name === "Mortgage" ? "orange" : "violet"} />
        ))}
      </section>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Current Mortgage Payment</h2>
        <p className="mt-1 text-sm text-slate-400">Payment due {mortgagePayment.nextDueDate}</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="rounded-2xl bg-cyan-400/10 p-4"><div className="text-xs text-cyan-200">Payment</div><div className="mt-1 text-xl font-black">{money(mortgagePayment.monthlyPayment)}</div></div>
          <div className="rounded-2xl bg-emerald-400/10 p-4"><div className="text-xs text-emerald-200">Principal</div><div className="mt-1 text-xl font-black">{money(mortgagePayment.principal)}</div></div>
          <div className="rounded-2xl bg-orange-400/10 p-4"><div className="text-xs text-orange-200">Interest</div><div className="mt-1 text-xl font-black">{money(mortgagePayment.interest)}</div></div>
          <div className="rounded-2xl bg-violet-400/10 p-4"><div className="text-xs text-violet-200">Escrow</div><div className="mt-1 text-xl font-black">{money(mortgagePayment.escrow)}</div></div>
        </div>
      </Card>
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Mortgage Balance Trend</h2>
        <p className="mt-1 text-sm text-slate-400">Auto-updates monthly unless payment terms change.</p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mortgageTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27314f" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => money(value)} contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16 }} />
              <Line type="monotone" dataKey="balance" stroke="#f97316" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

function GoalsView() {
  const totalHouseSavings = Math.max(0, houseGoal.estimatedHomeEquity + houseGoal.houseBrokerage);
  const rawEquityPosition = houseGoal.estimatedHomeEquity + houseGoal.houseBrokerage;
  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Bigger House Goal</h2>
        <p className="mt-1 text-sm text-slate-400">Target down payment / move-up flexibility: {money(houseGoal.downPaymentTarget)}</p>
        <div className="mt-4 rounded-2xl bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
          Home value uses the public estimate so it can be refreshed monthly when available. Equity should be treated as directional, not exact.
        </div>
        <div className="mt-5 space-y-6">
          <ProgressBar value={totalHouseSavings} max={houseGoal.downPaymentTarget} label="Home Equity + House Brokerage" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-orange-400/10 p-4">
            <div className="text-xs text-orange-200">Home Value Estimate</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.estimatedHomeValue)}</div>
            <div className="mt-1 text-xs text-slate-400">{houseGoal.source}</div>
          </div>
          <div className="rounded-2xl bg-rose-400/10 p-4">
            <div className="text-xs text-rose-200">Est. Equity</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.estimatedHomeEquity)}</div>
            <div className="mt-1 text-xs text-slate-400">Estimated value less current principal</div>
          </div>
          <div className="rounded-2xl bg-violet-400/10 p-4">
            <div className="text-xs text-violet-200">Mortgage Balance</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.estimatedMortgageBalance)}</div>
            <div className="mt-1 text-xs text-slate-400">Current principal balance</div>
          </div>
          <div className="rounded-2xl bg-cyan-400/10 p-4">
            <div className="text-xs text-cyan-200">House Brokerage</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.houseBrokerage)}</div>
            <div className="mt-1 text-xs text-slate-400">Future down payment fund</div>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-slate-950/35 p-4">
          <div className="text-xs text-slate-400">Raw equity + house brokerage position</div>
          <div className={`mt-1 text-2xl font-black ${rawEquityPosition >= 0 ? "text-cyan-200" : "text-rose-200"}`}>{money(rawEquityPosition)}</div>
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Home Equity Trend</h2>
        <p className="mt-1 text-sm text-slate-400">This will combine mortgage payoff and estimated home value changes.</p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mortgageTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27314f" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value / 1000}k`} />
              <Tooltip formatter={(value) => money(value)} contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16 }} />
              <Line type="monotone" dataKey="equity" stroke="#22d3ee" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

export default function PersonalFinanceCommandCenter() {
  const [activeMonth, setActiveMonth] = useState("May");
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "budgeting": return <BudgetingView />;
      case "income": return <IncomeView />;
      case "expenses": return <ExpensesView />;
      case "investments": return <InvestmentsView />;
      case "debts": return <DebtsView />;
      case "goals": return <GoalsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070b1d] text-white">
      <div className="flex min-h-screen">
        <DesktopSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-5 md:p-8">
          <Header activeMonth={activeMonth} setActiveMonth={setActiveMonth} />
          {renderSection()}
        </main>
        <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}
