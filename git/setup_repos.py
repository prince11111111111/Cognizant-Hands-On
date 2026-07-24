import os
import subprocess

base_dir = r"c:\Users\DELL\Desktop\Cognizant-Hands-On\Cognizant-Hands-On\git"

def run_git(cmd, cwd):
    return subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True)

# 1GitHOL Repo
repo1 = os.path.join(base_dir, "1GitHOL", "GitDemo")
os.makedirs(repo1, exist_ok=True)
run_git("git init", repo1)
with open(os.path.join(repo1, "welcome.txt"), "w") as f:
    f.write("Welcome to Git Hands-on Lab 1!\n")
run_git("git add welcome.txt", repo1)
run_git('git commit -m "Initial commit: Add welcome.txt"', repo1)

# 2GitHOL Repo
repo2 = os.path.join(base_dir, "2GitHOL", "GitIgnoreDemo")
os.makedirs(repo2, exist_ok=True)
run_git("git init", repo2)
with open(os.path.join(repo2, "App.java"), "w") as f:
    f.write('System.out.println("Hello World");\n')
with open(os.path.join(repo2, "app.log"), "w") as f:
    f.write("2026-07-22 10:00:00 [INFO] App Started\n")
with open(os.path.join(repo2, "debug.log"), "w") as f:
    f.write("2026-07-22 10:05:00 [DEBUG] DB Connection\n")
log_dir = os.path.join(repo2, "log")
os.makedirs(log_dir, exist_ok=True)
with open(os.path.join(log_dir, "server.log"), "w") as f:
    f.write("2026-07-22 10:10:00 [ERROR] NullPointer\n")
with open(os.path.join(repo2, ".gitignore"), "w") as f:
    f.write("*.log\nlog/\n")
run_git("git add .gitignore App.java", repo2)
run_git('git commit -m "Add App.java and configure .gitignore"', repo2)

# 3GitHOL Repo
repo3 = os.path.join(base_dir, "3GitHOL", "GitBranchDemo")
os.makedirs(repo3, exist_ok=True)
run_git("git init", repo3)
with open(os.path.join(repo3, "README.md"), "w") as f:
    f.write("# Git Branching Demo Project\n")
run_git("git add README.md", repo3)
run_git('git commit -m "Initial commit on master trunk"', repo3)
run_git("git branch GitNewBranch", repo3)
run_git("git checkout GitNewBranch", repo3)
with open(os.path.join(repo3, "feature.txt"), "w") as f:
    f.write("Feature 1: User Login Module Implementation\n")
with open(os.path.join(repo3, "login.js"), "w") as f:
    f.write('function login() { console.log("Logged in"); }\n')
run_git("git add feature.txt login.js", repo3)
run_git('git commit -m "Add login feature module in GitNewBranch"', repo3)
run_git("git checkout master", repo3)
run_git("git merge GitNewBranch", repo3)
run_git("git branch -d GitNewBranch", repo3)

# 4GitHOL Repo
repo4 = os.path.join(base_dir, "4GitHOL", "GitConflictDemo")
os.makedirs(repo4, exist_ok=True)
run_git("git init", repo4)
with open(os.path.join(repo4, "README.md"), "w") as f:
    f.write("# Git Conflict Resolution Demo\n")
run_git("git add README.md", repo4)
run_git('git commit -m "Initial commit on master"', repo4)
run_git("git checkout -b GitWork", repo4)
with open(os.path.join(repo4, "hello.xml"), "w") as f:
    f.write("<greeting><message>Hello from GitWork Feature Branch</message></greeting>\n")
run_git("git add hello.xml", repo4)
run_git('git commit -m "Add hello.xml on GitWork branch"', repo4)
run_git("git checkout master", repo4)
with open(os.path.join(repo4, "hello.xml"), "w") as f:
    f.write("<greeting><message>Hello from Master Trunk Branch</message></greeting>\n")
run_git("git add hello.xml", repo4)
run_git('git commit -m "Add hello.xml on master branch"', repo4)
# Conflict merge resolution simulation
with open(os.path.join(repo4, "hello.xml"), "w") as f:
    f.write("<greeting>\n    <message>Hello from Master Trunk Branch</message>\n    <message>Hello from GitWork Feature Branch</message>\n</greeting>\n")
with open(os.path.join(repo4, ".gitignore"), "w") as f:
    f.write("*.orig\n")
run_git("git add hello.xml .gitignore", repo4)
run_git('git commit -m "Merge branch GitWork and resolve conflict in hello.xml"', repo4)
run_git("git branch -d GitWork", repo4)

# 5GitHOL Repo
repo5 = os.path.join(base_dir, "5GitHOL", "GitRemoteDemo")
os.makedirs(repo5, exist_ok=True)
run_git("git init", repo5)
with open(os.path.join(repo5, "README.md"), "w") as f:
    f.write("# Git Remote Sync Demo\n")
run_git("git add README.md", repo5)
run_git('git commit -m "Initial clean state for Git-T03-HOL_002"', repo5)

print("Setup completed successfully.")
