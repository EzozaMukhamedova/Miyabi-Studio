"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getBrands = () => {
  const extra = {
    id: 2,
    name: "Ko'proq",
    image: null,
    icon: null,
    parentCategoryId: null,
    createdAt: "2025-04-26T11:10:08.202Z",
    updatedAt: "2025-04-26T11:10:08.202Z",
    subCategories: [],
  };

  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () =>
      instance()
        .get("/brands/all")
        .then((res) => [...res.data, extra]),
  });
  return { data, isLoading, isFetching, isError };
};
