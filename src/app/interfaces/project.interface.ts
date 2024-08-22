export interface Project {
    name: string;
    folderPath: string;
    usedTechnologies: Array<String>;
    description: {
        en: string;
        ge: string;
      };
    imgSrc: string;
    linkGitHub: string;
    linkLiveTest: string;
}
