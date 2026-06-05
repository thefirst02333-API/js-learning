const holidays = [
    { name: "Republic Day", month: 1, public: true },
    { name: "Holi", month: 3, public: true },
    { name: "Good Friday", month: 4, public: false },
    { name: "Diwali", month: 10, public: true }
];

const publicHolidays = holidays.map(holiday => {
    return holiday.name;
});

console.log(publicHolidays);