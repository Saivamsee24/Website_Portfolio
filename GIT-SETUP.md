# Fix Git "fatal" errors – push your portfolio to GitHub

Run these in **PowerShell** or **Command Prompt** from this folder.

## 1. Go to your project folder
```powershell
cd d:\Portfolio
```

## 2. If you see "fatal: not a git repository"
Initialize Git (safe to run even if .git exists):
```powershell
git init
```

## 3. Set your real GitHub repo URL
Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name:
```powershell
git remote remove origin 2>$null; git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```
Example: `git remote add origin https://github.com/saiva/Portfolio.git`

## 4. Add, commit, and push
```powershell
git add .
git status
git commit -m "Add portfolio site (index, styles, scroll effects)"
git branch -M main
git push -u origin main
```

## If you see "Repository not found" or "could not read from remote"
- Check the URL: `git remote -v`
- Set the correct URL: `git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`

## If you see "Support for password authentication was removed"
GitHub no longer accepts account passwords. Use either:
- **Personal Access Token (PAT):** GitHub → Settings → Developer settings → Personal access tokens. Use the token as the password when `git push` asks.
- **SSH:** Use URL `git@github.com:YOUR_USERNAME/YOUR_REPO.git` and set up an SSH key.
