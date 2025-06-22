"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getVariations = (id: number | string) => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["variations"],
    queryFn: () =>
      instance()
        .get(`/variations/${id}`)
        .then((res) => res.data),
  });
  return { data, isLoading, isFetching, isError };
};
