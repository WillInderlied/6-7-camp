"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollFAQAccordion({
  data = [],
  className,
  questionClassName,
  answerClassName,
  enableScrollPin = true,
}) {
  const [openItem, setOpenItem] = React.useState(data[0] ? data[0].id.toString() : null);
  const containerRef = React.useRef(null);
  const contentRefs = React.useRef(new Map());

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || data.length === 0) return;

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${data.length * 220}`,
          scrub: 0.3,
          pin: enableScrollPin,
          markers: false,
        },
      });

      data.forEach((item, index) => {
        tl.add(() => {
          setOpenItem(item.id.toString());
        }, index * 2);
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [data, enableScrollPin] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("max-w-4xl mx-auto text-center py-16 h-[300vh]", className)}
    >
      <h2 className="text-3xl font-bold mb-2 text-slate-900">Frequently Asked Questions</h2>
      <p className="text-slate-600 mb-6">
        Find answers to common camp questions before you register.
      </p>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value || null)}
      >
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-6">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4 cursor-pointer">
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-xl p-3 transition-colors",
                    openItem === item.id.toString()
                      ? "bg-sky-100 text-sky-700"
                      : "bg-slate-100 text-slate-800",
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        "absolute bottom-6",
                        item.iconPosition === "right" ? "right-0" : "left-0"
                      )}
                      style={{
                        transform:
                          item.iconPosition === "right" ? "rotate(7deg)" : "rotate(-4deg)",
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "text-slate-600",
                    openItem === item.id.toString() && "text-sky-600"
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                ref={(el) => {
                  if (el) contentRefs.current.set(item.id.toString(), el);
                }}
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex justify-end ml-7 mt-4 md:ml-16">
                  <div
                    className={cn(
                      "relative max-w-md rounded-2xl px-4 py-2 text-white text-lg !bg-sky-500",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
