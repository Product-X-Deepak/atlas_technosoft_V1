"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Ship, Globe, Shield, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

function ShippingHeroComponent() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.3 })
  
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFF5D6] py-8">
      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-800">
            <span>Industry Solutions</span>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-4xl text-center">
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl">
            Shipping & <span className="text-[#E84A0E]">Maritime</span> Solutions <br />
            <span className="text-[#A73370]">for Global Operations</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-base text-slate-700">
            Optimize your global shipping operations with advanced technology solutions for fleet management, cargo tracking, and regulatory compliance.
          </p>
        </div>

        <div className="mx-auto mb-4 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                {benefit.icon}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-1 text-xs text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button 
            size="sm" 
            className="bg-[#E84A0E] text-white hover:bg-[#E84A0E]/90 group" 
            asChild
          >
            <Link href="/contact" className="flex items-center">
              Request a Consultation
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-[#1E1E38] bg-[#1E1E38] text-white hover:bg-[#1E1E38]/90 hover:text-white" 
            asChild
          >
            <Link href="#solutions" className="flex items-center">
              Explore Solutions
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    icon: <Ship className="h-4 w-4 text-[#E84A0E]" />,
    title: "Fleet Efficiency",
    description: "25% fuel reduction",
  },
  {
    icon: <Globe className="h-4 w-4 text-[#A73370]" />,
    title: "Global Tracking",
    description: "99.8% visibility",
  },
  {
    icon: <Shield className="h-4 w-4 text-[#A73370]" />,
    title: "Regulatory Compliance",
    description: "100% documentation",
  },
  {
    icon: <BarChart3 className="h-4 w-4 text-[#E84A0E]" />,
    title: "Operational Savings",
    description: "32% cost reduction",
  },
]

// Wrapper component with Suspense boundary
function ShippingHero(props: Record<string, unknown>) {
  return (
    <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/20 rounded-lg" />}>
      <ShippingHeroComponent {...props} />
    </Suspense>
  )
}

// Wrapper component to ensure proper Suspense boundaries for useSearchParams
function ShippingHeroWrapper(props: Record<string, unknown>) {
  return (
    <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/20 rounded-lg" />}>
      <ShippingHero {...props} />
    </Suspense>
  );
}

// Modify the export to use the wrapped version
export { ShippingHeroWrapper as ShippingHero };