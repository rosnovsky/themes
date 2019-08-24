import React from 'react'; 

const getDate = (date, {day = true, month = true, year = true} = {}) => (
    date.toLocaleDateString("en-US", {
        day: day ? "numeric" : undefined,
        year: year ? "numeric" : undefined,
        month: month ? "long" : undefined
    })
)

const EventDate = ({ startDate, endDate }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const isOneDay = start.toDateString() === end.toDateString();
    
    return (
        <>
            <time datetime={start.toISOString()}>
                {getDate(start, {year: isOneDay})}
            </time>
            
            {!isOneDay && (
            <>
                –
                <time datetime={end.toISOString()}>
                {getDate(end, { month: start.getMonth() !== end.getMonth() })} </time>
            </>
        )}
        </>
    )
}

const Event = ({ name, location, url, startDate, endDate }) => (
    <div>
        <h1>{name} ({location})</h1>
        <h6><EventDate startDate={startDate} endDate={endDate}></EventDate></h6>
        <p>Website: <a href={url}>{url}</a></p>
    </div>
)

export default Event;
