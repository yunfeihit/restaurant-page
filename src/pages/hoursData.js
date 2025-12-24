const hoursData = {
    lunch: {
        days: 'Monday-Friday',
        time: '11:30am - 2:30pm (last reservation at 2:30pm)'
    },
    branch: {
        days: 'Saturday-Sunday',
        time: '11:00am - 2:30pm (last reservation at 2:30pm)'
    },
    midday: {
        days: 'Daily',
        time: '2:30pm - 5pm'
    },
    dinner: [
        {
            days: 'Sunday - Wednesday',
            time: '5pm - 10:30pm (last reservation at 9:30pm)'
        },
        {
            days: 'Thursday - Saturday',
            time: '5pm - 11pm (last reservation at 10pm)'
        }
    ]
}

export default hoursData;