# Arkera Frontend Task
### Max Powell


## Serving the app locally

Fork and/or clone the repo.

Run `npm i && npm start`

If the app does not automatically open in your browser, you can find the port in your terminal:

```
Compiled successfully!

You can now view frontend-task in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.66:3000/
```

## Using the app

At the root url, cities are displayed in the order they appear in the CSV data.

To sort the data, add the full header of the desired column to the URL.

The app accepts inputs in the following formats:

```
Lower case or title case:
http://localhost:3000/city
http://localhost:3000/City

Space or hyphen separated
http://localhost:3000/all buildings (http://localhost:3000/all%20buildings)
http://localhost:3000/all-buildings
```
If the app does not recognise your query, it will alert you and display unordered data.
