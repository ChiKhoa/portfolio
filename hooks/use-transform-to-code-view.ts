export const useTransformToCodeView = (data: object) => {
  let HTML = `<p style="color: #ffcb6b">{</p><p>\t...</p>`;
  let count_1 = 0;
  for (const key_1 in data) {
    count_1++;
    HTML += `<p style="color: #c792ea">\t<span style="color: #89ddff">"</span>${key_1}<span style="color: #89ddff">": </span>{</p>`;
    let count_2 = 0;
    for (const key_2 in Object(data)[key_1]) {
      count_2++;
      HTML += `<p style="color: #ffcb6b">\t\t<span style="color: #89ddff">"</span>${key_2}<span style="color: #89ddff">": "</span><span style="color: #c3e88d">${
        Object(data)[key_1][key_2]
      }</span><span style="color: #89ddff">"${
        count_2 !== Object.keys(Object(data)[key_1]).length ? "," : ""
      }</span></p>`;
    }
    HTML += `<p>\t<span style="color: #c792ea">}</span><span style="color: #89ddff">${
      count_1 !== Object.keys(data).length ? "," : ""
    }</span></p>`;
  }
  HTML += `<span style="color: #fcd34d">}</p>`;

  return HTML;
};
