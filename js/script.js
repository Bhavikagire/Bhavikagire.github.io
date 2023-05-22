// Resume Button 1 - Resume Section
const resumeButton1 = document.getElementById("resume-button-1");
resumeButton1.addEventListener("click", function() {
  window.open("path/to/resume.pdf", "_blank");
});

// Resume Button 2 - Home/About Section
const resumeButton2 = document.getElementById("resume-button-2");
resumeButton2.addEventListener("click", function() {
  window.open("path/to/resume.pdf", "_blank");
});

// GitHub Calendar
const activityCalendar = document.querySelector(".react-activity-calendar");
if (activityCalendar) {
  // Include the necessary npm package and configuration for the calendar to display
}

// GitHub Streak Stats
const streakStats = document.getElementById("github-streak-stats");
if (streakStats) {
  const streakStatsImg = document.createElement("img");
  streakStatsImg.src = "https://github-readme-streak-stats.herokuapp.com/demo/";
  streakStats.appendChild(streakStatsImg);
}

// GitHub Top Languages
const topLangs = document.getElementById("github-top-langs");
if (topLangs) {
  const topLangsImg = document.createElement("img");
  topLangsImg.src = "https://github.com/anuraghazra/github-readme-stats";
  topLangs.appendChild(topLangsImg);
}

// GitHub Stats Card
const statsCard = document.getElementById("github-stats-card");
if (statsCard) {
  const statsCardImg = document.createElement("img");
  statsCardImg.src = "https://github.com/anuraghazra/github-readme-stats";
  statsCard.appendChild(statsCardImg);
}
