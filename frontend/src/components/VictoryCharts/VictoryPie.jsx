import { mainContext } from '@/context/mainProvider'
import React, { useContext } from 'react'
import { VictoryPie } from 'victory'

const VictoryPieChart = ({type}) => {
    const {user} = useContext(mainContext)

    const transactions = user?.transactions
    const transactionArray = []
    const clearedTransactionArray = []

    

    if(type == 'expense') {
        transactions?.map((transaction) => {
            if(transaction.type == 'expense') {
                transactionArray.push({category: transaction.category, amount: transaction.amount})
            } 
        })

        user?.expenseCategories?.map((category) => {
            let categoryAmount = 0
            transactionArray.map((income) => {
                if(income.category == category.categoryName) {
                    categoryAmount = categoryAmount + income.amount
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({x: category.categoryName, y: categoryAmount})
            }
        })
    } else if (type == 'income') {
        transactions?.map((transaction) => {
            if(transaction.type == 'income') {
                transactionArray.push({category: transaction.category, amount: transaction.amount})
            } 
        })

        user?.incomeCategories?.map((category) => {
            let categoryAmount = 0
            transactionArray.map((income) => {
                if(income.category == category.categoryName) {
                    categoryAmount = categoryAmount + income.amount
                }
            })
            if(categoryAmount > 0) {
                clearedTransactionArray.push({x: category.categoryName, y: categoryAmount})
            }
        })
    }
    
    return (
        <>
            <VictoryPie
                width={430}
                height={430}
                padding={100}
                startAngle={130}
                endAngle={495}
                colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                style={{
                    labels: { fontSize: 18, fill: '#0097B2', fontWeight: 'bold', padding: 30, fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
                }} 
                data={clearedTransactionArray}
            />
        </>
    )
}

export default VictoryPieChart