window.renderCircularProgress = (completedTasks, totalTasks) => {
    const canvas = document.getElementById("circularProgressChart");
    if (!canvas) {
        console.error("Canvas element not found: circularProgressChart");
        return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Failed to get 2D context for canvas.");
        return;
    }

    const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    const startAngle = -Math.PI / 2; // Start from the top
    const endAngle = startAngle + (percentage / 100) * 2 * Math.PI;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a static background circle
    ctx.beginPath();
    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2 - 10,
        0,
        2 * Math.PI
    );
    ctx.strokeStyle = "#d4d4d4";
    ctx.lineWidth = 15;
    ctx.stroke();

    // Draw the animated progress circle
    let currentAngle = startAngle;
    const increment = (endAngle - startAngle) / 60; // Smooth animation over 60 frames

    const drawFrame = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Redraw the background circle
        ctx.beginPath();
        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2 - 10,
            0,
            2 * Math.PI
        );
        ctx.strokeStyle = "#d4d4d4";
        ctx.lineWidth = 15;
        ctx.stroke();

        // Draw the animated progress circle
        ctx.beginPath();
        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2 - 10,
            startAngle,
            currentAngle
        );
        ctx.strokeStyle = "#6a67ce";
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.stroke();

        // Display percentage in the center
        //ctx.font = "20px Arial";
        //ctx.fillStyle = "#6a67ce";
        //ctx.textAlign = "center";
        //ctx.textBaseline = "middle";
        //ctx.fillText(`${Math.round(percentage)}%`, canvas.width / 2, canvas.height / 2);

        console.log(percentage);
        if (currentAngle < endAngle) {
            currentAngle += increment;
            requestAnimationFrame(drawFrame);
        }
    };

    drawFrame();
};




//window.initializeCalendar = () => {
//    var calendarEl = document.getElementById('calendar');

//    var calendar = new FullCalendar.Calendar(calendarEl, {
//        initialView: 'dayGridMonth', // The view format (you can also use 'listWeek', 'timeGridDay', etc.)
//        locale: 'en', // Language settings
//        events: [
//            {
//                title: 'Meeting with John',
//                start: '2024-12-23T10:00:00',
//                end: '2024-12-23T11:00:00',
//                description: 'Discuss the upcoming project tasks.'
//            },
//            {
//                title: 'Deadline for Report',
//                start: '2024-12-25T00:00:00',
//                description: 'Submit the final report to the manager.'
//            }
//        ]
//    });

//    calendar.render(); // Renders the calendar
//};
