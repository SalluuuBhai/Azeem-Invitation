document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  });

  // Countdown
  function updateCountdown() {
    const countdownDate = new Date("August 18, 2024 12:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      // Event has ended
      const endDate = new Date("August 18, 2024 12:00:00").getTime();
      const daysPassed = Math.floor((now - endDate) / (1000 * 60 * 60 * 24));
      const hoursPassed = Math.floor(
        ((now - endDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesPassed = Math.floor(
        ((now - endDate) % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsPassed = Math.floor(((now - endDate) % (1000 * 60)) / 1000);

      // Set the text content for elapsed time
      document.getElementById("days").textContent = daysPassed
        .toString()
        .padStart(2, "0");
      document.getElementById("hours").textContent = hoursPassed
        .toString()
        .padStart(2, "0");
      document.getElementById("minutes").textContent = minutesPassed
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = secondsPassed
        .toString()
        .padStart(2, "0");

      // Optionally, show a message indicating the event has ended
      document.querySelector(".counter").innerHTML;
      // Update the heading text
      document.getElementById("timing").textContent = "Days Since Marriage";
      document.getElementById("inshaallah").textContent = "Alhamdulillah";

      return;
    }

    // Event is upcoming
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set the text content for countdown time
    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  // Initial call and update every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Add to Calendar link
      document.getElementById('addToCalendarLink').addEventListener('click', function (e) {
        e.preventDefault();

        const eventDetails = {
          title: 'Mohamed Azeem & Samar Fathima Wedding',
          location: 'ASK Sangamithirai Marriage Hall, Thandavankulam',
          description: 'Join us to celebrate the wedding of Mohamed Azeem and Samar Fathima.',
          startDate: '20240818T110000',
          endDate: '20240818T123000'
        };

        // Google Calendar link
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
        window.open(googleCalendarUrl, '_blank');

        // Apple Calendar - Create and open an ICS file
        const icsData = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
LOCATION:${eventDetails.location}
DESCRIPTION:${eventDetails.description}
DTSTART:${eventDetails.startDate}
DTEND:${eventDetails.endDate}
END:VEVENT
END:VCALENDAR
        `;

        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'wedding-invitation.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });

  // Set current year in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
});
