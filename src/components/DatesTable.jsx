import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const tableVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.4, ease: "easeOut" },
  }),
};

const DatesTable = ({ dates }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="dates-table"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={tableVariants}
        className="mb-12"
      >
        <div id="imp-dates-home" className="py-8"></div>
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Important Deadlines
        </h2>

        {/* Box Wrapper with Shadow */}
        <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-300 bg-white">
          <motion.table
            variants={tableVariants}
            initial="hidden"
            animate="visible"
            className="w-full text-left table-auto border-collapse"
          >
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-4 border border-gray-400">Phase</th>
                <th className="p-4 border border-gray-400">Date</th>
                <th className="p-4 border border-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date, index) => (
                <motion.tr
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={rowVariants}
                  className={`transition-all duration-300 ${
                    index % 2 === 1 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="p-4 border border-gray-300">{date.phase}</td>
                  <td className="p-4 border border-gray-300">{date.date}</td>
                  <td className="p-4 border border-gray-300">
                    <span
                      className={`font-semibold ${
                        date.status === "Open"
                          ? "text-green-600"
                          : date.status === "Closed"
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      {date.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DatesTable;
