---
name: openhands
description: OpenHands software development agent conventions, autonomous software engineering architecture, and code review methodology.
---

# OpenHands: Autonomous Software Development Agent Guidelines

This skill encapsulates the autonomous software development, architecture boundaries, and code review principles of the OpenHands AI engineering framework.

## Core Agent Development Principles

1. **Make the Conventional Path the Cheapest**:
   - New code should naturally reuse existing services, hooks, and architectural boundaries rather than branching into ad-hoc one-off implementations.
2. **Fail Forbidden Dependencies Mechanically**:
   - Rather than relying on fuzzy guidelines, enforce architectural boundaries through mechanical checks (linters, types, automated test assertions).
3. **Give Durable State One Obvious Writer**:
   - Avoid fragmented mutations. Persisted state, API configurations, and cache entries must have a single authoritative manager.
4. **Evidence Over Assertions**:
   - Verify every implementation before claiming done. Run build, typecheck, unit tests, and verify terminal exit codes.

## Code Review Decision Discipline

- **Review Decision**: Submit a single explicit assessment (**APPROVE** or **COMMENT**).
- **Default to APPROVE**: When there are no critical functional, architectural, or security defects. Minor polish or nitpicks should not block delivery.
- **COMMENT on Risk**: Flag regressions, broken contracts, security vulnerabilities, or missing acceptance evidence clearly for maintainer review.
- **Behavioral Isolation**: Scrutinize changes to tool calls, conversation payloads, terminal commands, or planning loops with extra rigor.

## Supporting Skill Guides

- [`custom-codereview-guide.md`](./custom-codereview-guide.md): In-depth code review instructions and architectural checklist.
- [`release.md`](./release.md): Release workflow, changelog versioning, and CI validation.
