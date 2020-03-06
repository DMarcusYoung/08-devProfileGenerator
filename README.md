# Git Hub Profile PDF Generator

## Description
PDF generator that displays Git Hub profile information using users choice of color.

## Technologies
JS and Node were used to create the prompt for the user, get the git hub profile data via API request, and generate the pdf. HTML was used to populate the PDF with all of the user's info. The Git Hub API was called to get profile data. The inquirer package was used to prompt the user in the terminal, the axios package was used to make the API request, the HTML-PDF package was for generating the PDF.

## Challenges
The biggest challenge was messing with the HTML to get everything to show up. The image was super problematic becuase the starting CSS/HTML styles that were given didn't really work. Going through the starting code was a huge pain, and getting the HTML to display properly was especially annoying because there wasn't a way to instantly see the changes. Another small problem was the limited unauthorized Git Hub API requests. After a certain number of calls each day, there'd always be an unauthorized error which made testing the HTML impossible.

## Screenshots
![Generated PDF screenshot](https://github.com/DMarcusYoung/08-devProfileGenerator/blob/master/Generated%20PDF%20Screenshot.PNG)
