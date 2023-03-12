// Axios, Java, Spring Boot, NodeJS, Flask, Django, PyCharm, Styled Components, IntelliJ...

const colorTag = (tagName: string) => {
    switch (tagName.toLocaleLowerCase().replaceAll(" ", "")) {
        case "css3":
        case "vscode":
        case "typescript":
        case "react":
        case "reactnative":
            return "bg-sky-200";
        case "nextjs":
        case "github":
        case "expo":
            return "bg-gray-200";
        case "html5":
        case "git":
            return "bg-orange-200";
        case "javascript":
        case "python":
            return "bg-yellow-200";
        case "sass":
            return "bg-pink-200";
        case "bootstrap":
            return "bg-violet-200";
        case "tailwindcss":
            return "bg-teal-200";
    }
}

export default colorTag;