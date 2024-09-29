export interface ICreateExperienceDto {
    company : string;
    description : string;
    image : string;
    startDate : Date;
    endDate? : Date;
}
