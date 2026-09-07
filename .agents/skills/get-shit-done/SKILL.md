---
name: get-shit-done
description: Get Shit Done (GSD) - A disciplined execution framework for AI agents to plan, execute, and verify software milestones with phase-based verification loops.
---

# Get Shit Done (GSD)

GSD is an execution framework designed to help autonomous AI coding agents deliver production-ready software efficiently without losing context, missing steps, or producing unverified code.

## Core Lifecycle: Phase-Based Delivery

```
Roadmap / Spec ➔ Discuss Phase ➔ Research ➔ Plan Phase (PLAN.md) ➔ Execute Phase ➔ Verify Work ➔ Ship
```

1. **Discuss Phase (`gsd-discuss-phase`)**: Gather requirements, scope fences, and identify architectural constraints before writing plans or code.
2. **Research Phase (`gsd-spec-phase`)**: Research library documentation, APIs, and dependencies. Write `RESEARCH.md`.
3. **Plan Phase (`gsd-plan-phase`)**: Break down the milestone into bite-sized, deterministic steps with clear verification criteria. Lead with a vertical tracer slice.
4. **Execute Phase (`gsd-execute-phase`)**: Execute plan tasks sequentially or dispatch subagents. Enforce atomic commits and state tracking.
5. **Verify Work (`gsd-verify-work`)**: Run automated test suites, typecheckers, linters, and verify that every acceptance criterion in the plan is met.
6. **Ship & Review (`gsd-ship`)**: Create PR, generate release notes, and update project changelog.

## Key Rules & Principles

- **Tracer-First**: Always build and verify a thin, end-to-end working slice of functionality before expanding horizontal layers.
- **Reversibility Gates**: Pause and prompt the user before executing one-way-door decisions (schema migrations, third-party API locks, breaking changes).
- **Verification Loops**: Every completed phase must produce tangible verification evidence before moving to the next phase.
- **Autonomous & Guided Modes**: Supports both step-by-step interactive guidance with user checkpoints and autonomous multi-step execution.

## Antigravity CLI Integration

- **Subagents**: Use `invoke_subagent` (`TypeName: "self"` for full build, `"research"` for read-only research).
- **Task Tracking**: Maintain persistent task artifacts in the artifact directory.
- **Verification**: Execute builds and test suites with `run_command` and confirm exit codes before claiming completion.
