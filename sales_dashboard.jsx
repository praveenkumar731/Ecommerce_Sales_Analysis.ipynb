import React, { useState } from "react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  BarChart, Bar, PieChart, Pie, Cell, Legend, LineChart, Line,
} from "recharts";

const DATA = {"total_orders": 265, "total_net_sales": 419787.68, "aov": 1865.72, "total_qty": 363, "monthly": [{"month": "Jan-26", "netSales": 49840.01, "orders": 30}, {"month": "Feb-26", "netSales": 49367.65, "orders": 40}, {"month": "Mar-26", "netSales": 49248.05, "orders": 26}, {"month": "Apr-26", "netSales": 69708.8, "orders": 42}, {"month": "May-26", "netSales": 47253.19, "orders": 31}, {"month": "Jun-26", "netSales": 42635.17, "orders": 28}, {"month": "Jul-26", "netSales": 57452.52, "orders": 33}, {"month": "Aug-26", "netSales": 54282.29, "orders": 35}], "status": [{"name": "Delivered", "value": 112}, {"name": "Cancelled", "value": 40}, {"name": "Shipped", "value": 39}, {"name": "Processing", "value": 38}, {"name": "Returned", "value": 36}], "category": [{"name": "Beauty", "netSales": 80774.55, "orders": 89}, {"name": "Fashion", "netSales": 154403.63, "orders": 87}, {"name": "Sports", "netSales": 184609.5, "orders": 89}], "products": [{"name": "Men's Sneakers", "netSales": 66746.32, "qty": 40, "orders": 26}, {"name": "Cricket Bat", "netSales": 59386.44, "qty": 27, "orders": 22}, {"name": "Dumbbells Set", "netSales": 53816.09, "qty": 27, "orders": 19}, {"name": "Running Shoes", "netSales": 47927.4, "qty": 26, "orders": 20}, {"name": "Perfume", "netSales": 35365.53, "qty": 29, "orders": 19}, {"name": "Denim Jeans", "netSales": 27018.51, "qty": 22, "orders": 17}, {"name": "Women's Handbag", "netSales": 23326.56, "qty": 17, "orders": 12}, {"name": "Men's Casual Shirt", "netSales": 22615.69, "qty": 26, "orders": 16}, {"name": "Sunscreen SPF 50", "netSales": 16622.82, "qty": 30, "orders": 25}, {"name": "Face Serum", "netSales": 15774.28, "qty": 23, "orders": 16}, {"name": "Yoga Mat", "netSales": 14789.02, "qty": 20, "orders": 13}, {"name": "Women's Kurti", "netSales": 14696.55, "qty": 20, "orders": 16}, {"name": "Resistance Bands", "netSales": 8690.55, "qty": 20, "orders": 15}, {"name": "Shampoo", "netSales": 8278.58, "qty": 19, "orders": 15}, {"name": "Body Lotion", "netSales": 4733.34, "qty": 17, "orders": 14}], "states": [{"name": "Maharashtra", "netSales": 50543.87, "orders": 30}, {"name": "Uttar Pradesh", "netSales": 42852.03, "orders": 21}, {"name": "Haryana", "netSales": 30788.03, "orders": 19}, {"name": "Karnataka", "netSales": 29742.45, "orders": 15}, {"name": "Kerala", "netSales": 26352.67, "orders": 15}, {"name": "Bihar", "netSales": 24831.44, "orders": 16}, {"name": "Andhra Pradesh", "netSales": 23883.3, "orders": 16}, {"name": "Telangana", "netSales": 22017.24, "orders": 10}, {"name": "Delhi", "netSales": 21870.23, "orders": 9}, {"name": "Assam", "netSales": 21283.25, "orders": 16}, {"name": "Madhya Pradesh", "netSales": 20688.69, "orders": 17}, {"name": "Gujarat", "netSales": 18872.58, "orders": 16}, {"name": "Odisha", "netSales": 15799.33, "orders": 12}, {"name": "West Bengal", "netSales": 15765.73, "orders": 12}, {"name": "Rajasthan", "netSales": 15065.19, "orders": 9}, {"name": "Tamil Nadu", "netSales": 14624.76, "orders": 12}, {"name": "Goa", "netSales": 12546.47, "orders": 7}, {"name": "Punjab", "netSales": 12260.42, "orders": 13}], "cities": [{"name": "Pune", "netSales": 33644.96, "orders": 20}, {"name": "Gurugram", "netSales": 30788.03, "orders": 19}, {"name": "Bengaluru", "netSales": 29742.45, "orders": 15}, {"name": "Kochi", "netSales": 26352.67, "orders": 15}, {"name": "Patna", "netSales": 24831.44, "orders": 16}, {"name": "Visakhapatnam", "netSales": 23883.3, "orders": 16}, {"name": "Lucknow", "netSales": 22971.48, "orders": 13}, {"name": "Hyderabad", "netSales": 22017.24, "orders": 10}, {"name": "New Delhi", "netSales": 21870.23, "orders": 9}, {"name": "Guwahati", "netSales": 21283.25, "orders": 16}], "payment": [{"name": "UPI", "netSales": 91803.43, "orders": 48}, {"name": "Wallet", "netSales": 85193.46, "orders": 55}, {"name": "Cash on Delivery", "netSales": 77170.89, "orders": 48}, {"name": "Net Banking", "netSales": 61855.21, "orders": 47}, {"name": "Debit Card", "netSales": 52347.0, "orders": 35}, {"name": "Credit Card", "netSales": 51417.69, "orders": 32}], "payment_risk": [{"name": "Cash on Delivery", "cancelRate": 20.8, "returnRate": 12.5, "total": 48}, {"name": "Credit Card", "cancelRate": 9.4, "returnRate": 6.2, "total": 32}, {"name": "Debit Card", "cancelRate": 8.6, "returnRate": 22.9, "total": 35}, {"name": "Net Banking", "cancelRate": 21.3, "returnRate": 8.5, "total": 47}, {"name": "UPI", "cancelRate": 14.6, "returnRate": 16.7, "total": 48}, {"name": "Wallet", "cancelRate": 12.7, "returnRate": 14.5, "total": 55}], "cancelled_orders": 40, "cancelled_potential": 66477.52, "returned_orders": 36, "returned_value": 59720.99, "cancel_rate_overall": 15.1, "return_rate_overall": 13.6, "delivered_rate": 42.3, "total_customers": 208, "repeat_customers": 46, "repeat_customer_revenue": 170271.63, "repeat_revenue_share": 40.6, "product_risk": [{"name": "Shampoo", "returnRate": 26.7, "cancelRate": 13.3, "total": 15}, {"name": "Women's Kurti", "returnRate": 25.0, "cancelRate": 12.5, "total": 16}, {"name": "Body Lotion", "returnRate": 21.4, "cancelRate": 21.4, "total": 14}, {"name": "Resistance Bands", "returnRate": 20.0, "cancelRate": 40.0, "total": 15}, {"name": "Men's Casual Shirt", "returnRate": 18.8, "cancelRate": 12.5, "total": 16}, {"name": "Cricket Bat", "returnRate": 18.2, "cancelRate": 13.6, "total": 22}, {"name": "Denim Jeans", "returnRate": 17.6, "cancelRate": 17.6, "total": 17}, {"name": "Dumbbells Set", "returnRate": 15.8, "cancelRate": 10.5, "total": 19}, {"name": "Men's Sneakers", "returnRate": 15.4, "cancelRate": 11.5, "total": 26}, {"name": "Running Shoes", "returnRate": 10.0, "cancelRate": 20.0, "total": 20}, {"name": "Women's Handbag", "returnRate": 8.3, "cancelRate": 8.3, "total": 12}, {"name": "Sunscreen SPF 50", "returnRate": 8.0, "cancelRate": 16.0, "total": 25}, {"name": "Face Serum", "returnRate": 0.0, "cancelRate": 6.2, "total": 16}, {"name": "Perfume", "returnRate": 0.0, "cancelRate": 10.5, "total": 19}, {"name": "Yoga Mat", "returnRate": 0.0, "cancelRate": 15.4, "total": 13}]};

