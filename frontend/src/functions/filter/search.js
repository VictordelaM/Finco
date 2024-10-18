
export const searchTransactionsByDescription=(transactions, searchTerm) =>{
    // Filtern der Transaktionen basierend auf dem Suchbegriff in der Beschreibung
    const filteredTransactions = transactions?.filter(transaction => {
        // Die Beschreibung der Transaktion in Kleinbuchstaben umwandeln und nach dem Suchbegriff suchen
        return transaction?.description?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Rückgabe der gefilterten Transaktionen
    return filteredTransactions;
}


export const searchTransactionsByCategory=(transactions, searchTerm) =>{
    // Filtern der Transaktionen basierend auf dem Suchbegriff in der Beschreibung
    const filteredTransactions = transactions?.filter(transaction => {
        // Die Beschreibung der Transaktion in Kleinbuchstaben umwandeln und nach dem Suchbegriff suchen
        return transaction?.category?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Rückgabe der gefilterten Transaktionen
    return filteredTransactions;
}

export const searchTransactionsByDate=(transactions, searchTerm) =>{
    const date = new Date(searchTerm)
    const isoDate = date.toISOString()
    // Filtern der Transaktionen basierend auf dem Suchbegriff in der Beschreibung
    const filteredTransactions = transactions?.filter(transaction => {
        // Die Beschreibung der Transaktion in Kleinbuchstaben umwandeln und nach dem Suchbegriff suchen
        return transaction?.date?.toString().toLowerCase().includes(isoDate.toString().toLowerCase());
    });

    // Rückgabe der gefilterten Transaktionen
    return filteredTransactions;
}


