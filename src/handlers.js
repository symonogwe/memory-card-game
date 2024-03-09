import { http, HttpResponse } from "msw";
import data from "./mockedData";

export const handlers = [
  http.get(
    "https://rickandmortyapi.com/api/character/1,2,3,4,10,34,7,6,11,25,5,15",
    () => {
      return HttpResponse.json(data);
    }
  ),
];
