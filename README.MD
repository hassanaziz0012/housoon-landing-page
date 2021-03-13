# HouSoon Landing Page
HouSoon Landing Page is a one-page website I developed for one of my clients. It has a beautiful and responsive design. It's most important feature is the HouSoon Calculator:

![HouSoon Calculator Image](https://i.postimg.cc/6pWpDbRB/image.png)

Since the client only wanted a simple landing page, but with a couple advanced features, there was no need to create a full backend in the website itself. The only two functions that required a backend were this HouSoon Calculator and a Contact Form at the bottom of the site. To create these two functions, I used a very simple Django server which is hosted on Heroku.

The server has two view functions for this website:
1. The Calculator view will receive the form fields in the calculator as input, will update these values in a Google Spreadsheet and retrieve the results from that sheet and return them as a JSONResponse. This spreadsheet is where all the calculations actually take place.

2. The ContactForm view is very simple. It just uses the SMTPLib Python library to send an Email to the website owner.

