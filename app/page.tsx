"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, Bell, Zap } from "lucide-react";

export default function LandingPage() {
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

      {/* Header */}
      <header className="relative z-10 container mx-auto flex items-center justify-between px-4 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Shield className="mr-2 h-8 w-8 text-blue-700" />
          <span className="text-2xl font-bold text-blue-900">Credit Card Fraud Agent</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/account">
            <Button className="bg-blue-700 hover:bg-blue-800">
              Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-grow flex-col items-center justify-center px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            className="mb-6 text-5xl leading-tight font-bold text-blue-900 md:text-7xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Protect Your Finances with AI-Powered Fraud Detection
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our advanced AI system monitors your transactions in real-time to detect and prevent
            fraudulent activities before they impact your finances.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link href="/account">
              <Button size="lg" className="bg-blue-700 px-10 py-6 text-lg hover:bg-blue-800">
                View Dashboard
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-white/50 py-16 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold text-blue-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-xl bg-white/80 p-6 shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-3">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-800">Real-time Protection</h3>
              <p className="text-gray-600">
                Continuous monitoring of all transactions with instant alerts for suspicious
                activities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="rounded-xl bg-white/80 p-6 shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-3">
                <Zap className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-800">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms that learn your spending patterns to detect
                anomalies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="rounded-xl bg-white/80 p-6 shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 p-3">
                <Bell className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-blue-800">Instant Notifications</h3>
              <p className="text-gray-600">
                Get alerted immediately when suspicious transactions are detected, with one-click
                card freezing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white shadow-xl md:p-12"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Secure Your Finances?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Join thousands of users who trust our AI-powered fraud detection system to keep their
            credit cards safe.
          </p>
          <Link href="/account">
            <Button size="lg" className="bg-white px-8 text-lg text-blue-700 hover:bg-blue-50">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-100 bg-white/30 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 Credit Card Fraud Agent. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">Terms of Service</span>
            <span className="mx-2">Contact Us</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
