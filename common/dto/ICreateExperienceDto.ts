export interface ICreateExperienceDto {
    company : string;
    description : string;
    image : File;
    startDate : Date;
    endDate? : Date;
}
