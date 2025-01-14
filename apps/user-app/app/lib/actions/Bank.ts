"use server"

import prisma from "@repo/db/client";

export async function Bank(userId: number) {
    // Fetch all transactions that are not marked as "Success"
    const transactions = await prisma.onRampTransaction.findMany({
        where: {
            userId: userId,
            status: {
                not: "Success",
            },
        },
    });

    if (transactions.length === 0) {
        console.log("All transactions are already marked as success.");
        return;
    }

    try {
        // Initialize a total amount variable
        let totalAmount = 0;

        // Update each transaction that is not already "Success" and accumulate the amount
        for (const transaction of transactions) {
            totalAmount += transaction.amount;

            // Update the transaction status to "Success"
            await prisma.onRampTransaction.update({
                where: {
                    id: transaction.id,
                },
                data: {
                    status: "Success",
                },
            });
        }

        // Add the total amount to the user's balance (only if it's not already successful)
        if (totalAmount > 0) {
            await prisma.balance.update({
                where: { userId: userId },
                data: {
                    amount: {
                        increment: Number(totalAmount), // Convert cents to main currency unit
                    },
                },
            });
        }

        console.log(`Successfully updated ${transactions.length} transactions and added ${totalAmount / 100} to user balance.`);
    } catch (error) {
        console.error("Error updating transactions and balance:", error);
        throw new Error("Failed to update transaction status and balance.");
    }
}
