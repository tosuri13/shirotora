"use client";

import useSWR from "swr";

export const useGetHolidays = () => {
  const key = "/api/holidays";
  const fetcher = async () => {
    const response = await fetch(
      "https://holidays-jp.github.io/api/v1/datetime.json",
    );
    return response.json();
  };

  return useSWR(key, fetcher);
};
