# Express Intro

## Part 1 - Mean, Median, Mode

For this exercise, you will build an express.js application that performs three statistical operations:

1.  **mean** (average)
2.  **median** (midpoint)
3.  **mode** (most frequent)

given an arbitrary amount of numbers.

The operations are invoked via **one route per operation**, and results should be printed to a file.

### Requirements

1.  The three base routes are `/mean`, `/median`, `/mode`. All accept GET requests
1.  Each route takes a query key of `nums` which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to `/mean?nums=1,3,5,7`.
1.  The response of each operation should be a human-readable string, aka: `'The mean of 1, 3, 5, 7 is 4.'`
1.  The human-readable string response should also be written to a file called `results.txt`.
1.  The `results.txt` file should keep track of **every request issued.** Meaning it does not get overwritten each time, and every new request makes a new entry on a new line of the file.
1.  There should be an additional `/results` route, accepting a GET request, which responds with the printed contents of the `results.txt` file.
1.  The app should "gracefully" handle the following errors:
    - Passing in an invalid number (NaN errors). For instance, `/mean?nums=foo,2,3` should respond with a `400 Bad Request` status code and a response that saying something like: `foo is not a number`.
    - Empty input: `/mean` without passing any `nums` should respond with a `400 Bad Request` status code saying something like `nums are required`.
    - No results file. If there are no results written yet, and the user requests `/results`, there should be a `404 Not Found` status code with a response that says something like: `There are no results yet.`

### Bonus

1.  Sending a `DELETE` request to `/results` should remove the text file, meaning a subsequent `GET` to `/results` would be a 404 Not Found.
1.  Provide special handling for an optional query key called `save` that can be set to `false`. This means the operation will not write to file. For example, `/median?nums=1,3,5&save=false` will return a human-readable response but will not write to `results.txt`.
1.  Make a route called `/all` that does all three operations at the same time, with the response from each of them printed one per line.

## Part 2 - Shopping List

For this exercise we will be building a simple application where we will store a shopping list. You should use an **array** to store your items in the shopping list.

Our application should have the following routes:

1.  `GET /items` - this should render a list of shopping items.
1.  `POST /items` - this route should accept form data and add it to the shopping list.
1.  `GET /items/:id` - this route should display a single item's name and price
1.  `PATCH /items/:id`, this route should modify a single item's name and/or price
1.  `DELETE /items/:id` - this route should allow you to delete a specific item from the array.
