// Axios, Java, Spring Boot, NodeJS, Flask, Django, PyCharm, Styled Components, IntelliJ...

const colorTag = (tagName: string) => {
    switch (tagName.toLocaleLowerCase().replaceAll(" ", "")) {
        case "css3":
        case "vscode":
        case "typescript":
        case "react":
        case "reactnative":
            return "bg-sky-400";
        case "html5":
        case "git":
            return "bg-orange-400";
        case "nextjs":
        case "github":
            return "bg-gray-400";
        case "javascript":
        case "python":
            return "bg-yellow-300";
        case "sass":
            return "bg-pink-300";
        case "bootstrap":
            return "bg-violet-400";
        case "tailwindscss":
            return "bg-teal-400";
        case "expo":
            return "bg-slate-200";
    }
}

export default colorTag;