// ! As there are cases in which a transaction is no longer desired, these can be deleted in the Transaction area
// This jsx is integrated into the TransactionForm.jsx
import React from 'react'
import { Card } from './ui/card'
import { Button } from "@/components/ui/button"
import { removeTransaction } from "@/functions/fetches/editTransactionsFetchtes"
import { useNavigate } from 'react-router-dom'

const DeleteTransaction = ({setDeleteCard, deleteTransaction}) => {
    const navigate = useNavigate()
    
    // The Delete button deletes the transaction with the unique transaction id and closes the card again
    const handleDeleteTransaction = ()=>{
        removeTransaction(deleteTransaction)
        setDeleteCard(false)
        navigate('/transaction')
        window.location.reload()
    }

    // If the user decides not to delete the transaction after all, they can close the card again using the Keep button
    const handleKeepButton = () => {
        setDeleteCard(false)
    }
    return (
        <>
            <Card className='z-10 border fixed w-80 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className="p-4">
                    <p className="text-center">Are you sure you want to delete this element?</p>
                    <div className="flex justify-center gap-10 pt-4">
                        <Button onClick={handleKeepButton}>Keep</Button>
                        <Button variant='outline' onClick={handleDeleteTransaction}>Delete</Button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default DeleteTransaction