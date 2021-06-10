### This is a project written using javascript and chartjs. 

### data has been taken from a NASA resource in the form of a .csv file. 

### the chart shows data collated from 1880 - 2020

For working with csv files and pulling out the data to be used in a graph (for example):

create an async function to getData()
await the response of the fetch call to the endpoint and save in a variable(probably called response)
await the response.text() and save into a variable (probably called data)

save the result of splitting the data by linebreaks(?) into a variable (probably called table)
tag on a .slice(1) to remove the first row ([0])

forEach row of table (table.forEach(row)=>{

... for the columns split each row by (',')
set vars for the axes. These will be equivalent to the columns[0] and columns[1] etc.
(they could be year and temp for example)

go to chartjs
copy getting started barchart example
wrap it in an async function and then call it
move the call for getData inside this function, await, and assign to a variable (probably called data)

in the getData() function, create a couple of vars for the chart's labels for the axes and set to empty array
in the forEach, we can now push the params into these vars (ie. xLabels.push(year))
mustn't forget to return the new arrays we just pushed to. Object-Destructuring them: return {xLabels, yLabels}

in the table, we now need to bring in the label vars with data.xLabels etc.