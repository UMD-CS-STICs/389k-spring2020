## Forking the repo

1. go to https://github.com/UMD-CS-STICs/389k-spring2020
2. Click fork on the top right
3. Clone the repo
  + Click clone
  + Copy the HTTPS url
4. Go to your terminal and run `git clone *copied_url_here*`


## Setting the upstream

1. In your terminal, go to in to the directory of the cloned repo
2. run `git remote add upstream https://github.com/UMD-CS-STICs/389k-spring2020.git`

By setting the upstream of your forked repo, you are now able to pull new changes we make to the original repo by running `git pull upstream master`


## Pushing changes to your repo

When we post projects, you will pull in the skeleton code we provide by running `git pull upstream master`. You will then implement the code for the projects. When you want to commit that code to your github repo. run the following:

1. `git add .` 
2. `git commit -m "message for your commit"`
3. `git push origin master`

