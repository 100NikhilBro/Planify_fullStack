// yeh apun ne alag se bna liya jiska
//  use krenge apun data ko fetch update yaa delete ke liye


import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useTasks = () =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/task/getTask"); 
      return res.data;
    },
  });

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`/task/deletetask/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, updatedData }) => {
      await axios.put(`/task/updatetask/${id}`, updatedData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
