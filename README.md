# CupbearerWebsite

To deploy (to make the changes live at https://cupbearer.app ):

Go to website/ then run ./deploy

If you get an error about it not being able to find the key, try:

ssh-add -K ~/.ssh/id_rsa

And then retry the deploy script
