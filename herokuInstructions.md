### Heroku - app name = 'waxdrip'

[deploying-wtih-git] : https://devcenter.heroku.com/articles/git

1.  Set up the [Heroku command line tools][heroku-cli]
2.  `heroku login` from the command line
3.  Add a git remote for heroku following instructions below:

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli

- **If you are creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a
      name in mind.
  2.  `heroku config:set JWT=<your secret here!>` to set a secret for JWT signing

  3.  JWT = waxdriprulez

Database Setup

3.  `heroku addons:create heroku-postgresql:hobby-dev` to add
    ("provision") a postgres database to your heroku dyno (This creates your production database)

4.  `heroku config:set SEED=true` to get heroku to sync and seed your database

5.  note everytime your app restarts, the database tables will be dropped and
    re-created. To avoid this you can `config:unset SEED`

- **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a
      collaborator on the app.

  2.  `heroku git:remote -a waxdrip`

- **Deploying Code to Heroku app...**

1.  `git push heroku main` to push the main branch to the heroku remote branch

2.  `git push heroku testbranch:main` To deploy code to Heroku from a
    non-`main` branch of your local repository (for example, `testbranch`),
    use the following syntax push it to the remote’s `main` branch

Now, you should be deployed!
