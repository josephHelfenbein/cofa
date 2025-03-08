'use client';

import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function formatTimestamp(time:string) {
  const date = new Date(time);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function MapElements(transactions:any[]) {
  return transactions.map((transaction) => (
    <div key={transaction.id} className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg w-xl">
      <p className='text-gray-500 text-sm'>{formatTimestamp(transaction.sent_at)}</p>
      <div className='flex justify-between'>
        <p>To: {transaction.receiver}</p>
        <p>${transaction.amount}</p>
      </div>
      <p className='text-sm'>{transaction.location}</p>
    </div>
  ));
}

export default function Home() {
  const [transactionElements, setTransactionElements] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('id, sent_at, suspicious, location, receiver, amount');
      if (error) {
        console.error('Error fetching transactions:', error);
      } else {
        setTransactionElements(data);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('public:transactions')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'transactions' }, (payload) => {
        setTransactionElements((prevTransactions:any[]) => {
          let updatedTransactions:any[] = [...prevTransactions];
          const transaction:any = payload.new;

          switch (payload.eventType) {
            case 'INSERT':
              updatedTransactions.push(transaction);
              break;
            case 'UPDATE':
              updatedTransactions = updatedTransactions.map((t) =>
                  t.id === transaction.id ? transaction : t
              );
              break;
            case 'DELETE':
              updatedTransactions = updatedTransactions.filter((t) => t.id !== transaction.id);
              break;
            default:
              break;
          }

          return updatedTransactions;
        });
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20 w-full">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="flex justify-center flex-col w-full gap-8">
          <p className="">Transactions</p>
          {MapElements(transactionElements)}
        </div>
      </main>
    </div>
  );
}
