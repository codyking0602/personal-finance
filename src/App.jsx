import React, { useEffect, useMemo, useRef, useState } from "react";
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
  currentTargetHome,
  modelHousePlanningRules,
  monthlyRecords,
} from "./data/monthlyData.js";

const sections = [
  ["dashboard", "Home", "▦"],
  ["budgeting", "Budget", "◉"],
  ["investments", "Invest", "▰"],
  ["goals", "Goals", "◎"],
];

const fallbackData = {
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
};

const COLORS = {
  appBg: "bg-[#f2ecdf]",
  appText: "text-[#4b3a2d]",
  cardBorder: "border-[#ddd4c7]",
  cardBg: "bg-[#fffdf9]",
  cardText: "text-[#4b3a2d]",
};

function money(value, decimals = 0) {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
}

function shortMoney(value) {
  const number = Number(value || 0);
  const abs = Math.abs(number);
  const sign = number < 0 ? "-" : "";
  if (abs >= 1000000) return `${sign}$${(abs / 1000000).toFixed(abs >= 10000000 ? 0 : 1)}M`;
  if (abs >= 1000) return `${sign}$${Math.round(abs / 1000)}k`;
  return `${sign}$${Math.round(abs)}`;
}

function percent(value, decimals = 2) {
  return `${Number(value || 0).toFixed(decimals)}%`;
}

