import React from 'react';

/* ─── small primitives ─────────────────────────────────────── */

function Node({
  label,
  sub,
  color = 'default',
}: {
  label: string;
  sub?: string;
  color?: 'default' | 'purple' | 'blue' | 'green' | 'orange' | 'cyan' | 'red';
}) {
  const palette: Record<string, string> = {
    default: 'border-border bg-muted/40 text-foreground',
    purple: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    blue: 'border-blue-500/40   bg-blue-500/10   text-blue-300',
    green: 'border-green-500/40  bg-green-500/10  text-green-300',
    orange: 'border-orange-500/40 bg-orange-500/10 text-orange-300',
    cyan: 'border-cyan-500/40   bg-cyan-500/10   text-cyan-300',
    red: 'border-red-500/40    bg-red-500/10    text-red-300',
  };
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-center text-xs leading-tight font-semibold ${palette[color]}`}
    >
      {label}
      {sub && (
        <div className="mt-0.5 text-[10px] font-normal opacity-70">{sub}</div>
      )}
    </div>
  );
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <div
      className={`text-muted-foreground flex items-center justify-center ${down ? 'h-5' : 'w-6'}`}
    >
      {down ? '↓' : '→'}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2">{children}</div>
  );
}

function Col({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center gap-1">{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted-foreground mb-2 text-center text-[10px] font-semibold tracking-widest uppercase">
      {children}
    </div>
  );
}

function GroupBox({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="border-border/60 rounded-xl border border-dashed px-4 py-3">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

/* ─── diagram ──────────────────────────────────────────────── */

export default function GitGrowPipeline() {
  return (
    <div className="border-border/50 bg-muted/10 my-8 overflow-x-auto rounded-xl border p-6">
      <p className="text-muted-foreground mb-6 text-center text-xs font-semibold tracking-widest uppercase">
        GitGrow Agent — Workflow Pipeline
      </p>

      <Col>
        {/* Step 1 – Input */}
        <Node
          label="💻 Local Git Repository"
          sub="Uncommitted changes"
          color="default"
        />
        <Arrow down />

        {/* Step 2 – Project Scanner */}
        <Node
          label="🔍 Project Scanner"
          sub="git diff + dependencies + logs"
          color="blue"
        />
        <Arrow down />

        {/* Step 3 – Analysis */}
        <Row>
          <GroupBox label="Analysis & Intelligence">
            <Row>
              <Node label="LLM Classifier" sub="feat/fix/docs" color="purple" />
              <Arrow />
              <Node
                label="Safety Checker"
                sub="lint / tests / secrets"
                color="red"
              />
            </Row>
          </GroupBox>
        </Row>
        <Arrow down />

        {/* Step 4 – Generation */}
        <GroupBox label="Automatic Generation">
          <Row>
            <Node label="DocSync" sub="README / CHANGELOG" color="cyan" />
            <Node
              label="Smart Commit"
              sub="Conventional Commit Msg"
              color="cyan"
            />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 5 – Preview & Interaction */}
        <Node
          label="🖥️ Interactive Preview"
          sub="Rich Terminal UI Display"
          color="orange"
        />
        <Arrow down />

        {/* Step 6 – Approval Gate */}
        <Node
          label="👤 Developer Approval"
          sub="Approval / Manual Edit"
          color="green"
        />
        <Arrow down />

        {/* Step 7 – Execution */}
        <GroupBox label="Git Operations">
          <Row>
            <Node label="Git Commit" color="default" />
            <Arrow />
            <Node label="Git Push" sub="Secure via GH CLI" color="default" />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 8 – Final Log */}
        <Node
          label="📜 DevLog Entry"
          sub="Automated progress logging"
          color="purple"
        />
      </Col>
    </div>
  );
}
