# angular-4-song-rating-system

How I started(for windows):


  1. installing latest version of angular (-g means latest version)
  npm install -g @angular/cli

  2. upgrading node to version 6.11.3 for having a problem to create new project with command ng new
  nmv is node version controller. But windows doesnt support it.
  if already your installed version is bigger than 6.9.0 u can skip 2-4 steps.
  so I have to install nmv for windows
  download link:
  https://github.com/coreybutler/nvm/releases

  3. open the windows terminal, not git bash. on git bash it doesnt work. 
  it will download new version of node
  it will look like this:
  C:\Users\User>nvm install v6.11.3 
  
  4. To use this version use this command: 
  nvm use 6.11.3
  
  5. now go to the project folder
  open the git bash on the folder and use the command to see the node version
  node -v
  
  6. creating new project. do not use space while defining project name. this command skips that.
  ng new song-rating-project-using-angular
  
  7. creating server
  ng server
  
  8. go to 
  http://localhost:4200/
  
  
