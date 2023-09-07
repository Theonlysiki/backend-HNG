const express = require('express');
const moment = require('moment');

const app = express();
const PORT = 3000;

app.get('/endpoint', (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;

    if (!slackName || !track) {
        return res.status(400).json({ message: 'Missing required query parameters.' });
    }

    const currentDay = moment.utc().format('dddd');
    const utcTime = moment.utc().toISOString();

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: "https://github.com/username/repo/blob/main/server.js",
        github_repo_url: "https://github.com/theonlysiki/HNG",
        status_code: 200
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
