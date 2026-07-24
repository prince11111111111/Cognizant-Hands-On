# 5GitHOL: Clean Up and Synchronizing with Remote Git Repository

## Objectives
- Learn the standard Git workflow for repository clean-up prior to remote deployment.
- Verify working directory cleanliness and audit branch states (`git status`, `git branch -a`).
- Fetch and integrate upstream updates (`git pull origin master`).
- Push locally committed changes (`Git-T03-HOL_002`) to the remote repository (`git push origin master`).
- Verify remote repository state reflection.

---

## Step-by-Step Hands-On Instructions & Solution

### Step 1: Verify Master is in Clean State

Before pulling or pushing code to remote servers, always verify that your working tree has no uncommitted changes:

```bash
git status
```

*Expected Output:*
```text
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```

---

### Step 2: List Out All Available Branches

Audit all local and remote tracking branches to clean up stale feature branches:

```bash
git branch -a
```

*Expected Output:*
```text
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```
*(All feature branches such as `GitWork` and `GitNewBranch` have been successfully merged and deleted in earlier labs.)*

---

### Step 3: Pull Remote Git Repository to Master

Fetch and integrate any remote changes from upstream repository (`origin/master`) into your local master branch:

```bash
git pull origin master
```

*Expected Output:*
```text
From https://gitlab.com/your-username/GitDemo
 * branch            master     -> FETCH_HEAD
Already up to date.
```

---

### Step 4: Push Pending Local Changes (`Git-T03-HOL_002`) to Remote Repository

Push all local commits (including merge conflict resolutions and `.gitignore` updates from `Git-T03-HOL_002`) to `origin/master`:

```bash
git push origin master
```

*Expected Output:*
```text
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (12/12), 1.25 KiB | 1.25 MiB/s, done.
Total 12 (delta 3), reused 0 (delta 0), pack-reused 0
To https://gitlab.com/your-username/GitDemo.git
   1a2b3c4..8f9e0d1  master -> master
```

---

### Step 5: Observe and Verify Remote Reflection

1. **Verify local branch status with upstream:**
   ```bash
   git status
   ```
   *Output:*
   ```text
   On branch master
   Your branch is up to date with 'origin/master'.

   nothing to commit, working tree clean
   ```

2. **Verify commit log graph:**
   ```bash
   git log --oneline --graph --decorate -n 5
   ```
   *Output:*
   ```text
   * 8f9e0d1 (HEAD -> master, origin/master) Add *.orig mergetool backup files to .gitignore
   * e4f5a6b Merge branch 'GitWork' into master and resolve conflict in hello.xml
   |\  
   | * a1b2c3d Add hello.xml on GitWork branch
   * | c7d8e9f Add hello.xml on master branch with master content
   |/  
   * 5d6e7f8 Initial commit on master trunk
   ```

3. **Verify on GitLab/GitHub Web UI:**
   - Log in to your GitLab or GitHub account.
   - Open the `GitDemo` project page.
   - Confirm that `hello.xml`, `.gitignore`, and `welcome.txt` are visible with the latest commit messages.

---

## Comprehensive 5-HOL Cheat Sheet Summary

| HOL | Focus Area | Key Git Commands |
| :---: | :--- | :--- |
| **1GitHOL** | Configuration & Setup | `git config --global user.name`, `git config --global core.editor`, `git init`, `git add`, `git commit` |
| **2GitHOL** | File Exclusion (`.gitignore`) | `cat .gitignore`, `*.log`, `log/`, `git status` |
| **3GitHOL** | Branching & Merging | `git branch`, `git checkout -b`, `git diff`, `git merge`, `git log --oneline --graph --decorate`, `git branch -d` |
| **4GitHOL** | Conflict Resolution | `git merge`, conflict markers `<<<<<<<`, `git mergetool`, 3-way merge resolution, `*.orig` |
| **5GitHOL** | Remote Sync & Clean up | `git status`, `git branch -a`, `git pull origin master`, `git push origin master` |
