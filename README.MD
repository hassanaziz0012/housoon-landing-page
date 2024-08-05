# HouSoon Landing Page
HouSoon Landing Page is a one-page website I developed for one of my clients. It has a beautiful and responsive design. It's most important feature is the HouSoon Calculator:

![HouSoon Calculator Image](https://i.imgur.com/uYBoUI6.png)

Since the client only wanted a simple landing page, but with a couple advanced features, there was no need to create a full backend in the website itself. The only two functions that required a backend were this HouSoon Calculator and a Contact Form at the bottom of the site. To create these two functions, I used a very simple Django server which is hosted on Heroku.

The server has two view functions for this website:
1. The Calculator view will receive the form fields in the calculator as input, will update these values in a Google Spreadsheet and retrieve the results from that sheet and return them as a JSONResponse. This spreadsheet is where all the calculations actually take place.

2. The ContactForm view is very simple. It just uses the SMTPLib Python library to send an Email to the website owner.

Building the calculator was difficult at first, because I was trying to figure out how the calculations worked. The client gave me a Google Sheet with all the formulas and values added. Mortgages, interest rates, and financial calculations are not my strongsuit. Later, It dawned on me that there was no reason to understand these financial calculations in the first place. I could simply update the Google Sheet with the user's values, and retrieve the result that the sheet generates, without having to understand anything about the financial calculations involved.
There's always more than one way to solve a problem. And in this case, I found the easiest solution and used it. 
 
## Author
- Hassan Aziz
- Web Developer and Designer
- Website: https://www.hassandev.me
- Check out my other [web projects](https://www.hassandev.me/projects)
