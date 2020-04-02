cd ./dist

git init
git add .
git commit -m 'deploy'
git push -f git@github.com:interest-group/vc.git master:gh-pages