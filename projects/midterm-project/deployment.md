### How to Deploy
-----------------

Navigate to an exising project, open up `package.json`.

You should already have a `script` key that looks like this:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

We want to add one more command called `start` to tell `now` what command to use to start our server.

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" /* Add this */
},
```


# Deploying using `Heroku`
Visit the Heroku website here: https://www.heroku.com/ and register for an account.

Go to your dashboard page and in the top right corner there should be a `New` button, click on it and select `Create new app`.

Name your new application. This will be what users will enter into the url to get to your application. You can change this later in the `Settings` tab of that project later.

After confirming, you should be in the `Deploy` tab. From here, go down to the `Deployment Method` section and choose the `GitHub` option. Connect your github account in the `Connect to GitHub` section. After doing so, choose the GitHub repository that you want to deploy from.

If you wish to have Heroku automatically deploy, choose the `Enable Automatic Deploys` option. The `Choose a branch to deploy` option essentially entails where Heroku will listen for updates to your application. We will stick with the master branch for now. Now, whenever you push a commit to the master branch, Heroku will automatically update your application.

Note: You may need to manaully deploy from time to time. You can find the option to do so at the very bottom in the `Manual deploy` section.

## index.js Changes
------------------------
Notice how in our index.js we originally had:
```
app.listen(3000, function() {
    console.log('Listening!');
});
```
This tells our local instance to listen on a specific port that we want assigned to it. Since this is our local machine we can designate our application to preoccupy a certain port. Now when we are deploying, the deployment service will instead assign a port to the end user since not all applications can run on port 3000. So we need to change our code to compensate for that:
```
app.listen(process.env.PORT || 3000, function() {
    console.log('Listening!');
});
```
This tells our server to either use a port that the environment provides or we statically assign one.
