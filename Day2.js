const holiday = {
    name: "Republic Day",
    date: "2026-01-26",
    country: "IN",
    type: "National",
    public: true
};

const getHolidayName = (holiday) => {
    return holiday.name;
};

console.log(getHolidayName(holiday));
console.log(holiday.weather);