const INK = "#1c2b2d";
const PAPER = "#f6f3ec";
const PANEL = "#ffffff";
const LINE = "#e2ddd0";
const ACCENT = "#b5502e"; // terracotta-ish clay, but muted/earthy for india retail feel
const TEAL = "#2f6f68";
const GOLD = "#c69a3b";
const SLATE = "#5b6b6c";
const CAT_COLORS = { Beauty: "#c17a52", Fashion: "#2f6f68", Sports: "#3b5b8c" };
const STATUS_COLORS = { Delivered: "#2f6f68", Shipped: "#5b8fae", Processing: "#c69a3b", Returned: "#b5502e", Cancelled: "#8c5b5b" };

function inr(n) {
  if (n >= 100000) return "₹" + (n / 100000).toFixed(1) + "L";
  if (n >= 1000) return "₹" + (n / 1000).toFixed(1) + "k";
  return "₹" + Math.round(n);
}
function inrFull(n) {
  return "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function Card({ title, subtitle, children, span }) {
  return (
    <div
      style={{
        background: PANEL,
        border: `1px solid ${LINE}`,
        borderRadius: 4,
        padding: "20px 22px 16px",
        gridColumn: span ? `span ${span}` : undefined,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 15.5, color: INK, fontWeight: 600, letterSpacing: "-0.01em" }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 12, color: SLATE, marginTop: 2 }}>{subtitle}</div>
        )}
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  );
}

