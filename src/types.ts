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
  picture?: string;
  pictureSource?: string;
  positions: Position[];
  responsibilities?: string[];
}

export interface Project {
  id: string;
  title: string;
  type: string;
  technologies: string;
  description: string;
  siteUrl?: string;
  codeUrl?: string;
  image: string;
}

export interface Qualification {
  id: string;
  title: string;
  institute: string;
  startDate: string;
  endDate?: string;
  logo: string;
  document?: string;
  description?: string[];
  flaggedText?: string[];
  comment?: string
}

export interface Pastime {
  id: string;
  title: string;
  dates?: string;
  description?: string[];
  links?: {icon: string, description:string, url:string}[];
  images: {src: string, alt: string}[];
}
