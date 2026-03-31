import React from 'react';

/* ─── small primitives (same pattern) ─────────────────────── */

function Node({
  label,
  sub,
  color = 'default',
}: {
  label: string;
  sub?: string;
  color?: 'default' | 'purple' | 'blue' | 'green' | 'orange' | 'cyan' | 'sky';
}) {
  const palette: Record<string, string> = {
    default: 'border-border bg-muted/40 text-foreground',
    purple:  'border-purple-500/40 bg-purple-500/10 text-purple-300',
    blue:    'border-blue-500/40   bg-blue-500/10   text-blue-300',
    green:   'border-green-500/40  bg-green-500/10  text-green-300',
    orange:  'border-orange-500/40 bg-orange-500/10 text-orange-300',
    cyan:    'border-cyan-500/40   bg-cyan-500/10   text-cyan-300',
    sky:     'border-sky-500/40    bg-sky-500/10    text-sky-300',
  };
  return (
    <div className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold leading-tight ${palette[color]}`}>
      {label}
      {sub && <div className="mt-0.5 text-[10px] font-normal opacity-70">{sub}</div>}
    </div>
  );
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <div className={`flex items-center justify-center text-muted-foreground ${down ? 'h-5' : 'w-6'}`}>
      {down ? '↓' : '→'}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-center gap-1">{children}</div>;
}

function Col({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center gap-1">{children}</div>;
}

function GroupBox({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/60 px-4 py-3">
      <div className="text-muted-foreground mb-2 text-center text-[10px] font-semibold tracking-widest uppercase">
        {label}
      </div>
      {children}
    </div>
  );
}

/* ─── diagram ──────────────────────────────────────────────── */

export default function KozmoDashboardPipeline() {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border/50 bg-muted/10 p-6">
      <p className="text-muted-foreground mb-6 text-center text-xs font-semibold tracking-widest uppercase">
        Kozmo AI Dashboard — Technical Pipeline
      </p>

      <Col>
        {/* Step 1 – Ingest */}
        <Node label="📄 Contract Events" sub="thousands of records ingested" color="default" />
        <Arrow down />

        {/* Step 2 – Azure WebJobs */}
        <Node label="⚙️ Azure WebJobs" sub="event-driven pipeline orchestration" color="sky" />
        <Arrow down />

        {/* Step 3 – Azure storage layer */}
        <GroupBox label="Azure Storage Layer">
          <Row>
            <Node label="🗂 Azure Blob Storage" sub="documents & artifacts" color="blue" />
            <div className="px-2 text-muted-foreground text-xs">+</div>
            <Node label="📊 Azure Table Storage" sub="fast structured reads" color="blue" />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 4 – LLM Services */}
        <Node label="🤖 LLM Services" sub="automated KPI generation" color="orange" />
        <Arrow down />

        {/* Step 5 – Model pool */}
        <GroupBox label="Model Pool  ·  task-specific routing">
          <Row>
            <Node label="OpenAI GPT" sub="high-quality KPIs" color="green" />
            <Node label="LLaMA (OSS)" sub="bulk extraction" color="green" />
            <Node label="Mistral" sub="fast summarization" color="green" />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 6 – JSON contract */}
        <Node label="📋 JSON Output Contract" sub="structured · auditable · explainable" color="cyan" />
        <Arrow down />

        {/* Step 7 – Outputs */}
        <GroupBox label="Dashboard Outputs">
          <Row>
            <Node label="📈 KPI Dashboard" sub="real-time insights" color="purple" />
            <Node label="📉 Time-series Analytics" sub="daily / weekly / monthly" color="purple" />
            <Node label="🔮 Forecasting" sub="rolling averages & trends" color="purple" />
          </Row>
        </GroupBox>
      </Col>
    </div>
  );
}
