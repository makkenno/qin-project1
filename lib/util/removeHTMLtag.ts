export const removeHTMLtag = (str: string) => {
  return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
};
