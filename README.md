# Trip Planner
Created by Laura Freeman, Farrah Lee, Sangchul Hwang, and William Kwok for INFO 343 A Winter 2018

## About our project
We have created an application that allows the user to interactively create a travel itinerary, see data about their budget, and mark their reservations. The clients of our web application will be tourists who want to plan a complex schedule for their trip, or just using the budgeting feature. Our application is focused towards end users that like to have control of every aspect of their schedule and have an interactive interface for planning.

Our application shares information about what the user has planned already, what their current estimated cost is versus their max budget (segmented by category). Users are able to interactively create their itinerary, similar to Google Calendar.

Our project is open source, and modules can be added for more features very easily using the React framework.

## Similar solutions
Google Calendar, Expedia Trip Planner, and other trip planners are similar applications.

Google Calendar is the most similar, but it is not specifically focused towards travel, and doesn't let the user add a lot of information that may be relevant to a trip.

Other trip planners have a lot of established architecture for place suggestions or reservation makers, but none we found had an intuitive interface, so we attempted to make a "best of both worlds" application, to create a Google Calendar with trip planning in mind.

## Modules used
* [classnames](https://www.npmjs.com/package/classnames) for conditionally joining classNames together for reactstrap `tabContent`.
* [firebase](https://www.npmjs.com/package/firebase) for authentication, data storage, and image storage.
* [lodash](https://www.npmjs.com/package/lodash) to sort arrays and objects throughout the project quickly.
* [material-ui](https://www.npmjs.com/package/material-ui) for a very clean user interface that looks and feels great.
* [material-ui-datetimepicker](https://www.npmjs.com/package/material-ui-datetimepicker) to combine material ui date picker and time picker together for creating calendar events.
* [moment](https://www.npmjs.com/package/moment) used for localization with the Big Calendar on the Itinerary page.
* [react](https://www.npmjs.com/package/react) for providing a framework for us to organize the state of our application that allows fluid user interaction.
* [react-big-calendar](https://www.npmjs.com/package/react-big-calendar) used for a calendar interface with the Itinerary page.
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) to create a seamless web application where the user can see details without lag.
* [react-sweet-progress](https://www.npmjs.com/package/react-sweet-progress) for a sleek looking progress bar that we use on the Budget page.
* [reactstrap](https://www.npmjs.com/package/reactstrap) for the `tabContent` that our application revolves around.


## Database structure
```
{{ROOT}}
  {{USER}} // key that corresponds to user's UID in firebase
    Trips
      {{TRIP}} // key that corresponds to a trip
        budget: integer
        categories: array of strings, with one element ALWAYS being "Uncategorized"
        dateEnd: integer corresponding to Unix Epoch Milliseconds (always greater than dateStart)
        dateStart: integer corresponding to Unix Epoch Milliseconds
        departing
          airlineName: string
          confirmation: string
          departTime: integer corresponding to Unix Epoch Milliseconds
          arrivalTime: integer corresponding to Unix Epoch Milliseconds
        returning
          airlineName: string
          confirmation: string
          departTime: integer corresponding to Unix Epoch Milliseconds
          arrivalTime: integer corresponding to Unix Epoch Milliseconds
        endLocation: string
        startLocation: string
        events
          {{EVENT}} // key that corresponds to an event
            cost: integer
            description: string
            eventEnd: integer corresponding to Unix Epoch Milliseconds
            eventStart: integer corresponding to Unix Epoch Milliseconds
            eventName: string
            location: string
            reservation: boolean
            type: string
          {{EVENT}}
          {{EVENT}}
        notes: string
        tripName: string
      {{TRIP}}
      {{TRIP}}
  {{USER}}
  {{USER}}
  {{USER}}
```

## Problems, bugs, and future plans
* Switching between trips on the itinerary page doesn't update the calendar to the correct week if the starting weeks are different. This was fixed before by using functions that `react-big-calendar` provided, but then mysteriously stopped working a couple days later. Perhaps an external change affected how it was working.
* When logging in for the first time, the top right "Welcome, \_\_\_\_\_\_\_" message didn't get the current user's `displayName` correctly, so we used a workaround where if it couldn't find it, we had it only appear as "Welcome."
* Integration with external APIs such as Expedia's reservation API or trip suggestions API from Google, based on our user's data of remaining budget, total budget, location, etc.
* Map paths and display events using [react-leaflet](https://www.npmjs.com/package/react-leaflet)
* D3 to display budget statistics, and other possible statistics.
* Budgeting on a per-traveler basis
