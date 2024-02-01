import { defineStore } from "pinia";
import type { Car } from "~/types";

export const useCarsStore = defineStore("cars", () => {
  const searchText = ref("");
  const popularCars = ref<Car[]>([
    {
      id: "1",
      title: "Koenigsegg",
      price: "99.00",
      category: "sport",
      liked: true,
    },
    {
      id: "2",
      title: "Nissan GT - R",
      price: "80.00",
      category: "sport",
      liked: false,
    },
    {
      id: "3",
      title: "Rolls - Royce",
      price: "96.00",
      category: "sedan",
      liked: false,
    },
    {
      id: "4",
      title: "Nissan GT - R 2",
      price: "80.00",
      category: "sport",
      liked: false,
    },
  ]);

  const recomendedCars = ref<Car[]>([
    {
      id: "5",
      title: "All New Rush",
      price: "88.00",
      category: "suv",
      liked: false,
    },
    {
      id: "6",
      title: "All New Rush",
      price: "78.00",
      category: "suv",
      liked: false,
    },
    {
      id: "7",
      title: "All New Rush",
      price: "99.00",
      category: "suv",
      liked: false,
    },
    {
      id: "8",
      title: "All New Rush",
      price: "50.00",
      category: "suv",
      liked: false,
    },
  ]);

  const filteredPopularCars = ref<Car[]>([]);
  const filteredRecomendedCars = ref<Car[]>([]);

  filteredPopularCars.value = searchText.value.trim()
    ? popularCars.value.filter((c) => c.title.includes(searchText.value))
    : popularCars.value;
  filteredRecomendedCars.value = searchText.value.trim()
    ? popularCars.value.filter((c) => c.title.includes(searchText.value))
    : popularCars.value;

  function toggleLike(id: string) {
    popularCars.value = popularCars.value.map((c) =>
      c.id === id ? { ...c, liked: !c.liked } : c
    );

    recomendedCars.value = recomendedCars.value.map((c) =>
      c.id === id ? { ...c, liked: !c.liked } : c
    );
  }

  function getFilteredPopularCars() {
    return  searchText.value.trim()
    ? popularCars.value.filter((c) => c.title.includes(searchText.value))
    : popularCars.value;
  }

  function getFilteredRecomendedCars() {
    return  searchText.value.trim()
    ? popularCars.value.filter((c) => c.title.includes(searchText.value))
    : popularCars.value;
  }

  return {
    toggleLike,
    searchText,
    getFilteredPopularCars,
    getFilteredRecomendedCars,
  };
});
