import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

class About extends Component {
    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col smOffset={1} xs={12} sm={10}>
                            <div className="contain-sm">
                                <div className="about-content">
                                    <h1 className="about-header">About Planet</h1>
                                    <p>
                                        Planet is an application that allows the user to
                                        interactively create a travel itinerary, see data about their
                                        budget, and mark their reservations. The application can be
                                        used by anyone who wants to plan and organize their trip.
                                        Alternatively, users can use the application just for its
                                        budgeting and calendar features.
                </p>

                                    <p>
                                        Users interactively create their itinerary, adding events and
                                        optionally integrating them with the budget and/or reservation
                                        features. The dashboard features four tabs: Overview,
                                        Itinerary, Budget, and Reservations. This allows users to keep
                                        their trip organized and well-planned.
                </p>

                                    <p>
                                        Created by Laura Freeman, Farrah Lee, Sangchul Hwang, and William Kwok for INFO 343 A Winter 2018
                </p>

                                    <h2 className="about-subheader">Dashboard</h2>
                                    <p>

                                        Once signed in, users are taken to their dashboard, which that contains the
                                        Overview, Itinerary, Budget, and Reservations tabs. The sidebar that contains
                                        users' trips. Users can
                                        easily navigate between their trips or create new trips.
                </p>

                                    <h2 className="about-subheader">Overview</h2>
                                    <p>
                                        The Overview tab shows general trip information, including the trip name,
                                        location of origin, destination, and trip dates. Users may manually add departing/returning
                                        flight information, traveler information, and additional notes.
                </p>

                                    <h2 className="about-subheader">Itinerary</h2>
                                    <p>
                                        The Itinerary tab features a calendar that serves as a great
                                        tool to plan out a schedule. Users can customize their
                                        calendar by adding events. Events require a name and date/time
                                        range. Optionally, they can add an estimated cost and a
                                        category, which will appear in the Budget tab. If the users
                                        indicate that a reservation has been made, they can add
                                        additional details, including a location, description, and
                                        picture. These details will render in the Reservations tab.
                                        Once created, the event will appear on the calendar.
                </p>

                                    <h2 className="about-subheader">Budgeting</h2>
                                    <p>
                                        In the Budget tab, users can set a trip budget, which they can
                                        update at any time. Users can then categorize the items they
                                        bought during the trip and see how much money they spent
                                        within each category. By default, there are four categories:
                                        Dining, Services, Experiences, and Shopping. However, users
                                        may add or delete categories, up to a maximum of 7 categories
                                        (not including "Uncategorized" items). The progress bar shows
                                        how much of the budget has been spent, broken down by
                                        category.
                </p>

                                    <h2 className="about-subheader">Reservations</h2>
                                    <p>
                                        In the Reservations tab, users can see all of their
                                        reservations. Reservations are added by indicating them as
                                        "Reservation made" when creating itinerary events. Each
                                        reservation includes when and where the reservation is. If
                                        added by the user, it may also include a picture and a
                                        description. The Reservations tab is a great way for users to
                                        keep track of all of their important engagements.
                </p>


                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default About;
