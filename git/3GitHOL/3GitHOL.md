# 3GitHOL: Git Branching, Merging, and Diffing

## Objectives
- Explain branching, merging, branch requests, and merge requests (MR / PR) in GitLab/GitHub.
- Construct a new branch (`GitNewBranch`), make modifications, and commit changes.
- Switch between branches, inspect command-line and visual differences (P4Merge).
- Merge feature branch into `master`/`trunk`, inspect commit graphs (`git log --oneline --graph --decorate`), and delete merged branches.

---

## GitLab Branch & Merge Request Concepts

- **Branch Request / Branch Creation:** Creating an isolated line of development so changes can be implemented without affecting the stable `master` trunk.
- **Merge Request (MR):** A GitLab feature allowing developers to request code review and automated CI pipeline checks before merging feature branch changes into `master`.

---

## Step-by-Step Hands-On Implementation Guide

### Prerequisites
- Git Bash installed and configured.
- P4Merge tool installed (or configured as Git difftool/mergetool).

---

### Step 1: Initialize Git Repository and Setup Master Trunk

```bash
mkdir GitBranchDemo
cd GitBranchDemo
git init
echo "# Git Branching Demo Project" > README.md
git add README.md
git commit -m "Initial commit on master trunk"
```

---

### Step 2: Branching Workflow

1. **Create a new branch named `GitNewBranch`:**
   ```bash
   git branch GitNewBranch
   ```

2. **List all local and remote branches:**
   ```bash
   git branch -a
   ```
   *Output:*
   ```text
   * master
     GitNewBranch
   ```
   > **Note:** The asterisk (`*`) indicates the currently checked-out active branch (`master`).

3. **Switch to `GitNewBranch`:**
   ```bash
   git checkout GitNewBranch
   ```
   *Output:* `Switched to branch 'GitNewBranch'`

   *Verify active branch:*
   ```bash
   git branch
   ```
   *Output:*
   ```text
     master
   * GitNewBranch
   ```

4. **Add new files and content inside `GitNewBranch`:**
   ```bash
   echo "Feature 1: User Login Module Implementation" > feature.txt
   echo "function login() { console.log('Logged in'); }" > login.js
   ```

5. **Commit the changes to `GitNewBranch`:**
   ```bash
   git add feature.txt login.js
   git commit -m "Add login feature module in GitNewBranch"
   ```

6. **Check status on `GitNewBranch`:**
   ```bash
   git status
   ```
   *Output:*
   ```text
   On branch GitNewBranch
   nothing to commit, working tree clean
   ```

---

### Step 3: Merging Workflow

1. **Switch back to `master`:**
   ```bash
   git checkout master
   ```
   *Output:* `Switched to branch 'master'`

2. **List command-line differences between `master` and `GitNewBranch`:**
   ```bash
   git diff master..GitNewBranch
   ```
   *Output:* Shows added files (`feature.txt`, `login.js`) and added lines in `GitNewBranch`.

3. **List visual differences using P4Merge tool:**
   - Ensure P4Merge is configured in Git:
     ```bash
     git config --global diff.tool p4merge
     git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
     ```
   - Run visual diff:
     ```bash
     git difftool master..GitNewBranch
     ```

4. **Merge source branch `GitNewBranch` into `master` trunk:**
   ```bash
   git merge GitNewBranch
   ```
   *Output:*
   ```text
   Updating 1a2b3c4..5d6e7f8
   Fast-forward
    feature.txt | 1 +
    login.js   | 1 +
    2 files changed, 2 insertions(+)
    create mode 100644 feature.txt
    create mode 100644 login.js
   ```

5. **Observe log after merging using decorated graph:**
   ```bash
   git log --oneline --graph --decorate
   ```
   *Output Example:*
   ```text
   * 5d6e7f8 (HEAD -> master, GitNewBranch) Add login feature module in GitNewBranch
   * 1a2b3c4 Initial commit on master trunk
   ```

6. **Delete the branch after merging and observe `git status`:**
   ```bash
   git branch -d GitNewBranch
   ```
   *Output:* `Deleted branch GitNewBranch (was 5d6e7f8).`

7. **Verify final branch list and status:**
   ```bash
   git branch -a
   git status
   ```
   *Output:*
   ```text
   * master

   On branch master
   nothing to commit, working tree clean
   ```

---

## Command Reference Table

| Action | Command |
| :--- | :--- |
| Create Branch | `git branch GitNewBranch` |
| Switch Branch | `git checkout GitNewBranch` |
| Create & Switch | `git checkout -b GitNewBranch` |
| List Branches | `git branch -a` |
| Compare CLI Diffs | `git diff master..GitNewBranch` |
| Visual Diff | `git difftool master..GitNewBranch` |
| Merge Branch | `git merge GitNewBranch` |
| View Commit Graph | `git log --oneline --graph --decorate` |
| Delete Merged Branch | `git branch -d GitNewBranch` |
