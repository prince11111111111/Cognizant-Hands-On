# 1GitHOL: Git Configuration & Basic Commands

## Objectives
- Familiarize with basic Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.
- Setup machine with Git Configuration (User Name and Email ID).
- Integrate `notepad++.exe` to Git as the default editor.
- Add a file to a source code repository and perform initial commits and remote synchronization steps.

---

## Step-by-Step Hands-On Instructions & Solution

### Step 1: Setup your machine with Git Configuration

1. **Verify Git Client Installation:**
   Open Git Bash shell and execute:
   ```bash
   git --version
   ```
   *Expected Output:*
   ```text
   git version 2.43.0.windows.1
   ```
   *(If output shows Git with its version information, it indicates that Git Client is installed properly.)*

2. **Configure User-Level Configuration (User ID and Email ID):**
   Execute the following commands in Git Bash:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Verify Configuration Settings:**
   Execute the following command to check if user configuration is properly set:
   ```bash
   git config --list
   ```
   *Or check specific user properties:*
   ```bash
   git config user.name
   git config user.email
   ```

---

### Step 2: Integrate notepad++.exe to Git and make it a default editor

1. **Check if `notepad++.exe` executes from Git Bash:**
   ```bash
   notepad++
   ```
   *If Git bash cannot recognize `notepad++`, add the Notepad++ installation path to your Windows Environment Path variable:*
   - Open **Control Panel -> System -> Advanced System Settings -> Environment Variables**.
   - Under **User Variables** (or System Variables), select `Path` -> Click **Edit**.
   - Click **New** and add the path to `notepad++.exe` (e.g., `C:\Program Files\Notepad++`).

2. **Verify Notepad++ Access:**
   Exit Git Bash, re-open Git Bash, and execute:
   ```bash
   notepad++
   ```
   *(Now Notepad++ will open directly from the Git Bash shell.)*

3. **Create an Alias Command for `notepad++.exe`:**
   Execute in Git Bash:
   ```bash
   alias npp="'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

4. **Configure Notepad++ as the Default Git Editor:**
   Execute:
   ```bash
   git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

5. **Verify Notepad++ as Default Editor:**
   Execute:
   ```bash
   git config --global -e
   ```
   *(The `-e` option opens the global Git configuration file inside Notepad++.)*

---

### Step 3: Add a file to source code repository

1. **Initialize a New Project Repository `GitDemo`:**
   ```bash
   mkdir GitDemo
   cd GitDemo
   git init
   ```
   *Output:* `Initialized empty Git repository in C:/.../GitDemo/.git/`

2. **Verify Hidden Git Directory:**
   ```bash
   ls -la
   ```
   *(Displays all hidden files, including the `.git` folder in the working directory.)*

3. **Create File `welcome.txt` and Add Content:**
   ```bash
   echo "Welcome to Git Hands-on Lab 1!" > welcome.txt
   ```

4. **Verify File Creation:**
   ```bash
   ls -l
   ```

5. **Verify File Content:**
   ```bash
   cat welcome.txt
   ```
   *Output:* `Welcome to Git Hands-on Lab 1!`

6. **Check Repository Status:**
   ```bash
   git status
   ```
   *Output:*
   ```text
   On branch master
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           welcome.txt
   ```

7. **Track `welcome.txt` in Staging Area:**
   ```bash
   git add welcome.txt
   ```

8. **Commit File to Local Repository:**
   ```bash
   git commit -m "Initial commit: Add welcome.txt"
   ```
   *(Or run `git commit` to write multi-line commit messages using Notepad++.)*

9. **Verify Status After Commit:**
   ```bash
   git status
   ```
   *Output:* `nothing to commit, working tree clean`

10. **Register Remote Repository and Push:**
    - Sign up / Log in to GitLab or GitHub.
    - Create a remote repository named `GitDemo`.
    - Pull remote changes:
      ```bash
      git pull origin master
      ```
    - Push local repository to remote repository:
      ```bash
      git push origin master
      ```

---

## Quick Reference Commands Summary

| Task | Command |
| :--- | :--- |
| Check Git version | `git --version` |
| Configure User Name | `git config --global user.name "Name"` |
| Configure Email | `git config --global user.email "email"` |
| View Configuration | `git config --list` |
| Set Default Editor | `git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe'"` |
| Open Config File | `git config --global -e` |
| Initialize Repository | `git init` |
| Stage File | `git add welcome.txt` |
| Commit Changes | `git commit -m "Message"` |
| Sync with Remote | `git pull origin master` / `git push origin master` |
