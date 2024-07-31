export interface ICreateExperienceDto {
    title : string;
    description : string;
    company : string;
    image? : string;
    startDate? : Date;
    endDate? : Date;
}
