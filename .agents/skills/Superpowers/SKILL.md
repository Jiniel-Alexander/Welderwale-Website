---
name: Superpowers
description: Core software development methodology and skills library for coding agents: TDD, systematic debugging, Socratic brainstorming, detailed plan writing, subagent-driven development, and verification before completion.
---

<SUBAGENT-STOP>
If you were dispatched as a subagent to execute a specific task, ignore this skill.
</SUBAGENT-STOP>

<EXTREMELY-IMPORTANT>
If you think there is even a 1% chance a skill might apply to what you are doing, you ABSOLUTELY MUST invoke the skill.

IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE. YOU MUST USE IT.

This is not negotiable. You cannot rationalize your way out of this.
</EXTREMELY-IMPORTANT>

## The Rule

**Invoke relevant or requested skills BEFORE any response or action** — including clarifying questions, exploring the codebase, or checking files. If it turns out wrong for the situation, you don't have to use it.

**Before entering plan mode:** if you haven't already brainstormed, invoke the brainstorming skill first.

Then announce "Using [skill] to [purpose]" and follow the skill exactly. If it has a checklist, create a todo per item.

## Skill Priority

When multiple skills apply, process skills come first — they set the approach, then implementation skills (frontend-design, etc.) carry it out. Brainstorming and systematic-debugging are Superpowers' most common process skills, but the rule holds for any of them.

- "Let's build X" → superpowers:brainstorming first, then implementation skills.
- "Fix this bug" → superpowers:systematic-debugging first, then domain skills.

## Red Flags

These thoughts mean STOP—you're rationalizing:

| Thought | Reality |
|---------|---------|
| "This is just a simple question" | Questions are tasks. Check for skills. |
| "I need more context first" | Skill check comes BEFORE clarifying questions. |
| "Let me explore the codebase first" | Skills tell you HOW to explore. Check first. |
| "I can check git/files quickly" | Files lack conversation context. Check for skills. |
| "Let me gather information first" | Skills tell you HOW to gather information. |
| "This doesn't need a formal skill" | If a skill exists, use it. |
| "I remember this skill" | Skills evolve. Read current version. |
| "This doesn't count as a task" | Action = task. Check for skills. |
| "The skill is overkill" | Simple things become complex. Use it. |
| "I'll just do this one thing first" | Check BEFORE doing anything. |
| "This feels productive" | Undisciplined action wastes time. Skills prevent this. |
| "I know what that means" | Knowing the concept ≠ using the skill. Invoke it. |

## Installed Superpowers Skills Library

The full Superpowers suite is installed under `.agents/skills/`:

1. **`Superpowers`** (`.agents/skills/Superpowers/SKILL.md`) - Master entry point and rules.
2. **`brainstorming`** (`.agents/skills/brainstorming/SKILL.md`) - Socratic design refinement before writing code.
3. **`writing-plans`** (`.agents/skills/writing-plans/SKILL.md`) - Bite-sized, testable implementation plans.
4. **`executing-plans`** (`.agents/skills/executing-plans/SKILL.md`) - Batch execution with human review checkpoints.
5. **`subagent-driven-development`** (`.agents/skills/subagent-driven-development/SKILL.md`) - Fast iteration with two-stage review (spec compliance, code quality).
6. **`test-driven-development`** (`.agents/skills/test-driven-development/SKILL.md`) - Strict RED-GREEN-REFACTOR cycle.
7. **`systematic-debugging`** (`.agents/skills/systematic-debugging/SKILL.md`) - 4-phase root cause investigation before patching.
8. **`verification-before-completion`** (`.agents/skills/verification-before-completion/SKILL.md`) - Evidence over claims before declaring done.
9. **`requesting-code-review`** (`.agents/skills/requesting-code-review/SKILL.md`) - Pre-review checklist.
10. **`receiving-code-review`** (`.agents/skills/receiving-code-review/SKILL.md`) - Addressing feedback with discipline.
11. **`using-git-worktrees`** (`.agents/skills/using-git-worktrees/SKILL.md`) - Isolated workspace branches.
12. **`finishing-a-development-branch`** (`.agents/skills/finishing-a-development-branch/SKILL.md`) - Merge/PR completion workflow.
13. **`dispatching-parallel-agents`** (`.agents/skills/dispatching-parallel-agents/SKILL.md`) - Concurrent subagent coordination.
14. **`writing-skills`** (`.agents/skills/writing-skills/SKILL.md`) - Creating and testing new skills.

## Antigravity CLI (`agy`) Tool Mapping

| Action skills request | Antigravity CLI equivalent |
|----------------------|----------------------|
| Dispatch a subagent (`Subagent (general-purpose):` template) | `invoke_subagent` with a built-in `TypeName` — `self` for full-capability work, `research` for read-only |
| Task tracking ("create a todo", "mark complete") | a **task artifact** — `write_to_file` with `IsArtifact: true` and `ArtifactType: "task"`. **Not** `manage_task`, which manages background processes. |

### Task tracking
Antigravity has **no todo tool** (`manage_task` manages background processes). When a skill says to create a todo list or track tasks, maintain a **task artifact**: a markdown checklist saved in the artifact directory, updated as you progress through tasks.

## User Instructions

User instructions (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, direct requests) take precedence over skills, which in turn override default behavior. Only skip skill workflows or instructions when your human partner has explicitly told you to.
