import { defineStore } from "pinia";
import type { Car } from "~/types";

// export const  = defineStore('cars', () => {

export const useCarsStore = defineStore("cars", () => {
  const likedCars = ref<Car[]>([]);
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

  function toggleLike(id: string) {
    console.log(popularCars.value.map(a => ({ id: a.id, liked: a.liked})));

    popularCars.value = popularCars.value.map((c) =>
      c.id === id ? { ...c, liked: !c.liked } : c
    );

    recomendedCars.value = recomendedCars.value.map((c) =>
      c.id === id ? { ...c, liked: !c.liked } : c
    );

    // const liked: Car | undefined = likedCars.value.find((c) => c.id === id);
    // if (liked === undefined) {
    //   likedCars.value = likedCars.value.filter((c) => c.id !== id);
    // } else {
    //   likedCars.value.push(liked);
    // }
  }

  return {
    popularCars,
    recomendedCars,
    toggleLike,
  };
});
