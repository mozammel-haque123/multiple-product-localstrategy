import Benner from "../Bennar/Benner";
import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { storegHendale } from "../Utilis/Utilitys";


export default function Statistics() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const storegLocal = storegHendale();
    const formattedData = storegLocal.map((product) => ({
      name: product.product_title,
      price: product.price,
      rating: product.rating || product.Rating,
    }));

    setChartData(formattedData);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-purple-500 flex flex-col justify-center items-center text-center gap-4 text-white p-4">
        <Benner
          Dashbo="Statistics"
          ptagdasbo="Explore the latest gadgets that will take your experience to the next level"
          ptagstatic="From smart devices to cool accessories, we have it all!"
        />
      </div>

      {/* Title */}
      <div className="w-11/12 mx-auto my-6">
        <h1 className="font-bold text-xl">Statistics</h1>
      </div>

      {/* Chart Section */}
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
