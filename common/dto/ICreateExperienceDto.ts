export interface ICreateExperienceDto {
    description : string;
    company : string;
    image : string;
    startDate : Date;
    endDate? : Date;
}
