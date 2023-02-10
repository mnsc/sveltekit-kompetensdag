export type Conference = {
    title: string,
    description: string,
    location: string,
    venue: string,
    startDate: Date,
    endDate: string,
    days: Day[]
}

export type Day = {
    title: string,
    description: string,
    date: Date
   
}
