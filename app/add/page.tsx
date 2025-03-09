"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Combobox, ComboboxOption } from "@/components/ui/combobox";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

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

export default function StartCallPage() {
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [transactionName, setTransactionName] = React.useState("");
  const [transactionAmount, setTransactionAmount] = React.useState("");
  const router = useRouter();

  const handleAddTransaction = () => {
    console.log("Add transaction button clicked");
    toast.success("Transaction added successfully");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 className="mb-12 text-4xl font-bold" variants={fadeIn}>
        Add Credit Card Transaction
      </motion.h1>

      <div className="flex w-full max-w-lg flex-col gap-8 text-left">
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

        <motion.div variants={fadeIn}>
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-600"
            size="lg"
            onClick={handleAddTransaction}
          >
            Add Transaction
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
