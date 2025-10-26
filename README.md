# README - Bee Group

Edward Gaibor
* I was mostly owning front-end styling and UX polish.
* I designed the creative touches (ASCII bees), then converted everyone’s hrefs into button-style links based on the professor’s feedback.
* I wired member info `.txt` links—started with symlinks on the school server and later moved to straightforward links once we migrated to GitHub.
* I wrote/used quick checks: a Python script to verify names in `index.html`, and later browser checks to confirm the deployed page shows the ASCII bees and working buttons.
* On the infra side, I initialized our early repo on the server, proposed a branch workflow (`name/test`), and merged teammates’ changes one by one.
* I ran into a ton of permission headaches on the campus server (group ownership, SGID, ACLs, `core.sharedRepository`, refs/objects perms). That slowed everyone down.
* To unblock collaboration, we created a fresh shared repo (BeeHive) with the right group settings, and I did my work on `feature/edward` (ASCII bees + button links), which got merged.
* I pushed for moving the whole class to GitHub. I suggested org-scoped repos, set teammate permissions, and created a GitHub Projects board so we could track sprints/issues transparently.
* I demoed that setup to the class so Group Apple could mirror it.
* I opened a PR with my UI changes, got it merged, and documented how to test the deployed site (verify ASCII bees, click member buttons, confirm everything loads).
* I presented who I am, what we built, my role on the team, and our group progress. Lately I’ve been focused on deployment hygiene and keeping the front end clean and consistent.
* Net impact: I helped stabilize the workflow (branches/PRs + project board), resolved collaboration pain by helping moving to GitHub, and improved the site’s visual identity so the team can have a more structured way of displaying their info.txt.

Keertan Patel


## Thea Hird

### Pre-Git

As assigned ProductOwner, I was tasked with managing communications between the client and group, Bee. As ProductOwner, to manage expectations, I created a list of agreements made by the developers to add to the website. This included creating a list of objectives for the group which includes creating ASCII art in the form of bees for each employee, the creation of a bee quiz, implementing a picture with eyes following the cursor, updating the cursor image to be a bee cartoon, adding in a navigation bar for multiple pages, and lastly, having an About me page for the corporation using Agile Development principles. 
The index.html file and DoneDoneChecklist were located under /hdeblois/public_html/cs410/f25/Bee and /courses/cs410/f25/hdeblois/GROUP/Bee. The website was tested live under https://www.cs.umb.edu/~hdeblois/cs410/f25/Bee/index.html. Then to address communication with the group, I created a discord for Bee and linked it to the discord for group Apple to faciliate communication. Additionally, I added the discord contact of the client and access to the main group chat for both corporations.

### Git

To work on implementing Git, Ayden was most knowledgable about setting up the commands to clone a git and then created a tutorial for the group to push to the main branch. After dubious ownership permission issues, the client instructed to move files to /courses/cs410/f25/hdeblois/GROUP2/Bee. Then as ProductOwner, I helped to assign tasks where Jonathan was to create his Bee Quiz and then create a bash script to clone the files into the deployment path. Then Edward was to test the merge for the git directory and then Keertan implemented python scripts for further testing. Between them, they updated the Git to be called BeeHive.git to fix ownership issues. Then I created/uploaded a bee cursor and favicon. Mahdi was tasked to implement his navigation bar, and Ayden was tasked to finish working on his Javascript file for his moving cursor html page. After working 3 hours in working with the commands in Git and attempting to debug on my own, I came to the same conclusion that there were permission errors. So after talking to the client, we moved onto Github.

### Github

After feedback from the client, the artifacts were moved onto Github via each individual group. With several tasks created and pushed, we completed working on the website which was deployed on:
https://umb-410-bee.github.io/BeeHive/

Here is a commit history on Github:
Update README.md
theahird-code
44 minutes ago
Merge pull request #44 from umb-410-bee/mahdi
Commits on Oct 10, 2025


Update canvas-guy.html
changes to about.html and path for beecursor
updated filepath for beecursor
Merge pull request #32 from umb-410-bee/mahdi
Merge branch 'main' into mahdi
Commits on Oct 9, 2025


