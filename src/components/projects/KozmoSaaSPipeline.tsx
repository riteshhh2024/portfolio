import React from 'react';

/* ─── small primitives ─────────────────────────────────────── */

function Node({
  label,
  sub,
  color = 'default',
}: {
  label: string;
  sub?: string;
  color?: 'default' | 'purple' | 'blue' | 'green' | 'orange' | 'cyan';
}) {
  const palette: Record<string, string> = {
    default: 'border-border bg-muted/40 text-foreground',
    purple:  'border-purple-500/40 bg-purple-500/10 text-purple-300',
    blue:    'border-blue-500/40   bg-blue-500/10   text-blue-300',
    green:   'border-green-500/40  bg-green-500/10  text-green-300',
    orange:  'border-orange-500/40 bg-orange-500/10 text-orange-300',
    cyan:    'border-cyan-500/40   bg-cyan-500/10   text-cyan-300',
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted-foreground mb-2 text-center text-[10px] font-semibold tracking-widest uppercase">
      {children}
    </div>
  );
}

function GroupBox({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/60 px-4 py-3">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

/* ─── diagram ──────────────────────────────────────────────── */

export default function KozmoSaaSPipeline() {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border/50 bg-muted/10 p-6">
      <p className="text-muted-foreground mb-6 text-center text-xs font-semibold tracking-widest uppercase">
        Kozmo SaaS — Technical Pipeline
      </p>

      <Col>
        {/* Step 1 – Input */}
        <Node label="📄 Contract Data" sub="10 K+ records" color="default" />
        <Arrow down />

        {/* Step 2 – Planner */}
        <Node label="🧠 Planner Agent" sub="LangGraph orchestration" color="purple" />
        <Arrow down />

        {/* Step 3 – Executor agents */}
        <GroupBox label="Executor Agents  ·  LangChain / Python">
          <Row>
            <Node label="Extraction" color="blue" />
            <Node label="Validation" color="blue" />
            <Node label="Reasoning" color="blue" />
            <Node label="Summarization" color="blue" />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 4 – LLM Router */}
        <Node label="⚡ LLM Router" sub="task-specific model selection" color="orange" />
        <Arrow down />

        {/* Step 5 – Model pool */}
        <GroupBox label="Model Pool">
          <Row>
            <Node label="OpenAI GPT-4" sub="reasoning" color="green" />
            <Node label="Claude" sub="reasoning" color="green" />
            <Node label="OSS Model" sub="extraction / summary" color="green" />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 6 – RAG */}
        <Node label="🔍 Hybrid RAG Pipeline" sub="context grounding" color="cyan" />
        <Arrow down />

        {/* Step 7 – Data sources */}
        <GroupBox label="Retrieval Sources">
          <Row>
            <Node label="🗄 SQL Server" sub="structured metadata" color="default" />
            <div className="px-2 text-muted-foreground text-xs">+</div>
            <Node label="🧮 FAISS / Chroma" sub="vector semantic search" color="default" />
          </Row>
        </GroupBox>
        <Arrow down />

        {/* Step 8 – Output */}
        <Node label="✅ Enterprise Output" sub="monitoring · eval · caching  ·  ~35% cost reduction" color="purple" />
      </Col>
    </div>
  );
}
