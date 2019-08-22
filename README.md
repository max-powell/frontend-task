# Arkera Frontend Task
### Max Powell

## Serving the app locally

Fork and/or clone the repo

Run `npm i && npm start`

If the app does not automatically open in your browser, you can find the port in the terminal:

```
Compiled successfully!

You can now view frontend-task in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.66:3000/
```

## Using the app

By default, cities are displayed in the order they appear in the CSV data.

To sort the data, add the desired column header to the URL.

The app accepts inputs in the following formats:

```
Lower case or title case:
http://localhost:3000/city
http://localhost:3000/City

Space or hyphen separated
http://localhost:3000/all buildings (http://localhost:3000/all%20buildings)
http://localhost:3000/all-buildings
```
