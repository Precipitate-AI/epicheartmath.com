/**
  * Omni-HRV Breath Pace Keyframe Generator
  * Derived from HeartMath Inner Balance dial math.
  */

const STOPS = 64;

/** Height as a fraction of the stroke at time `t` (0…1 of a cycle). 0 = bottom. */
export function breathHeight(t: number, turn: number): number {
  return t <= turn
    ? (1 - Math.cos(Math.PI * (t / turn))) / 2
    : (1 + Math.cos(Math.PI * ((t - turn) / (1 - turn)))) / 2;
}

/** Generates smooth sinusoidal keyframe CSS animation rules for translateY offset */
export function paceKeyframes(inhaleMs: number, exhaleMs: number): string {
  const turn = inhaleMs / (inhaleMs + exhaleMs);
  const lines: string[] = [];

  for (let i = 0; i <= STOPS; i++) {
    const t = i / STOPS;
    const pct = (t * 100).toFixed(4).replace(/\.?0+$/, "");
    const offset = (1 - breathHeight(t, turn)).toFixed(5);
    lines.push(`${pct}%{transform:translateY(calc(var(--travel) * ${offset}))}`);
  }

  return `@keyframes omni-pace{${lines.join("")}}`;
}

export const SEGMENTS = 40;

export function segmentWindow(k: number, turn: number, segments = SEGMENTS) {
  const on = (turn * (k + 1)) / segments;
  const off = turn + ((1 - turn) * (segments - k)) / segments;
  return { on, off, threshold: breathHeight(on, turn) };
}

/** Per-segment keyframe animations for discrete rim segment lighting */
export function rimKeyframes(inhaleMs: number, exhaleMs: number, segments = SEGMENTS): string {
  const turn = inhaleMs / (inhaleMs + exhaleMs);
  const out: string[] = [];

  for (let k = 0; k < segments; k++) {
    const { on, off } = segmentWindow(k, turn, segments);
    const a = (on * 100).toFixed(3);
    const b = (off * 100).toFixed(3);
    out.push(
      `@keyframes omni-seg-${k}{` +
        `0%{opacity:var(--seg-dim)}` +
        `${a}%{opacity:var(--seg-dim)}` +
        `${a}%{opacity:1}` +
        `${b}%{opacity:1}` +
        `${b}%{opacity:var(--seg-dim)}` +
        `100%{opacity:var(--seg-dim)}` +
        `}`,
    );
  }

  return out.join("");
}
