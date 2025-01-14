import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { getCrypto } from "../../api/external";

const Crypto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // IIFE
    (async function cryptoApiCall() {
      const response = await getCrypto();
      setData(response);
    })();

    // cleanup
    setData([]);
  }, []);

  if (data.length === 0) {
    return <Loader text="cryptocurrencies" />;
  }

  const negativeStyle = {
    color: '#ea3943'
  }
  const positiveStyle = {
    color: '#16c784'
  }
  return (
    <div>
      <table className="w-[80%] my-[20px] mx-auto border-collapse">
        <thead>
          <tr className="bg-[#f2f2f2]">
            <th className="font-bold text-[30px] text-center p-[12px]">#</th>
            <th className="font-bold text-[30px] text-center p-[12px]">Coin</th>
            <th className="font-bold text-[30px] text-center p-[12px]">Symbol</th>
            <th className="font-bold text-[30px] text-center p-[12px]">Price</th>
            <th className="font-bold text-[30px] text-center p-[12px]">24h</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr id={coin.id} className="tableRow">
              <td className="border-b border-b-[#f2f2f2] p-[8px] text-center text-[20px]">{coin.market_cap_rank}</td>
              <td className="border-b border-b-[#f2f2f2] p-[8px] text-center text-[20px]">
                <div className="w-[30%] flex items-center gap-[40px] text-left my-0 mx-auto">
                  <img
                    src={coin.image}
                    width={40}
                    height={40}
                    alt="coinSymbol"
                  />{" "}
                  {coin.name}
                </div>
              </td>
              <td className="border-b border-b-[#f2f2f2] p-[8px] text-center text-[20px]">
                <div className="w-[30px] flex my-0 mx-auto justify-center">{coin.symbol}</div>
              </td>
              <td className="border-b border-b-[#f2f2f2] p-[8px] text-center text-[20px]">{coin.current_price}</td>
              <td className="border-b border-b-[#f2f2f2] p-[8px] text-center text-[20px]" style={coin.price_change_percentage_24h < 0 ? negativeStyle : positiveStyle }>{coin.price_change_percentage_24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crypto;
