export type Trip = {
  id: string;
  title: string;          // e.g. "Monaco - Monte Carlo"
  subtitle?: string;      // e.g. "Belgrad - 18.06.2025"
  startDate: string;      // "2025-08-03"
  endDate: string;        // "2025-08-14"
  status?: string;        // "successfully planned" | "in progress" | "done"
  with?: string;          // "Nico, Lukas"
  budget?: number;        // 3500
  durationDays?: number;  // 10
  sort?: string;          // "Culturaltrip" | "Relax & Swimm"
  costs?: number;         // 1467
  rating?: number;        // 0..5 for history trips
  sights?: string[];
  restaurants?: string[];
  review?: string;        // for history
  upcoming?: boolean;     // true for upcoming trips
};

export const upcomingTrips: Trip[] = [
  {
    id: "t1",
    title: "Monaco - Monte Carlo",
    subtitle: "Belgrad - 18.06.2025",
    startDate: "2025-08-03",
    endDate: "2025-08-14",
    status: "successfully planned",
    with: "Nico, Lukas",
    sort: "Culturaltrip",
    budget: 3500,
    durationDays: 10,
    upcoming: true,
    sights: ["Casino Monaco", "Fürstenpalast", "Metropole Shopping Galleries", "Cathédrale Notre-Dame-Immaculée", "Monaco-Ville"],
    restaurants: ["Café de Paris", "Le Louis XV", "Amazónico"]
  },
  {
    id: "t2",
    title: "Rome - Italy",
    startDate: "2025-08-25",
    endDate: "2025-09-02",
    status: "in progress",
    with: "-"
  },
];

export const historyTrips: Trip[] = [
  {
    id: "h1",
    title: "Belgrade - Serbia",
    startDate: "2025-06-18",
    endDate: "2025-06-20",
    costs: 873,
    rating: 3
  },
  {
    id: "h2",
    title: "Barcelona - Spain",
    startDate: "2025-05-04",
    endDate: "2025-05-08",
    costs: 1467,
    rating: 4,
    sort: "Relax & Swimm",
    sights: ["Sagrada Família", "Casa Batlló", "La Rambla & Barri Gòtic"],
    restaurants: ["Disfrutar", "Los Caracoles"],
    review:
      "There were too many people at the Casa Batlló. We waited 30min for the food at Disfrutar, but it was delicious. Sagrada Família was stunning!!!"
  }
];
