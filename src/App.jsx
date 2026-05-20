import React, { useState } from "react";
import {
  months,
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
} from "./data/monthlyData.js";

const sections = [
  ["dashboard", "Home", "▦"],
  ["budgeting", "Budget", "◉"],
  ["expenses", "Spend", "↘"],
  ["investments", "Invest", "▰"],
  ["goals", "Goals", "◎"],
];

function money(value) {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-[#d9ccba] bg-[#f8f2e8] text-[#4b3a2d] shadow-lg shadow-[#9f8b73]/20 ${className}`}>{children}</div>;
}

function SmallMetric({ label, value, note, tone = "cyan" }) {
  const color = {
    cyan: "text-[#7c6a58] bg-[#efe2d0]",
    orange: "text-[#b5601c] bg-[#fde5c8]",
    rose: "text-[#9a5c46] bg-[#f5ddd4]",
    emerald: "text-[#5f744f] bg-[#e4eddc]",
    violet: "text-[#7a6c8f] bg-[#e8e0f1]",
  }[tone];

  return (
    <Card className="p-4">
      <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${color}`}>{label}</div>
      <div className="text-2xl font-black tracking-tight text-[#3f3025]">{value}</div>
      {note && <div className="mt-1 text-xs leading-5 text-[#8d7a66]">{note}</div>}
    </Card>
  );
}

function Header({ activeMonth, setActiveMonth }) {
  return (
    <header className="mb-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b5601c]">Household CFO</p>
          <h1 className="mt-1 text-3xl font-black leading-tight text-[#3f3025] md:text-5xl">Command Center</h1>
          <p className="mt-1 text-sm text-[#8d7a66]">{dashboardMeta.subtitle}</p>
        </div>
        <div className="rounded-2xl border border-[#dfcfbb] bg-[#f1e7da] px-4 py-3 text-right">
          <div className="text-xs text-[#8d7a66]">View</div>
          <div className="text-lg font-black text-[#3f3025]">{activeMonth}</div>
        </div>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2">
          {months.map((month) => (
            <button key={month} onClick={() => setActiveMonth(month)} className={`rounded-2xl px-4 py-2 text-sm font-black transition ${activeMonth === month ? "bg-[#e48733] text-white" : "bg-[#efe2d0] text-[#8d7a66]"}`}>
              {month}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function MobileNav({ activeSection, setActiveSection }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#d8c8b2] bg-[#f8f2e8]/95 px-2 py-2 backdrop-blur md:hidden">
      <div className="flex justify-between gap-1">
        {sections.map(([key, label, icon]) => (
          <button key={key} onClick={() => setActiveSection(key)} className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-bold transition ${activeSection === key ? "bg-[#e48733] text-white" : "text-[#8d7a66]"}`}>
            <span className="text-base leading-none">{icon}</span>
            <span className="truncate">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function DesktopSidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-[#d8c8b2] bg-[#f4eadc] px-4 py-6 md:block">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4b36f] to-[#e48733] text-2xl font-black text-white">PF</div>
        <div>
          <div className="text-sm text-[#8d7a66]">Cody King</div>
          <div className="font-bold text-[#3f3025]">Command Center</div>
        </div>
      </div>
      <nav className="space-y-2">
        {sections.map(([key, label, icon]) => (
          <button key={key} onClick={() => setActiveSection(key)} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === key ? "bg-gradient-to-r from-[#e48733] to-[#f4b36f] text-white" : "text-[#6e5a47] hover:bg-[#efe2d0]"}`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#efe2d0]">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

function MiniLineChart({ data, xKey, yKey, stroke = "#22d3ee", labelFormatter = (x) => x }) {
  const values = data.map((d) => d[yKey]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = data.map((d, i) => {
    const x = 20 + (i * 260) / Math.max(1, data.length - 1);
    const y = 180 - ((d[yKey] - min) / range) * 140;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="mt-4 h-72 rounded-2xl bg-[#efe2d0] p-3">
      <svg viewBox="0 0 300 210" className="h-full w-full">
        <polyline points={points} fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => {
          const x = 20 + (i * 260) / Math.max(1, data.length - 1);
          const y = 180 - ((d[yKey] - min) / range) * 140;
          return <circle key={i} cx={x} cy={y} r="5" fill={stroke} />;
        })}
        {data.map((d, i) => {
          const x = 20 + (i * 260) / Math.max(1, data.length - 1);
          return <text key={i} x={x} y="202" textAnchor="middle" fontSize="10" fill="#6e5a47">{labelFormatter(d[xKey])}</text>;
        })}
      </svg>
    </div>
  );
}

function DetailBreakdown({ title, subtitle, rows, total, budget }) {
  const over = total - budget;
  return (
    <Card className="p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black md:text-xl">{title}</h2>
          <p className="mt-1 text-sm text-[#8d7a66]">{subtitle}</p>
        </div>
        <div className={`rounded-2xl px-3 py-2 text-right ${over > 0 ? "bg-[#f5ddd4] text-[#8d4f3b]" : "bg-[#e4eddc] text-[#4f6840]"}`}>
          <div className="text-xs">{over > 0 ? "Over" : "Under"}</div>
          <div className="text-lg font-black">{money(Math.abs(over))}</div>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {rows.map((row) => {
          const pct = total > 0 ? Math.round((row.amount / total) * 100) : 0;
          return (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-[#5f4a39]">{row.label}</span>
                <span className="font-black text-[#3f3025]">{money(row.amount)}</span>
              </div>
              <div className="h-2 rounded-full bg-[#d9c9b4]">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function topTransactions(category, limit = 5) {
  return (spendTransactions[category] || [])
    .map((row) => ({ label: row.merchant, amount: row.amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);
}

function DashboardView() {
  return (
    <div className="space-y-4">
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        <SmallMetric label="Cash" value={money(homeMetrics.cash)} note="Before allocation" tone="cyan" />
        <SmallMetric label="Spending" value={money(homeMetrics.spending)} note={`${dashboardMeta.activeMonth} categorized`} tone="rose" />
        <SmallMetric label="Investments" value={money(homeMetrics.investments)} note="Roth + Vanguard" tone="violet" />
        <SmallMetric label="Actual Surplus" value={money(homeMetrics.actualSurplus)} note="After reconciliation" tone="emerald" />
      </section>

      <Card className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-black md:text-xl">Net Worth Trend</h2>
            <p className="mt-1 text-sm text-[#8d7a66]">The scorecard number I care about most: are we moving up over time?</p>
          </div>
          <div className="rounded-2xl bg-[#e4eddc] px-3 py-2 text-right text-[#4f6840]">
            <div className="text-xs">{dashboardMeta.activeMonth}</div>
            <div className="text-lg font-black">{money(netWorthTrend.at(-1)?.netWorth || 0)}</div>
          </div>
        </div>
        <MiniLineChart data={netWorthTrend} xKey="month" yKey="netWorth" />
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">{dashboardMeta.activeMonth} Monthly Closeout</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">This is the main monthly overview. The final dashboard should be generated after review questions and surplus allocation are settled.</p>
        <div className="mt-4 space-y-3 text-sm leading-6 text-[#6e5a47]">
          {monthlyCloseout.map(([label, text]) => (
            <p key={label}><span className="font-bold text-[#3f3025]">{label}:</span> {text}</p>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Month-End Allocation</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Based on actual surplus after reconciliation, subject to your approval and fund reserve needs.</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#fde5c8] p-4">
            <div className="text-xs text-[#9b4f12]">House Paydown</div>
            <div className="mt-2 text-2xl font-black">{money(allocation.housePaydown)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">80% target</div>
          </div>
          <div className="rounded-2xl bg-[#efe2d0] p-4">
            <div className="text-xs text-[#6e5a47]">House Brokerage</div>
            <div className="mt-2 text-2xl font-black">{money(allocation.houseBrokerage)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">20% target</div>
          </div>
        </div>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <DetailBreakdown title="Food Biggest Purchases" subtitle="Actual merchants/transactions driving the overage" rows={topTransactions("Food")} total={1425} budget={1350} />
        <DetailBreakdown title="ASH Biggest Purchases" subtitle="Actual transactions or merchant groups driving the overage" rows={topTransactions("ASH")} total={1035} budget={1000} />
      </section>
    </div>
  );
}

function BudgetingView() {
  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Fund Reserves</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Ending fund balances. These help decide surplus allocation before finalizing the dashboard.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {fundBalances.map((fund) => (
            <div key={fund.name} className="rounded-2xl bg-[#efe2d0] p-4">
              <div className="text-xs text-[#8d7a66]">{fund.name}</div>
              <div className="mt-1 text-xl font-black text-[#3f3025]">{money(fund.balance)}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Budget vs Actual Chart</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Clean category-level budget view. Transaction drill-down lives in Spend.</p>
        <div className="mt-4 space-y-3">
          {budgetRows.slice(0, 12).map((row) => {
            const pct = Math.min(100, Math.round((row.actual / row.budget) * 100));
            return (
              <div key={row.category}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-[#6e5a47]">{row.category}</span>
                  <span className="font-bold text-[#3f3025]">{money(row.actual)} / {money(row.budget)}</span>
                </div>
                <div className="h-3 rounded-full bg-[#d9c9b4]">
                  <div className="h-3 rounded-full bg-cyan-400" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function ExpensesView() {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const selectedRows = spendTransactions[selectedCategory] || [];
  const selectedTotal = selectedRows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Spend by Category</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Tap a category to see the transactions from the statements that went into it.</p>
        <div className="mt-4 space-y-3">
          {budgetRows.map((row) => {
            const variance = row.budget - row.actual;
            const pct = row.budget > 0 ? Math.min(100, Math.round((row.actual / row.budget) * 100)) : 0;
            const isActive = selectedCategory === row.category;
            return (
              <button key={row.category} onClick={() => setSelectedCategory(row.category)} className={`w-full rounded-2xl p-4 text-left transition ${isActive ? "bg-[#f4b36f]/35 ring-2 ring-[#e48733]/70" : "bg-[#efe2d0] hover:bg-[#eadbc7]"}`}>
                <div className="flex justify-between gap-3">
                  <div>
                    <div className="font-bold text-[#3f3025]">{row.category}</div>
                    <div className="mt-1 text-xs text-[#8d7a66]">{money(row.actual)} spent of {money(row.budget)}</div>
                    {row.fund && row.endingFund !== null && <div className="mt-1 text-xs text-[#6e5a47]">Ending fund: {money(row.endingFund)}</div>}
                  </div>
                  <div className={`font-black ${variance >= 0 ? "text-[#4f6840]" : "text-[#8d4f3b]"}`}>{money(variance)}</div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[#d9c9b4]">
                  <div className={`h-2 rounded-full ${variance >= 0 ? "bg-cyan-400" : "bg-rose-400"}`} style={{ width: `${pct}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-black md:text-xl">{selectedCategory} Transactions</h2>
            <p className="mt-1 text-sm text-[#8d7a66]">Statement-level detail that makes the category total explainable.</p>
          </div>
          <div className="rounded-2xl bg-[#efe2d0] px-3 py-2 text-right text-[#6e5a47]">
            <div className="text-xs">Total</div>
            <div className="text-lg font-black">{money(selectedTotal)}</div>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {selectedRows.length === 0 ? (
            <div className="rounded-2xl bg-[#efe2d0] p-4 text-sm text-[#8d7a66]">No transactions in this category for the mock month.</div>
          ) : (
            selectedRows.map((row, index) => (
              <div key={`${row.date}-${row.merchant}-${index}`} className="flex items-center justify-between gap-3 rounded-2xl bg-[#efe2d0] p-4">
                <div>
                  <div className="font-bold text-[#3f3025]">{row.merchant}</div>
                  <div className="mt-1 text-xs text-[#8d7a66]">{row.date}</div>
                </div>
                <div className="font-black text-[#3f3025]">{money(row.amount)}</div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}

function InvestmentsView() {
  const totalInvestments = investmentAccounts.reduce((sum, row) => sum + row.value, 0);

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
            <div key={row.name} className="rounded-2xl bg-[#efe2d0] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-[#3f3025]">{row.name}</div>
                  <div className="mt-1 text-xs text-[#8d7a66]">{row.purpose} · {row.tax}</div>
                </div>
                <div className="font-black text-[#6e5a47]">{money(row.value)}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">College Projection — Today’s Dollars</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">All kids combined. Current balance about $10,460, $667/month contribution, 6% real return, oldest age 4 to 18.</p>
        <MiniLineChart data={collegeProjection} xKey="age" yKey="balance" labelFormatter={(age) => `Age ${age}`} />
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Retirement Projection — Today’s Dollars</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Age 31 to 65. Includes Roth 401(k), employer match, Roth IRA/brokerage retirement savings, 2% salary growth, and 6% real return.</p>
        <MiniLineChart data={retirementProjection} xKey="age" yKey="balance" stroke="#8b5cf6" labelFormatter={(age) => `${age}`} />
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-[#e8e0f1] p-4">
            <div className="text-xs text-[#665782]">Projected at 65</div>
            <div className="mt-2 text-2xl font-black">{money(retirementSummary.projectedAt65)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Today’s dollars</div>
          </div>
          <div className="rounded-2xl bg-[#e4eddc] p-4">
            <div className="text-xs text-[#4f6840]">4% Rule Annual Income</div>
            <div className="mt-2 text-2xl font-black">{money(retirementSummary.fourPercentAnnualIncome)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Estimated annual retirement spending using the 4% rule</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-[#8d7a66]">Total tracked investments: {money(totalInvestments)}.</p>
      </Card>
    </div>
  );
}

function GoalsView() {
  const totalHouseSavings = Math.max(0, houseGoal.estimatedHomeEquity + houseGoal.houseBrokerage);
  const rawEquityPosition = houseGoal.estimatedHomeEquity + houseGoal.houseBrokerage;
  const progressPct = houseGoal.downPaymentTarget > 0 ? Math.min(100, Math.round((totalHouseSavings / houseGoal.downPaymentTarget) * 100)) : 0;

  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Bigger House Goal</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Target down payment / move-up flexibility: {money(houseGoal.downPaymentTarget)}</p>
        <div className="mt-4 rounded-2xl bg-[#efe2d0] p-4 text-sm leading-6 text-[#6e5a47]">
          Home value uses the public estimate so it can be refreshed monthly when available. Equity should be treated as directional, not exact.
        </div>
        <div className="mt-5">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-[#6e5a47]">Home Equity + House Brokerage</span>
            <span className="font-bold text-[#3f3025]">{progressPct}%</span>
          </div>
          <div className="h-3 rounded-full bg-[#d9c9b4]">
            <div className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs text-[#7b6856]">
            <span>{money(totalHouseSavings)}</span>
            <span>{money(houseGoal.downPaymentTarget)}</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#fde5c8] p-4">
            <div className="text-xs text-[#9b4f12]">Home Value Estimate</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.estimatedHomeValue)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">{houseGoal.source}</div>
          </div>
          <div className="rounded-2xl bg-[#f5ddd4] p-4">
            <div className="text-xs text-[#8d4f3b]">Est. Equity</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.estimatedHomeEquity)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Estimated value less current principal</div>
          </div>
          <div className="rounded-2xl bg-[#e8e0f1] p-4">
            <div className="text-xs text-[#665782]">Mortgage Balance</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.estimatedMortgageBalance)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Current principal balance</div>
          </div>
          <div className="rounded-2xl bg-[#efe2d0] p-4">
            <div className="text-xs text-[#6e5a47]">House Brokerage</div>
            <div className="mt-2 text-2xl font-black">{money(houseGoal.houseBrokerage)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Future down payment fund</div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-[#efe2d0] p-4">
          <div className="text-xs text-[#8d7a66]">Raw equity + house brokerage position</div>
          <div className={`mt-1 text-2xl font-black ${rawEquityPosition >= 0 ? "text-[#6e5a47]" : "text-[#8d4f3b]"}`}>{money(rawEquityPosition)}</div>
        </div>
      </Card>

      <Card className="overflow-hidden p-0">
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 md:h-80">
          <img
            src={targetHome.imageUrl}
            alt=""
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-white">Target Home Example</div>
            <h2 className="mt-3 text-2xl font-black leading-tight text-white">{targetHome.address}</h2>
          </div>
        </div>
        <div className="p-4 md:p-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-[#fde5c8] p-4">
              <div className="text-xs text-[#9b4f12]">Price</div>
              <div className="mt-1 text-xl font-black">{money(targetHome.price)}</div>
            </div>
            <div className="rounded-2xl bg-[#efe2d0] p-4">
              <div className="text-xs text-[#6e5a47]">Beds / Baths</div>
              <div className="mt-1 text-xl font-black">{targetHome.beds} / {targetHome.baths}</div>
            </div>
            <div className="rounded-2xl bg-[#e8e0f1] p-4">
              <div className="text-xs text-[#665782]">Sq Ft</div>
              <div className="mt-1 text-xl font-black">{targetHome.sqft.toLocaleString()}</div>
            </div>
            <div className="rounded-2xl bg-[#e4eddc] p-4">
              <div className="text-xs text-[#4f6840]">HOA</div>
              <div className="mt-1 text-xl font-black">{targetHome.hoa}</div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-[#efe2d0] p-4 text-sm leading-6 text-[#6e5a47]">
            <p><span className="font-bold text-[#3f3025]">Why it fits:</span> over 2,750 sqft, under $650k, at least 4 bedrooms, and appears in the Zillow search near Prosper High School.</p>
            <p className="mt-2 text-[#8d7a66]">{targetHome.schoolNote}</p>
          </div>
          <a href={targetHome.listingUrl} target="_blank" rel="noreferrer" className="mt-4 block rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3 text-center text-sm font-black text-white shadow-lg shadow-orange-950/30">
            Open Zillow Listing
          </a>
        </div>
      </Card>
    </div>
  );
}

export default function PersonalFinanceCommandCenter() {
  const [activeMonth, setActiveMonth] = useState(dashboardMeta.activeMonth);
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "budgeting":
        return <BudgetingView />;
      case "expenses":
        return <ExpensesView />;
      case "investments":
        return <InvestmentsView />;
      case "goals":
        return <GoalsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#e8ddcb] text-[#4b3a2d]">
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
