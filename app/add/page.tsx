"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Combobox, ComboboxOption } from "@/components/ui/combobox";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { DatePicker } from "@/components/ui/datepicker";
import { createClient } from "@supabase/supabase-js";

const locations: ComboboxOption[] = [
  {
    value: "NY",
    label: "New York, NY",
  },
  {
    value: "CA",
    label: "Los Angeles, CA",
  },
  {
    value: "TX",
    label: "Austin, TX",
  },
  {
    value: "FL",
    label: "Miami, FL",
  },
  {
    value: "IL",
    label: "Chicago, IL",
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface Transaction {
  sent_at: string;
  location: string;
  receiver: string;
  amount: number;
}

export default function StartCallPage() {
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [transactionName, setTransactionName] = React.useState("");
  const [transactionAmount, setTransactionAmount] = React.useState("");
  const [transactionDate, setTransactionDate] = React.useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleAddTransaction = async () => {
    // Validate inputs
    if (!selectedLocation) {
      toast.error("Please select a location");
      return;
    }

    if (!transactionName) {
      toast.error("Please enter a transaction name");
      return;
    }

    if (!transactionAmount || isNaN(Number(transactionAmount))) {
      toast.error("Please enter a valid transaction amount");
      return;
    }

    if (!transactionDate) {
      toast.error("Please select a transaction date");
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the transaction data
      const transaction: Transaction = {
        sent_at: transactionDate.toISOString(),
        location: selectedLocation,
        receiver: transactionName,
        amount: Number(transactionAmount),
      };

      // Insert the transaction into Supabase
      const { error } = await supabase.from("transactions").insert(transaction);

      if (error) {
        throw error;
      }

      toast.success("Transaction added successfully");
      setTimeout(() => {
        router.push("/account");
      }, 1000);
    } catch (error) {
      console.error("Error adding transaction:", error);
      toast.error("Failed to add transaction. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
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

      <motion.div
        className="relative z-10 flex w-full flex-col items-center px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 className="mb-12 text-4xl font-bold" variants={fadeIn}>
          Add Credit Card Transaction
        </motion.h1>

        <div className="flex w-full max-w-lg flex-col gap-8 rounded-xl bg-white/80 p-8 text-left shadow-lg backdrop-blur-sm">
          <motion.div className="flex w-full flex-col gap-2" variants={fadeIn}>
            <h2 className="text-2xl font-semibold">Select Location</h2>

            <Combobox
              options={locations}
              value={selectedLocation}
              onChange={setSelectedLocation}
              placeholder="Select location..."
              searchPlaceholder="Search location..."
              emptyMessage="No location found."
            />
          </motion.div>

          <motion.div className="flex w-full flex-col gap-2" variants={fadeIn}>
            <h2 className="text-2xl font-semibold">Enter Transaction Name</h2>

            <Input
              placeholder="Enter transaction name..."
              className="w-full"
              value={transactionName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTransactionName(e.target.value)
              }
            />
          </motion.div>

          <motion.div className="flex w-full flex-col gap-2" variants={fadeIn}>
            <h2 className="text-2xl font-semibold">Enter Transaction Amount</h2>

            <Input
              placeholder="$"
              className="w-full"
              value={transactionAmount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTransactionAmount(e.target.value)
              }
            />
          </motion.div>

          <motion.div className="flex w-full flex-col gap-2" variants={fadeIn}>
            <h2 className="text-2xl font-semibold">Select Transaction Date</h2>

            <DatePicker date={transactionDate} setDate={setTransactionDate} className="w-full" />
          </motion.div>

          <motion.div variants={fadeIn}>
            <Button
              className="w-full bg-blue-700 hover:bg-blue-800 active:bg-blue-800"
              size="lg"
              onClick={handleAddTransaction}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Transaction"}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
