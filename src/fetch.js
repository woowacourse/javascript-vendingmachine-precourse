export const fetchHtmlView = async (htmlFileName) => (await fetch(`../view/${htmlFileName}`)).text();
