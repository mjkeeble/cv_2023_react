export interface Position {
  positionTitle: string;
  positionStartDate: string;
  positionEndDate?: string;
}

export interface Job {
  id: string;
  companyName: string;
  companyShortName?: string;
  companyCurrentName?: string;
  companyLocation: string;
  companyLogo: string;
  picture: string;
  pictureSource: string;
  positions: Position[];
  responsibilities?: string[];
}

export interface Qualification {
  id: string;
  title: string;
  institute: string;
  startDate: string;
  endDate: string;
  logo: string;
  document?: string;
  description?: string[];
  flaggedText?: string[];
  comment?: string
}
