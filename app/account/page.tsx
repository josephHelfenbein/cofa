"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CreditCard, DollarSign, User, X } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Sample user data (only the static parts)
const userData = {
  name: "John Doe",
  accountBalance: 4285.97,
  creditCard: {
    number: "•••• •••• •••• 4321",
    expiry: "05/25",
    type: "Visa Signature",
  },
};

// Transaction interface
interface Transaction {
  id: number;
  sent_at: string;
  suspicious: boolean;
  location: string;
  receiver: string;
  amount: number;
}

export default function AccountPage() {
  const [transactionElements, setTransactionElements] = useState<Transaction[]>([]);
  const [cardState, setCardState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Track if the component is mounted
    let isMounted = true;

    const fetchTransactions = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("transactions")
        .select("id, sent_at, suspicious, location, receiver, amount")
        .order("sent_at", { ascending: false });

      // Only proceed if component is still mounted
      if (!isMounted) return;

      if (error) {
        console.error("Error fetching transactions:", error);
        toast.error("Failed to load transactions");
      } else {
        setTransactionElements(data || []);

        // Only show toasts for suspicious transactions that are recent (e.g., last 24 hours)
        const suspiciousTransactions =
          data?.filter((transaction) => {
            if (!transaction.suspicious) return false;

            // Only show notifications for transactions from the last 24 hours
            const transactionDate = new Date(transaction.sent_at);
            const oneDayAgo = new Date();
            oneDayAgo.setDate(oneDayAgo.getDate() - 1);

            return transactionDate >= oneDayAgo;
          }) || [];

        suspiciousTransactions.forEach((transaction) => {
          const formattedDate = new Date(transaction.sent_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });

          const formattedAmount = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(transaction.amount);

          toast.custom(
            (t) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: t.visible ? 1 : 0, y: t.visible ? 0 : 10 }}
                transition={{ duration: 0.4 }}
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } ring-opacity-5 pointer-events-auto flex w-full max-w-md rounded-lg border border-red-200 bg-red-50 shadow-lg ring-1 ring-black`}
              >
                <div className="w-0 flex-1 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-red-800">
                        Suspicious Transaction Detected
                      </p>
                      <p className="mt-1 text-sm text-red-700">
                        {transaction.receiver} - {formattedAmount}
                      </p>
                      <p className="mt-1 text-xs text-red-600">
                        {formattedDate} • {transaction.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-red-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-red-600 hover:bg-red-100 hover:text-red-800 focus:outline-none"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ),
            {
              duration: 5000,
              position: "bottom-right",
            }
          );
        });
      }
      setIsLoading(false);
    };

    fetchTransactions();

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated background elements */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-20 left-20 h-96 w-96 rounded-full bg-blue-500"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-20 bottom-20 h-64 w-64 rounded-full bg-red-500"
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-blue-400"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-4xl px-4 py-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <motion.h1
            className="text-3xl font-bold text-blue-900 md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Account Dashboard
          </motion.h1>

          <Link href="/">
            <Button variant="outline" className="border-blue-200 text-blue-700">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* User Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-3">
                    <User className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900">{userData.name}</h2>
                    <p className="text-gray-500">Premium Account</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3">
                    <DollarSign className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="text-xs text-gray-500">Balance</p>
                      <p className="font-semibold text-blue-900">
                        {formatCurrency(userData.accountBalance)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3">
                    <CreditCard className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="text-xs text-gray-500">{userData.creditCard.type}</p>
                      <p className="font-semibold text-blue-900">{userData.creditCard.number}</p>
                      <p className="text-xs text-gray-500">Expires: {userData.creditCard.expiry}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Transaction Security Monitor</CardTitle>
              <CardDescription>
                Real-time monitoring and analysis of your credit card transactions to detect
                fraudulent activities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg bg-blue-50">
                  <div className="border-b border-blue-100 p-4">
                    <h3 className="font-medium text-blue-800">Recent Transactions</h3>
                  </div>

                  {isLoading ? (
                    <div className="flex justify-center p-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent"
                      />
                    </div>
                  ) : (
                    <div className="divide-y divide-blue-100">
                      {transactionElements.length > 0 ? (
                        transactionElements.map((transaction) => (
                          <div
                            key={transaction.id}
                            className={`flex items-center justify-between p-4 ${transaction.suspicious ? "bg-red-50" : ""}`}
                          >
                            <div className="flex items-center gap-3">
                              {transaction.suspicious && (
                                <AlertCircle className="h-5 w-5 text-red-500" />
                              )}
                              <div>
                                <p className="font-medium">{transaction.receiver}</p>
                                <p className="text-sm text-gray-500">
                                  {formatDate(transaction.sent_at)}
                                </p>
                                <p className="text-xs text-gray-400">{transaction.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {formatCurrency(transaction.amount)}
                              </span>
                              {transaction.suspicious && (
                                <Badge variant="destructive" className="ml-2">
                                  Suspicious
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">No transactions found</div>
                      )}
                    </div>
                  )}
                </div>

                <div className="text-center text-sm text-gray-500">
                  Our AI-powered system continuously monitors your transactions for unusual patterns
                  and potential fraud attempts.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
