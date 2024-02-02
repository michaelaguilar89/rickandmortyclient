export interface Rickandmorty {

    "id": number,
  "name": string,
  "status": string,
  "species": string,
  "type": string,
  "gender": string,
  "origin": genericData$,
  "location": genericData$,
  "image": string,
  "episode": string[],
  "url": string,
  "created": string
}
export interface genericData${
    "name": string,
    "url": string
}
