const Greeting = (): string => {
    const currentHour = new Date().getHours();

    const defaultOptions = {
        morningStartHour: 4,
        afternoonStartHour: 10,
        eveningStartHour: 17,
    };

    const morning = currentHour >= defaultOptions.morningStartHour && currentHour < defaultOptions.afternoonStartHour;
    const afternoon = currentHour >= defaultOptions.afternoonStartHour && currentHour < defaultOptions.eveningStartHour;

    return morning ? 'おはようございます' : afternoon ? 'こんにちは' : 'こんばんは';
};

export default Greeting;