function roundToNearest(value, nearest = 5000) {
  return Math.round((value || 0) / nearest) * nearest;
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border ${COLORS.cardBorder} ${COLORS.cardBg} ${COLORS.cardText} shadow-lg shadow-[#9f8b73]/20 ${className}`}>
      {children}
    </div>
  );
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

function Header({ activeMonth, setActiveMonth, activeData, availableMonths }) {
  const monthStripRef = useRef(null);

  useEffect(() => {
    const activeButton = monthStripRef.current?.querySelector(`[data-month="${activeMonth}"]`);
    activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeMonth]);

  return (
    <header className="mb-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b5601c]">The King's</p>
          <h1 className="mt-1 text-4xl font-black leading-tight text-[#3f3025] md:text-5xl">Finances</h1>
          <p className="mt-1 text-sm text-[#8d7a66]">{activeData.dashboardMeta?.subtitle || `${activeMonth} 2026`}</p>
        </div>
        <label className="rounded-2xl border border-[#dfcfbb] bg-[#f1e7da] px-4 py-3 text-right">
          <div className="text-xs text-[#8d7a66]">View</div>
          <select
            value={activeMonth}
            onChange={(event) => setActiveMonth(event.target.value)}
            className="mt-1 max-w-[84px] appearance-none bg-transparent text-right text-lg font-black text-[#3f3025] outline-none"
          >
            {availableMonths.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </label>
      </div>
      <div ref={monthStripRef} className="-mx-4 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2">
          {months.map((month) => {
            const hasData = availableMonths.includes(month);
            return (
              <button
                key={month}
                data-month={month}
                disabled={!hasData}
                onClick={() => hasData && setActiveMonth(month)}
                className={`rounded-2xl px-4 py-2 text-sm font-black transition ${activeMonth === month ? "bg-[#e48733] text-white" : "bg-[#efe2d0] text-[#8d7a66]"} ${!hasData ? "cursor-not-allowed opacity-40" : ""}`}
              >
                {month}
              </button>
            );
          })}
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
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-bold transition ${activeSection === key ? "bg-[#e48733] text-white" : "text-[#8d7a66]"}`}
          >
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
          <div className="font-bold text-[#3f3025]">Finances</div>
        </div>
      </div>
      <nav className="space-y-2">
        {sections.map(([key, label, icon]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === key ? "bg-gradient-to-r from-[#e48733] to-[#f4b36f] text-white" : "text-[#6e5a47] hover:bg-[#efe2d0]"}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#efe2d0]">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

function MiniLineChart({ data, xKey, yKey, stroke = "#d68936", labelFormatter = (x) => x, xAxisLabel = "", yTickFormatter = shortMoney, topLabel = "" }) {
  const values = data.map((d) => Number(d[yKey] || 0));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const left = 58;
  const right = 312;
  const top = 38;
  const bottom = 176;
  const width = right - left;
  const height = bottom - top;
  const getX = (i) => left + (i * width) / Math.max(1, data.length - 1);
  const getY = (value) => bottom - ((value - min) / range) * height;
  const points = data.map((d, i) => `${getX(i)},${getY(Number(d[yKey] || 0))}`).join(" ");
  const lastValue = values.at(-1) || 0;

  return (
    <div className="mt-4 h-72 rounded-2xl border border-[#ddd4c7] bg-[#faf5ec] p-3">
      <svg viewBox="0 0 330 220" className="h-full w-full overflow-visible">
        {topLabel ? <text x="312" y="17" textAnchor="end" fontSize="8.5" fill="#6e5a47">{topLabel}: {yTickFormatter(lastValue)}</text> : null}
        {[0, 1, 2, 3, 4].map((step) => {
          const value = max - (range * step) / 4;
          const y = top + step * (height / 4);
          return (
            <g key={`grid-${step}`}>
              <line x1={left} y1={y} x2={right} y2={y} stroke="#decfb8" strokeWidth="1" />
              <text x={left - 8} y={y + 3} textAnchor="end" fontSize="8.5" fill="#766352">{yTickFormatter(value)}</text>
            </g>
          );
        })}
        <polyline points={points} fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => {
          const x = getX(i);
          const y = getY(Number(d[yKey] || 0));
          return <circle key={i} cx={x} cy={y} r="5" fill={stroke} />;
        })}
        {data.map((d, i) => {
          const x = getX(i);
          return <text key={i} x={x} y="198" textAnchor="middle" fontSize="10" fill="#6e5a47">{labelFormatter(d[xKey])}</text>;
        })}
        {xAxisLabel ? <text x="185" y="214" textAnchor="middle" fontSize="9" fill="#5e4b3b">{xAxisLabel}</text> : null}
      </svg>
    </div>
  );
}

function DashboardView({ data }) {
  const metrics = data.homeMetrics || {};
  const snapshotItems = data.snapshot || data.monthlyCloseout || [];
  const goal = data.houseGoal || {};
  const target = goal.downPaymentTarget || 50000;
  const saved = goal.nextHomeSavings ?? goal.cashSavings ?? goal.currentSavings ?? 20000;
  const left = Math.max(0, target - saved);
  const progressPct = target > 0 ? Math.min(100, Math.round((saved / target) * 100)) : 0;
  const projectedDate = goal.projectedDate || "March 2027";
  const monthlyPace = goal.monthlyPace || 3139;
  const snapshotMonth = data.dashboardMeta?.subtitle?.split(" ")?.[0] || data.dashboardMeta?.activeMonth || "";

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        <SmallMetric label="Cash" value={money(metrics.cash)} tone="cyan" />
        <SmallMetric label="Income" value={money(metrics.income || metrics.budgetIncome || 0)} tone="emerald" />
        <SmallMetric label="Spending" value={money(metrics.spending)} tone="rose" />
        <SmallMetric label="Investments" value={money(metrics.investments)} tone="violet" />
      </section>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">{snapshotMonth} Snapshot</h2>
        <div className="mt-4 space-y-3">
          {snapshotItems.slice(0, 5).map((item, index) => {
            const [label, text] = Array.isArray(item) ? item : ["", item];
            return (
              <div key={`${label}-${index}`} className="flex gap-3 text-sm leading-6 text-[#6e5a47]">
                <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#d68936]" />
                <p>
                  {label ? <span className="font-black text-[#3f3025]">{label}: </span> : null}
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="overflow-hidden p-0">
        <div className="bg-gradient-to-br from-[#fff4e6] via-[#f7dfbd] to-[#e7b875] p-5 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9b4f12]">Next Home Progress</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-[#3f3025] md:text-5xl">{money(saved)} saved</h2>
              <p className="mt-2 text-sm font-semibold text-[#7b6856]">Building toward our {money(target)} next-home goal</p>
            </div>
            <div className="rounded-3xl bg-white/55 px-4 py-3 text-right shadow-sm">
              <div className="text-xs font-bold text-[#8d7a66]">Progress</div>
              <div className="text-3xl font-black text-[#3f3025]">{progressPct}%</div>
            </div>
          </div>
          <div className="mt-6 h-6 overflow-hidden rounded-full bg-[#d9c9b4]/80 shadow-inner">
            <div className="h-full rounded-full bg-gradient-to-r from-[#d68936] to-[#9f6b36]" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs font-bold text-[#7b6856]">
            <span>Start</span>
            <span>$25k</span>
            <span>{money(target)} goal</span>
          </div>
        </div>
        <div className="p-4 md:p-5">
          <div className="rounded-3xl bg-[#fff4e6] p-5 text-center shadow-inner shadow-[#d6a96b]/20">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9b4f12]">Anticipated Date</div>
            <div className="mt-2 text-4xl font-black text-[#3f3025]">{projectedDate}</div>
            <div className="mt-2 text-sm font-semibold text-[#7b6856]">
              {money(left)} left at about {money(monthlyPace)} per month
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function BudgetingView({ data }) {
  const reserves = (data.fundBalances || []).filter((fund) => fund.balance > 0);
  const overages = (data.fundBalances || []).filter((fund) => fund.balance < 0);
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="space-y-4">
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Fund Reserves</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Ending balances for cash we are intentionally holding.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {reserves.map((fund) => (
            <div key={fund.name} className="rounded-2xl bg-[#efe2d0] p-4">
              <div className="text-xs text-[#8d7a66]">{fund.name}</div>
              <div className="mt-1 text-xl font-black text-[#3f3025]">{money(fund.balance)}</div>
            </div>
          ))}
        </div>
        {overages.length > 0 && (
          <div className="mt-5 border-t border-[#ddd4c7] pt-4">
            <div className="text-xs font-black uppercase tracking-[0.16em] text-[#9a5c46]">Carryforward / Overage</div>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
              {overages.map((fund) => (
                <div key={fund.name} className="rounded-2xl bg-[#f5ddd4] p-4">
                  <div className="text-xs text-[#8d5a49]">{fund.name}</div>
                  <div className="mt-1 text-xl font-black text-[#8d4f3b]">{money(fund.balance)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Budget vs Actual</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Tap any category to see the transactions behind it.</p>
        <div className="mt-4 space-y-3">
          {(data.budgetRows || []).map((row) => {
            const pct = row.budget > 0 ? Math.min(100, Math.round((row.actual / row.budget) * 100)) : 0;
            const variance = row.budget - row.actual;
            const isOpen = expandedCategory === row.category;
            const transactions = data.spendTransactions?.[row.category] || [];
            const transactionTotal = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

            return (
              <div key={row.category} className="overflow-hidden rounded-2xl bg-[#faf5ec]">
                <button
                  type="button"
                  onClick={() => setExpandedCategory(isOpen ? null : row.category)}
                  className="w-full p-3 text-left transition hover:bg-[#f6ecdf]"
                >
                  <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                    <span className="flex items-center gap-2 text-[#6e5a47]">
                      <span className="font-bold">{row.category}</span>
                      <span className="text-[#aa927a]">{isOpen ? "−" : "+"}</span>
                    </span>
                    {row.paused ? (
                      <span className="rounded-full bg-[#e8e0f1] px-2 py-1 font-bold text-[#665782]">Paused for Move</span>
                    ) : (
                      <span className={`font-bold ${variance >= 0 ? "text-[#4f6840]" : "text-[#8d4f3b]"}`}>{money(row.actual)} / {money(row.budget)}</span>
                    )}
                  </div>
                  <div className="h-3 rounded-full bg-[#d9c9b4]">
                    {!row.paused && <div className={`h-3 rounded-full ${variance >= 0 ? "bg-[#d68936]" : "bg-rose-400"}`} style={{ width: `${pct}%` }} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#e4d8c8] bg-[#fffdf9] p-3">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.14em] text-[#9b4f12]">{row.category} Detail</div>
                        {row.fund && row.endingFund !== null ? (
                          <div className="mt-1 text-xs text-[#8d7a66]">Ending fund: {money(row.endingFund)}</div>
                        ) : null}
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-wide text-[#8d7a66]">Transactions</div>
                        <div className="font-black text-[#3f3025]">{money(transactionTotal, 2)}</div>
                      </div>
                    </div>

                    {transactions.length === 0 ? (
                      <div className="rounded-xl bg-[#efe2d0] p-3 text-xs leading-5 text-[#8d7a66]">
                        {row.paused ? "Paused for the move. No contribution this month." : "No transactions in this category for the selected month."}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {transactions.map((transaction, index) => (
                          <div key={`${transaction.date}-${transaction.merchant}-${index}`} className="flex items-center justify-between gap-3 rounded-xl bg-[#efe2d0] px-3 py-2.5">
                            <div className="min-w-0">
                              <div className="truncate text-sm font-bold text-[#3f3025]">{transaction.merchant}</div>
                              <div className="mt-0.5 text-[11px] text-[#8d7a66]">{transaction.date}</div>
                            </div>
                            <div className={`shrink-0 text-sm font-black ${transaction.amount < 0 ? "text-[#4f6840]" : "text-[#3f3025]"}`}>{money(transaction.amount, 2)}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function InvestmentsView({ data }) {
  const accounts = data.investmentAccounts || [];
  const retirementTotal = accounts.filter((row) => row.purpose === "Retirement").reduce((sum, row) => sum + row.value, 0);
  const kidsTotal = accounts.filter((row) => row.purpose.includes("Kids") || row.purpose.includes("Legacy")).reduce((sum, row) => sum + row.value, 0);
  const houseBrokerage = accounts.find((row) => row.name === "House Brokerage")?.value || 0;
  const totalInvestments = accounts.reduce((sum, row) => sum + row.value, 0);

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <SmallMetric label="Retirement" value={money(retirementTotal)} note="Roth 401(k) + Roth IRA" tone="violet" />
        <SmallMetric label="Kids" value={money(kidsTotal)} note="Brokerage + legacy ESA" tone="cyan" />
        <SmallMetric label="House Brokerage" value={money(houseBrokerage)} note="Future down payment" tone="orange" />
      </section>
      <Card className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-black md:text-xl">Net Worth Trend</h2>
            <p className="mt-1 text-sm text-[#8d7a66]">Are we moving up over time?</p>
          </div>
          <div className="rounded-2xl bg-[#e4eddc] px-3 py-2 text-right text-[#4f6840]">
            <div className="text-xs">{data.dashboardMeta?.activeMonth}</div>
            <div className="text-lg font-black">{money(data.netWorthTrend?.at(-1)?.netWorth || 0)}</div>
          </div>
        </div>
        <MiniLineChart data={data.netWorthTrend || []} xKey="month" yKey="netWorth" stroke="#d68936" xAxisLabel="Month" />
        {!data.netWorthTrend?.some((point) => point.month === "Jun") && data.netWorthTrend?.some((point) => point.month === "Aug") ? (
          <p className="mt-3 text-xs leading-5 text-[#8d7a66]">June and July were not backfilled, so the trend intentionally jumps from May to August.</p>
        ) : null}
      </Card>
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Investment Accounts</h2>
        <div className="mt-4 space-y-3">
          {accounts.map((row) => (
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
      {data.moveMode?.active && (
        <div className="rounded-3xl border border-[#d8c8e6] bg-[#f0eafa] p-4 text-sm leading-6 text-[#665782]">
          <span className="font-black">Move Mode:</span> the Roth 401(k) continues at the level needed to capture the employer match. Roth IRA and kids investment contributions are paused until the move. The projections below remain the long-term baseline and assume paused contributions resume after the move.
        </div>
      )}
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">College Projection — Today’s Dollars</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">All kids combined.</p>
        <MiniLineChart data={data.collegeProjection || []} xKey="age" yKey="balance" stroke="#d68936" labelFormatter={(age) => `Age ${age}`} xAxisLabel="Kid's Age" topLabel="Ending projected balance" />
      </Card>
      <Card className="p-4 md:p-5">
        <h2 className="text-lg font-black md:text-xl">Retirement Projection — Today’s Dollars</h2>
        <p className="mt-1 text-sm text-[#8d7a66]">Age 31 to 65.</p>
        <MiniLineChart data={data.retirementProjection || []} xKey="age" yKey="balance" stroke="#d68936" labelFormatter={(age) => `${age}`} xAxisLabel="Cody & Ashley Age" topLabel="Ending projected balance" />
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-[#e8e0f1] p-4">
            <div className="text-xs text-[#665782]">Projected at 65</div>
            <div className="mt-2 text-2xl font-black">{money(data.retirementSummary?.projectedAt65)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Today’s dollars</div>
          </div>
          <div className="rounded-2xl bg-[#e4eddc] p-4">
            <div className="text-xs text-[#4f6840]">4% Rule Annual Income</div>
            <div className="mt-2 text-2xl font-black">{money(data.retirementSummary?.fourPercentAnnualIncome)}</div>
            <div className="mt-1 text-xs text-[#8d7a66]">Estimated annual retirement spending using the 4% rule</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-[#8d7a66]">Total tracked investments in this section: {money(totalInvestments)}.</p>
      </Card>
    </div>
  );
}

function GoalsView({ data }) {
  const home = currentTargetHome || data.targetHome || {};

  const listPrice = home.listPrice ?? home.price ?? home.offerInsightsPrice ?? 0;
  const modelPrice = home.priceUsed ?? roundToNearest(
    listPrice * (1 - (modelHousePlanningRules.priceUsedDiscountRate || 0)),
    modelHousePlanningRules.priceUsedRounding || 1000
  );
  const downPayment = home.downPayment || 50000;
  const annualRate = home.interestRate || 0.0625;
  const loanTermMonths = (home.loanTermYears || 30) * 12;
  const monthlyRate = annualRate / 12;
  const loanPrincipal = Math.max(0, modelPrice - downPayment);
  const calculatedPrincipalAndInterest = loanPrincipal > 0 ? (loanPrincipal * monthlyRate) / (1 - (1 + monthlyRate) ** -loanTermMonths) : 0;
  const principalAndInterest = calculatedPrincipalAndInterest;
  const propertyTaxMonthly = (home.estimatedPropertyTaxAnnual || 0) / 12;
  const homeInsuranceMonthly = home.homeInsuranceMonthly || 0;
  const hoaMonthly = home.hoaMonthly || 0;
  const pmiMonthly = home.mortgageInsuranceMonthly ?? ((loanPrincipal * 0.002) / 12);
  const totalMonthlyHousing = principalAndInterest + propertyTaxMonthly + homeInsuranceMonthly + hoaMonthly + pmiMonthly;
  const incomeMultiplier = home.incomeMultiplier || 45.4545;
  const incomeTarget = roundToNearest(totalMonthlyHousing * incomeMultiplier, 5000);

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden p-0">
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 md:h-96">
          {home.imageUrl ? (
            <img
              src={home.imageUrl}
              alt=""
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : null}
          <div className="absolute left-4 top-4 inline-flex rounded-full bg-orange-500/95 px-3 py-1 text-xs font-black text-white shadow-lg shadow-black/20">Model House</div>
        </div>
        <div className="p-4 md:p-5">
          <div className="mb-4 rounded-2xl bg-[#efe2d0] p-4">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9b4f12]">Current Target House</div>
            <h2 className="mt-2 text-2xl font-black leading-tight text-[#3f3025]">{home.address}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <div className="rounded-2xl bg-[#fde5c8] p-4">
              <div className="text-xs text-[#9b4f12]">Price Used</div>
              <div className="mt-1 text-xl font-black">{money(modelPrice)}</div>
            </div>
            <div className="rounded-2xl bg-[#efe2d0] p-4">
              <div className="text-xs text-[#6e5a47]">Beds / Baths</div>
              <div className="mt-1 text-xl font-black">{home.beds} / {home.baths}</div>
            </div>
            <div className="rounded-2xl bg-[#e8e0f1] p-4">
              <div className="text-xs text-[#665782]">Sq Ft</div>
              <div className="mt-1 text-xl font-black">{home.sqft ? home.sqft.toLocaleString() : "N/A"}</div>
            </div>
            <div className="rounded-2xl bg-[#e4eddc] p-4">
              <div className="text-xs text-[#4f6840]">Lot Sq Ft</div>
              <div className="mt-1 text-xl font-black">{home.lotSqft ? home.lotSqft.toLocaleString() : "N/A"}</div>
            </div>
            <div className="rounded-2xl bg-[#fff4e6] p-4">
              <div className="text-xs text-[#9b4f12]">Year Built</div>
              <div className="mt-1 text-xl font-black">{home.builtYear || "N/A"}</div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-[#efe2d0] p-4 text-sm leading-6 text-[#6e5a47]">
            <p><span className="font-bold text-[#3f3025]">Why it fits:</span> {home.schoolNote}</p>
          </div>
          <div className="mt-4 rounded-2xl bg-[#fff4e6] p-4">
            <div className="text-xs font-bold uppercase tracking-wide text-[#a25b19]">Affordability Estimate</div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-[#6e5a47]">
              <div>Down Payment: <span className="font-bold text-[#3f3025]">{money(downPayment)}</span></div>
              <div>Loan Amount: <span className="font-bold text-[#3f3025]">{money(loanPrincipal)}</span></div>
              <div>Rate: <span className="font-bold text-[#3f3025]">{percent(annualRate * 100, 2)}</span></div>
              <div>P&I: <span className="font-bold text-[#3f3025]">{money(principalAndInterest)}</span>/mo</div>
              <div>Taxes: <span className="font-bold text-[#3f3025]">{money(propertyTaxMonthly)}</span>/mo</div>
              <div>Insurance: <span className="font-bold text-[#3f3025]">{money(homeInsuranceMonthly)}</span>/mo</div>
              <div>HOA: <span className="font-bold text-[#3f3025]">{money(hoaMonthly)}</span>/mo</div>
              <div>PMI: <span className="font-bold text-[#3f3025]">{money(pmiMonthly)}</span>/mo</div>
            </div>
            <div className="mt-4 rounded-2xl bg-[#fde5c8] p-4">
              <div className="text-xs text-[#9b4f12]">Estimated Monthly Payment</div>
              <div className="mt-1 text-3xl font-black text-[#3f3025]">{money(totalMonthlyHousing)}</div>
            </div>
            <div className="mt-3 rounded-2xl bg-[#e4eddc] p-4">
              <div className="text-xs text-[#4f6840]">Gross Income Target</div>
              <div className="mt-1 text-3xl font-black text-[#3f3025]">{money(incomeTarget)}</div>
            </div>
          </div>
          <a href={home.listingUrl} target="_blank" rel="noreferrer" className="mt-4 block rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3 text-center text-sm font-black text-white shadow-lg shadow-orange-950/30">
            Open Zillow Listing
          </a>
        </div>
      </Card>
    </div>
  );
}

export default function PersonalFinanceCommandCenter() {
  const availableMonths = useMemo(() => {
    const records = monthlyRecords || {};
    const listed = months.filter((month) => records[month]);
    return listed.length ? listed : [dashboardMeta.activeMonth];
  }, []);

  const initialMonth = availableMonths.at(-1) || dashboardMeta.activeMonth;
  const [activeMonth, setActiveMonth] = useState(initialMonth);
  const [activeSection, setActiveSection] = useState("dashboard");
  const activeData = monthlyRecords?.[activeMonth] || monthlyRecords?.[initialMonth] || fallbackData;

  const renderSection = () => {
    switch (activeSection) {
      case "budgeting":
        return <BudgetingView data={activeData} />;
      case "investments":
        return <InvestmentsView data={activeData} />;
      case "goals":
        return <GoalsView data={activeData} />;
      default:
        return <DashboardView data={activeData} />;
    }
  };

  return (
    <div className={`min-h-screen ${COLORS.appBg} ${COLORS.appText}`}>
      <div className="flex min-h-screen">
        <DesktopSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-5 md:p-8">
          <Header activeMonth={activeData.dashboardMeta?.activeMonth || activeMonth} setActiveMonth={setActiveMonth} activeData={activeData} availableMonths={availableMonths} />
          {renderSection()}
        </main>
        <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}
