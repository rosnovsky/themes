import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Event from "../components/Event"

export const query = graphql`
    query($eventId: String!) {
        event(id: { eq: $eventId}) {
            name
            url
            location
            startDate(formatString: "MMMM DD, YYYY")
            endDate(formatString: "MMMM DD, YYYY")
            slug
        }
    }
`

const EventTemplate = ( {data : { event }} ) => (
    <Layout>
        <Event {...event} />
    </Layout>
)

export default EventTemplate;
