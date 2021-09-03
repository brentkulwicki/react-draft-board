import React, { useEffect, useState } from "react";
import { DraftTable } from "./DraftTable";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let roundFormat = {
  rnd: "",
  brent: "",
  bj: "",
  alan: "",
  jamie: "",
  kyleB: "",
  kyleH: "",
  eric: "",
  keith: "",
  bruce: "",
  kori: "",
};
const getData = async () => {
  const response = await fetch(`${process.env.NO_CODE_API_URL}`);
  return response.json();
};

const lowercaseWithoutSpaces = (inputString: any) => {
  let internalString = inputString.toLowerCase();
  if (internalString.includes(" ")) {
    internalString = internalString.split(" ").join("");
  }
  return internalString;
};

const setTableData = (allData: any) => {
  return allData.map((row: any) => {
    let newObject = {};
    let rowKeys = Object.keys(row);
    rowKeys.forEach((key: any) => {
      if (key !== "row_id" && key !== "placeholder") {
        //@ts-ignore
        newObject[`${lowercaseWithoutSpaces(key)}`] = row[key];
      }
    });
    return newObject;
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFakeData = () => {
  return [
    {
      row_id: 2,
      Rnd: "1",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "",
      "Kyle B": "",
      Bruce: "",
      "Kyle H": "",
      Jamie: "Aaron Rodgers",
      Alan: "Christian McCaffrey",
    },
    {
      row_id: 3,
      Rnd: "2",
      Brent: "",
      Kori: "Tyreek Hill",
      Eric: "Jonathan Taylor",
    },
    {
      row_id: 4,
      Rnd: "3",
      Brent: "Travis Kelce",
      Kori: "Derrick Henry",
    },
    {
      row_id: 5,
      Rnd: "4",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "",
      "Kyle B": "",
      Bruce: "",
      "Kyle H": "",
      Jamie: "Calvin Ridley",
    },
    {
      row_id: 6,
      Rnd: "5",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "David Montgomery",
    },
    {
      row_id: 7,
      Rnd: "6",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "Russell Wilson",
    },
    {
      row_id: 8,
      Rnd: "7",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "Austin Ekeler",
      Keith: "",
      "Kyle B": "",
      Bruce: "Kareem Hunt",
    },
    {
      row_id: 9,
      Rnd: "8",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "",
      "Kyle B": "",
      Bruce: "",
      "Kyle H": "",
      Jamie: "",
      Alan: "Stefon Diggs",
    },
    {
      row_id: 10,
      Rnd: "9",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "Joe Burrow",
    },
    {
      row_id: 11,
      Rnd: "10",
      Brent: "Josh Allen",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "",
      "Kyle B": "",
      Bruce: "",
      "Kyle H": "Antonio Gibson",
    },
    {
      row_id: 12,
      Rnd: "11",
    },
    {
      row_id: 13,
      Rnd: "12",
    },
    {
      row_id: 14,
      Rnd: "13",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "",
      "Kyle B": "",
      Bruce: "",
      "Kyle H": "DK Metcalf",
    },
    {
      row_id: 15,
      Rnd: "14",
      Brent: "",
      Kori: "",
      Eric: "",
      BJ: "",
      Keith: "",
      "Kyle B": "Justin Jefferson",
    },
    {
      row_id: 16,
      Rnd: "15",
    },
    {
      row_id: 17,
      Rnd: "16",
    },
    {
      row_id: 18,
      Rnd: "17",
    },
    {
      row_id: 19,
      Rnd: "18",
      Brent: "",
      Kori: "",
      Eric: "Tee Higgins",
      BJ: "",
      Keith: "",
      "Kyle B": "Justin Herbert",
      Bruce: "Jalen Hurts",
    },
    {
      row_id: 21,
      Rnd: "",
      Brent: "",
      Kori: "QB",
      Eric: "RB",
      BJ: "WR",
      Keith: "TE",
    },
  ];
};

// @ts-ignore

export const DraftBoard = () => {
  let [data, setData] = useState(getFakeData());
  useEffect(() => {
    setTimeout(() => {
      getData().then((someData) => {
        console.log("re-render?");
        setData(setTableData(someData.data));
      });
      // @ts-ignore
    }, `${process.env.REFRESH_TIME}`);
  });
  return (
    <div>
      <DraftTable draftData={data} />
    </div>
  );
};
