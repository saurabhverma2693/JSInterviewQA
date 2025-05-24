// ############### Type1 ##############################################################
// # Story of from Remote(Repos in GitHub) to local(folder in Laptops) Projects Move 

// Github(Software to track changes of our code) - Repos(skip add & direct have a Commit)
// git(Local) - make a folder in our system and clone github repos into it.
// git clone (with https Url)

// clone - local(pc & laptop) & Remote(means which folder is on github)

// 1) Make a Repos in Github 

// 2) git clone url 

// 3) cd(Change Directory) GitDemo

// 4) clear command for clear Terminal

// 5) ls command for list 

// 6) git status (four steps - modified(if some change in our file),unmodified(no changes),untracked(add new file),staged(ready for commit)) 

// concept - 
// (if some change in our file(modify) &&  add new file(untracked)
// add them - status become staged 
// no change - status become commit means unchanged.......)


// 7) for add - we use git add 'File name' like a command(git add index.html)

//  - for add multiple files at once we use (git add .) Command

// 8) Now for commit, we use commit command (git commit -m "Add New Files")

// Note :- Now use git status command , and they show us that my git is ahead than github so we send local to remote using push command 

// 9) Command : git push origin main 

// Note :-  this command is used for push our new code from local to github 

// -----------------------------------------------------------------------------------------------------------------------------------------

// ################################################ Type2 ######################################################################

// # Local(Move from lapi to github) to remote Story :- Make a Project in folders first than upload them to github 

// Note :- Init Command : used to create a new repos 

// 1) Example : i have a D:/GitDemo/GitDemo 
// move behind from GitDemo to GitDemo use (cd ..)
//  2) mkdir LocalDemo
//  this command is used for make a new File mkdir means make new directory
// 3) cd LocalRepo

// 4) To make our repo to git repo use command : git init 

// Note :- to check that use command : ls -a
// this show that hidden folder like .git  

// git commit -m "My First Demo"

// Make a new Repos on GitHub 

// git status 

// git remote add origin Url 

// git remote -v 

// git branch 
// master 

// git branch -M main 

// git branch 
// Output :- main

// git push -u origin main

// refresh git hub and they track  all my codes 

// -------------------------------------------------------------------------------------------------------------------------------
// refer type 1 its easy compare to type 2 

// Work Flow on Github 

// 1) Github Repos 
// 2) Clone 
// 3) Changes 
// 4) Add 
// 5) Commit 
// 6) Push on github

// ------------------------------------------------------------------------------------------------------------------------------------

// # Branches 

// why we use branches 

// # Add new branches like feature1 

// some commands 
// 1) git branch 
// output :- main 

// 2) git checkout -b feature1 
// note :- commands to make a new branch

// git branch 
// output :- feature1

// 3) git checkout main 
// note :- move from feature1 to main branch

// 4) git checkout feature1  
// note :- move from  main to feature1 branch

// 5) git branch -d  feature2


// git push origin feature1

// --------------------------------------------------------------------------------------------------------------------------------

// Merge main and feature1 branches
 
// Commands :- 1) git branch 
// output :- main 


// One way is command :- main merge feature1 
// 2 way is :-  github using PR (pull request)

// git pull origin feature1
// -----------------------------------------------------------------------------------------------------------------------------------

// Resolving Merge Conflicts : means if two branches have changes in sammme line 

// git merge feature1

// they show conflicts by vs code editor 

// 1) accept current change 
// 2) accept incoming change 
// 3) accept both change 
// 4) compare change 

// remove extra lines and update them & save them 

// git merge main 

// git push

//  ----------------------------------------------------------------------------------------------------------------------------------
// #  How we  undo our changes inside git?
 
//  undoing changes like commit that which we do not want to commit
 
//  Case1: 
//  ek file se ek line remove ki or fir add kar dia but commit nhi kia fir usko yad aya ki vapis vhi phase pr jana hai to command likhenge 
 
//  git reset <file name>
//  git reset 
 
//  case 2 :
//  where we add and commit also 
//  git reset HEAD~1
 
//  Commit IS considered as head and latest commit is stored as 
//  HEAD~1 means head ko reset karo 1 step 
 
//  to check all commits use command:
//  git logs 
// it show all commit of that branch 
// commit 767669969987jhgj876688(this is hash)

// now we went to go from 3 to 1 comit 
//  git reset 767669969987jhgj876688
 
//  so our latest commit means our head is changed 
 
//  git remove all old changes from above command but  vs code show us old changes but we went to remove them so we use command 
//  git reset --hard 767669969987jhgj876688
 
//  so in this we  undo our changes inside git 
// -------------------------------------------------------------------------------------------------------------------------------------- 


// Fork 

// fork is a new repos that shares code and visibility setting with the orignal "upstream" repository
// it is a rough copy
// ........................................................................................................................................
// Link of  a video for learning :-
// https://www.youtube.com/watch?v=Ez8F0nW6S-w




// 0:00 Introduction
// 1:07 Git Introduction
// 5:00 GitHub Introduction
// 7:25 Setting Up GitHub
// 16:26 Setting Up Git
// 20:13 Configuring Git
// 23:03 Working with VS Code
// 24:02 Clone and Status
// 32:23 Add and Commit
// 35:55 Push Command
// 39:31 Init Command
// 49:09 Work Flow
// 49:36 Git Branches
// 51:25 Branch Commands
// 55:55 Merging Code
// 57:12 Pull Request
// 1:00:16 Pull Command
// 1:00:50 Resolving Merge Conflicts
// 1:05:31 Undoing Changes
// 1:11:24 Fork



