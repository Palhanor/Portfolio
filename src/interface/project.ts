export interface project {
    id: string;
    name: string;
    description: string;
    homepage: string | null;
    repository: string | null;
    tech: string[];
    carouselImages?: string[];
    about?: string;
    problemSolution?: string;
    architecture?: string;
    stackTools?: string;
    resultsLearnings?: string;
}