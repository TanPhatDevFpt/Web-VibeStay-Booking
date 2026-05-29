flatpickr("#checkin", {
  mode: "range",
  minDate: "today",
  dateFormat: "Y-m-d",
  disable: [
    function (date) {
      return !(date.getDate() % 8);
    },
  ],
});
