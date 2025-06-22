import { useQuery } from "@tanstack/react-query";
import { instance } from "@/hooks/instance";

export const useGetComments = (id: number | string | undefined) => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["comment", id],
    enabled: !!id,
    queryFn: () =>
      instance()
        .get(`/comment/${id}`)
        .then((res) => res.data),
  });

  return { data, isLoading, isFetching, isError };
};
