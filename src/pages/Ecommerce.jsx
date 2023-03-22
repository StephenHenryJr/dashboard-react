import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import product9 from "../data/product9.jpg";

import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="p-8 md:m-0 mt-10">
      {/* Earnings */}
      <div className="w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl p-8 shadow-md bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="">
          <div>
            <p className="font-bold text-gray-400">Hey Stephen,</p>
            <p className="text-2xl">Download Latest Report</p>
          </div>
        </div>
        <div className="mt-6">
          <Button
            color="white"
            bgColor={currentColor}
            text="Download"
            borderRadius="10px"
            size="sm"
          />
        </div>
      </div>
      {/* Earnings */}

      <div className="lg:flex flex-row items-center gap-4 my-4">
        {/* Cards */}
        <div className="w-full h-96 lg:w-1/2 grid grid-cols-2 gap-4">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-full w-full dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl shadow-md"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>{" "}
        {/* Cards */}
        
        {/* Revenue Updates */}
        <div className="bg-white w-full h-96 lg:w-1/2 dark:text-gray-200 dark:bg-secondary-dark-bg p-8 mt-4 lg:m-0 rounded-2xl shadow-md">
          {/* Revenue */}
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span className="dark:text-white">Expense</span>
              </p>
              <p
                style={{ color: currentColor }}
                className="flex items-center gap-2 hover:drop-shadow-xl"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Budget Expense */}
          <div className="mt-4 flex gap-10 flex-wrap justify-center">
            <div className="m-4 w-full">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span
                    className="inline-flex items-center w-10 h-10 p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-500 ml-3 text-s"
                    style={{ background: currentColor }}
                  >
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              {/* Chart */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-3 lg:col-span-2 bg-white w-full h-96 dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl shadow-md">
            
        </div>
        <div className="col-span-3 lg:col-span-1 bg-white w-full h-96 dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl shadow-md">
            
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-4 gap-4 my-4">
        <div className="col-span-2 lg:col-span-1 bg-white w-full h-96 dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl shadow-md">
            
        </div>
        <div className="col-span-2 lg:col-span-1  bg-white w-full h-96 dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl shadow-md">
            
        </div>
        <div className="col-span-4 lg:col-span-1  bg-white w-full h-96 dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-2xl shadow-md">
            
        </div>
      </div>

    </div>
  );
};

export default Ecommerce;