Merge pull request #33 from umb-410-bee/artifacts
Merge pull request #30 from umb-410-bee/kepatel
deleted style tags since css is now stylesheet linked
Merge pull request #28 from umb-410-bee/kepatel
Update main.css
resize beecursor image (too large = won't display)
Update index.html for cursor syntax error
Commits on Oct 7, 2025


new beecursor
Edit to beecursor image to match black background
update on beecursor.png
mv beecursor.png to images/
Resolve conflicting double style tags
Merge pull request #16 from umb-410-bee/main
Merge pull request #15 from umb-410-bee/kepatel
Update index.html with beecursor cursor and simlink fix
beecursor.png uploaded
Commits on Oct 2, 2025


Upload favicon.ico and beecursor.jpg files

---

## Jonathan Renan Esponilla

Hello I am Scrum Master Jonathan Renan Esponilla.
As the Scrum Master, I asked questions around to help keep things going, 
specifically when it came to permissions and management of our source directory.
I also helped communicate if there were some weird issues with specific features.


### Pre-Git Era

We were trying to figure out file paths and what each of us were going to do in the project.

I also was selected as Scrum Master here.

During the early days, I added my info_nnnn.txt file to the list of text files.
I also just created the "simlink" directory so we could place ours there.

I also discovered the deploy directory ```/home/hdeblois/public_html/cs410/f25/Bee/```, 
so we were finally able to get the website in a viewable state.
Viewing the url ```https://umb-410-bee.github.io/BeeHive/index.html``` was our main method of testing the website.

Copying everything got annoying so I also made a bash script ```deploy.sh``` to help move everything.


### When we had Git

During Git testing, we each made our own branch, created a python script, pushed it in,
in which then one of us merged everything in the main branch. This functioned correctly.

Now that we learned Git, we deleted everything in the deploy directory to use "git clone" and "git pull".

I reported a "dubious ownership" error on ```git status```, and we weren't sure what was up with that so
we had to make a new "source" directory just so we could remake the git directory.

There was eventually an issue with pushing, so we had to move again.

Eventually we just gave up and, after communication with the client, moved on to using Github.
The permissions on the server were really weird, and we couldn't resolve it quickly enough
because someone else manages it, which is a major factor in moving to Github. 

I also started work on my site feature (a bee quiz) locally. 
This is because there were several permission errors with git: 
so many errors that we had to move directories twice (using the same bash script).

The bee quiz is simply a "yes or no" window that gives a response depending on your choice.


### When we had Github

Git was set up and we were all invited into an "Organization."

Once we got Github, I was able to integrate my site feature onto the website.
I initially placed the bee quiz in the home page,
but it turned out we were making a multi-page site,
so the quiz had to be moved to its own page.
Because of this, however, I decided to add a scrolling background.

The url is now "[umb-410-bee.github.io/BeeHive/](https://umb-410-bee.github.io/BeeHive/)"
Viewing this url is how we did tests for the overall site.
We have our own solutions for testing our individual branches
(I use a Live Preview plugin on VSCode)

During this time, I helped approve some merge requests.

I also deleted everything in the deploy directory (in the server) to use "git clone" and "git pull". Again.
This actually stopped working (I didn't have the correct permissions),
but we were allowed to just use the Github, as the client also had access to it.

I also worked on testing and started working on artifacts directory and their contents.
One of these is the ```README.md``` file you're reading now.
Another is ```done-done.txt```, a done done checklist that replicated our
"projects" tab in our github organization, a tab that let us track our individual progress.

The final artifact is ```log.txt```, a full history of everyone's commits during our time in using Github.
This is a majority of our progress in the website itself, so I think it's alright.



## Mahdi

For this project, my main contribution was the navigation bar for the site. First and foremost, I ensured it was functional in allowing the user to access any of the 4 pages, home, about, beequiz, and canvas-guy, from any page they are on. Next was ensuring it aesthetically matched the page, giving it a yellow color scheme, with a slightly darker yellow that highlights whichever page the user is currently viewing, as well as another darker yellow for any of the buttons the user is hovering their mouse over, to add responsiveness to the users actions. I was also responsible for fixing some of the overall style issues and made sure the general format (margins, navbar size and border) was unified accross all pages.

## Ayden

My role in this project was to facilitate the use of GitHub and Git for collaboration and 
hosting our website. This included settings up our GitHub repository, inviting each contributor, 
configuring the respository permissions to ensure a pull request had to be opened for each merge 
into our main branch, and configuring GitHub Pages to publicly & automatically host our website 
for free.

Additionally, I spent a lot of time in class teaching other group members how to use the collaboration 
features offered by git and GitHub correctly by individually troubleshooting their setups as well as 
creating a simple end-to-end guide for how to commit changes and sync them with our main branch properly.

Finally, I implemented the the [Canvas Guy](https://umb-410-bee.github.io/BeeHive/canvas-guy.html)
page, which includes a character whose eyes follow your cursor around, as a reference to the popular 
Bee movie.

---

```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣤⣴⠶⢶⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⡤⢴⡶⠾⠛⠉⠉⠉⠉⠀⠀⣀⣀⣤⣭⠽⠳⢶⣤⣀⣀⣀⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡧⢤⣤⣀⣀⣤⣤⠶⠶⠛⠛⠋⢉⣉⣥⣤⡴⠶⠛⠛⠉⠉⠛⠳⢯⣝⠛⠳⢦⣤⣄⣀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡇⠀⠀⢹⡇⠀⠀⣴⠶⠶⠖⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠙⠛⣶⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣷⠀⠀⠸⣇⠀⠀⣿⠀⠢⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣀⣰⣼⠶⠟⠉
⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⡶⠞⠛⠋⠉⢹⠀⠀⠀⣿⣦⡀⣿⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣄⠀⢻⣿⠾⠟⠋⠁⠀⠀⠀⠀
⣠⣤⡶⠶⠚⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⣿⠀⠙⢿⡄⠀⠀⢸⠀⠀⠀⢀⣠⣦⡀⠀⢠⡞⣿⣿⣷⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⣿⠀⠀⢸⡇⠀⠀⢸⡄⠀⣰⡿⣿⡽⣿⣦⣿⡿⣿⣸⠏⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⢸⣇⣠⣼⡇⠀⠀⠘⣷⣴⣿⣴⣿⣲⣿⠋⠙⠿⠿⠋⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠘⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣸⣧⡀⠸⡏⠁⠀⣧⠀⠀⠀⠻⠛⠻⣧⣼⠟⠁⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢷⣄⠀⠀⣀⣠⡴⠶⠛⠋⠉⠀⠙⠷⣧⡀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⣰⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢦⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡴⠟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⣄⡀⠁⠀⠀⣀⣠⣶⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠶⠶⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
```

```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⣰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢣⡀⠀⠀⠉⠑⢄⠀⠀⢀⠖⠉⠀⠀⠀⣴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣀⡤⠤⠤⢤⣀⡀⠀⠀⠀⠀⠀⠸⣧⠀⠀⠀⣠⣼⣿⣿⣷⣤⡀⠀⠀⢸⡏⠀⠀⠀⠀⠀⢀⣀⢠⠤⠤⠤⣀⡀⠀⠀
⢀⣶⡙⣄⠁⢢⠀⠘⠢⡀⢉⡐⠢⢄⡀⠀⠹⣄⡀⠀⠻⣿⠿⠿⢿⡟⠁⠀⣀⡟⠀⠀⣀⠤⠒⠉⠁⡤⠂⠀⡠⠂⢀⡜⣱⡄
⢸⠀⠀⣙⣗⠀⠑⠤⡀⠑⣄⠈⠉⠐⠚⠷⠦⣙⠻⢦⡾⠂⠀⠀⠀⠙⢦⠞⢋⡤⠒⠉⠀⠀⠀⢀⡜⠀⠠⠔⠁⢰⡏⠁⠀⡼
⠀⠳⣅⠀⠀⠑⠦⠄⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠉⣿⣶⣶⣶⣶⣶⣶⣿⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠤⠚⠁⠀⢈⡟⠁
⠀⠀⠈⠑⢲⠒⠀⠒⠃⠀⠐⠒⠀⠒⠒⠒⠊⢉⡩⣿⣿⣿⣿⣿⣿⣿⣿⢏⡉⠉⠚⠲⢖⠒⠓⠒⠀⠘⠓⠀⠒⠲⠚⠁⠀⠀
⠀⠀⠀⠀⠀⠳⢄⠁⠀⠀⠀⠀⣀⡴⠤⠐⢊⣡⡤⠞⣄⠀⠀⠀⠀⣠⠞⢦⣬⣁⠒⠠⠦⣀⡀⠃⠀⠠⠀⣀⠔⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠀⠀⣴⣟⣉⣤⣾⣿⣿⣶⣶⣿⣿⣷⣦⣌⠛⢧⡀⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⢁⣾⢻⠏⠛⠛⠛⠻⠿⠛⠛⠛⠙⡏⢷⡄⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠁⡼⠁⣼⣤⣀⡀⠀⠀⠀⠀⠀⣀⣠⣼⠈⢻⡄⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⢸⡇⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠈⣧⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠾⠀⠀⣾⡇⠀⡏⠉⠛⠛⠻⠿⠿⠟⠛⠛⠉⠉⠇⠀⣿⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠀⢹⣦⣄⣀⣀⣀⣀⣀⣀⣠⣤⡞⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣷⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⢸⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠫⣍⠉⠉⢉⡭⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
```