function KPI({ label, value, foot, accent }) {
  return (
    <div
      style={{
        background: PANEL,
        border: `1px solid ${LINE}`,
        borderRadius: 4,
        padding: "18px 20px",
        borderTop: `3px solid ${accent || INK}`,
      }}
    >
      <div style={{ fontSize: 11.5, color: SLATE, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
      <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 28, color: INK, fontWeight: 600, marginTop: 6, lineHeight: 1.1 }}>
        {value}
      </div>
      {foot && <div style={{ fontSize: 12, color: SLATE, marginTop: 6 }}>{foot}</div>}
    </div>
  );
}

const TT_STYLE = {
  background: INK,
  color: PAPER,
  border: "none",
  borderRadius: 3,
  padding: "8px 12px",
  fontSize: 12.5,
};

export default function Dashboard() {
  const [view, setView] = useState("overview");

  const totalPayOrders = DATA.payment.reduce((a, b) => a + b.orders, 0);

  return (
    <div
      style={{
        background: PAPER,
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: INK,
        padding: "28px 32px 60px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .grid { display: grid; gap: 16px; }
        .recharts-cartesian-axis-tick-value { font-size: 11px; fill: #5b6b6c; }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 22, borderBottom: `1px solid ${LINE}`, paddingBottom: 18 }}>
        <div>
          <div style={{ fontSize: 12, color: ACCENT, fontWeight: 600, letterSpacing: "0.04em" }}>JAN – AUG 2026</div>
          <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 30, margin: "4px 0 0", fontWeight: 700, letterSpacing: "-0.015em" }}>
            Retail Sales Dashboard
          </h1>
          <div style={{ fontSize: 13, color: SLATE, marginTop: 4 }}>Beauty · Fashion · Sports — 265 orders across 18 states</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["overview", "operations"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "8px 16px",
                borderRadius: 3,
                border: `1px solid ${v === view ? INK : LINE}`,
                background: v === view ? INK : "transparent",
                color: v === view ? PAPER : SLATE,
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", marginBottom: 16 }}>
        <KPI label="Net Sales" value={inr(DATA.total_net_sales)} foot={inrFull(DATA.total_net_sales)} accent={TEAL} />
        <KPI label="Total Orders" value={DATA.total_orders} foot={`${DATA.total_qty} units sold`} accent={ACCENT} />
        <KPI label="Avg Order Value" value={inrFull(DATA.aov)} foot="on completed sales" accent={GOLD} />
        <KPI label="Delivered Rate" value={DATA.delivered_rate + "%"} foot={`${DATA.status.find(s=>s.name==="Delivered").value} orders`} accent={TEAL} />
        <KPI label="Cancel + Return" value={(DATA.cancel_rate_overall + DATA.return_rate_overall).toFixed(1) + "%"} foot={`${DATA.cancelled_orders + DATA.returned_orders} orders lost`} accent="#8c5b5b" />
      </div>

      {view === "overview" ? (
        <>
          <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", marginBottom: 16 }}>
            <Card title="Monthly Net Sales" subtitle="Trend across Jan–Aug 2026">
              <ResponsiveContainer width="100%" height={230}>
                <AreaChart data={DATA.monthly} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={TEAL} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={TEAL} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke={LINE} vertical={false} />
                  <XAxis dataKey="month" axisLine={{ stroke: LINE }} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={inr} width={50} />
                  <Tooltip contentStyle={TT_STYLE} formatter={(v) => inrFull(v)} labelStyle={{ color: PAPER }} />
                  <Area type="monotone" dataKey="netSales" stroke={TEAL} strokeWidth={2} fill="url(#rev)" name="Net Sales" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            <Card title="Order Status Mix" subtitle="Share of all 265 orders">
              <ResponsiveContainer width="100%" height={230}>
                <PieChart>
                  <Pie data={DATA.status} dataKey="value" nameKey="name" cx="50%" cy="48%" innerRadius={50} outerRadius={80} paddingAngle={2}>
                    {DATA.status.map((s) => (
                      <Cell key={s.name} fill={STATUS_COLORS[s.name]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={TT_STYLE} labelStyle={{ color: PAPER }} />
                  <Legend
                    verticalAlign="bottom"
                    height={30}
                    iconSize={8}
                    formatter={(v) => <span style={{ fontSize: 11.5, color: SLATE }}>{v}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 16 }}>
            <Card title="Revenue by Category" subtitle="Net sales & order count">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={DATA.category} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke={LINE} vertical={false} />
                  <XAxis dataKey="name" axisLine={{ stroke: LINE }} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={inr} width={50} />
                  <Tooltip contentStyle={TT_STYLE} formatter={(v) => inrFull(v)} labelStyle={{ color: PAPER }} />
                  <Bar dataKey="netSales" radius={[3, 3, 0, 0]} name="Net Sales">
                    {DATA.category.map((c) => (
                      <Cell key={c.name} fill={CAT_COLORS[c.name]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card title="Top 10 Products" subtitle="By net sales revenue">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart layout="vertical" data={DATA.products.slice(0, 10)} margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid stroke={LINE} horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} tickFormatter={inr} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={110} style={{ fontSize: 11 }} />
                  <Tooltip contentStyle={TT_STYLE} formatter={(v) => inrFull(v)} labelStyle={{ color: PAPER }} />
                  <Bar dataKey="netSales" fill={GOLD} radius={[0, 3, 3, 0]} name="Net Sales" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 16 }}>
            <Card title="Top States" subtitle="By net sales revenue">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart layout="vertical" data={DATA.states.slice(0, 8)} margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid stroke={LINE} horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} tickFormatter={inr} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={100} style={{ fontSize: 11 }} />
                  <Tooltip contentStyle={TT_STYLE} formatter={(v) => inrFull(v)} labelStyle={{ color: PAPER }} />
                  <Bar dataKey="netSales" fill={TEAL} radius={[0, 3, 3, 0]} name="Net Sales" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card title="Payment Method Split" subtitle="Revenue share">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart layout="vertical" data={DATA.payment} margin={{ top: 5, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid stroke={LINE} horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} tickFormatter={inr} />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={110} style={{ fontSize: 11 }} />
                  <Tooltip contentStyle={TT_STYLE} formatter={(v) => inrFull(v)} labelStyle={{ color: PAPER }} />
                  <Bar dataKey="netSales" fill={ACCENT} radius={[0, 3, 3, 0]} name="Net Sales" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </>
      ) : (
        <>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginBottom: 16 }}>
            <Card title="Lost Revenue" subtitle="Cancelled order potential value">
              <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 6 }}>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Source Serif 4', Georgia, serif", color: "#8c5b5b" }}>{inrFull(DATA.cancelled_potential)}</div>
                  <div style={{ fontSize: 12, color: SLATE }}>{DATA.cancelled_orders} cancelled orders ({DATA.cancel_rate_overall}%)</div>
                </div>
                <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Source Serif 4', Georgia, serif", color: ACCENT }}>{inrFull(DATA.returned_value)}</div>
                  <div style={{ fontSize: 12, color: SLATE }}>{DATA.returned_orders} returned orders ({DATA.return_rate_overall}%)</div>
                </div>
              </div>
            </Card>
            <Card title="Repeat Customers" subtitle={`${DATA.total_customers} unique customers`}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 6 }}>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Source Serif 4', Georgia, serif", color: TEAL }}>{DATA.repeat_customers}</div>
                  <div style={{ fontSize: 12, color: SLATE }}>customers with 2+ orders</div>
                </div>
                <div style={{ borderTop: `1px solid ${LINE}`, paddingTop: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Source Serif 4', Georgia, serif", color: GOLD }}>{DATA.repeat_revenue_share}%</div>
                  <div style={{ fontSize: 12, color: SLATE }}>of net sales from repeat buyers</div>
                </div>
              </div>
            </Card>
            <Card title="Delivery Funnel" subtitle="Where orders currently sit">
              <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
                {DATA.status.map((s) => (
                  <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: STATUS_COLORS[s.name] }} />
                    <div style={{ fontSize: 12.5, flex: 1 }}>{s.name}</div>
                    <div style={{ fontSize: 12.5, fontWeight: 700 }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: SLATE, width: 40, textAlign: "right" }}>{((s.value / DATA.total_orders) * 100).toFixed(0)}%</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 16 }}>
            <Card title="Cancel & Return Rate by Payment" subtitle="Risk profile per payment method">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={DATA.payment_risk} margin={{ top: 5, right: 10, left: -10, bottom: 20 }}>
                  <CartesianGrid stroke={LINE} vertical={false} />
                  <XAxis dataKey="name" axisLine={{ stroke: LINE }} tickLine={false} angle={-20} textAnchor="end" interval={0} style={{ fontSize: 10.5 }} />
                  <YAxis axisLine={false} tickLine={false} unit="%" width={40} />
                  <Tooltip contentStyle={TT_STYLE} labelStyle={{ color: PAPER }} formatter={(v) => v + "%"} />
                  <Legend formatter={(v) => <span style={{ fontSize: 11.5, color: SLATE }}>{v}</span>} />
                  <Bar dataKey="cancelRate" fill="#8c5b5b" name="Cancel Rate" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="returnRate" fill={GOLD} name="Return Rate" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card title="Highest Return-Rate Products" subtitle="Top 8 products by return %">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart layout="vertical" data={DATA.product_risk.slice(0, 8)} margin={{ top: 5, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid stroke={LINE} horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} unit="%" />
                  <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={110} style={{ fontSize: 11 }} />
                  <Tooltip contentStyle={TT_STYLE} labelStyle={{ color: PAPER }} formatter={(v) => v + "%"} />
                  <Bar dataKey="returnRate" fill="#b5502e" radius={[0, 3, 3, 0]} name="Return Rate" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <Card title="Monthly Orders vs Net Sales" subtitle="Order volume against revenue trend">
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={DATA.monthly} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid stroke={LINE} vertical={false} />
                <XAxis dataKey="month" axisLine={{ stroke: LINE }} tickLine={false} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tickFormatter={inr} width={50} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} width={30} />
                <Tooltip contentStyle={TT_STYLE} labelStyle={{ color: PAPER }} />
                <Legend formatter={(v) => <span style={{ fontSize: 11.5, color: SLATE }}>{v}</span>} />
                <Line yAxisId="left" type="monotone" dataKey="netSales" stroke={TEAL} strokeWidth={2.5} dot={{ r: 3 }} name="Net Sales" />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} name="Orders" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}

      <div style={{ marginTop: 20, fontSize: 11, color: SLATE, textAlign: "center" }}>
        Built from 265 order records, Jan–Aug 2026 · Beauty, Fashion & Sports categories across 18 Indian states
      </div>
    </div>
  );
}
