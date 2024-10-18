//?funktioniert!!!

//*als erster parameter muss ein array mit den zu filternden transaktionen übergeben werden
//*als zweiter parameter wird die zeitspanne in tagen übergeben
//*der return gibt uns das gefilterte array zurück
export const transactionsByDate = (transactions, timespan)=>{
    const isWithinTimespan = (date) => {
        const transactionDate = new Date(date);
        const currentDate = new Date();
        const startDate = new Date(currentDate.getTime() - timespan * 24 * 60 * 60 * 1000);
        return transactionDate >= startDate && transactionDate <= currentDate;
        }
    let array = []
    transactions?.map((transaction)=>{
        if(isWithinTimespan(transaction.date)){
            array.push(transaction)
        }
    })
    return array
}
