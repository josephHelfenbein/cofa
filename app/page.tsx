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
    <div key={transaction.id} className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg w-xl">
      <p className='text-gray-500 text-sm'>{formatTimestamp(transaction.sent_at)}</p>
      <div className='flex justify-between'>
          <p>{transaction.receiver}</p>
        <p>${transaction.amount.toFixed(2)}</p>
      </div>
      <p className='text-sm'>{transaction.location}</p>
      {
            transaction.suspicious ? (
              <div className='flex gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14a1 1 0 110-2 1 1 0 010 2zm0-11a1 1 0 110 2 1 1 0 010-2zm1 3a1 1 0 00-2 0v4a1 1 0 102 0V8z"
                      clipRule="evenodd"/>
              </svg>
              <p className='text-red-500 text-sm'>Flagged as suspicious</p>
              </div>
            ):null
          }
    </div>
  ));
}

export default function Home() {
  const [transactionElements, setTransactionElements] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('id, sent_at, suspicious, location, receiver, amount')
        .order('sent_at', { ascending: false });
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
          <p className="text-center text-lg font-bold">Transactions</p>
          {MapElements(transactionElements)}
        </div>
      </main>
    </div>
  );
}
