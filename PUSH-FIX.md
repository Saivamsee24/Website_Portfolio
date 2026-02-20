# Fix "Failed to push some refs"

The remote repo has commits (e.g. README) that your local branch doesn't. Pull them first, then push.

Run in PowerShell from this folder:

```powershell
cd d:\Portfolio
git pull origin main --allow-unrelated-histories
```
If it opens an editor for a merge message, save and close (in Vim: type `:wq` and Enter).

Then push:
```powershell
git push -u origin main
```

---

**If you prefer to overwrite the remote** (use only if you don't need what's on GitHub):
```powershell
git push -u origin main --force
```
