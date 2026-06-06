const holidays = [
    { name: "Republic Day", month: 1, public: true },
    { name: "Holi", month: 3, public: true },
    { name: "Good Friday", month: 4, public: false },
    { name: "Diwali", month: 10, public: true }
];

const getHolidaysByMonth = async (month) => {
    try {
        const result = holidays.filter(holiday => {
            return holiday.month === month;
        });

        if (result.length === 0) {
            return "No holidays found for this month";
        }

        return result;
    } catch (error) {
        return "Something went wrong: " + error;
    }
};

const run = async () => {
    const data1 = await getHolidaysByMonth(3);
    console.log("Month 3:", data1);
    
    const data2 = await getHolidaysByMonth(7);
    console.log("Month 7:", data2);
};

run();