import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePaginatedTasks = (page, status = "all") => {
  return useQuery({
    queryKey: ["tasks", page, status],
    queryFn: async () => {
      const endpoint =
        status === "all"
          ? `/task/getTask?page=${page}`
          : `/task/getTask/${status}?page=${page}`;
      const res = await axios.get(endpoint);
      return res.data;
    },
    keepPreviousData: true,
  });
};
