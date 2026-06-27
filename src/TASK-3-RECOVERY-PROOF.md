# Task 3 - Recovery Proof

## Scenario

The `legacy-archive` branch was force-pushed to an older commit, simulating lost work.

## Old version forced to remote

Commit:

```
640ad75 TASK-018: Remove legacy authentication logic
```

## Lost commits found with git reflog

```
ee94f5a TASK-021: Add third legacy archive note
8d6334e TASK-020: Add second legacy archive note
d8faa52 TASK-019: Add first legacy archive note
```

## Recovery command

```bash
git reset --hard ee94f5a
```

## History cleanup

The three recovery commits were consolidated into a single commit using:

```bash
git rebase -i HEAD~3
```

After the interactive rebase, only one clean recovery commit remained.

## Final force push

```bash
git push --force origin legacy-archive
```
