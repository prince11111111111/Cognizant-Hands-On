# 2GitHOL: Ignoring Unwanted Files and Folders using `.gitignore`

## Objectives
- Understand the concept and purpose of `.gitignore` in Git version control.
- Learn how to ignore unwanted files (e.g. log files, build artifacts) and directories.
- Implement `.gitignore` rules to prevent tracking `.log` files and `log/` folders.
- Verify status changes across working directory, local repository, and remote tracking.

---

## Step-by-Step Hands-On Implementation Guide

### Prerequisites
- Git environment configured (User Name, Email, Notepad++ editor).
- Git repository initialized.

---

### Step 1: Initialize Git Repository for Lab 2

1. **Create and navigate to the project directory:**
   ```bash
   mkdir GitIgnoreDemo
   cd GitIgnoreDemo
   git init
   ```
   *Output:* `Initialized empty Git repository in C:/.../GitIgnoreDemo/.git/`

---

### Step 2: Create Log Files and Log Folder in Working Directory

1. **Create sample application files and log files:**
   ```bash
   echo "System.out.println(\"Hello World\");" > App.java
   echo "2026-07-22 10:00:00 [INFO] Application Started" > app.log
   echo "2026-07-22 10:05:00 [DEBUG] Database Connection Established" > debug.log
   ```

2. **Create a `log` directory with internal log files:**
   ```bash
   mkdir log
   echo "2026-07-22 10:10:00 [ERROR] NullPointer Exception" > log/server.log
   echo "2026-07-22 10:12:00 [WARN] Memory Usage High" > log/system.log
   ```

3. **Check `git status` before creating `.gitignore`:**
   ```bash
   git status
   ```
   *Output:*
   ```text
   On branch master

   No commits yet

   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           App.java
           app.log
           debug.log
           log/
   ```
   *(Notice that Git tracks `app.log`, `debug.log`, and the `log/` folder as untracked files/directories.)*

---

### Step 3: Create and Update `.gitignore` File

1. **Create `.gitignore` file using Git Bash or Notepad++:**
   ```bash
   notepad++ .gitignore
   ```
   *Or using command line echo:*
   ```bash
   echo "# Ignore all .log files" > .gitignore
   echo "*.log" >> .gitignore
   echo "" >> .gitignore
   echo "# Ignore log folder" >> .gitignore
   echo "log/" >> .gitignore
   ```

2. **Verify contents of `.gitignore` file:**
   ```bash
   cat .gitignore
   ```
   *Content of `.gitignore`:*
   ```gitignore
   # Ignore all .log files
   *.log

   # Ignore log folder
   log/
   ```

---

### Step 4: Verify `git status` After Updating `.gitignore`

1. **Execute `git status`:**
   ```bash
   git status
   ```
   *Expected Output:*
   ```text
   On branch master

   No commits yet

   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           .gitignore
           App.java

   nothing added to commit but untracked files present (use "git add" to track)
   ```

   > **Key Observation:**
   > Notice that `app.log`, `debug.log`, and the `log/` directory are **no longer listed** under untracked files because Git is now ignoring them according to the rules defined in `.gitignore`.

---

### Step 5: Stage and Commit `.gitignore` and Project Files

1. **Stage `.gitignore` and `App.java`:**
   ```bash
   git add .gitignore App.java
   ```

2. **Commit changes:**
   ```bash
   git commit -m "Add App.java and configure .gitignore to ignore log files and log directory"
   ```

3. **Verify clean repository status:**
   ```bash
   git status
   ```
   *Output:*
   ```text
   On branch master
   nothing to commit, working tree clean
   ```

---

## `.gitignore` Rule Syntax Summary

| Rule Pattern | Description | Example |
| :--- | :--- | :--- |
| `*.ext` | Ignores all files with extension `.ext` | `*.log`, `*.tmp` |
| `dir/` | Ignores entire directory named `dir` and all its contents | `log/`, `node_modules/`, `target/` |
| `filename.txt` | Ignores a specific file | `secrets.env`, `config.local` |
| `!filename.txt` | Negates ignore rule (does NOT ignore file) | `!important.log` |
| `**/logs` | Ignores `logs` directory at any depth | `**/logs` |
