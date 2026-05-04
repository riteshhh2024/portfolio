import React from 'react';

/* ─── small primitives ─────────────────────────────────────── */

function Node({
  label,
  sub,
  color = 'default',
}: {
  label: string;
  sub?: string;
  color?:
    | 'default'
    | 'purple'
    | 'blue'
    | 'green'
    | 'orange'
    | 'cyan'
    | 'red'
    | 'yellow'
    | 'pink';
}) {
  const palette: Record<string, string> = {
    default: 'border-border bg-muted/40 text-foreground',
    purple: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    blue: 'border-blue-500/40   bg-blue-500/10   text-blue-300',
    green: 'border-green-500/40  bg-green-500/10  text-green-300',
    orange: 'border-orange-500/40 bg-orange-500/10 text-orange-300',
    cyan: 'border-cyan-500/40   bg-cyan-500/10   text-cyan-300',
    red: 'border-red-500/40    bg-red-500/10    text-red-300',
    yellow: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-300',
    pink: 'border-pink-500/40   bg-pink-500/10   text-pink-300',
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

export default function AgenticRAGPipeline() {
  return (
    <div className="border-border/50 bg-muted/10 my-8 space-y-10 overflow-x-auto rounded-xl border p-6">
      {/* ─── Section 1: System Architecture ─── */}
      <div>
        <p className="text-muted-foreground mb-6 text-center text-xs font-semibold tracking-widest uppercase">
          System Architecture — 4 Layers
        </p>
        <Col>
          {/* Layer 1 — Frontend */}
          <GroupBox label="Layer 1 · Frontend — Solution Studio UI">
            <Row>
              <Node label="Onboarding" sub="Use Case Intake" color="green" />
              <Node label="Documents" sub="Upload & Process" color="green" />
              <Node label="RAG Config" sub="Chunking & Settings" color="cyan" />
              <Node label="Agent" sub="Ask Questions" color="orange" />
              <Node label="Benchmarks" sub="Evaluation" color="purple" />
              <Node label="Settings" sub="Provider Config" color="blue" />
            </Row>
          </GroupBox>
          <Arrow down />

          {/* Layer 2 — Backend */}
          <GroupBox label="Layer 2 · FastAPI Backend — Python + Pydantic">
            <Row>
              <Node label="Use Case Service" color="blue" />
              <Node label="Document Service" color="blue" />
              <Node label="RAG Service" color="cyan" />
              <Node label="Agent Orchestrator" color="orange" />
            </Row>
            <div className="mt-2" />
            <Row>
              <Node label="Evaluation Service" color="purple" />
              <Node label="Provider Service" color="purple" />
              <Node label="Report Generator" color="pink" />
              <Node label="Metrics Logger" color="yellow" />
            </Row>
          </GroupBox>
          <Arrow down />

          {/* Layer 3 — Persistence */}
          <GroupBox label="Layer 3 · Persistence — SQLite + ChromaDB">
            <Row>
              <Node
                label="SQLite"
                sub="Use Cases · Documents · Configs · Runs"
                color="default"
              />
              <Node
                label="ChromaDB / FAISS"
                sub="Embeddings · Vectors · Retrieval"
                color="cyan"
              />
            </Row>
          </GroupBox>
          <Arrow down />

          {/* Layer 4 — AI Providers */}
          <GroupBox label="Layer 4 · AI Providers — Ollama + OpenAI">
            <Row>
              <Node
                label="Ollama (Local)"
                sub="Free · llama2 · mistral"
                color="green"
              />
              <Node
                label="OpenAI (Cloud)"
                sub="Paid · GPT-4 · text-embedding"
                color="red"
              />
            </Row>
          </GroupBox>
        </Col>
      </div>

      {/* ─── Section 2: Agent Workflow Pipeline ─── */}
      <div>
        <p className="text-muted-foreground mb-6 text-center text-xs font-semibold tracking-widest uppercase">
          Controlled Agent Workflow
        </p>
        <Col>
          {/* User Question */}
          <Node
            label="❓ User Question"
            sub="Natural language query"
            color="default"
          />
          <Arrow down />

          {/* Intent Analyzer */}
          <Node
            label="🎯 Intent Analyzer"
            sub="Classify question intent & scope"
            color="blue"
          />
          <Arrow down />

          {/* Retriever */}
          <Node
            label="🔍 Retriever"
            sub="Vector search · Top-K · Reranking"
            color="cyan"
          />
          <Arrow down />

          {/* Answer Generator */}
          <Node
            label="🤖 Answer Generator"
            sub="LLM generation with retrieved context"
            color="purple"
          />
          <Arrow down />

          {/* Verification & Classification */}
          <GroupBox label="Verification & Classification">
            <Row>
              <Node
                label="✅ Grounding Verifier"
                sub="Answer ↔ Source check"
                color="green"
              />
              <Arrow />
              <Node
                label="⚠️ Risk Classifier"
                sub="Business risk level"
                color="red"
              />
            </Row>
          </GroupBox>
          <Arrow down />

          {/* Final Responder */}
          <Node
            label="📋 Final Responder"
            sub="Cited answer + metadata"
            color="orange"
          />
          <Arrow down />

          {/* Metrics Logger */}
          <Node
            label="📊 Metrics Logger"
            sub="Latency · Tokens · Cost · Faithfulness"
            color="yellow"
          />
        </Col>
      </div>
    </div>
  );
}
