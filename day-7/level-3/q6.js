const totalSeconds = Number(prompt("Enter seconds:"));

if (!Number.isInteger(totalSeconds) || totalSeconds < 0) {
  console.log("Enter a valid non-negative whole number.");
} else {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatted =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  console.log(formatted);
}