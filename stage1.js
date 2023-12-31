const express = require('express');
const moment = require('moment');

const app = express();

// Update the port to use the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    if (!slackName || !track) {
        return res.status(400).json({ message: 'Missing required query parameters.' });
    }

    const currentDay = moment.utc().format('dddd');
    const utcTime = moment.utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: "https://github.com/Theonlysiki/backend-HNG/blob/main/stage1.js",
        github_repo_url: "https://github.com/theonlysiki/backend-HNG",
        status_code: 200
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
